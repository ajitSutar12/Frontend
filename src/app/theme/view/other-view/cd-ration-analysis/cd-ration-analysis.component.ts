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
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cd-ration-analysis',
  templateUrl: './cd-ration-analysis.component.html',
  styleUrls: ['./cd-ration-analysis.component.scss']
})
export class CdRationAnalysisComponent implements OnInit {

  url = environment.base_url;
  iframe5url: any = '';
  report_url = environment.report_url

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
  clicked: boolean = false;
  formSubmitted: boolean;
  isShow: boolean = true;
  isCancel: boolean = true;
  setLang: any;
  // dtExportButtonOptions: any = {};
  constructor(private fb: FormBuilder, private ownbranchMasterService: OwnbranchMasterService, private sanitizer: DomSanitizer,

    private _service: EditInterestCalculationService, private http: HttpClient,
    private other_service: OtherViewService,
    private systemParameter: SystemMasterParametersService,
    private translate:TranslateService,

  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
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
      Con_PRO: []
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
        // Swal.fire('Success', 'CD ratio updated successfully', 'success')
        Swal.fire(`${this.translate.instant('Swal_Msg.cd_update')}`)

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
      };

      if (item.acno == data.acno) {
        if (ele.target.checked) {
          if (type == 'Depo') {
            item.depo = true;
            this.updateSelectedItems(item, true);
            this.other_service.ledgerbalance(obj).subscribe(data => {
              item.depobal = data;
              this.TabWiseTotal.depo = item.depobal < 0 ? this.TabWiseTotal.depo + Math.abs(item.depobal) : this.TabWiseTotal.depo - Math.abs(item.depobal);
              this.ActiveTab = 'DEPOSITS';
              this.totalAmt = this.TabWiseTotal.depo;
            });
          } else if (type == 'Loan') {
            item.loan = true;
            this.updateSelectedItems(item, true);
            this.other_service.ledgerbalance(obj).subscribe(data => {
              item.loanbal = data;
              this.TabWiseTotal.loan = this.TabWiseTotal.loan + item.loanbal;
              this.ActiveTab = 'LOANS';
              this.totalAmt = this.TabWiseTotal.loan;
            });
          } else if (type == 'PartA') {
            item.partA = true;
            this.updateSelectedItems(item, true);
            this.other_service.ledgerbalance(obj).subscribe(data => {
              item.partAbal = data;
              this.TabWiseTotal.partA = item.partAbal < 0 ? this.TabWiseTotal.partA + Math.abs(item.partAbal) : this.TabWiseTotal.partA - Math.abs(item.partAbal);
              this.ActiveTab = 'PART A';
              this.totalAmt = this.TabWiseTotal.partA;
            });
          } else {
            item.partB = true;
            this.updateSelectedItems(item, true);
            this.other_service.ledgerbalance(obj).subscribe(data => {
              item.partBbal = data;
              this.TabWiseTotal.partB = item.partBbal < 0 ? this.TabWiseTotal.partB + Math.abs(item.partBbal) : this.TabWiseTotal.partB - Math.abs(item.partBbal);
              this.ActiveTab = 'PART B';
              this.totalAmt = this.TabWiseTotal.partB;
            });
          }
        } else {
          if (type == 'Depo') {
            item.depo = false;
            this.updateSelectedItems(item, false);
            this.TabWiseTotal.depo = item.depobal < 0 ? this.TabWiseTotal.depo - Math.abs(item.depobal) : this.TabWiseTotal.depo + Math.abs(item.depobal);
            item.depobal = 0;
            this.ActiveTab = 'DEPOSITS';
            this.totalAmt = this.TabWiseTotal.depo;
          } else if (type == 'Loan') {
            item.loan = false;
            this.updateSelectedItems(item, false);
            this.TabWiseTotal.loan = this.TabWiseTotal.loan - item.loanbal;
            item.loanbal = 0;
            this.ActiveTab = 'LOANS';
            this.totalAmt = this.TabWiseTotal.loan;
          } else if (type == 'PartA') {
            item.partA = false;
            this.updateSelectedItems(item, false);
            this.TabWiseTotal.partA = item.partAbal < 0 ? this.TabWiseTotal.partA - Math.abs(item.partAbal) : this.TabWiseTotal.partA + Math.abs(item.partAbal);
            item.partAbal = 0;
            this.ActiveTab = 'PART A';
            this.totalAmt = this.TabWiseTotal.partA;
          } else {
            item.partB = false;
            this.updateSelectedItems(item, false);
            this.TabWiseTotal.partB = item.partBbal < 0 ? this.TabWiseTotal.partB - Math.abs(item.partBbal) : this.TabWiseTotal.partB + Math.abs(item.partBbal);
            item.partBbal = 0;
            this.ActiveTab = 'PART B';
            this.totalAmt = this.TabWiseTotal.partB;
          }
        }
      }
    }
  }
  selectedItems = [];

  updateSelectedItems(item, isSelected) {
    if (isSelected) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems = this.selectedItems.filter(i => i.name !== item.name);
    }
    let selectedItemsQuery = this.selectedItems.map(item => `name=${item.name}&depobal=${item.depobal}`).join('&');

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
  branchName
  getbranch(event) {
    this.branch_codeList = event.value;
    this.branchName = event.branchName
  }

  getprofit(obj1) {
    this.http.post<any>(this.url + '/reports/profitLoss', obj1).subscribe((data) => {
      this.glDetails = data[data.length - 1].head_name
      this.profitloss = Number(data[data.length - 1].head_total)
      // console.log(this.glDetails);
    })
  }
  tbldata
  tablearrDepo = []
  tablearrLoan = []
  tablearrpartA = []
  tablearrpartB = []
  tableDepo
  tableDepo1
  tableDepo2

  tableLoan
  tableLoan1
  tableLoan2

  tablepartA
  tablepartA1
  tablepartA2

  tablepartB
  tablepartB1
  tablepartB2

  async print1() {
    let result = this.angForm.value;
    let date = moment(result.DATE).format('DD/MM/YYYY');
    let obj = {
      date: date,
      branch: result.BRANCH,
      branch_code: this.branch_codeList
    }
    let data1 = await this.other_service.postData(obj).toPromise();
    this.tbldata = data1
    for (let i = 0; i < this.tbldata.length; i++) {
      if (this.tbldata[i].depo == true) {
        this.tablearrDepo.push(this.tbldata[i])
      }
      else if (this.tbldata[i].loan == true) {
        this.tablearrLoan.push(this.tbldata[i])
      }
      else if (this.tbldata[i].partA == true) {
        this.tablearrpartA.push(this.tbldata[i])
      }
      else if (this.tbldata[i].partB == true) {
        this.tablearrpartB.push(this.tbldata[i])
      }
    }

    //deposit data
    let sName = []
    let bal = []
    let acno = []
    this.tablearrDepo.forEach(item => {
      sName.push(item.name);
      bal.push(item.depobal);
      acno.push(item.acno);

    });
    this.tableDepo = sName.map(name => `${name}<br/>`);
    this.tableDepo1 = bal.map(depobal => `${Math.abs(depobal)}<br/>`);
    this.tableDepo2 = acno.map(acno => `${acno}<br/>`);


    //loan data
    let LName = []
    let Lbal = []
    let Lacno = []
    this.tablearrLoan.forEach(item => {
      LName.push(item.name);
      Lbal.push(item.loanbal);
      Lacno.push(item.acno);
    });
    this.tableLoan = LName.map(name => `${name}<br/>`);
    this.tableLoan1 = Lbal.map(loanbal => `${Math.abs(loanbal)}<br/>`);
    this.tableLoan2 = Lacno.map(acno => `${acno}<br/>`);

    //partA
    let partAName = []
    let partAbal = []
    let partAacno = []
    this.tablearrpartA.forEach(item => {
      partAName.push(item.name);
      partAbal.push(item.partAbal);
      partAacno.push(item.acno);
    });
    this.tablepartA = partAName.map(name => `${name}<br/>`);
    this.tablepartA1 = partAbal.map(partAbal => `${Math.abs(partAbal)}<br/>`);
    this.tablepartA2 = partAacno.map(acno => `${acno}<br/>`);


    //partB
    let partBName = []
    let partBbal = []
    let partBacno = []
    this.tablearrpartB.forEach(item => {
      partBName.push(item.name);
      partBbal.push(item.partBbal);
      partBacno.push(item.acno);
    });
    this.tablepartB = partBName.map(name => `${name}<br/>`);
    this.tablepartB1 = partBbal.map(partBbal => `${Math.abs(partBbal)}<br/>`);
    this.tablepartB2 = partBacno.map(acno => `${acno}<br/>`);

  }

  async print() {
    this.isShow = false
    this.showRepo = true;
    if (this.angForm.valid) {
      this.isDisable = true
      let obj = this.angForm.value
      await this.print1()
      this.showRepo = true;
      let userData = JSON.parse(localStorage.getItem('user'));
      let bankName = userData.branch.syspara.BANK_NAME;
      let result = this.angForm.value;
      let date = moment(result.DATE).format('DD/MM/YYYY');

      // let schem = this.tablearrDepo
      let depo = this.tableDepo
      let depobal = this.tableDepo1
      let dacno = this.tableDepo2

      let loan = this.tableLoan
      let loanbal = this.tableLoan1
      let loanacno = this.tableLoan2

      let partA = this.tablepartA
      let partABal = this.tablepartA1
      let partAacno = this.tablepartA2


      let partB = this.tablepartB
      let partBBal = this.tablepartB1
      let partBacno = this.tablepartB2

      let total = this.cdratiototal

      let depobalance = this.tableDepo1
        .map(balance => parseFloat(balance.replace('<br/>', '').trim()))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      let loanbalance = this.tableLoan1
        .map(balance => parseFloat(balance.replace('<br/>', '').trim()))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      let partAbalance = this.tablepartA1
        .map(balance => parseFloat(balance.replace('<br/>', '').trim()))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      let partBbalance = this.tablepartB1
        .map(balance => parseFloat(balance.replace('<br/>', '').trim()))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let partAbalanceBal=partAbalance
      let flag
      if (obj.Con_PRO == true) {
        partAbalance =partAbalanceBal+ this.profitloss
        flag = 0
      }

      let profitloss = this.profitloss
      let netprofit = this.glDetails
      this.iframe5url = `${this.report_url}examples/CDRatio.php?bankname=${encodeURIComponent(bankName)}&Branch=${encodeURIComponent(this.branchName)}&Depo=${encodeURIComponent(depo)}&DepoBal=${encodeURIComponent(depobal)}&dacno=${encodeURIComponent(dacno)}&depobalance=${encodeURIComponent(depobalance)}&Loan=${encodeURIComponent(loan)}&Loanbal=${encodeURIComponent(loanbal)}&loanacno=${encodeURIComponent(loanacno)}&loanbalance=${encodeURIComponent(loanbalance)}&partA=${encodeURIComponent(partA)}&partABal=${encodeURIComponent(partABal)}&partAacno=${encodeURIComponent(partAacno)}&partAbalance=${encodeURIComponent(partAbalance)}&partB=${encodeURIComponent(partB)}&partBBal=${encodeURIComponent(partBBal)}&partBacno=${encodeURIComponent(partBacno)}&partBbalance=${encodeURIComponent(partBbalance)}&date=${encodeURIComponent(date)}&total=${encodeURIComponent(total)}&profitloss=${encodeURIComponent(profitloss)}&netprofit=${encodeURIComponent(netprofit)}&flag=${encodeURIComponent(flag)}`;

      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      // Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`,`${this.translate.instant('Swal_Msg.Fill')}`)

    }
  }
  showLoading: boolean = false;
  showRepo: boolean = false;
  onLoad() {
    this.showLoading = false;
  }
  isDisable: boolean = false
  cancel() {
    this.angForm.reset()
    this.isDisable = false
    this.showRepo = false
    this.isShow = true
    this.isCancel = true
    this.clicked = false;

  }
}
