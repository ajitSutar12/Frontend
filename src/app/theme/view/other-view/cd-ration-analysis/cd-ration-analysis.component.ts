import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { EditInterestCalculationService } from 'src/app/theme/utility/interest-posting/interest-passing/edit-interest-calculation/edit-interest-calculation.service';
import { environment } from 'src/environments/environment';
import { OtherViewService } from '../other-view.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cd-ration-analysis',
  templateUrl: './cd-ration-analysis.component.html',
  styleUrls: ['./cd-ration-analysis.component.scss']
})
export class CdRationAnalysisComponent implements OnInit {

  url = environment.base_url;
  public myMath = Math;
  angForm: FormGroup;
  date
  branch_codeList
  branch_code: any[]//from ownbranchmaster
  tableData: any;
  showMsg: boolean = true;
  warrentDate
  totalAmt: any = 0.00;
  modalClass: string = 'modalHide';
  ActiveTab: string = 'DEPOSITS';
  profitloss :any = 0;
  TabWiseTotal = {
    'depo' : 0,
    'loan' : 0,
    'partA': 0,
    'partB': 0
  }
  show:boolean= false;
  // dtExportButtonOptions: any = {};
  constructor(private fb: FormBuilder, private ownbranchMasterService: OwnbranchMasterService,
    private _service: EditInterestCalculationService, private http: HttpClient,
    private other_service: OtherViewService

  ) { }

  ngOnInit(): void {


    this.http.get(this.url + '/interest-passing').subscribe((data) => {
      this.warrentDate = data
    })

    this._service.interestDate().subscribe((data) => {
      debugger
      this.warrentDate = data
      console.log(this.warrentDate)
    })

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    this.createForm();
  }

  getIntDetails(event) {
    debugger
    this.modalClass = 'modalShow';
    let result = this.angForm.value;
    let date = moment(result.DATE).format('DD/MM/YYYY');
    let obj = {
      date: date,
      branch: result.BRANCH
    }
    this.other_service.postData(obj).subscribe(data => {
      this.modalClass = 'modalHide';
      this.tableData = data;
      this.other_service.profitloss(obj).subscribe(data=>{
        this.profitloss = data;
      })
      console.log(this.tableData)
      if (this.tableData.length == 0) {
        this.showMsg = true;
      } else {
        this.showMsg = false;
      }

      for(let item of this.tableData){
        this.TabWiseTotal.depo = this.TabWiseTotal.depo + item.depobal;
        this.TabWiseTotal.loan = this.TabWiseTotal.loan + item.loanbal;
        this.TabWiseTotal.partA = this.TabWiseTotal.partA + item.partAbal;
        this.TabWiseTotal.partB = this.TabWiseTotal.partB + item.partBbal;
      }


    })
  }

  createForm() {
    this.angForm = this.fb.group({
      DATE: ['', [Validators.required]],
      BRANCH: ['', [Validators.pattern]],
    });
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  find(){
    this.show =true;
  }

  //-------------------------* Update All Tab data on cdratio table *-------------------------------//
  update() {
    let formData = this.angForm.value;
    let data = {
      table : this.tableData,
      branch : formData.BRANCH
    }
    this.other_service.updateCdData(data).subscribe(data => {

    },err => {
      console.log(err);
    })
  }
  //-----------------------* End Update Changes *-----------------------//
  //-----------------------* Checkbox Change Events *------------------//
  changeCheckbox(data, type, ele) {
    for (let item of this.tableData) {
      let result = this.angForm.value;
      let date = moment(result.DATE).format('DD/MM/YYYY');

      let obj = {
        acno: data.acno,
        branch: result.BRANCH,
        date: date,
        scheme: '980'
      }
      if (item.acno == data.acno) {
        if (ele.target.checked) {
          if (type == 'Depo') {
            debugger
            item.depo = true;
            this.other_service.ledgerbalance(obj).subscribe(data => {
              item.depobal = data;
              this.totalFun()
            })
          } else if (type == 'Loan') {
            item.loan = true;
            this.other_service.ledgerbalance(obj).subscribe(data => {
              item.loanbal = data;
              this.totalFun()
            })
          } else if (type == 'PartA') {
            item.partA = true;
            this.other_service.ledgerbalance(obj).subscribe(data => {
              item.partAbal = data;
              this.totalFun()
            })
          } else {
            item.partB = true;
            this.other_service.ledgerbalance(obj).subscribe(data => {
              item.partBbal = data;
              this.totalFun()
            })
          }
        } else {
          if (type == 'Depo') {
            item.depo = false;
            item.depobal = 0;
            this.totalFun()
          } else if (type == 'Loan') {
            item.loan = false;
            item.loanbal = 0;
            this.totalFun()
          } else if (type == 'PartA') {
            item.partA = false;
            item.partAbal = 0;
            this.totalFun()
          } else {
            item.partB = false;
            item.partBbal = 0;
            this.totalFun()
          }
        }
        
      }
    }
  }

  async totalFun(){
    debugger
    for(let item of this.tableData){
      this.TabWiseTotal.depo = this.TabWiseTotal.depo + item.depobal;
      this.TabWiseTotal.loan = this.TabWiseTotal.loan + item.loanbal;
      this.TabWiseTotal.partA = this.TabWiseTotal.partA + item.partAbal;
      this.TabWiseTotal.partB = this.TabWiseTotal.partB + item.partBbal;
    }

    if(this.ActiveTab == 'DEPOSITS'){
      this.totalAmt  = this.TabWiseTotal.depo;
    }else if(this.ActiveTab == 'LOANS'){
      this.totalAmt  = this.TabWiseTotal.loan;
    }else if(this.ActiveTab == 'PART A'){
      this.totalAmt  = this.TabWiseTotal.partA;
    }else if(this.ActiveTab == 'PART B'){
      this.totalAmt  = this.TabWiseTotal.partB;
    }
  }

  //-----------------------* Tab On Click *---------------------------//
  tab(type){
    console.log(type);
  }

  

  fetchNews(evt: any) {
    console.log(evt); // has nextId that you can check to invoke the desired function
    if(evt.nextId == 'ngb-tab-0'){
      this.ActiveTab = 'DEPOSITS'
      this.totalAmt  = this.TabWiseTotal.depo;
    }else if(evt.nextId == 'ngb-tab-1'){
      this.ActiveTab = 'LOANS';
      this.totalAmt  = this.TabWiseTotal.loan;
    }else if(evt.nextId == 'ngb-tab-2'){
      this.ActiveTab = 'PART A';
      this.totalAmt  = this.TabWiseTotal.partA;
    }else{
      this.ActiveTab = 'PART B';
      this.totalAmt  = this.TabWiseTotal.partB;
    }
  }

  //==---------------* Profit & Loss Data Add into Part A *-------------------==//
  profitloassAdd(evt){
    if(evt.target.checked){
      this.TabWiseTotal.partA = this.TabWiseTotal.partA + this.profitloss;
    }else{
      this.TabWiseTotal.partA = this.TabWiseTotal.partA - this.profitloss;
    }
  }
}
