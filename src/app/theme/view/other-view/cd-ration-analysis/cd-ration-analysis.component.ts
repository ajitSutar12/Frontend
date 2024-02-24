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
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { data } from 'jquery';
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

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
  glDetails: any
  totalAmt: any = 0.00;
  modalClass: string = 'modalHide';
  ActiveTab: string = 'DEPOSITS';
  profitloss: any = 0;
  TabWiseTotal = {
    'depo': 0,
    'loan': 0,
    'partA': 0,
    'partB': 0
  }
  maxDate
  show: boolean = false;
  cdratiototal: number;
  ngbranch_code
  // dtExportButtonOptions: any = {};
  constructor(private fb: FormBuilder, private ownbranchMasterService: OwnbranchMasterService,
    private _service: EditInterestCalculationService, private http: HttpClient,
    private other_service: OtherViewService,
    private systemParameter: SystemMasterParametersService,
    private translate:TranslateService
  ) {
    this.translate.setDefaultLang(environment.setLang) ;
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
  }

  ngOnInit(): void {
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    this.createForm();
    // this.getprofit();
  }

  getIntDetails(event) {
    this.modalClass = 'modalShow';
    let result = this.angForm.value;
    let date = moment(result.DATE).format('DD/MM/YYYY');
    let obj = {
      date: date,
      branch: result.BRANCH,
      branch_code: this.branch_codeList
    }
    this.other_service.postData(obj).subscribe(data => {
      this.modalClass = 'modalHide';
      this.tableData = data;
      this.getprofit(obj)
      // console.log(this.tableData)
      if (this.tableData.length == 0) {
        this.showMsg = true;
      } else {
        this.showMsg = false;
      }
      for (let item of this.tableData) {
        this.TabWiseTotal.depo = item.depobal < 0 ? this.TabWiseTotal.depo + Math.abs(item.depobal) : this.TabWiseTotal.depo - Math.abs(item.depobal);
        this.TabWiseTotal.loan = this.TabWiseTotal.loan + item.loanbal;
        this.TabWiseTotal.partA = item.partAbal < 0 ? this.TabWiseTotal.partA + Math.abs(item.partAbal) : this.TabWiseTotal.partA - Math.abs(item.partAbal);
        this.TabWiseTotal.partB = item.partBbal < 0 ? this.TabWiseTotal.partB + Math.abs(item.partBbal) : this.TabWiseTotal.partB - Math.abs(item.partBbal);
      }
      this.ActiveTab = 'DEPOSITS'
      this.totalAmt = this.TabWiseTotal.depo;
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
  find() {
    this.show = true;
    let ab = this.TabWiseTotal.partA - this.TabWiseTotal.partB
    let loanab = this.TabWiseTotal.loan - ab
    let ratio = loanab * 100
    this.cdratiototal = ratio / this.TabWiseTotal.depo
    // this.cdratiototal = (this.TabWiseTotal.loan - (this.TabWiseTotal.partA - this.TabWiseTotal.partB) * 100) / this.TabWiseTotal.depo
  }

  //-------------------------* Update All Tab data on cdratio table *-------------------------------//
  update() {
    let formData = this.angForm.value;
    if (this.tableData) {
      let data = {
        table: this.tableData,
        branch: formData.BRANCH
      }
      this.modalClass = 'modalShow';
      this.other_service.updateCdData(data).subscribe(data => {
        this.modalClass = 'modalHide';
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`,`${this.translate.instant('Swal_Msg.S_Msg1')}`, 'success')
        this.angForm.reset()
        this.profitloss = 0
        this.tableData = []
        this.cdratiototal = 0
        this.totalAmt = 0
        this.TabWiseTotal = {
          'depo': 0,
          'loan': 0,
          'partA': 0,
          'partB': 0
        }
      }, err => {
        console.log(err);
      })
    }
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

            item.depo = true;
            this.other_service.ledgerbalance(obj).subscribe(data => {
              item.depobal = data;
              // this.totalFun()    
              this.TabWiseTotal.depo = item.depobal < 0 ? this.TabWiseTotal.depo + Math.abs(item.depobal) : this.TabWiseTotal.depo - Math.abs(item.depobal);
              this.ActiveTab = 'DEPOSITS'
              this.totalAmt = this.TabWiseTotal.depo;
            })
          } else if (type == 'Loan') {
            item.loan = true;
            this.other_service.ledgerbalance(obj).subscribe(data => {
              item.loanbal = data;
              this.TabWiseTotal.loan = this.TabWiseTotal.loan + item.loanbal;
              // this.totalFun()
              this.ActiveTab = 'LOANS';
              this.totalAmt = this.TabWiseTotal.loan;
            })
          } else if (type == 'PartA') {
            item.partA = true;
            this.other_service.ledgerbalance(obj).subscribe(data => {
              item.partAbal = data;
              this.TabWiseTotal.partA = item.partAbal < 0 ? this.TabWiseTotal.partA + Math.abs(item.partAbal) : this.TabWiseTotal.partA - Math.abs(item.partAbal);
              this.ActiveTab = 'PART A';
              this.totalAmt = this.TabWiseTotal.partA;
              // this.totalFun()
            })
          } else {
            item.partB = true;
            this.other_service.ledgerbalance(obj).subscribe(data => {
              item.partBbal = data;
              this.TabWiseTotal.partB = item.partBbal < 0 ? this.TabWiseTotal.partB + Math.abs(item.partBbal) : this.TabWiseTotal.partB - Math.abs(item.partBbal);
              this.ActiveTab = 'PART B';
              this.totalAmt = this.TabWiseTotal.partB;
              // this.totalFun()
            })
          }
        } else {
          if (type == 'Depo') {
            item.depo = false;
            // this.totalFun()
            this.TabWiseTotal.depo = item.depobal < 0 ? this.TabWiseTotal.depo - Math.abs(item.depobal) : this.TabWiseTotal.depo + Math.abs(item.depobal);
            item.depobal = 0;
            this.ActiveTab = 'DEPOSITS'
            this.totalAmt = this.TabWiseTotal.depo;
          } else if (type == 'Loan') {
            item.loan = false;
            this.TabWiseTotal.loan = this.TabWiseTotal.loan - item.loanbal;
            item.loanbal = 0;
            this.ActiveTab = 'LOANS';
            this.totalAmt = this.TabWiseTotal.loan;
            // this.totalFun()
          } else if (type == 'PartA') {
            item.partA = false;
            this.TabWiseTotal.partA = item.partAbal < 0 ? this.TabWiseTotal.partA - Math.abs(item.partAbal) : this.TabWiseTotal.partA + Math.abs(item.partAbal);
            item.partAbal = 0;
            // this.totalFun()
            this.ActiveTab = 'PART A';
            this.totalAmt = this.TabWiseTotal.partA;
          } else {
            item.partB = false;
            this.TabWiseTotal.partB = item.partBbal < 0 ? this.TabWiseTotal.partB - Math.abs(item.partBbal) : this.TabWiseTotal.partB + Math.abs(item.partBbal);
            item.partBbal = 0;
            this.ActiveTab = 'PART B';
            this.totalAmt = this.TabWiseTotal.partB;
            // this.totalFun()
          }
        }
      }
    }
  }

  async totalFun() {
    for (let item of this.tableData) {
      this.TabWiseTotal.depo = item.depobal < 0 ? this.TabWiseTotal.depo + Math.abs(item.depobal) : this.TabWiseTotal.depo - Math.abs(item.depobal);
      this.TabWiseTotal.loan = this.TabWiseTotal.loan + item.loanbal;
      this.TabWiseTotal.partA = item.partAbal < 0 ? this.TabWiseTotal.partA + Math.abs(item.partAbal) : this.TabWiseTotal.partA - Math.abs(item.partAbal);
      this.TabWiseTotal.partB = item.partBbal < 0 ? this.TabWiseTotal.partB + Math.abs(item.partBbal) : this.TabWiseTotal.partB - Math.abs(item.partBbal);
    }

    if (this.ActiveTab == 'DEPOSITS') {
      this.totalAmt = this.TabWiseTotal.depo;
    } else if (this.ActiveTab == 'LOANS') {
      this.totalAmt = this.TabWiseTotal.loan;
    } else if (this.ActiveTab == 'PART A') {
      this.totalAmt = this.TabWiseTotal.partA;
    } else if (this.ActiveTab == 'PART B') {
      this.totalAmt = this.TabWiseTotal.partB;
    }
  }


  //-----------------------* Tab On Click *---------------------------//
  tab(type) {
    console.log(type);
  }



  fetchNews(evt: any) {
    console.log(evt); // has nextId that you can check to invoke the desired function
    if (evt.nextId == 'ngb-tab-0') {
      this.ActiveTab = 'DEPOSITS'
      this.totalAmt = this.TabWiseTotal.depo;
    } else if (evt.nextId == 'ngb-tab-1') {
      this.ActiveTab = 'LOANS';
      this.totalAmt = this.TabWiseTotal.loan;
    } else if (evt.nextId == 'ngb-tab-2') {
      this.ActiveTab = 'PART A';
      this.totalAmt = this.TabWiseTotal.partA;
    } else {
      this.ActiveTab = 'PART B';
      this.totalAmt = this.TabWiseTotal.partB;
    }
  }

  //==---------------* Profit & Loss Data Add into Part A *-------------------==//
  profitloassAdd(evt) {
    if (evt.target.checked) {
      this.TabWiseTotal.partA = this.TabWiseTotal.partA + this.profitloss;
    } else {
      this.TabWiseTotal.partA = this.TabWiseTotal.partA - this.profitloss;
    }
    if (this.ActiveTab == 'PART A') {
      this.totalAmt = this.TabWiseTotal.partA;
    }
  }
  getbranch(event) {
    this.branch_codeList = event.value;

  }

  getprofit(obj1) {
    this.http.post<any>(this.url + '/reports/profitLoss', obj1).subscribe((data) => {
      this.glDetails = data[data.length - 1].head_name
      this.profitloss = Number(data[data.length - 1].head_total)
      // console.log(this.glDetails);
    })
  }

}
