import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service'
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { data } from 'jquery';

@Component({
  selector: 'app-account-enquiry',
  templateUrl: './account-enquiry.component.html',
  styleUrls: ['./account-enquiry.component.scss']
})
export class AccountEnquiryComponent implements OnInit {
  angForm: FormGroup;
  formSubmitted = false;
  //api 
  url = environment.base_url;
  // dropdown variables
  ngscheme: any = null
  accountedit: any = null
  allScheme: any[]
  schemeACNo: any;
  scheme: any[];
  GLACNooption: any[];
  branch_code//from ownbranchmaster
  ngBranchCode: any = null
  // Date variables
  todate: any = null;
  fromdate: any = null
  accountOpenDate: any = null
  maxDate: any = null;
  minDate: Date;
  bsValue = new Date();
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // for grid variable declaration
  dormantac: boolean = false
  acclosedon: boolean = false
  freezeac: boolean = false
  obj: any
  getschemename: any
  bankacno
  acCloseDate
  guardianName
  jointHolderName = ''
  freezStataus
  transactions
  tableData = []


  isrecurringScheme: boolean = false
  REBATE_INTRATE
  idmaster
  opendate
  accountData
  overdraftAmt
  openingBal = 1000
  tdsAmount = 100
  totalCloseBal = 100
  passedAmount = 1000
  unpassedAmt = 1000
  overdraftInt = 10
  payableInt = 10
  currentInt = 10
  penalInt = 10
  totalInt = 10
  intOnMonth = 10
  intOnDays = 10
  closingBal = 22100
  passbookBal = 20000
  expectedInstallment = 5
  receivedInstallment = 4
  dueInstallment = 1
  interestOnMonth: boolean = false
  interestOnDays: boolean = false
  isATypeMemNo: boolean = false
  isOpeningDetails: boolean = true
  isTotalProducts: boolean = false
  isPigmyDetails: boolean = false
  isAgentScheme: boolean = false
  isAgentCode: boolean = false
  isRenewalDate: boolean = false
  isLastTranDate: boolean = false
  isIntroducer: boolean = false
  isBankBranch: boolean = false
  totalProducts = 10


  customerImg: string = '../../../../assets/images/user-card/img-round4.jpg';
  signture: string = '../../../../assets/sign/signture.jpg';

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ACMasterDropdownService: ACMasterDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,) {
    var date = moment();
    date = date.subtract(1, "days");
    this.maxDate = date.format("DD/MM/YYYY");
    this.maxDate = moment(this.maxDate, 'DD/MM/YYYY')
    this.maxDate = this.maxDate._d
  }

  ngOnInit(): void {
    this.createForm()
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'AG' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'GL')
      });
      this.allScheme = allscheme;
    })

    this.schemeCodeDropdownService.getTermDepositSchemePatD().pipe(first()).subscribe(data => {
      this.allScheme.push(data)
    })
    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      DATE: ['', [Validators.required]],
    });
  }

  hideImage() {
    // document.getElementById("full").src = "";
    this.previewImg = '';
    this.PreviewDiv = false;
  }
  previewImg: string;
  PreviewDiv: boolean = false;
  showImage(img) {
    debugger
    var src = img;
    var largeSrc = src.replace('small', 'large');
    this.previewImg = src;
    this.PreviewDiv = true;
    // document.getElementById('full').src = largeSrc;
  }

  getBranch() {
    this.getschemename = null
    this.accountedit = null
    this.ngscheme = null
    this.accountData = null
    this.idmaster = null
    this.freezeac = false
    this.acCloseDate = null
    this.freezStataus = null
    this.dormantac = false
    this.REBATE_INTRATE = null
    this.transactionData = null
  }

  schemeCode
  schemechange(event) {
    console.log('scheme event', event)
    this.getschemename = event.name
    this.ngscheme = event.value
    this.accountData = null
    this.dormantac = false
    this.idmaster = null
    this.freezeac = false
    this.acCloseDate = null
    this.freezStataus = null
    this.schemeCode = event.id
    this.transactionData = null
    this.REBATE_INTRATE = event.rebateRate
    event.schemeMethod == 'SimpleasperSharesClosingBalance' ? this.isrecurringScheme = true : this.isrecurringScheme = false
    this.getAccountlist()
  }
  // Fetching account from seleted scheme
  getAccountlist() {
    this.accountedit = null
    this.accountData = null
    this.transactionData = null
    let obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {
      case 'SB':
        this.isLastTranDate = true
        this.isOpeningDetails = true
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = false
        this.isIntroducer = true
        this.http.get<any>(this.url + '/saving-master/balUpdate/' + obj).subscribe((data) => {
          this.schemeACNo = data
        })
        break;
      case 'CA':
        this.isLastTranDate = true
        this.isOpeningDetails = true
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = false
        this.isIntroducer = true
        this.http.get<any>(this.url + '/current-account-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'AG':
        this.isLastTranDate = true
        this.isOpeningDetails = true
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = false
        this.isIntroducer = true
        this.http.get<any>(this.url + '/pigmy-agent-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'GS':
        this.http.get<any>(this.url + '/anamat-gsm/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'PG':
        this.isOpeningDetails = false
        this.isPigmyDetails = true
        this.isRenewalDate = true
        this.isATypeMemNo = false
        this.isBankBranch = false
        this.isIntroducer = true
        this.http.get<any>(this.url + '/pigmy-account-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'TD':
        this.isLastTranDate = true
        this.isOpeningDetails = true
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = false
        this.isIntroducer = true
        this.http.get<any>(this.url + '/term-deposits-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'LN':
        this.http.get<any>(this.url + '/term-loan-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'DS':
        this.http.get<any>(this.url + '/dispute-loan-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'CC':
        this.http.get<any>(this.url + '/cash-credit-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'GL':
        this.http.get<any>(this.url + '/gl-account-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'IV':
        this.isLastTranDate = true
        this.isOpeningDetails = true
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = true
        this.isIntroducer = false
        this.http.get<any>(this.url + '/investment/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
    }
  }

  LAST_OD_DATE
  AC_NO
  nominee
  //get account details
  getAccountDetails(event) {
    console.log('element', event)
    this.accountData = event
    this.tableData = []
    this.transactions = null
    this.transactionData = null
    this.dormantac = event.IS_DORMANT
    this.guardianName = event.AC_GRDNAME
    this.opendate = event.AC_OPDATE
    this.bankacno = event.BANKACNO
    this.AC_NO = event.AC_NO
    this.LAST_OD_DATE = event.LAST_OD_DATE
    this.nominee = event?.nomineeDetails //powerOfAttorney    //jointAccounts
    console.log('nominee', this.nominee)
    event?.jointAccounts?.forEach((element, index) => {
      if (index == 0) {
        this.jointHolderName = element.JOINT_ACNAME
      }
      else {
        this.jointHolderName = this.jointHolderName + '/' + element.JOINT_ACNAME
      }
    });
    this.idmaster = event.idmaster
    this.overdraftAmt = Number(event.AC_ODAMT)
    this.acclosedon = event.acClose == null || event.acClose == '' ? false : true
    this.acCloseDate = event.AC_CLOSEDT == null || event.AC_CLOSEDT == '' ? null : event.AC_CLOSEDT
    this.freezeac = event.AC_FREEZE_STATUS == null || event.AC_FREEZE_STATUS == '' ? false : true
    this.freezStataus = event.AC_FREEZE_STATUS == null || event.AC_FREEZE_STATUS == '' ? '' : event.AC_FREEZE_STATUS
    let maturedAmount = Number(event.autoMaturedPayableAmt) + Number(event.autoMaturedIntrestAmt)
    this.angForm.patchValue({
      AC_CLOSEDT: event.closeDate,
      AMOUNT: maturedAmount,
    })
    this.accountOpenDate = moment(event.opendate, 'DD/MM/YYYY')
    this.accountOpenDate = this.accountOpenDate._d
  }

  transactionData
  getTransactionDetails() {
    let obj = {
      scheme: this.schemeCode,
      bankacno: this.bankacno,
      date: moment(this.angForm.controls['DATE'].value).format('DD/MM/YYYY'),
      AC_ACNOTYPE: this.getschemename,
      AC_TYPE: this.ngscheme,
      LAST_OD_DATE: this.LAST_OD_DATE,
      AC_NO: this.AC_NO
    }
    this.http.post<any>(this.url + '/ledger-view/accountView', obj).subscribe((data) => {
      this.transactionData = data
      console.log(this.transactionData)
    })
  }

}
