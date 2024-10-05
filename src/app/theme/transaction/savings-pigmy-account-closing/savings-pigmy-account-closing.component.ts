import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { SchemeTypeService } from '../../../shared/elements/scheme-type.service';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

// import { NarrationService } from '../../../shared/elements/Narration.service';
import { HttpClient } from '@angular/common/http';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SavingPigmyAccountClosingService } from './savings-Pigmy-Account-Closing.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import * as moment from 'moment';
import { CustomerIdService } from '../../master/customer/customer-id/customer-id.service'
import { NgSelectComponent } from '@ng-select/ng-select'
import { error } from 'console';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { VoucherEntryService } from '../voucher-entry/voucher-entry.service';
@Component({
  selector: 'app-savings-pigmy-account-closing',
  templateUrl: './savings-pigmy-account-closing.component.html',
  styleUrls: ['./savings-pigmy-account-closing.component.scss']
})
export class SavingsPigmyAccountClosingComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('narrationhide') narrationhide: ElementRef<HTMLElement>;
  @Output() reloadTablePassing = new EventEmitter<string>();
  @ViewChild('swiper') swiper: ElementRef;
  @ViewChild('INTAMT') INTAMT: ElementRef;
  @ViewChild('NOTINTAMT') NOTINTAMT: ElementRef;
  @ViewChild('submitbtn') submitbtn: ElementRef;




  formSubmitted = false;
  //api
  url = environment.base_url;

  transferGrid
  jointShowButton: boolean = true
  jointUpdateShow: boolean = false
  angForm: FormGroup;
  transferACID: number
  transferIndex: number
  CashTrue = true
  TransferTrue = false
  scheme
  // Dropdown variables
  branch_code: any;
  ngBranchCode: any = null;
  ngdate: any = null;
  ngscheme: any = null;
  accountedit: any = null;
  ngacno: any = null;
  schemeACNo: any[];
  ngglacno: any = null;
  selectedScheme: any = null
  multigrid = [];
  closedAccountNumber: any;
  introducerACNo
  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = true;
  dataSub: Subscription;
  characters: IOption[];
  sysparaData: any;
  ngFnarration: any = null
  // for radio button
  isTransfer: boolean = false
  allSchemeCode: any//from schme master
  // allScheme = new Array()//from schme master
  narration: any;
  narrationList: any;

  ngschemecode: any = null
  tranModeList: any;
  particulars: any;
  date: any;
  totalAmt: any = 0;
  showChequeDetails: boolean = false;
  DayOpBal: number;
  headData: any;
  headShow: boolean = false;
  lastday: any;
  customer: any;
  mainMaster = new Array();
  showAdd: boolean = true;
  showUpdate: boolean = false;
  customerImg = 'assets/images/nouser.png';
  signture = 'assets/images/nosignature.png';
  ngCommission: any = null
  GlACNo
  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  unapproveShow: boolean = false;
  approveShow: boolean = false;
  ngGlAcno: any = null;
  maxDate: Date;
  minDate: Date;
  logDate
  submitScheme: any;
  obj: any
  getschemename: any
  INT_RATESHOW = 0
  selectedBranch: number;
  isHideForSaving: boolean = true
  type: any; //cash or transfer
  allScheme: any[] = [];
  allSchemevalue: any[] = [];
  filteredSchemes: any[] = [];
  master: any[] = [];
  selectedCode: string;
  ChequeDate: string;
  IntersetHeadDate: string;
  selectedMode: any;
  AfterVoucher: any = 0;
  extenstionaftervoucher: string;
  SideView: boolean;
  ShownotLNCC: boolean;
  ShowLNCC: boolean;
  sanctiondate: any;
  expirydate: any;
  asondate: any;
  opendate: any;
  renewaldate: any;
  extensionopenbal: string;
  tempDayOpBal: any;
  BANKACNO: any;
  difference: number;
  branchCode: any = null
  Pass: any = 0;
  Unpass: any = 0;
  // ClearBalance: any = 0;
  amount
  selectMode: any;
  interestMinDate: any
  interestMaxDate: any

  TranModeTransfer = [
    { id: 1, value: 'Credit Transfer', tran_drcr: 'C', tran_type: 'TR' },
    { id: 2, value: 'Credit Transfer for Closing', tran_drcr: 'C', tran_type: 'TR' },
    { id: 3, value: 'Credit Transfer for Penal Interest', tran_drcr: 'C', tran_type: 'TR' },
    { id: 4, value: 'Debit Transfer', tran_drcr: 'D', tran_type: 'TR' },
    { id: 5, value: 'Debit Transfer for Closing', tran_drcr: 'D', tran_type: 'TR' },
    { id: 6, value: 'Debit Transfer Interest', tran_drcr: 'D', tran_type: 'TR' },
    { id: 7, value: 'Debit Transfer Dividend', tran_drcr: 'D', tran_type: 'TR' },
    { id: 8, value: 'Debit Transfer for Demand Draft', tran_drcr: 'D', tran_type: 'TR' },
    { id: 9, value: 'Debit Interest on Account', tran_drcr: 'D', tran_type: 'TR' },
    { id: 10, value: 'Credit Interest on Account', tran_drcr: 'C', tran_type: 'TR' },
    { id: 11, value: 'Debit Transfer for Penal Interest', tran_drcr: 'D', tran_type: 'TR' },
    { id: 12, value: 'Debit Monthly Recovery', tran_drcr: 'D', tran_type: 'TR' },
    { id: 13, value: 'Debit for Pay Order', tran_drcr: 'D', tran_type: 'TR' },
    { id: 14, value: 'Credit Transfer for Rebit Interest', tran_drcr: 'C', tran_type: 'TR' },
    { id: 15, value: 'Credit Transfer for Closing With Branch Transfer', tran_drcr: 'C', tran_type: 'TR' }
  ]

  TranModeCash = [
    { id: 1, value: 'Deposit / Receipts', tran_drcr: 'C', tran_type: 'CS' },
    { id: 2, value: 'Deposit Closing', tran_drcr: 'C', tran_type: 'CS' },
    { id: 3, value: 'Deposit Penal Interest', tran_drcr: 'D', tran_type: 'CS' },
    { id: 4, value: 'Withdrawals / Payments', tran_drcr: 'D', tran_type: 'CS' },
    { id: 5, value: 'Withdrawals for Closing', tran_drcr: 'D', tran_type: 'CS' },
    { id: 6, value: 'Withdrawals Interest', tran_drcr: 'D', tran_type: 'CS' },
    { id: 7, value: 'Withdrawals Dividend', tran_drcr: 'D', tran_type: 'CS' },
    { id: 10, value: 'Credit Interest on Account', tran_drcr: 'C', tran_type: 'CS' },
    { id: 13, value: 'Deposit for Pay Order', tran_drcr: 'C', tran_type: 'CS' },
    { id: 14, value: 'Deposit for Rebit Interest', tran_drcr: 'C', tran_type: 'CS' },
  ]

  //////////////////////////////////////////////////////
  ////////////////////Scheme type wise tran mode //////
  TranData = [
    { key: 'AG', data: { cash: [1, 4, 5], transfer: [1] } },
    { key: 'SB', data: { cash: [1, 2, 4, 5], transfer: [1] } },
    { key: 'CA', data: { cash: [1, 2, 4, 5], transfer: [1] } },
    { key: 'CC', data: { cash: [1, 2, 4, 5], transfer: [1, 2] } },
    { key: 'DS', data: { cash: [1, 2, 4], transfer: [1] } },
    { key: 'LN', data: { cash: [1, 2, 4], transfer: [1, 2] } },
    { key: 'GL', data: { cash: [1, 4], transfer: [1] } },
    { key: 'GS', data: { cash: [1, 4], transfer: [1] } },
    { key: 'SH', data: { cash: [1, 4, 5, 7], transfer: [1] } },
    { key: 'IV', data: { cash: [1, 2, 4], transfer: [1] } },
    { key: 'PG', data: { cash: [1, 4, 5, 10], transfer: [1] } },
    { key: 'TD', data: { cash: [1, 4, 5, 6, 10], transfer: [1] } },
  ]
  form: any;



  constructor(
    // public NarrationService: NarrationService,
    private fb: FormBuilder, private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
    private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private _service1: MultiVoucherService,
    private _CustomerIdService: CustomerIdService,
    private _service: SavingPigmyAccountClosingService,
    private savingMasterService: SavingMasterService,
    private _ACMasterDropdownService: ACMasterDropdownService,
    public SchemeTypeService: SchemeTypeService,
    private _vservice: VoucherEntryService,




  ) {
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.getSystemParaDate();
    let user = JSON.parse(localStorage.getItem('user'));


    //Narration List
    this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })


    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.selectedBranch = user.branchId;
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    // if (result.RoleDefine[0].Role.id == 1) {
    //   this.angForm.controls['BRANCH_CODE'].enable()
    //   this.ngBranchCode = result.branch.id
    // }
    // else {
    this.angForm.controls['BRANCH_CODE'].disable()
    this.angForm.patchValue({
      'BRANCH_CODE': result.branch.id
    })
    this.ngBranchCode = result.branch.id
    // }


    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'PG')
      });
      this.allScheme = allscheme;
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'TD' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'GL')
      });
      this.scheme = allscheme;
    })
    this.schemeAccountNoService.getGeneralLedgerListForClosing().pipe(first()).subscribe(data => {
      this.http.get(this.url + '/system-master-parameters/' + 1).subscribe(data1 => {
        this.GlACNo = data.filter(ele => ele.label !== Number(data1['CASH_IN_HAND_ACNO']))
      })
    })
    this._service.getSchemeCodeList().subscribe(data => {
      var schemeList = data.filter(function (schemeName) {
        return (schemeName.S_ACNOTYPE != 'LK')
      });
      this.master = schemeList;
      //debugger
      this.allSchemeCode = [...new Map(schemeList.map(item => [item['S_ACNOTYPE'], item])).values()]
      this.allSchemeCode = this.allSchemeCode.sort(this.dynamicSort("S_ACNOTYPE"));
    })

  }
  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      DATE: ['', [Validators.required]],
      AC_TYPE: [''],
      AC_NO: [''],
      Voucher_Number: [''],
      OP_Date: [''],
      RENEWAL_DATE: [''],
      INT_RATE: [0],
      LAST_INT: [0],
      MATURITY_DATE: [''],
      INT_RATE2: [0],
      MONTHS: [''],
      INT_RATE3: ['', [Validators.pattern]],
      INT_RATE4: [''],
      INT_RATE5: [''],
      AMOUNT: [0, [Validators.pattern]],
      INT_RATE6: [''],
      GL_AC: [''],
      SAVING_PIGMY: ['FormC'],
      chequeNo: ['', [Validators.pattern]],
      ChequeDate: ['', [Validators.pattern]],
      Token_Num: ['', [Validators.pattern]],
      NARRATION: ['', [Validators.pattern]],
      Tscheme: ['',],
      TschemeAC: [''],
      LastIntDate: [''],
      temp_over_draft: [''],
      over_draft: [''],
      token: [''],
      slip_no: [''],
      Intdate: [''],
      DepositAmount: [0],
      OpenDate: [''],
      OTHER_CHARGES_GLACNO: [],
      OTHER_CHARGES_AMOUNT: [0],
      COMMISSION_GLACNO: [],
      COMMISSION_CHARGES: [0],
      Months: [''],
      renewalDate: [''],
      maturityDate: [''],
      AC_Months: [''],
      AC_DAYS: [''],
      INTRATE: [''],
      INTREST_RATE: [0],
      CalCulateAmt: [0],
      TotalInterest: [0],
      LEDGER_BAL: [0],
      PAYABLE_INT: [0],
      POSTED_INT: [0],
      NET_INT: [0],
      PENAL_INT: [0],
      NETPAYABLE_AMT: [0],
      Fnarration: [''],
      EXCESS_INT: [0],
      amount: [0],
      total_amt: [0],
      scheme: [''],
      scheme_type:[''],
      account_no: [''],
      particulars: [''],
      tran_mode: [''],

    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    // if (result.RoleDefine[0].Role.id == 1) {
    //   this.angForm.controls['BRANCH_CODE'].enable()
    //   this.ngBranchCode = result.branch.id
    // }
    // else {
    this.angForm.controls['BRANCH_CODE'].disable()
    this.angForm.patchValue({
      'BRANCH_CODE': result.branch.id
    })
    this.ngBranchCode = result.branch.id
    // }
  }
  getInputHeadAmt(ele, i) {
    // let value = ele.target.value;
    var t = ele.target.value;
    ele.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    let value = Number(ele.target.value);
    if (this.headData[i].Balance == undefined)
      this.headData[i].Balance = 0
    if (Number(ele.target.value) > Number(this.headData[i]?.Balance) && this.headData[i].CHECK_BALANCE == '1') {
      this.headData[i].Amount = '0'
      if (this.headData[i].FIELD_AMOUNT == 'INTEREST_AMOUNT')
        this.INTAMT.nativeElement.focus();
      else
        this.NOTINTAMT.nativeElement.focus();
      this.submitForm = true
      Swal.fire('Info', 'Please fill proper amount!', 'info')
    }
    else {
      if (this.headData[i].IS_GLBAL_MAINTAIN == '1' && Number(this.headData[i].Balance) != 0 && Number(this.headData[i].Balance) != Number(ele.target.value)) {
        this.headData[i].Amount = '0'
        if (this.headData[i].FIELD_AMOUNT == 'INTEREST_AMOUNT')
          this.INTAMT.nativeElement.focus();
        else
          this.NOTINTAMT.nativeElement.focus();
        this.submitForm = true
        Swal.fire('Oops!', `Amount Must Be Equal to ${this.headData[i].Balance}`, 'error');
      }
      else {
        if (Number(this.headData[i].Amount) != 0)
          this.totalAmt = Number(this.headData[i].Amount) - this.totalAmt
        this.headData[i].Amount = Number(value);
        let tran = this.submitTranMode.tran_drcr
        let count = 0
        for (let element of this.headData) {
          count = Number(element.Amount) + Number(count)
        }
        this.totalAmt = count + Number(this.angForm.controls['amt'].value)
        this.submitForm = false
        if (this.headData.length == 0)
          this.submitbtn.nativeElement.focus();
      }
    }
    this.totalAmt = Number(this.totalAmt).toFixed(2)
  }



  isInterestApplicable
  schemechange(event) {
    this.ngGlAcno = Number(event.SVR_CHARGE_GLCODE)
    this.getschemename = event.name
    this.ngscheme = event.value
    this.schemeget = event.id
    this.OTHER_CHARGES_AMOUNT = event.SVR_CHARGE_RATE
    this.isInterestApplicable = event.intapp
    this.schemeACNo = null
    this.customer = null
    this.introducerACNo = []
    this.getAccountlist()
  }

  //  Fetching account from seleted scheme
  getAccountlist() {
    this.accountedit = null
    this.obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeListforClosing(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        this.isHideForSaving = false
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeListforClosing(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        this.isHideForSaving = true
        break;
    }
  }
  transferAcnoType
  transferAcno
  transferSchemeDetails
  transferAccountDetails
  // get account no according scheme for transfer
  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.obj = [this.ngschemecode, this.ngBranchCode]
    this.ngacno = null
    this.transferAcnoType = event.name
    switch (event.name) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.transferAcno = data;
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.transferAcno = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.transferAcno = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.transferAcno = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.transferAcno = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.transferAcno = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.transferAcno = data;
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.transferAcno = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.transferAcno = data;
        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.transferAcno = data;
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.transferAcno = data;
        })
        break;
      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerListForClosing().subscribe(data => {
          this.transferAcno = data;
        })
        break;
    }
  }

  getTransferAccountDeatil(event) {
    this.transferAccountDetails = event
  }

  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.sysparaData = data
      this.date = data.CURRENT_DATE
      this.logDate = data.CURRENT_DATE
      let nextDate = moment(this.date, 'DD/MM/YYYY').add(3, 'month').format('YYYY-MM-DD');
      let lastDate = moment(this.date, 'DD/MM/YYYY').subtract(3, 'month').format('YYYY-MM-DD');

      this.maxDate = new Date(nextDate);
      this.maxDate.setDate(this.maxDate.getDate());

      this.minDate = new Date(lastDate);
      this.minDate.setDate(this.minDate.getDate());

      this.angForm.patchValue({
        'DATE': data.CURRENT_DATE,
      })
    })
  }

  hideImage() {
    // document.getElementById("full").src = "";
    this.previewImg = '';
    this.PreviewDiv = false;
  }
  previewImg: string;
  PreviewDiv: boolean = false;
  showImage(img) {
    var src = img;
    var largeSrc = src.replace('small', 'large');
    this.previewImg = src;
    this.PreviewDiv = true;
    // document.getElementById('full').src = largeSrc;
  }

  bankacno
  OpenDate
  renewalDate
  INTRATE
  LastIntDate
  maturityDate
  customerId
  dormant
  intrateShow
  preMature
  modalClass: string = 'modalHide';
  NET_EXC_INTAMT = 0
  ledgerBalance

  getscheme
  getdata

  getAccountDetails(event) {
    this.bankacno = event.bankacno
    this.customerId = event.customerId
    this.dormant = event.dormant
    let mem = [this.bankacno, this.getschemename, this.ngscheme]
    this.preMature = null
    this.intrateShow = 0
    this.transferTotalAmount = 0
    this.NET_EXC_INTAMT = 0
    this.multigrid = []
    this.angForm.patchValue({
      INTREST_RATE: 0,
      Months: 0,
      CalCulateAmt: 0,
      TotalInterest: 0,
      POSTED_INT: 0,
      NET_INT: 0,
      Fnarration: null,
      LEDGER_BAL: 0,
      PAYABLE_INT: 0,
      OTHER_CHARGES_AMOUNT: 0,
      OTHER_CHARGES_GLACNO: null,
      COMMISSION_CHARGES: 0,
      COMMISSION_GLACNO: null,
      PENAL_INT: 0,
      NETPAYABLE_AMT: 0
    })
    this.modalClass = 'modalShow';
    this.http.get(this.url + '/saving-pigmy-account-closing/details/' + mem).subscribe((data) => {
      this.modalClass = 'modalHide';
      if (data[0].ODGIVEN == true) {
        Swal.fire('Oops', 'Overdraft given so Account cannot close', 'error')
        this.customer = null
        return
      }
      else if (data[0].ISFREEZ == true) {
        Swal.fire('Oops', 'Freezed account so Account cannot close', 'error')
        this.customer = null
        return
      }
      else if (data[0].ISCLOSED == true) {
        Swal.fire('Oops', 'Account is already closed so account cannot close', 'error')
        this.customer = null
        return
      }
      else if (data[0].PASSINGPENDING == true) {
        Swal.fire('Oops', 'Account is already closed but passing pending', 'error')
        this.customer = null
        return
      }
      else if (Number(data[0].ledgerBal) >= 0) {
        Swal.fire('Oops', 'Balance is insufficient so account cannot close', 'error')
        this.customer = null
        return
      }
      else if (data[0].ISLIEN === true) {
        let cashRadio = document.getElementById('formT') as HTMLInputElement;

        Swal.fire({
          title: 'Transfer to Loan Account?',
          text: 'Do you want to transfer to the loan account?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.isConfirmed) {
            this.isTransfer = true;

            cashRadio.disabled = true;
            let obj1 = { DEPO_AC_NO: event.bankacno };

            this.http.post<any>('http://192.168.1.174:7265/term-deposits-master/ownDeposit', obj1).subscribe(
              (demo: any) => {
                // console.log(demo);
                this.getdata = demo
                if (demo && demo.length > 0) {
                  this.angForm.patchValue({
                    scheme1: this.getdata[0].S_APPL + " " + this.getdata[0].S_NAME,
                    ac_no: this.getdata[0].AC_NO + " " + this.getdata[0].AC_NAME,
                    scheme_type: this.getdata[0].AC_ACNOTYPE
                  });

                }

                let acType = { AC_TYPE: demo[0].AC_TYPE }

                // Second POST request
                this.http.post<any>(this.url + '/scheme-parameters/AC_TYPE', acType).subscribe(
                  (response: any) => {
                    this.getscheme = response
                    if (response && response.length > 0) {
                      this.form.patchValue({
                        scheme1: this.getscheme[0].S_NAME,

                      });
                    }
                  },

                );

              }

            );

          } else {
            this.customer = null;
          }
        });
      }
      this.preMature = data[0].preMature
      this.OpenDate = data[0].AC_OPDATE
      this.ledgerBalance = Math.abs(data[0].ledgerBal)
      this.renewalDate = data[0].AC_ASON_DATE
      this.INTRATE = data[0].INT_RATE
      this.INT_RATESHOW = data[0].intrate
      this.LastIntDate = data[0].AC_LINTEDT
      this.maturityDate = data[0].AC_EXPDT
      this.customer = data[0].BANKACNO

      this.angForm.patchValue({
        AC_Months: data[0].AC_MONTHS,
        AC_DAYS: data[0].AC_DAYS,
        POSTED_INT: data[0].post_Interest,
        LEDGER_BAL: Number(Math.abs(data[0].ledgerBal)).toFixed(2),
        PAYABLE_INT: Number(Math.abs(data[0].payableInterest)).toFixed(2),
        PENAL_INT: Number(data[0].penalInterest).toFixed(2)
      })
      if (this.isInterestApplicable == '1') {
        this.angForm.patchValue({
          INTREST_RATE: data[0].INT_RATE,
          TotalInterest: Number(Math.abs(data[0].ledgerBal)) == 0 ? 0 : Number(this.customRound(data[0].currentInterest)),
          CalCulateAmt: Number(Math.abs(data[0].ledgerBal)) == 0 ? 0 : Number(this.customRound(data[0].currentInterest))
        })
        this.intrateShow = data[0].INT_RATE
      }
      else {
        this.angForm.patchValue({
          INTREST_RATE: '0',
          TotalInterest: 0,
          CalCulateAmt: 0
        })
        this.intrateShow = 0
      }

      if (data[0].post_Interest < 0) {
        this.angForm.patchValue({
          // EXCESS_INT: Number(data[0].post_Interest).toFixed(2),
          NET_INT: Number(data[0].post_Interest).toFixed(0),
          POSTED_INT: 0,
        })
        this.NET_EXC_INTAMT = Number(data[0].post_Interest)
      }
      else if (data[0].post_Interest > 0) {
        this.angForm.patchValue({
          POSTED_INT: Number(data[0].post_Interest).toFixed(0),
          NET_INT: 0
          // EXCESS_INT: 0
        })
        this.NET_EXC_INTAMT = 0
      }
      else {
        this.angForm.patchValue({
          POSTED_INT: 0,
          NET_INT: 0
          // EXCESS_INT: 0
        })
        this.NET_EXC_INTAMT = 0
      }

      let netInt: number = 0
      let months = 0
      netInt = Number(this.angForm.controls['TotalInterest'].value) - Number(data[0].post_Interest)
      if (data[0].AC_LINTEDT != "" && data[0].AC_LINTEDT != null) {
        var date1 = data[0].AC_LINTEDT;
        var date2 = this.angForm.controls['DATE'].value;
        var b = moment(date1, "DD/MM/YYYY");
        var a = moment(date2, "DD/MM/YYYY");
        months = a.diff(b, 'months');
      }
      else {
        var date1 = data[0].AC_OPDATE;
        var date2 = this.angForm.controls['DATE'].value;
        var b = moment(date1, "DD/MM/YYYY");
        var a = moment(date2, "DD/MM/YYYY");
        months = a.diff(b, 'months');
      }
      this.angForm.patchValue({
        Months: months,
        NET_INT: Math.abs(this.customRound(netInt))
      })
      this.getNetInterest()
      this.showCustomerDeatils()
    }, (error) => {
      console.log(error, 'err')
      this.modalClass = 'modalHide';
      Swal.fire('Oops!', error?.error?.message, 'error');
    })
  }

 
  OTHER_CHARGES_GLACNO
  OTHER_CHARGES_AMOUNT
  isPrematureClose = 0

  calculation() {
    this.angForm.patchValue({
      OTHER_CHARGES_GLACNO: this.OTHER_CHARGES_GLACNO,
      OTHER_CHARGES_AMOUNT: this.OTHER_CHARGES_AMOUNT
    })
  }
  acno
  checkAccountCondition(event) {
    this.acno = event.AC_NO
    this.BANKACNO = event.BANKACNO
    let schemetype = event.AC_ACNOTYPE
    let scheme = this.submitScheme.S_NAME

    let data1: any = localStorage.getItem('user');
    let result = JSON.parse(data1);
    // let tempacno = this.submitAccountNo.BANKACNO
    let obj = {
      clearBalance: Number(this.ledgerBalance),
      accountNo: this.submitAccountNo.BANKACNO,
      accno: this.submitAccountNo.AC_NO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
      usertype: result.RoleDefine[0].RoleId,
      // currentDate: this.date
    }

    this._vservice.CheckAccountCloseFlagInDailytran(obj).subscribe(data => {
      if (data != 0) {
        Swal.fire('Oops!', data.message, 'error');
        this.customer = null;
        this.showlgindetails()
      } else {
        this._vservice.specialInstruction(obj).subscribe(data => {
          if (data != 0) {
            if (data.restriction == 1) {
              this.customer = null
              this.showlgindetails()

            } else {
              // this.customer = tempacno
            }

            Swal.fire({
              title: 'Warning',
              icon: 'warning',
              html:
                data.message + '<br>' +
                '<span style="font-weight:bold;">Instruction:</span>' + '<br>'
                + data.DETAILS
            })
          } else {
            this._vservice.CheckLoginFlagInDpmaster(obj).subscribe(data => {
              if (data != 0) {
                Swal.fire('Oops!', data.message, 'error');
                this.customer = null
                this.showlgindetails()

              } else {
                this._vservice.checkDormantAccount(obj).subscribe(data => {
                  if (data != 0) {
                    Swal.fire('Oops!', data.message, 'error');
                    this.customer = null
                    this.showlgindetails()

                  } else {
                    this._vservice.InstructionFreezeAc(obj).subscribe(data => {
                      if (data != 0) {
                        Swal.fire({
                          title: 'Are you sure?',
                          text: data.message,
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          cancelButtonText: 'No',
                          confirmButtonText: 'Yes'
                        }).then((result) => {
                          if (result.isConfirmed == false) {
                            this.customer = null
                            this.showlgindetails()

                          }
                        })
                      } else {
                        this._vservice.IsDirectEntryAllow(obj).subscribe(data => {
                          if (data != 0) {
                            Swal.fire('Oops!', data.message, 'error');
                          }
                        }, err => {
                          console.log(err);
                        })

                      }
                    }, err => {
                      console.log(err);
                    })
                  }
                }, err => {
                  console.log(err);
                })
              }
            }, err => {
              console.log(err);
            })
          }
        }, err => {
          console.log(err);
        })
      }
    }, err => {
      console.log(err);
    })
  }
  showlgindetails() {
    throw new Error('Method not implemented.');
  }

  chequeNoData(event) {
    //debugger
    this.angForm.patchValue({
      chequeNo: event.target.value.toUpperCase()
    })
  }
  debit: number = 0
  totalNetAmt
  getNetInterest() {
    let ledger_bal = Number(this.angForm.controls['LEDGER_BAL'].value)
    let net_int = Number(this.angForm.controls['NET_INT'].value)
    let other_charge_amt = Number(this.angForm.controls['OTHER_CHARGES_AMOUNT'].value)
    let comm_amt = Number(this.angForm.controls['COMMISSION_CHARGES'].value)
    let penal_amt = Number(this.angForm.controls['PENAL_INT'].value)
    this.totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (Math.abs(ledger_bal + net_int - other_charge_amt - comm_amt - penal_amt)).toFixed(2) : (Math.abs(ledger_bal - Math.abs(net_int) - other_charge_amt - comm_amt - penal_amt)).toFixed(2)
    this.preMature == false || this.preMature == null ? this.totalNetAmt = (Number(this.totalNetAmt) + Number(this.angForm.controls['PAYABLE_INT'].value)).toFixed(2) : this.totalNetAmt = this.totalNetAmt
    this.angForm.patchValue({
      NETPAYABLE_AMT: this.totalNetAmt

    })


  }

  getTotalNetInterest() {
    let total_int = this.angForm.controls['TotalInterest'].value
    let post_int = this.angForm.controls['POSTED_INT'].value
    let netInt = (Number(total_int) - Number(post_int)).toFixed(0)
    this.NET_EXC_INTAMT = Number(total_int) - Number(post_int)
    this.angForm.patchValue({
      NET_INT: Math.abs(Number(netInt))
    })
    this.getNetInterest()
  }
  //transfer account grid functions
  schemeget



  addTransferAccount() {
    this.formSubmitted = true;
    let formVal = this.angForm.value;

    let object = {
      Scheme: this.schemeget,
      TRANSFER_ACNO: this.submitAccountNo.BANKACNO,
      TRANSFER_ACTYPE: this.submitAccountNo.AC_TYPE,
      TRANSFER_ACNOTYPE: formVal.scheme_type,
      ACNO: this.customer,
      NARRATION: formVal.NARRATION,
      TRAN_AMOUNT: formVal.LEDGER_BAL,
      AC_CLOSED: '0'
    };

    this.getTransferAccountList(event);

    if (!formVal.scheme) {
      Swal.fire("Warning!", "Please Select Scheme!", "error");
      return;
    }

    if (!formVal.account_no) {
      Swal.fire("Warning!", "Please Select Account!", "info");
      return;
    }

    if (!formVal.total_amt) {
      Swal.fire("Warning!", "Please Insert Amount!", "info");
      return;
    }

    if (this.multigrid.find(ob => ob['TRANSFER_ACNO'] === object.TRANSFER_ACNO)) {
      Swal.fire('Info', 'This Account is Already Exists!', 'error');
      return;
    }

    if (object.TRANSFER_ACNO !== this.customer) {
      let termAmount = 0;

      const handleLedgerBalance = (ledgerBal) => {
        termAmount = Number(this.transferAccountDetails.depositAmount) - Number(ledgerBal);
        this.transferTotalAmount += Number(formVal.total_amt);

        let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value);

        if (comparison <= this.transferTotalAmount) {
          if (formVal.total_amt >= termAmount) {
            this.multigrid.push(object);
            this.resetgrid();
          } else {
            Swal.fire('Info', `Amount Must be less than or same as ${termAmount}`, 'info');
            this.transferTotalAmount -= Number(formVal.total_amt);
          }
        } else {
          this.transferTotalAmount -= Number(formVal.total_amt);
          Swal.fire('Info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
        }
      };

      if (this.transferSchemeDetails.name == 'TD' && this.transferSchemeDetails.installmentType == 0) {
        let obj = {
          Scheme: this.transferSchemeDetails.id,
          BANKACNO: object.TRANSFER_ACNO,
          Date: this.date
        };
        this.http.post(this.url + '/term-deposit-account-closing/ledgerBalance', obj).subscribe(handleLedgerBalance);
      } else if (this.transferSchemeDetails.name == 'LN' || this.transferSchemeDetails.name == 'DS') {
        let obj = {
          Scheme: this.transferSchemeDetails.id,
          BANKACNO: object.TRANSFER_ACNO,
          Date: this.date
        };
        this.http.post(this.url + '/term-deposit-account-closing/ledgerBalance', obj).subscribe((bal: number) => {
          let ledgerBal = bal;
          if (Number(ledgerBal) == Number(formVal.total_amt)) {
            object['AC_CLOSED'] = '1';
            this.transferTotalAmount += Number(formVal.total_amt);
            let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value);

            if (comparison >= this.transferTotalAmount) {
              this.multigrid.push(object);
              this.resetgrid();
            } else {
              this.transferTotalAmount -= Number(formVal.total_amt);
              Swal.fire('Info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
            }
          } else if (Number(ledgerBal) > Number(formVal.total_amt)) {
            this.transferTotalAmount += Number(formVal.total_amt);
            let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value);

            if (comparison >= this.transferTotalAmount) {
              this.multigrid.push(object);
              this.resetgrid();
            } else {
              this.transferTotalAmount -= Number(formVal.total_amt);
              Swal.fire('Info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
            }
          } else if (Number(ledgerBal) < Number(formVal.total_amt)) {
            Swal.fire('Info', `Amount Is Greater Than Closing Balance`, 'info');
          }
        });
      } else {
        this.transferTotalAmount += Number(formVal.total_amt);
        let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value);

        if (comparison >= this.transferTotalAmount) {
          this.multigrid.push(object);
          this.resetgrid();
        } else {
          this.transferTotalAmount -= Number(formVal.amount);
          Swal.fire('Info', `Please check Transfer Amount with ${Math.abs(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
        }
      }
    } else {
      Swal.fire('Info', 'Closing Account And Transfer Account Cannot Be Same', 'info');
      this.resetgrid();
    }

    this.angForm.controls['total_amt'].reset()
    this.angForm.controls['amount'].reset()
    this.angForm.controls['tran_mode'].reset()
    this.angForm.controls['account_no'].reset()
    this.angForm.controls['scheme'].reset()
    this.angForm.controls['scheme_type'].reset()
    this.angForm.controls['NARRATION'].reset()
  }

  editTransferAccount(id) {
    this.transferIndex = id
    this.transferACID = this.multigrid[id].id;
    this.transferGrid = this.multigrid[id]
    this.jointShowButton = false;
    this.jointUpdateShow = true;
    this.angForm.patchValue({
      NARRATION: this.multigrid[id].NARRATION,
      amount: this.multigrid[id].TRAN_AMOUNT
    })
    this.ngacno = this.multigrid[id].ACNO
    this.ngschemecode = this.multigrid[id].TRANSFER_ACTYPE
    this.transferAcnoType = this.multigrid[id].TRANSFER_ACNOTYPE
  }

  updateTransferAcccount() {
    let index = this.transferIndex;
    this.jointShowButton = true;
    this.jointUpdateShow = false;
    let cheqDate
    const formVal = this.angForm.value;
    var object = {
      TRANSFER_ACNO: formVal.TschemeAC,
      TRANSFER_ACTYPE: this.ngschemecode,
      ACNO: this.ngacno,
      NARRATION: formVal.NARRATION,
      TRAN_AMOUNT: formVal.amount,
      TRANSFER_ACNOTYPE: this.transferAcnoType,
      id: this.transferACID
    }

    if (formVal.Tscheme == "" || formVal.Tscheme == null) {
      Swal.fire("Warning!", "Please Select Scheme!", "error");
    } else if (formVal.TschemeAC == "" || formVal.TschemeAC == null) {
      Swal.fire(
        "Warning!",
        "Please Select Account!",
        "info"
      );
    }
    else if (formVal.amount == "" || formVal.amount == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Amount!",
        "info"
      );
    }
    else {
      if (object.TRANSFER_ACNO != this.customer) {
        let termAmount = 0
        if (this.transferSchemeDetails.name == 'TD' && this.transferSchemeDetails.installmentType == 0) {
          let obj = {
            Scheme: this.transferSchemeDetails.id,
            BANKACNO: object.TRANSFER_ACNO,
            Date: this.date
          }
          let ledgerBal
          this.http.post(this.url + '/term-deposit-account-closing/ledgerBalance', obj).subscribe((bal) => {
            ledgerBal = bal
            termAmount = Number(this.transferAccountDetails.depositAmount) - Number(ledgerBal)
          })
          this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
          let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value)
          if (comparison >= this.transferTotalAmount) {
            if (formVal.amount >= termAmount) {
              this.multigrid[index] = object
              this.jointShowButton = true;
              this.jointUpdateShow = false;
              this.resetgrid();
            }
            else {
              Swal.fire('info', `Amount Must be less than or same as ${termAmount}`, 'info')
              this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            }
          }
          else {
            Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
          }
        }
        else if (this.transferSchemeDetails.name == 'LN' || this.transferSchemeDetails.name == 'DS') {
          let obj = {
            Scheme: this.transferSchemeDetails.id,
            BANKACNO: object.TRANSFER_ACNO,
            Date: this.date
          }
          let ledgerBal
          this.http.post(this.url + '/term-deposit-account-closing/ledgerBalance', obj).subscribe((bal) => {
            ledgerBal = bal
            if (Number(ledgerBal) == Number(formVal.amount)) {
              object['AC_CLOSED'] = '1'
              this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
              let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value)
              if (comparison >= this.transferTotalAmount) {
                this.multigrid[index] = object
                this.jointShowButton = true;
                this.jointUpdateShow = false;
                this.resetgrid();
              }
              else {
                Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
              }
            }
            else if (Number(ledgerBal) > Number(formVal.amount)) {
              this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
              let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value)
              if (comparison >= this.transferTotalAmount) {
                this.multigrid[index] = object
                this.jointShowButton = true;
                this.jointUpdateShow = false;
                this.resetgrid();
              }
              else {
                Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
              }
            }
            else if (Number(ledgerBal) < Number(formVal.amount)) {
              Swal.fire('info', `Amount Is Greater Than Closing Balance`, 'info')
            }
          })
        }
        else {
          this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
          let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value)
          if (comparison >= this.transferTotalAmount) {
            this.multigrid[index] = object
            this.jointShowButton = true;
            this.jointUpdateShow = false;
            this.resetgrid();
          }
          else {
            Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
          }
        }
      }
      else {
        Swal.fire('info', 'Closing Account And Transfer Account Cannot Be Same', 'info')
        this.resetgrid();
      }
    }
  }

  resetgrid() {
    this.ngacno = null
    this.ngschemecode = null
    this.angForm.controls["NARRATION"].reset();
    this.angForm.controls["scheme_type"].reset();
    this.angForm.controls["scheme"].reset();
    this.angForm.controls["account_no"].reset();
    this.angForm.controls["tran_mode"].reset();
    this.angForm.controls["total_amt"].reset();
    this.angForm.controls["amount"].reset();



  }

  //transfer and cash radio button effect
  isFormA(value) {
    if (value == 1) {
      this.isTransfer = false
    }
    if (value == 2) {
      this.isTransfer = true
    }
  }

  Status
  Customer_info
  showCustomerDeatils() {
    //  this.signture = ''
    // this.customerImg = ''
     this.customerImg = 'assets/images/nouser.png';
    this.signture = 'assets/images/nosignature.png'
    if (this.angForm.controls['AC_NO'].value != null) {
      this._CustomerIdService.getFormData(this.customerId).subscribe(data => {
        this.Customer_info = data
        this.Status = this.dormant
        if (data.custdocument.length != 0) {
          data.custdocument.forEach(element => {
            if (element.DocumentMasterID == 1) {
              this.customerImg = this.url + '/' + element.PATH;
            }
            if (element.DocumentMasterID == 2) {
              this.signture = this.url + '/' + element.PATH;
            }
          });
        } else {
          this.customerImg = 'assets/images/nouser.png';
          this.signture = 'assets/images/nosignature.png'
        }
      })
    }
  }

  transferTotalAmount: number = 0
  submit() {
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (formVal.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLE_AMT'].value) != this.transferTotalAmount) {
      Swal.fire("Warning!", "Please Check Net Payable Amount and Transfer Amount!", "info");
    }
    else if ((formVal.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLE_AMT'].value) == this.transferTotalAmount) || formVal.SAVING_PIGMY == 'FormC') {
      const dataToSend = {
        LEDGER_BAL: formVal.LEDGER_BAL,
        TRAN_DATE: formVal.DATE,
        TRAN_TYPE: formVal.SAVING_PIGMY == 'FormT' ? 'TR' : 'CS',
        BRANCH_CODE: this.ngBranchCode,
        TRAN_ACNOTYPE: this.getschemename,
        TRAN_ACTYPE: this.ngscheme,
        TRAN_ACNO: this.bankacno,
        PAID_INTEREST_AMOUNT: formVal.POSTED_INT,
        OTHER_CHARGES_AMOUNT: formVal.OTHER_CHARGES_AMOUNT,
        PENAL_INTEREST_AMOUNT: formVal.PENAL_INT,
        NET_INTEREST_AMOUNT: formVal.NET_INT,
        TOTAL_INTEREST_AMOUNT: formVal.TotalInterest,
        NET_PAYABLE_AMOUNT: formVal.NETPAYABLE_AMT,
        INTEREST_RATE: formVal.INTREST_RATE,
        IS_PREMATURE_CLOSE: this.preMature == true ? 1 : 0,
        EXCESS_INTEREST: this.NET_EXC_INTAMT >= 0 ? 0 : this.NET_EXC_INTAMT,
        NARRATION: formVal.Fnarration,
        // TOKEN_NO: formVal.Token_Num,
        COMMISSION_CHARGES: formVal.COMMISSION_CHARGES,
        COMMISSION_GLACNO: formVal.COMMISSION_GLACNO,
        OTHER_CHARGES_GLACNO: formVal.OTHER_CHARGES_GLACNO,
        PAYABLE_INTEREST_AMOUNT: formVal.PAYABLE_INT,
        CHEQUE_NO: formVal.chequeNo,
        CHEQUE_DATE: (formVal.ChequeDate == '' || formVal.ChequeDate == 'Invalid date') ? '' : moment(formVal.ChequeDate).format('DD/MM/YYYY'),
        USER: result.id,
        multigrid: this.multigrid,
        SCHEME: this.multigrid[0].Scheme,
        ACCOUNT_NO: this.multigrid[0].TRANSFER_ACNO,
        PARTICULARS: this.multigrid[0].NARRATION,
        AMOUNT:this.multigrid[0].TRAN_AMOUNT,
      }

      this._service.postData(dataToSend).subscribe(data => {
        // this.getVoucherData();
        // Swal.fire('Success!', 'Account Closed Successfully !',  'success');

        const successMessage = ` Account Closed successfully ! Voucher Number ${data}`;
        Swal.fire('Success!', successMessage, 'success');


        this.multigrid = []
        this.resetForm()
      }, err => {
        console.log(err);
      })
    }

  }

  addNewData() {
    var button = document.getElementById('triggerhide');
    button.click();
    this.reloadTablePassing.emit();
    this.resetForm()

  }

  resetForm() {
    this.ngOnInit()
    this.createForm()
    this.preMature = null
    this.OpenDate = ''
    this.ledgerBalance = ''
    this.renewalDate = ''
    this.INTRATE = 0
    this.INT_RATESHOW = 0
    this.LastIntDate = ''
    this.maturityDate = ''
    var button = document.getElementById('triggerhide');
    button.click();
    this.reloadTablePassing.emit();
  }
  //function toggle update to add button
  updateData() {
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (formVal.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLE_AMT'].value) != this.transferTotalAmount) {
      Swal.fire("Warning!", "Please Check Net Payable Amount and Transfer Amount!", "info");
    }
    else if ((formVal.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLE_AMT'].value) == this.transferTotalAmount) || formVal.SAVING_PIGMY == 'FormC') {
      const dataToSend = {
        id: this.updateID,
        TRAN_NO: this.TRAN_NO,
        LEDGER_BAL: formVal.LEDGER_BAL,
        TRAN_DATE: formVal.DATE,
        TRAN_TYPE: formVal.SAVING_PIGMY == 'FormT' ? 'TR' : 'CS',
        BRANCH_CODE: this.ngBranchCode,
        TRAN_ACNOTYPE: this.getschemename,
        TRAN_ACTYPE: this.ngscheme,
        TRAN_ACNO: this.bankacno,
        PAID_INTEREST_AMOUNT: formVal.POSTED_INT,
        OTHER_CHARGES_AMOUNT: formVal.OTHER_CHARGES_AMOUNT,
        PENAL_INTEREST_AMOUNT: formVal.PENAL_INT,
        NET_INTEREST_AMOUNT: formVal.NET_INT,
        TOTAL_INTEREST_AMOUNT: formVal.TotalInterest,
        NET_PAYABLE_AMOUNT: formVal.NETPAYABLE_AMT,
        INTEREST_RATE: formVal.INTREST_RATE,
        IS_PREMATURE_CLOSE: this.preMature == true ? 1 : 0,
        NARRATION: formVal.Fnarration,
        // TOKEN_NO: formVal.Token_Num,
        COMMISSION_CHARGES: formVal.COMMISSION_CHARGES,
        COMMISSION_GLACNO: formVal.COMMISSION_GLACNO,
        OTHER_CHARGES_GLACNO: formVal.OTHER_CHARGES_GLACNO,
        PAYABLE_INTEREST_AMOUNT: formVal.PAYABLE_INT,
        CHEQUE_NO: formVal.chequeNo,
        // CHEQUE_DATE: (formVal.ChequeDate == '' || formVal.ChequeDate == 'Invalid date') ? '' : moment(formVal.ChequeDate).format('DD/MM/YYYY'),
        USER: result.id,
        multigrid: this.multigrid,
        EXCESS_INTEREST: this.NET_EXC_INTAMT >= 0 ? 0 : this.NET_EXC_INTAMT,
      }
      let ChequeDate
      if (this.updatecheckdata.CHEQUE_DATE != formVal.ChequeDate) {
        (formVal.ChequeDate == 'Invalid date' || formVal.ChequeDate == '' || formVal.ChequeDate == null) ? (ChequeDate = '', formVal['ChequeDate'] = ChequeDate) : (ChequeDate = formVal.ChequeDate, dataToSend['CHEQUE_DATE'] = moment(ChequeDate).format('DD/MM/YYYY'))
      } else {
        dataToSend['CHEQUE_DATE'] = formVal.ChequeDate
      }
      this._service.updateData(dataToSend).subscribe(data => {
        // this.getVoucherData();
        Swal.fire('Success!', 'Account Closing Updated Successfully !', 'success');
        var button = document.getElementById('triggerhide');
        button.click();
        this.reloadTablePassing.emit();
        this.multigrid = []
        this.resetForm()
      }, err => {
        console.log(err);
      })
    }
  }
  selectedSchemeCode() {

    this.allSchemevalue = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCode) {
        this.allSchemevalue.push(element)
      }
    });

    //get Head details
    let obj = { 'code': this.selectedCode };
    let date = this.ChequeDate;
    var rowData = date.split('/');
    let lastdate = Number(rowData[0]) - 1;
    // let result    = rowData[2]+'-'+rowData[1]+'-'+lastdate;
    this.IntersetHeadDate = lastdate + '/' + rowData[1] + '/' + rowData[2];

  }
  tempschmetype
  resetscheme() {
    // console.log(this.tempschmetype)
    if (this.tempschmetype != this.selectedCode) {
      this.selectedScheme = null
      this.customer = null
      this.introducerACNo = []
    }
  }
  getIntroducer() {
    this.introducerACNo = [];
    this.customer = null
    this.obj = [this.selectedScheme, this.selectedBranch]
    // switch (this.getschemename) {
    //   case 'TD':
    this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })
    // break;
    // }
  }
  tempscheme
  id
  getIntroducer1(item) {
    this.id = item.id
    this.tempschmetype = this.selectedCode
    this.introducerACNo = [];
    this.submitScheme = item;

    if (this.tempscheme != this.selectedScheme) {
      this.customer = null
    }

    this.obj = [item.id, this.selectedBranch]
    switch (this.selectedCode) {
      case 'SB':
        this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'SH':
        this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'CA':
        this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'LN':
        this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'DS':
        this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'CC':
        this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'GS':
        this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'PG':
        this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'AG':
        this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'IV':
        this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;
      case 'GL':
        this._ACMasterDropdownService.getACMasterList1().subscribe(data => {
          console.log('data', data)
          this.introducerACNo = data;
        })
        break;
    }
    let object = this.TranData.find(t => t.key === this.selectedCode);
    if (this.type == 'cash') {
      this.tranModeList = [];
      object.data.cash.forEach(ele => {
        let obj = this.TranModeCash.find(t => t.id === ele);
        this.tranModeList.push(obj);
        if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == 0 && this.submitScheme.IS_RECURRING_TYPE == 0 && this.submitScheme.IS_CALLDEPOSIT_TYPE == 0 && this.submitScheme.REINVESTMENT == 0 && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
          this.tranModeList = this.tranModeList.filter(ele => ele.id != 1)
        }
        if (this.submitScheme?.S_ACNOTYPE == 'TD' && this.submitScheme?.WITHDRAWAL_APPLICABLE == '0')
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
        if (this.submitScheme?.S_ACNOTYPE == 'PG' && this.submitScheme?.WITHDRAWAL_APPLICABLE == '0')
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
        if (this.submitScheme?.S_ACNOTYPE == 'LN' && this.submitScheme?.IS_DEPO_LOAN == '1' && Number(this.DayOpBal) > 0)
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
      })
    } else {
      this.tranModeList = [];
      object.data.transfer.forEach(ele => {
        let obj = this.TranModeTransfer.find(t => t.id === ele);
        this.tranModeList.push(obj);
        if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == 0 && this.submitScheme.IS_RECURRING_TYPE == 0 && this.submitScheme.IS_CALLDEPOSIT_TYPE == 0 && this.submitScheme.REINVESTMENT == 0 && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
          this.tranModeList = this.tranModeList.filter(ele => ele.id != 1)
        }
        if (this.submitScheme?.S_ACNOTYPE == 'TD' && this.submitScheme?.WITHDRAWAL_APPLICABLE == '0')
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
        if (this.submitScheme?.S_ACNOTYPE == 'PG' && this.submitScheme?.WITHDRAWAL_APPLICABLE == '0')
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
        if (this.submitScheme?.S_ACNOTYPE == 'LN' && this.submitScheme?.IS_DEPO_LOAN == '1' && Number(this.DayOpBal) > 0)
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
      })
    }

  }
  submitAccountNo: any;

  getVoucherData(item) {
    this.submitAccountNo = item;
    this.acno = item.AC_NO
    let customer = this.angForm.controls['account_no'].value;
    this.DayOpBal = 0
    this.selectedMode = null
    // this.angForm.controls['total_amt'].reset()
    // this.angForm.controls['amt'].reset()
    // this.angForm.controls['tran_mode'].reset();
    this.tempscheme = this.selectedScheme
    let obj = {
      'customer': customer.BANKACNO,
      'date': this.date
    }

    //Check Account Close or not
    let Obj = {
      'customer_ACNO': customer.BANKACNO,
      'type': this.selectedCode
    }
    this._service.checkAccountCloseOrNot(Obj).subscribe(data => {
      if (data == true) {
        Swal.fire('Oops!', 'Access dined Account Close Already!', 'error');
        return 0;
      }
    }, err => {
      console.log(err);
    })

    var startdate = this.angForm.controls['date'].value
    let formDT = moment(startdate, 'DD/MM/YYYY')
    var addInFrom: any;
    if (this.submitScheme.S_ACNOTYPE == 'PG') {
      addInFrom = startdate;
    } else {
      addInFrom = moment(formDT, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY')
    }

    let openingobj = {
      scheme: this.submitScheme.S_APPL,
      acno: this.submitScheme.S_APPL == '980' ? this.submitAccountNo.AC_NO : this.submitAccountNo.BANKACNO,
      date: addInFrom
    }
    //
    this._vservice.getledgerbalance(openingobj).subscribe(data => {
      this.DayOpBal = Math.abs(data);
      // this.DayOpBal = Number(this.DayOpBal).toFixed(2)
    })
    let object = this.TranData.find(t => t.key === this.selectedCode);

    if (this.type == 'cash') {
      this.tranModeList = [];
      object.data.cash.forEach(ele => {
        let obj = this.TranModeCash.find(t => t.id === ele);
        this.tranModeList.push(obj);
      })
      if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == "0" && this.submitScheme.IS_RECURRING_TYPE == "0" && this.submitScheme.IS_CALLDEPOSIT_TYPE == "0" && this.submitScheme.REINVESTMENT == "0" && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1)
      }
      if (this.submitScheme?.S_ACNOTYPE == 'TD' && this.submitScheme?.WITHDRAWAL_APPLICABLE == '0')
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
      if (this.submitScheme?.S_ACNOTYPE == 'PG' && this.submitScheme?.WITHDRAWAL_APPLICABLE == '0')
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
      if (this.submitScheme?.S_ACNOTYPE == 'LN' && this.submitScheme?.IS_DEPO_LOAN == '1' && Number(this.DayOpBal) > 0)
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
    } else {
      this.tranModeList = [];
      object.data.transfer.forEach(ele => {
        let obj = this.TranModeTransfer.find(t => t.id === ele);
        this.tranModeList.push(obj);
      })
      if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == "0" && this.submitScheme.IS_RECURRING_TYPE == "0" && this.submitScheme.IS_CALLDEPOSIT_TYPE == "0" && this.submitScheme.REINVESTMENT == "0" && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1)
      }
      if (this.submitScheme?.S_ACNOTYPE == 'TD' && this.submitScheme?.WITHDRAWAL_APPLICABLE == '0')
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
      if (this.submitScheme?.S_ACNOTYPE == 'PG' && this.submitScheme?.WITHDRAWAL_APPLICABLE == '0')
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
      if (this.submitScheme?.S_ACNOTYPE == 'LN' && this.submitScheme?.IS_DEPO_LOAN == '1' && Number(this.DayOpBal) > 0)
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
    }
  }
  sanctionamt
  depositamt
  maturityamt
  overdraftAmt
  pigmyamount
  DayOpBalance
  passextension
  unpassextension
  submitCustomer: any;
  Submitscheme
  branchCODE

  SideDetails() {
    //debugger
    this.AfterVoucher = 0
    this.extenstionaftervoucher = ''
    // this.angForm.controls['amt'].reset()
    // this.angForm.controls['total_amt'].reset()
    this.SideView = true
    if (this.submitCustomer.AC_ACNOTYPE == 'LN' || this.submitCustomer.AC_ACNOTYPE == 'CC' || this.submitCustomer.AC_ACNOTYPE == 'DS') {
      this.ShowLNCC = true
      this.ShownotLNCC = false
      this.sanctionamt = (this.submitCustomer.AC_SANCTION_AMOUNT != null ? this.submitCustomer.AC_SANCTION_AMOUNT : 0)
      this.sanctionamt = Number(this.sanctionamt).toFixed(2)
      this.sanctiondate = (this.submitCustomer.AC_SANCTION_DATE != null ? this.submitCustomer.AC_SANCTION_DATE : '---')
      this.expirydate = (this.submitCustomer.AC_EXPIRE_DATE != null ? this.submitCustomer.AC_EXPIRE_DATE : '---')
      this.asondate = (this.submitCustomer.AC_ASON_DATE != null ? this.submitCustomer.AC_ASON_DATE : '---')
      this.opendate = (this.submitCustomer.AC_OPDATE != null ? this.submitCustomer.AC_OPDATE : '---')
      this.renewaldate = (this.submitCustomer.AC_OPEN_OLD_DATE != null ? this.submitCustomer.AC_OPEN_OLD_DATE : '---')
    } else if (this.submitCustomer.AC_ACNOTYPE == 'TD' || this.submitCustomer.AC_ACNOTYPE == 'PG' || this.submitCustomer.AC_ACNOTYPE == 'IV') {
      this.ShowLNCC = false
      this.ShownotLNCC = true
      this.expirydate = (this.submitCustomer.AC_EXPDT != null ? this.submitCustomer.AC_EXPDT : '---')
      this.maturityamt = (this.submitCustomer.AC_MATUAMT != null ? this.submitCustomer.AC_MATUAMT : 0)
      this.maturityamt = Number(this.maturityamt).toFixed(2)
      this.depositamt = (this.submitCustomer.AC_SCHMAMT != null ? this.submitCustomer.AC_SCHMAMT : 0)
      this.depositamt = Number(this.depositamt).toFixed(2)
      this.asondate = (this.submitCustomer.AC_ASON_DATE != null ? this.submitCustomer.AC_ASON_DATE : '---')
      this.opendate = (this.submitCustomer.AC_OPDATE != null ? this.submitCustomer.AC_OPDATE : '---')
    } else {
      this.ShowLNCC = false
      this.ShownotLNCC = false
    }
    if (this.submitCustomer.AC_ACNOTYPE == 'PG') {
      let obj = {
        scheme: this.Submitscheme.S_APPL,
        acno: this.Submitscheme.S_APPL == '980' ? this.submitCustomer.AC_NO : this.submitCustomer.BANKACNO,
        date: addInFrom,
        branch: this.branchCODE

      }
      this._service.getpigmychartBalance(obj).subscribe(data2 => {
        console.log(data2, 'pigmy');
        this.pigmyamount = data2
      })
    }

    this.submitCustomer.AC_ODAMT == undefined ? this.submitCustomer.AC_ODAMT = 0 : this.submitCustomer.AC_ODAMT = this.submitCustomer.AC_ODAMT
    this.submitCustomer.AC_SODAMT == undefined ? this.submitCustomer.AC_SODAMT = 0 : this.submitCustomer.AC_SODAMT = this.submitCustomer.AC_SODAMT
    this.overdraftAmt = Number(this.submitCustomer.AC_ODAMT) + Number(this.submitCustomer.AC_SODAMT)
    this.overdraftAmt = Number(this.overdraftAmt).toFixed(2)

    var startdate = this.angForm.controls['date'].value

    let formDT = moment(startdate, 'DD/MM/YYYY')
    var addInFrom: any;
    // if (this.Submitscheme.S_ACNOTYPE == 'PG') {
    //   addInFrom = startdate;
    // } else {
    addInFrom = moment(formDT, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY')
    // }
    let obj = {
      scheme: this.Submitscheme.S_APPL,
      acno: this.Submitscheme.S_APPL == '980' ? this.submitCustomer.AC_NO : this.submitCustomer.BANKACNO,
      date: addInFrom,
      branch: this.branchCode

    }

    this._service.getledgerbalance(obj).subscribe(data => {

      //debugger
      this.DayOpBal = Math.abs(data);
      this.DayOpBalance = Number(this.DayOpBal).toFixed(2)
      if (data < 0) {
        this.extensionopenbal = 'Cr'
      } else {
        this.extensionopenbal = 'Dr'
      }
      //debugger
      this.tempDayOpBal = data;
      if (this.submitCustomer.AC_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && Number(this.DayOpBal) > 0 && this.Submitscheme.S_INSTTYPE == '0') {
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1)
      }
      if (this.Submitscheme?.S_ACNOTYPE == 'TD' && this.Submitscheme?.WITHDRAWAL_APPLICABLE == '0')
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
      if (this.Submitscheme?.S_ACNOTYPE == 'PG' && this.Submitscheme?.WITHDRAWAL_APPLICABLE == '0')
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
      if (this.Submitscheme?.S_ACNOTYPE == 'LN' && this.Submitscheme?.IS_DEPO_LOAN == '1' && Number(this.DayOpBal) > 0)
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9)
      this._service.getPassedUnpassedBalance(obj).subscribe(data1 => {
        this.Pass = Math.abs(data1.passedamt).toFixed(2)
        this.Unpass = Math.abs(data1.unpassamt).toFixed(2)
        this.passextension = (data1.passextension != undefined ? data1.passextension : '')
        this.unpassextension = (data1.unpassextension != undefined ? data1.unpassextension : '')
        // this.ledgerBalance = this.DayOpBal + this.Pass
        var open = (this.tempDayOpBal <= 0 ? Math.abs(this.tempDayOpBal) : (-this.tempDayOpBal))
        var pass = (data1.passedamt <= 0 ? Math.abs(data1.passedamt) : (-data1.passedamt))
        var unpass = (data1.unpassamt <= 0 ? Math.abs(data1.unpassamt) : (-data1.unpassamt))

        // let value = open + pass + data2;
        // let value = open + pass + this.pigmyamount;
        let value = open + pass;
        if (value < 0) {
          this.ledgerBalance = Math.abs(value).toFixed(2)
          this.typeclearbal = 'Dr'
        } else {
          this.ledgerBalance = Math.abs(value).toFixed(2)
          this.typeclearbal = 'Cr'
        }
      })
    })

  }

  typeclearbal
  submitTranMode: any;
  submitForm = false



  checkamtcondition($event) {

    let obj = {
      value: Number($event),
      clearBalance: Number(this.ledgerBalance),
      accountNo: this.submitAccountNo.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
      tran: this.submitTranMode.tran_drcr,
      tranMode: this.submitTranMode.id,
      // odAmount: this.overdraftAmt,
      currentDate: this.date,
      totalAmt: this.angForm.controls['LEDGER_BAL'].value,
      // type: this.typeclearbal
    }

    this._service.checkZeroBalance(obj).subscribe(data => {
      this.modalClass = 'modalShow';
      if (data != 0) {
        this.SideDetails()
        this.angForm.controls['amt'].reset();
        this.angForm.controls['total_amt'].reset(0);
        this.amount.nativeElement.focus();
        this.submitForm = true
        this.modalClass = 'modalHide';
        Swal.fire('Oops!', data.message, 'error');
      } else {
        this._service.clearWithdrawBal(obj).subscribe(data => {
          if (data != 0) {
            this.SideDetails()
            this.angForm.controls['amt'].reset();
            this.angForm.controls['total_amt'].reset(0);
            this.amount.nativeElement.focus();
            this.submitForm = true
            this.modalClass = 'modalHide';
            Swal.fire('Oops!', data.message, 'error');
          } else {
            this._service.CheckPanNoInIDMaster(obj).subscribe(data => {
              if (data != 0) {
                // this.submitForm = true
                this.modalClass = 'modalHide';
                Swal.fire({
                  title: data.message,
                  html: `<span style="text-justify: inter-word;">If you want to countinue please click Yes button but This transaction make on your own risk</span>`,
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  cancelButtonText: 'No',
                  confirmButtonText: 'Yes'
                }).then((result) => {
                  if (result.isConfirmed) {

                  } else {
                    this.angForm.controls['amt'].reset();
                    this.angForm.controls['total_amt'].reset(0);
                    this.SideDetails()
                  }
                })

              } else {
                this._service.ClearVoucherSameBal(obj).subscribe(data => {
                  if (data != 0) {
                    this.SideDetails()
                    this.angForm.controls['amt'].reset();
                    this.angForm.controls['total_amt'].reset(0);
                    this.amount.nativeElement.focus();
                    this.submitForm = true
                    this.modalClass = 'modalHide';
                    Swal.fire('Oops!', data.message, 'error');
                  } else {
                    this._service.BalancePresentOrOverdraft(obj).subscribe(data => {
                      if (data != 0) {
                        this.SideDetails()
                        this.angForm.controls['amt'].reset();
                        this.angForm.controls['total_amt'].reset(0);
                        this.amount.nativeElement.focus();
                        this.submitForm = true
                        this.modalClass = 'modalHide';
                        Swal.fire('Oops!', data.message, 'error');
                      } else {
                        this._service.ledgerBalanceDebitAmt(obj).subscribe(data => {
                          if (data != 0) {
                            this.SideDetails()
                            this.angForm.controls['amt'].reset();
                            this.angForm.controls['total_amt'].reset(0);
                            this.amount.nativeElement.focus();
                            this.submitForm = true
                            this.modalClass = 'modalHide';
                            Swal.fire('Oops!', data.message, 'error');
                          } else {
                            this._vservice.InstructionFreezeAc(obj).subscribe(data => {
                              if (data != 0) {
                                this.SideDetails()
                                this.angForm.controls['amt'].reset();
                                this.angForm.controls['total_amt'].reset(0);
                                this.amount.nativeElement.focus();
                                this.submitForm = true
                                this.modalClass = 'modalHide';
                                Swal.fire('Oops!', data.message, 'error');
                              } else {
                                this._vservice.MinBalanceChecking(obj).subscribe(data => {
                                  if (data != 0) {
                                    this.SideDetails()
                                    this.angForm.controls['amt'].reset();
                                    this.angForm.controls['total_amt'].reset(0);
                                    this.amount.nativeElement.focus();
                                    this.submitForm = true
                                    this.modalClass = 'modalHide';
                                    Swal.fire('Oops!', data.message, 'error');
                                  } else {
                                    this._vservice.CheckClearBalAndAmt(obj).subscribe(data => {
                                      if (data != 0) {
                                        this.SideDetails()
                                        this.angForm.controls['amt'].reset();
                                        this.angForm.controls['total_amt'].reset(0);
                                        this.amount.nativeElement.focus();
                                        this.submitForm = true
                                        this.modalClass = 'modalHide';
                                        Swal.fire('Oops!', data.message, 'error');
                                      } else {
                                        this._vservice.WithdrawAmtClosingEqualClearBal(obj).subscribe(data => {
                                          if (data != 0) {
                                            this.SideDetails()
                                            this.angForm.controls['amt'].reset();
                                            this.angForm.controls['total_amt'].reset(0);
                                            this.amount.nativeElement.focus();
                                            this.submitForm = true
                                            this.modalClass = 'modalHide';
                                            Swal.fire('Oops!', data.message, 'error');
                                          } else {
                                            this._vservice.DepositeAmountAndIntallments(obj).subscribe(data => {
                                              if (data != 0) {
                                                this.SideDetails()
                                                this.angForm.controls['amt'].reset();
                                                this.angForm.controls['total_amt'].reset(0);
                                                this.amount.nativeElement.focus();
                                                this.submitForm = true
                                                this.modalClass = 'modalHide';
                                                Swal.fire('Oops!', data.message, 'error');
                                              } else {
                                                this._vservice.DepositAndTotalInstallments(obj).subscribe(data => {
                                                  if (data != 0) {
                                                    this.SideDetails()
                                                    this.angForm.controls['amt'].reset();
                                                    this.angForm.controls['total_amt'].reset(0);
                                                    this.amount.nativeElement.focus();
                                                    this.submitForm = true
                                                    this.modalClass = 'modalHide';
                                                    Swal.fire('Oops!', data.message, 'error');
                                                  } else {
                                                    this._vservice.DepositAndDepositAmount(obj).subscribe(data => {
                                                      if (data != 0) {
                                                        this.SideDetails()
                                                        this.angForm.controls['amt'].reset();
                                                        this.angForm.controls['total_amt'].reset(0);
                                                        this.amount.nativeElement.focus();
                                                        this.submitForm = true
                                                        this.modalClass = 'modalHide';
                                                        Swal.fire('Oops!', data.message, 'error');
                                                      } else {
                                                        this._vservice.PremcloseTdateTamtCom(obj).subscribe(data => {
                                                          if (data != 0) {
                                                            this.SideDetails()
                                                            this.angForm.controls['amt'].reset();
                                                            this.angForm.controls['total_amt'].reset(0);
                                                            this.amount.nativeElement.focus();
                                                            this.submitForm = true
                                                            this.modalClass = 'modalHide';
                                                            Swal.fire('Oops!', data.message, 'error');
                                                          } else {
                                                            this._vservice.PrecloseTrDateTrAmtComCol(obj).subscribe(data => {
                                                              if (data != 0) {
                                                                this.SideDetails()
                                                                this.angForm.controls['amt'].reset();
                                                                this.angForm.controls['total_amt'].reset(0);
                                                                this.amount.nativeElement.focus();
                                                                this.submitForm = true
                                                                this.modalClass = 'modalHide';
                                                                Swal.fire('Oops!', data.message, 'error');
                                                              } else {
                                                                this._vservice.ComVouamtClearbalAndStrs(obj).subscribe(data => {
                                                                  if (data != 0) {
                                                                    this.SideDetails()
                                                                    this.angForm.controls['amt'].reset();
                                                                    this.angForm.controls['total_amt'].reset(0);
                                                                    this.amount.nativeElement.focus();
                                                                    this.submitForm = true
                                                                    this.modalClass = 'modalHide';
                                                                    Swal.fire('Oops!', data.message, 'error');
                                                                  } else {
                                                                    this._vservice.DepositGreaterShareLimitAmt(obj).subscribe(data => {
                                                                      if (data != 0) {
                                                                        this.SideDetails()
                                                                        this.angForm.controls['amt'].reset();
                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                        this.amount.nativeElement.focus();
                                                                        this.submitForm = true
                                                                        this.modalClass = 'modalHide';
                                                                        Swal.fire('Oops!', data.message, 'error');
                                                                      } else {
                                                                        this._vservice.ZeroBalance(obj).subscribe(data => {
                                                                          if (data != 0) {
                                                                            this.SideDetails()
                                                                            this.angForm.controls['amt'].reset();
                                                                            this.angForm.controls['total_amt'].reset(0);
                                                                            this.amount.nativeElement.focus();
                                                                            this.submitForm = true
                                                                            this.modalClass = 'modalHide';
                                                                            Swal.fire('Oops!', data.message, 'error');
                                                                          } else {
                                                                            this._vservice.CashWithdraw(obj).subscribe(data => {
                                                                              if (data != 0) {
                                                                                this.SideDetails()
                                                                                this.angForm.controls['amt'].reset();
                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                this.amount.nativeElement.focus();
                                                                                this.submitForm = true
                                                                                this.modalClass = 'modalHide';
                                                                                Swal.fire('Oops!', data.message, 'error');
                                                                                // } else {
                                                                                //   this._vservice.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                //     if (data != 0) {
                                                                                //       this.SideDetails()
                                                                                //       this.angForm.controls['amt'].reset();
                                                                                //       this.angForm.controls['total_amt'].reset(0);
                                                                                //       this.amount.nativeElement.focus();
                                                                                //       this.submitForm = true
                                                                                //       this.modalClass = 'modalHide';
                                                                                //       Swal.fire('Oops!', data.message, 'error');
                                                                              } else {
                                                                                this._vservice.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                  // debugger
                                                                                  if (data != 0) {
                                                                                    this.SideDetails()
                                                                                    this.angForm.controls['amt'].reset();
                                                                                    this.angForm.controls['total_amt'].reset(0);
                                                                                    this.amount.nativeElement.focus();
                                                                                    this.submitForm = true
                                                                                    this.modalClass = 'modalHide';
                                                                                    Swal.fire('Oops!', data.message, 'error');
                                                                                  } else {
                                                                                    this._vservice.withdrawClosingCondition(obj).subscribe(data => {
                                                                                      if (data != 0) {
                                                                                        this.SideDetails()
                                                                                        this.angForm.controls['amt'].reset();
                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                        this.selectMode.focus()
                                                                                        this.submitForm = true
                                                                                        this.modalClass = 'modalHide';
                                                                                        Swal.fire('Oops!', data.message, 'error');
                                                                                      }
                                                                                      else {
                                                                                        this.submitForm = false
                                                                                        this.amount.nativeElement.blur()
                                                                                      }
                                                                                    })
                                                                                  }
                                                                                }, err => {
                                                                                  console.log(err);
                                                                                })
                                                                              }
                                                                              //   }, err => {
                                                                              //     console.log(err);
                                                                              //   })
                                                                              // }
                                                                            }, err => {
                                                                              console.log(err);
                                                                            })
                                                                          }
                                                                        }, err => {
                                                                          console.log(err);
                                                                        })
                                                                      }
                                                                    }, err => {
                                                                      console.log(err);
                                                                    })

                                                                  }
                                                                }, err => {
                                                                  console.log(err);
                                                                })
                                                              }
                                                            }, err => {
                                                              console.log(err);
                                                            })
                                                          }
                                                        }, err => {
                                                          console.log(err);
                                                        })
                                                      }
                                                    }, err => {
                                                      console.log(err);
                                                    })

                                                  }
                                                }, err => {
                                                  console.log(err);
                                                })
                                              }
                                            }, err => {
                                              console.log(err);
                                            })
                                          }
                                        }, err => {
                                          console.log(err);
                                        })
                                      }
                                    }, err => {
                                      console.log(err);
                                    })
                                  }
                                }, err => {
                                  console.log(err);
                                })
                              }
                            }, err => {
                              console.log(err);
                            })
                          }
                        }, err => {
                          console.log(err);
                        })
                      }
                    }, err => {
                      console.log(err);
                    })
                  }
                }, err => {
                  console.log(err);
                })
              }
            }, err => {
              console.log(err);
            })
          }
        }, err => {
          console.log(err);
        })
      }
    }, err => {
      console.log(err);
    })
  }

  headFlag: boolean = false;


  checkIfZero(value) {
    if (Number(value) == 0 || value == 'NaN') {
      this.submitForm = true
      this.angForm.controls.amt.setValue('0.00');
      this.amount.nativeElement.focus()
    }
    else {
      this.submitForm = false
      this.totalAmt = parseFloat(value).toFixed(2);
    }
  }
  getAmt(ele) {
    let count = 0
    if (this.headData.length != 0) {
      this.headData.forEach(element => {
        count = Number(element.Amount) + Number(count)
      });
      let num = Number(ele) + Number(count)
      // this.totalAmt = num + '.00'
      this.totalAmt = parseFloat(num.toString()).toFixed(2);

    } else {
      // this.totalAmt = ele.target.value + '.00'
      this.totalAmt = parseFloat(ele).toFixed(2);
    }
    this.totalAmt = parseFloat(this.totalAmt).toFixed(2);
  }

  balancedata
  deamount
  paidamt
  user: any = []
  tran_mode

  // decimalAllContent($event) {

  //   if (this.submitTranMode == undefined) {
  //     Swal.fire('Oops', 'Please First Select Tran Mode then enter Amount', 'error');
  //     let value = Number($event);
  //     this.totalAmt = 0;
  //     $event = 0
  //     let amt = Number(this.AfterVoucher) - value;
  //     if (amt < 0) {
  //       amt = 0;
  //     }
  //     this.AfterVoucher = Math.abs(Number(parseFloat((amt).toString()).toFixed(2)))
  //   } else {
  //     let value = Number($event);
  //     let data = value.toFixed(2);
  //     $event = data;
  //   }
  // }
  decimalAllContent($event) {
    if (this.submitTranMode == undefined) {
      Swal.fire('Oops', 'Please First Select Tran Mode then enter Amount', 'error');
      let value = Number($event);
      this.totalAmt = 0;
      $event = 0;
      let amt = Number(this.AfterVoucher) - value;
      if (amt < 0) {
        amt = 0;
      }
      this.AfterVoucher = Math.abs(Number(parseFloat((amt).toString()).toFixed(2)));
    } else {
      let value = Number($event);
      let data = value.toFixed(2);
      $event = data;
    }
  }
  checkCondition($event) {
    let obj = {
      value: Number($event),
      clearBalance: Number(this.ledgerBalance),
      accountNo: this.submitAccountNo.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
      tran: this.submitTranMode.tran_drcr,
      tranMode: this.submitTranMode.id,
      currentDate: this.date,
      totalAmt: this.angForm.controls['LEDGER_BAL'].value,
    }

    if (Number(obj.value) >= 50000 && this.submitTranMode.tran_type == 'CS') {
      Swal.fire({
        title: 'Are you sure?',
        html: '<span style="text-justify: inter-word;">If you want to countinue please click Yes button but This transaction make on your own risk</span>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed == false) {
          this.angForm.controls['amt'].reset();
          this.angForm.controls['total_amt'].reset(0);
          this.SideDetails();
          this.submitForm = true;
        } else {
          this.amount.nativeElement.blur();
          this.checkamtcondition($event);
          this.checkSanctionAmountWithAmount();
        }
      });
    }
    if (Number(obj.value) >= 200000) {
      Swal.fire({
        title: 'Are you sure?',
        html: '<span style="text-justify: inter-word;">The government has banned cash transactions of Rs 2 lakh or more from April 1, 2017, through the Finance Act 2017. The newly inserted section 269ST in the Income Tax Act bans such cash dealings on a single day, in respect of a single transaction or transactions relating to one event or occasion from an individual. Contravention  of Section 269ST would entail levy of 100 percent penalty on receiver of the amount the tax department said in a public advertisement in leading dailies. This transaction make on your own risk</span>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.checkamtcondition($event);
          this.checkSanctionAmountWithAmount();
          this.amount.nativeElement.blur();
        } else {
          this.angForm.controls['amt'].reset();
          this.angForm.controls['total_amt'].reset(0);
          this.submitForm = true;
          this.SideDetails();
        }
      });
    } else {
      this.checkamtcondition($event);
    }
  }
  checkSanctionAmountWithAmount() {
    let sancAmt = (Number(this.sanctionamt) - Number(this.ledgerBalance)) + Number(this.overdraftAmt);
    if (sancAmt < Number(this.angForm.controls['amt'].value) && this.submitTranMode.id == 4 && this.submitTranMode.tran_drcr == 'D' && (this.submitScheme?.S_ACNOTYPE == 'CC' || this.submitScheme?.S_ACNOTYPE == 'LN') && this.submitScheme.IS_GOLD_LOAN != '1') {
      this.SideDetails();
      this.angForm.controls['amt'].reset();
      this.angForm.patchValue({
        total_amt: this.angForm.controls['LEDGER_BAL'].value,
      });
      this.amount.nativeElement.focus();
      Swal.fire('Oops!', `Access Denied, Amount Can't Be Withdraw More Than Rs. ${sancAmt}`, 'error');
      this.submitForm = true;
    }
  }

  changeMode(item) {
    this.submitForm = true;
    this.headData = [];
    this.submitTranMode = item;

    if (this.submitTranMode.tran_type == 'TR') {
      this.showChequeDetails = true;
    } else {
      this.showChequeDetails = false;
    }

    // Get Head details
    let obj = { 'code': this.selectedCode };
    let headType = [
      { FieldAmount: 'INTEREST_AMOUNT' },
      { FieldAmount: 'PENAL_INT_AMOUNT' },
      { FieldAmount: 'REC_PENAL_INT_AMOUNT' },
      { FieldAmount: 'RECPAY_INT_AMOUNT' },
      { FieldAmount: 'RECPAY_INT_AMOUNT' },
      { FieldAmount: 'OTHER2_AMOUNT' },
      { FieldAmount: 'OTHER3_AMOUNT' },
      { FieldAmount: 'OTHER4_AMOUNT' },
      { FieldAmount: 'OTHER5_AMOUNT' },
      { FieldAmount: 'OTHER6_AMOUNT' },
      { FieldAmount: 'OTHER7_AMOUNT' },
      { FieldAmount: 'OTHER8_AMOUNT' },
      { FieldAmount: 'OTHER9_AMOUNT' },
      { FieldAmount: 'OTHER11_AMOUNT' },
      { FieldAmount: 'OTHER10_AMOUNT' }
    ];

    let date = this.date;
    var rowData = date.split('/');
    let lastdate = Number(rowData[0]) - 1;
    this.IntersetHeadDate = lastdate + '/' + rowData[1] + '/' + rowData[2];

    this._vservice.getHeadDetails(obj).subscribe(data => {
      this.sendFunction(this.ChequeDate);
      this.updateheadbalance(this.ChequeDate);
      this.calculateVoucher();

      if (data.length != 0) {
        if (!this.headFlag) {
          this.headShow = true;
          for (let item of data) {
            if (this.submitTranMode.tran_drcr == item.DRCR_APPLICABLE || item.DRCR_APPLICABLE == 'B') {
              item['Amount'] = 0;
              if (this.submitScheme.S_ACNOTYPE == 'TD') {
                if (this.submitScheme.IS_RECURRING_TYPE == '1' && this.submitScheme.INTEREST_RULE == '0' && item.HEAD_TYPE == 'PNI') {
                  this.headData.push(item);
                } else {
                  if (item.HEAD_TYPE != 'PNI') {
                    this.headData.push(item);
                  }
                }
              } else {
                this.headData.push(item);
              }
            }
          }
        }
      } else {
        this.headShow = false;
      }
    }, err => {
      console.log(err);
    });

    if (this.submitScheme.S_ACNOTYPE == 'TD' || this.submitScheme.S_ACNOTYPE == 'SB' || this.submitScheme.S_ACNOTYPE == 'PG' || this.submitScheme.S_ACNOTYPE == 'AG' || this.submitScheme.S_ACNOTYPE == 'CA') {
      this.interestMaxDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'days').toDate();
      this.interestMinDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'months').toDate();
    } else if (this.submitScheme.S_ACNOTYPE == 'LN' || this.submitScheme.S_ACNOTYPE == 'CC' || this.submitScheme.S_ACNOTYPE == 'DS') {
      this.interestMinDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'days').toDate();
      this.interestMaxDate = moment(this.date, "DD/MM/YYYY").add(1, 'months').toDate();
    }

    if (item.id == 6) {
      this.angForm.controls.amount.setValue('0.00');
      this.angForm.controls.total_amt.setValue('0.00');
      this.totalAmt = 0.00;
      this.angForm.controls['amt'].disable();
    } else if (item.id == 2 || item.id == 5 || item.id == 15) {
      this.angForm.patchValue({
        amount: Number(this.ledgerBalance).toFixed(2),
        total_amt: Number(this.ledgerBalance).toFixed(2)

      });
      this.angForm.controls['amount'].disable();
      this.decimalAllContent(this.ledgerBalance);
      this.checkCondition(this.ledgerBalance);
      this.checkSanctionAmountWithAmount();
      this.checkamtcondition(this.ledgerBalance);
      this.getAmt(this.ledgerBalance);
    } else {
      this.angForm.controls.amt.setValue('0.00');
      this.angForm.controls['amt'].enable();
    }

    // Update total amount based on transaction mode
    // this.updateTotalAmount();
  }

  // updateTotalAmount() {
  //   let amount = Number(this.angForm.controls.amount.value);
  //   this.angForm.patchValue({
  //     total_amt: amount
  //   });
  //   this.totalAmt = amount;
  // }


  sendFunction(mlsdate) {
    let formValues = this.angForm.value;
    let userData = JSON.parse(localStorage.getItem("user"));
    this.date = userData.branch.syspara.CURRENT_DATE;
    let obj = {
      'accountNo': this.acno,
      'schemeType': this.submitScheme.S_ACNOTYPE,
      'scheme': this.submitScheme.S_NAME,
      'currentDate': moment(formValues.ChequeDate, 'DD/MM/YYYY').format('DD/MM/YYYY'),
    };

    this.http.post<any>('http://192.168.1.174:7265/voucher/getInputHeadBal', obj).subscribe((data1: any) => {
      this.balancedata = data1;
      // console.log(data1);

      for (let element of this.headData) {
        let newobj = {
          acno: element?.GL_CODE,
          scheme: '101',
          date: this.ChequeDate,
          schemeType: this.selectedCode,
        }

        if (element.FIELD_AMOUNT == 'INTEREST_AMOUNT') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.round(Math.abs(data1.intpenal.InterestAmount))
            element['Balance'] = Math.round(Math.abs(data1.intpenal.InterestAmount))
          } else {
            element['Amount'] = 0
            element['Balance'] = Math.round(Math.abs(data1.intpenal.InterestAmount))
          }
          element['mlsdate'] = this.IntersetHeadDate;
          element['tempBalance'] = data1.intpenal.InterestAmount
          element['type'] = (data1.intpenal.InterestAmount <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'PENAL_INT_AMOUNT') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.round(Math.abs(data1.intpenal.PenalInterest))
            element['Balance'] = Math.round(Math.abs(data1.intpenal.PenalInterest))
          }
          else {
            element['Amount'] = 0
            element['Balance'] = Math.round(Math.abs(data1.intpenal.PenalInterest))
          }
          element['tempBalance'] = data1.intpenal.PenalInterest
          element['type'] = (data1.intpenal.PenalInterest <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'REC_PENAL_INT_AMOUNT') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.round(Math.abs(data1.recpaypen))
            element['Balance'] = Math.round(Math.abs(data1.recpaypen))
          }
          else {
            element['Amount'] = 0
            element['Balance'] = Math.round(Math.abs(data1.recpaypen))
          }
          element['tempBalance'] = data1.recpaypen
          element['type'] = (data1.recpaypen <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'RECPAY_INT_AMOUNT' && element.HEAD_TYPE == 'PYI') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.round(Math.abs(data1.recpaybal))
            element['Balance'] = Math.round(Math.abs(data1.recpaybal))
          }
          else {
            element['Amount'] = 0
            element['Balance'] = Math.round(Math.abs(data1.recpaybal))
          }
          element['tempBalance'] = data1.recpaybal
          element['type'] = (data1.recpaybal <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'RECPAY_INT_AMOUNT' && element.HEAD_TYPE == 'REC') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.round(Math.abs(data1.recpaybal))
            element['Balance'] = Math.round(Math.abs(data1.recpaybal))
          }
          else {
            element['Amount'] = 0
            element['Balance'] = Math.round(Math.abs(data1.recpaybal))
          }
          element['tempBalance'] = data1.recpaybal
          element['type'] = (data1.recpaybal <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'OTHER2_AMOUNT') {
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER3_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER4_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER5_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER6_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER7_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER8_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER9_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER11_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER10_AMOUNT') {
          element['Amount'] = 0
          element['Balance'] = Math.round(Math.abs(data1.overduebal))
          element['tempBalance'] = data1.overduebal
          element['type'] = (data1.overduebal <= 0 ? 'Cr' : 'Dr')
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.round(Number(element['Balance']))
          }
          else {
            element['Amount'] = 0
          }
        } else {
          element['Amount'] = 0
          element['Balance'] = 0
          element['tempBalance'] = 0
          element['type'] = 'Cr'
        }
      }
      this.totalCredit = this.user.reduce((total, row) => total + (+row.amount), 0).toFixed(2);
      this.totalDebit = 0
      this.deamount = this.totalCredit - this.totalDebit;
      this.paidamt = this.SanAmount - this.deamount
      if (this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15) {
        let count = 0
        this.headData.forEach(element => {
          count = Number(element.Amount) + Number(count)
        });
        this.totalAmt = count + Number(this.ledgerBalance)
        this.totalAmt = Number(this.totalAmt).toFixed(2)
      }
      else {
        this.totalAmt = 0
      }
      // );
    })
  }
  SanAmount
  totalCredit: any;
  totalDebit: any
  calculateVoucher() {
    this.totalCredit = '0';
    this.totalDebit = '0';
    for (let item of this.mainMaster) {
      if (item.tran_mode.tran_drcr == 'C') {
        this.totalCredit = Number(Number(this.totalCredit) + Number(item.total_amt)).toFixed(2)
        this.totalCredit = Number(this.totalCredit).toFixed(2)
      } else {
        this.totalDebit = Number(Number(this.totalDebit) + Number(item.total_amt)).toFixed(2);
        this.totalDebit = Number(this.totalDebit).toFixed(2)
      }
    }
  }
  updateheadbalance(ChequeDate) {

    let formValues = this.angForm.value;
    let newobj = {
      'accountNo': this.acno,
      'schemeType': this.submitScheme.S_ACNOTYPE,
      'scheme': this.submitScheme.S_NAME,
      'currentDate': moment(formValues.ChequeDate, 'DD/MM/YYYY').format('DD/MM/YYYY'),
    };

    let balancedata
    this._vservice.getInputHeadBal(newobj).subscribe(data1 => {
      this.headData.forEach((element, index) => {
        element.Amount = data1.someProperty;
        element.Balance = data1.someOtherProperty;
      });
      for (let element of this.headData) {
        let newobj = {
          acno: element?.GL_CODE,
          scheme: '101',
          date: this.ChequeDate,
          schemeType: this.selectedCode,
        }

        if (element.FIELD_AMOUNT == 'INTEREST_AMOUNT') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.round(Math.abs(data1.intpenal.InterestAmount))
            element['Balance'] = Math.round(Math.abs(data1.intpenal.InterestAmount))
          } else {
            element['Amount'] = 0
            element['Balance'] = Math.round(Math.abs(data1.intpenal.InterestAmount))
          }
          element['ChequeDate'] = this.IntersetHeadDate;
          element['tempBalance'] = data1.intpenal.InterestAmount
          element['type'] = (data1.intpenal.InterestAmount <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'PENAL_INT_AMOUNT') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.round(Math.abs(data1.intpenal.PenalInterest))
            element['Balance'] = Math.round(Math.abs(data1.intpenal.PenalInterest))
          }
          else {
            element['Amount'] = 0
            element['Balance'] = Math.round(Math.abs(data1.intpenal.PenalInterest))
          }
          element['tempBalance'] = data1.intpenal.PenalInterest
          element['type'] = (data1.intpenal.PenalInterest <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'REC_PENAL_INT_AMOUNT') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.round(Math.abs(data1.recpaypen))
            element['Balance'] = Math.round(Math.abs(data1.recpaypen))
          }
          else {
            element['Amount'] = 0
            element['Balance'] = Math.round(Math.abs(data1.recpaypen))
          }
          element['tempBalance'] = data1.recpaypen
          element['type'] = (data1.recpaypen <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'RECPAY_INT_AMOUNT' && element.HEAD_TYPE == 'PYI') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.round(Math.abs(data1.recpaybal))
            element['Balance'] = Math.round(Math.abs(data1.recpaybal))
          }
          else {
            element['Amount'] = 0
            element['Balance'] = Math.round(Math.abs(data1.recpaybal))
          }
          element['tempBalance'] = data1.recpaybal
          element['type'] = (data1.recpaybal <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'RECPAY_INT_AMOUNT' && element.HEAD_TYPE == 'REC') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.round(Math.abs(data1.recpaybal))
            element['Balance'] = Math.round(Math.abs(data1.recpaybal))
          }
          else {
            element['Amount'] = 0
            element['Balance'] = Math.round(Math.abs(data1.recpaybal))
          }
          element['tempBalance'] = data1.recpaybal
          element['type'] = (data1.recpaybal <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'OTHER2_AMOUNT') {
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER3_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER4_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER5_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER6_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER7_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER8_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER9_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER11_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
              element['Balance'] = Math.round(Math.abs(data2))
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
              if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                element['Amount'] = Math.round(Number(element['Balance']))
              }
              else {
                element['Amount'] = 0
              }
            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER10_AMOUNT') {
          element['Amount'] = 0
          element['Balance'] = Math.round(Math.abs(data1.overduebal))
          element['tempBalance'] = data1.overduebal
          element['type'] = (data1.overduebal <= 0 ? 'Cr' : 'Dr')
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.round(Number(element['Balance']))
          }
          else {
            element['Amount'] = 0
          }
        } else {
          element['Amount'] = 0
          element['Balance'] = 0
          element['tempBalance'] = 0
          element['type'] = 'Cr'
        }
      }
      if (this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15) {
        let count = 0
        this.headData.forEach(element => {
          count = Number(element.Amount) + Number(count)
        });
        this.totalAmt = count + Number(this.ledgerBalance)
        this.totalAmt = Number(this.totalAmt).toFixed(2)
      }
      else {
        this.totalAmt = 0
      }
      // );
    })
  }

  updatecheckdata
  updateID
  TRAN_NO
  //function for edit button clicked
  editClickHandler(id): void {
    this._service.getFormData(id).subscribe((data) => {
      // console.log(data);
      this.angForm.disable()
      let mem = [data.TRAN_ACNO, data.TRAN_ACNOTYPE, data.TRAN_ACTYPE]
      this.http.get(this.url + '/saving-pigmy-account-closing/details/' + mem).subscribe((data1) => {
        if (data.TRAN_STATUS == '0') {
          this.showButton = false;
          this.updateShow = true;
          this.newbtnShow = true;
          this.approveShow = true;
          this.rejectShow = true
          this.unapproveShow = false
        } else if (data.TRAN_STATUS != '0') {
          this.showButton = false;
          this.updateShow = false;
          this.newbtnShow = true;
          this.approveShow = false;
          this.rejectShow = false
          this.unapproveShow = true
        } else {
          this.showButton = false;
          this.updateShow = false;
          this.newbtnShow = true;
          this.approveShow = false;
          this.rejectShow = false
          this.unapproveShow = false
        }
        this.updatecheckdata = data
        // if (Number(data1[0].ledgerBal) >= 0) {
        //   Swal.fire('Oops', 'Account cannot close', 'error')
        //   return
        // }
        this.preMature = data1[0].preMature
        this.OpenDate = data1[0].AC_OPDATE
        this.ledgerBalance = Math.abs(data.LEDGER_BAL)
        this.renewalDate = data1[0].AC_ASON_DATE
        this.INTRATE = data1[0].INT_RATE
        this.LastIntDate = data1[0].AC_LINTEDT
        this.maturityDate = data1[0].AC_EXPDT
        this.angForm.patchValue({
          AC_Months: data1[0].AC_MONTHS,
          AC_DAYS: data1[0].AC_DAYS,
          POSTED_INT: data1[0].post_Interest,
          LEDGER_BAL: Number(Math.abs(data1[0].ledgerBal)).toFixed(2),
          PAYABLE_INT: Number(Math.abs(data1[0].payableInterest)).toFixed(2),
          PENAL_INT: Number(data1[0].penalInterest).toFixed(2)
        })
        if (this.isInterestApplicable == '1') {
          this.angForm.patchValue({
            INTREST_RATE: data1[0].INT_RATE,
            TotalInterest: Number(this.customRound(data1[0].currentInterest)),
            CalCulateAmt: Number(this.customRound(data1[0].currentInterest))
          })
          this.intrateShow = data1[0].INT_RATE
        }
        else {
          this.angForm.patchValue({
            INTREST_RATE: '0',
            TotalInterest: 0,
            CalCulateAmt: 0
          })
          this.intrateShow = 0
        }

        if (data1[0].post_Interest < 0) {
          this.angForm.patchValue({
            NET_INT: Number(data1[0].post_Interest).toFixed(0),
            POSTED_INT: 0,
          })
          this.NET_EXC_INTAMT = Number(data1[0].post_Interest)
        }
        else if (data1[0].post_Interest > 0) {
          this.angForm.patchValue({
            POSTED_INT: Number(data1[0].post_Interest).toFixed(0),
            NET_INT: 0
          })
          this.NET_EXC_INTAMT = 0
        }
        else {
          this.angForm.patchValue({
            POSTED_INT: 0,
            NET_INT: 0
          })
          this.NET_EXC_INTAMT = 0
        }

        let netInt: number = 0
        var months
        netInt = Number(this.angForm.controls['TotalInterest'].value) - Number(data1[0].post_Interest)
        if (data1[0].AC_LINTEDT != "" && data1[0].AC_LINTEDT != null) {
          var date1 = data1[0].AC_LINTEDT;
          var date2 = this.angForm.controls['DATE'].value;
          var b = moment(date1, "DD/MM/YYYY");
          var a = moment(date2, "DD/MM/YYYY");
          months = a.diff(b, 'months');
        }
        else {
          var date1 = data1[0].AC_OPDATE;
          var date2 = this.angForm.controls['DATE'].value;
          var b = moment(date1, "DD/MM/YYYY");
          var a = moment(date2, "DD/MM/YYYY");
          months = a.diff(b, 'months');
        }
        this.angForm.patchValue({
          Months: months,
          NET_INT: Math.abs(this.customRound(netInt))
        })
        this.getNetInterest()
        this.showCustomerDeatils()

        if (data.SYSCHNG_LOGIN == null) {
          this.showButton = false;
          this.updateShow = true;
          this.newbtnShow = true;
        } else {
          this.showButton = false;
          this.updateShow = false;
          this.newbtnShow = true;
        }
        this.date = data.TRAN_DATE
        this.updateID = data.id;
        this.TRAN_NO = data.TRAN_NO
        this.multigrid = data.depoclosetran
        if (data.TRAN_TYPE == 'CS') {
          this.isFormA(1)
        }
        else {
          this.isFormA(2)
          this.transferTotalAmount = Number(data.NET_PAYABLE_AMOUNT)
        }
        data.TRAN_ACNOTYPE == 'SB' ? this.isHideForSaving = false : this.isHideForSaving = true
        this.getschemename = data.TRAN_ACNOTYPE
        this.ngscheme = Number(data.TRAN_ACTYPE)
        this.ngBranchCode = data.BRANCH_CODE
        data.IS_PREMATURE_CLOSE == '1' ? this.preMature = true : this.preMature = false
        this.bankacno = data.TRAN_ACNO
        this.getAccountlist()
        this.angForm.patchValue({
          TRAN_NO: data.TRAN_NO,
          BRANCH_CODE: data.BRANCH_CODE,
          SAVING_PIGMY: data.TRAN_TYPE == 'CS' ? 'FormC' : 'FormT',
          chequeNo: data.CHEQUE_NO,
          ChequeDate: data.CHEQUE_DATE,
          Fnarration: data.NARRATION,
          LEDGER_BAL: Number(data.LEDGER_BAL).toFixed(2),
          NET_INT: Number(data.NET_INTEREST_AMOUNT).toFixed(2),
          NETPAYABLE_AMT: Number(data.NET_PAYABLE_AMOUNT).toFixed(2),
          OTHER_CHARGES_AMOUNT: Number(data.OTHER_CHARGES_AMOUNT).toFixed(2),
          OTHER_CHARGES_GLACNO: data.OTHER_CHARGES_GLACNO,
          COMMISSION_CHARGES: Number(data.COMMISSION_CHARGES),
          POSTED_INT: Number(data.PAID_INTEREST_AMOUNT).toFixed(2),
          PAYABLE_INT: Number(data.PAYABLE_INTEREST_AMOUNT).toFixed(2),
          PENAL_INT: Number(data.PENAL_INTEREST_AMOUNT).toFixed(2),
          TotalInterest: Number(data.TOTAL_INTEREST_AMOUNT).toFixed(2),
          COMMISSION_GLACNO: data.COMMISSION_GLACNO,
          AC_NO: data.TRAN_ACNO,
          AC_TYPE: Number(data.TRAN_ACTYPE),
          DATE: data.TRAN_DATE,
          EXCESS_INT: data.EXCESS_INT != 0 ? this.NET_EXC_INTAMT = data.EXCESS_INT : this.NET_EXC_INTAMT = 0,
          scheme_type : data.depoclosetran[0].TRANSFER_ACNOTYPE,
          scheme : data.depoclosetran[0].TRANSFER_ACTYPE,
          customer : data.depoclosetran[0].TRANSFER_ACNO,
          NARRATION : data.depoclosetran[0].NARRATION,
          amount : data.depoclosetran[0].TRAN_AMOUNT,
          total_amt : data.depoclosetran[0].TRAN_AMOUNT,

        })
        this.accountedit = data.TRAN_ACNO
        this.customerId = data.customerId
        this.dormant = data.dormant
        this.ngCommission = data.COMMISSION_GLACNO
        this.ngGlAcno = data.OTHER_CHARGES_GLACNO
        this.showCustomerDeatils()
      }, (error) => {
        console.log(error, 'err')
        Swal.fire('Oops!', error?.error?.message, 'error');
      })
    })

  }


  //function for delete button clicked
  delClickHandler(info: any): void {
    // this.message.BranchCode = info.title;
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "Do you want to delete title." + this.message.BranchCode + "  data",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#229954',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your data has been deleted.',
    //       'success'
    //     )
    //   } else if (
    //     result.dismiss === Swal.DismissReason.cancel
    //   ) {
    //     Swal.fire(
    //       'Cancelled',
    //       'Your data is safe.',
    //       'error'
    //     )
    //   }
    // })
  }

  //approve account
  Approve() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    const dataToSend = {
      id: this.updateID,
      TRAN_NO: this.TRAN_NO,
      USER: result.id
    }
    this._service.approve(dataToSend).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        'Approved',
        'Saving and Pigmy Account Closing approved successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  //reject account
  reject() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    const dataToSend = {
      id: this.updateID,
      TRAN_NO: this.TRAN_NO,
      USER: result.id
    }
    this._service.reject(dataToSend).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        'Rejected',
        'Saving and Pigmy Account Closing rejected successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }


  OpenLink(val) {
    // 
    if (val == 1) {
      this.CashTrue = true;
      this.TransferTrue = false;
    }
    if (val == 2) {
      this.CashTrue = false;
      this.TransferTrue = true;
    }
  }

  //get Narration Details 
  getNarration(ele) {
    this.narration = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  //get Narration Details 
  getFormNarration(ele) {
    this.ngFnarration = ele;
    let el: HTMLElement = this.narrationhide.nativeElement;
    el.click();
  }

  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  selectAllContent($event) {
    $event.target.select();
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  onOpen(select: NgSelectComponent) {
    //debugger
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }
  closeModal() {
    var button = document.getElementById('triggerhide');
    button.click();
    this.reloadTablePassing.emit();
  }
  unApprove() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      LOG_DATE: this.logDate
    }
    this._service.unapprove(obj).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        'Unapproved',
        'Account unapproved successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  customRound(number) {
    var wholeNumber = Math.floor(number);
    var decimalPart = number - wholeNumber;

    if (decimalPart >= 0.5) {
      wholeNumber++;
    } else {
      return wholeNumber;
    }

    return Math.round(number);
  }

  getBranch() {
    this.ngscheme = null
  }
}
