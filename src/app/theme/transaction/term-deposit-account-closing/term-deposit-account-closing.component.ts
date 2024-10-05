import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild, Output, ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';
import { TransactionCashModeService } from '../../../shared/elements/transaction-cash-mode.service';
import { TransactionTransferModeService } from '../../../shared/elements/transaction-transfer-mode.service';
import { SchemeTypeService } from '../../../shared/elements/scheme-type.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import { TermDepositAccountClosingService } from './term-deposit-account-closing.service'
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SchemeAccountNoService } from '../../../shared/dropdownService/schemeAccountNo.service';
import { HttpClient } from '@angular/common/http';
import { CustomerIdService } from '../../master/customer/customer-id/customer-id.service'
import { NgSelectComponent } from '@ng-select/ng-select'
// import { DepositClosingVoucherComponent} from '../../passing/centralised-passing/deposit-closing-voucher/deposit-closing-voucher.component'
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { VoucherEntryService } from '../voucher-entry/voucher-entry.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { TermDepositInterestRateService } from '../../master/policy-settings/definations/term-deposit-ir/term-deposit-ir.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-term-deposit-account-closing',
  templateUrl: './term-deposit-account-closing.component.html',
  styleUrls: ['./term-deposit-account-closing.component.scss']
})
export class TermDepositAccountClosingComponent implements OnInit {
  @Output() reloadTablePassing = new EventEmitter<string>();
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('triggerNarrationhide') triggerNarrationhide: ElementRef<HTMLElement>;
  // @ViewChild(DepositClosingVoucherComponent) child: DepositClosingVoucherComponent;
  @ViewChild('narrationField') narrationField: ElementRef;
  @ViewChild('INTAMT') INTAMT: ElementRef;
  @ViewChild('NOTINTAMT') NOTINTAMT: ElementRef;
  @ViewChild('submitbtn') submitbtn: ElementRef;
  @ViewChild('swiper') swiper: ElementRef;



  formSubmitted = false;
  //api
  url = environment.base_url;
  updateID: number = 0;

  // for radio button
  isTransfer: boolean = false
  branchCode: any = null
  narration
  selectedBranch: number;
  selectedScheme: any;
  bank: any;
  customer: any;
  selectedCode: string;
  selectedMode: any;
  branch_codeList: any = null
  master: any;
  branch_code: any[]//from ownbranchmaster
  allSchemeCode: any//from schme master
  allScheme = new Array()//from schme master
  obj: any
  submitForm = false
  introducerACNo
  type: any; //cash or transfer
  narrationList: any;
  syspara: any;
  // Created Form Group
  angForm: FormGroup;
  Pass: any = 0;
  Unpass: any = 0;
  ClearBalance: any = 0;
  AfterVoucher: any = 0;
  InputHeadAmt: number = 0.00;
  EditFlag: boolean = false;
  index: number;
  isture: boolean = true;
  amount
  TRANSFER_ACTYPE: any
  multiField: any = 0;

  //object created to get data when row is clicked

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

  bankName = [
    {
      name: 'Bank of India',
      id: 1
    },
    {
      name: 'State bank of India',
      id: 2
    }
  ]

  tranModeList: any;
  particulars: any;
  date: any;
  totalAmt: any = 0;
  showChequeDetails: boolean = false;
  DayOpBal: any = 0;
  headData: any;
  headShow: boolean = false;
  lastday: any;
  mainMaster = new Array();
  showAdd: boolean = true;
  showUpdate: boolean = false;
  customerImg = 'assets/images/nouser.png';
  signture = 'assets/images/nosignature.png';
  Scheme
  multigrid = []
  maxDate: Date;
  minDate: Date;
  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  logDate
  submitScheme: any;
  ChequeDate: any;
  interestMinDate: any
  interestMaxDate: any
  IntersetHeadDate: any;
  TschemeAC: any;
  selectMode: any;
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
  customer1: null;
  setLang:any;

  constructor(public TransactionCashModeService: TransactionCashModeService,
    public TransactionTransferModeService: TransactionTransferModeService,
    public SchemeTypeService: SchemeTypeService,
    private ownbranchMasterService: OwnbranchMasterService,
    private _service: MultiVoucherService,
    private savingMasterService: SavingMasterService,
    private schemeAccountNoService: SchemeAccountNoService,
    private fb: FormBuilder,
    private termDepositInterestRateService: TermDepositInterestRateService,
    private router: Router,
    private http: HttpClient,
    private _TDService: TermDepositAccountClosingService,
    private _CustomerIdService: CustomerIdService,
    private _vservice: VoucherEntryService,
    private cdr: ChangeDetectorRef,
    private _ACMasterDropdownService: ACMasterDropdownService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter: SystemMasterParametersService,private translate:TranslateService) {
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
    this.systemParameter.getFormData(1).subscribe(data => {
      let nextDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY').add(3, 'month').format('YYYY-MM-DD');
      let lastDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY').subtract(3, 'month').format('YYYY-MM-DD');
      this.maxDate = new Date(nextDate);
      this.maxDate.setDate(this.maxDate.getDate());
      this.minDate = new Date(lastDate);
      this.minDate.setDate(this.minDate.getDate());
      this.logDate = data.CURRENT_DATE
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }

  ngOnInit(): void {
    this.createForm();


    //Day opening Amount
    // this.DayOpBal = 1000;
    // get session branch data
    let user = JSON.parse(localStorage.getItem('user'));
    this.type = 'tranfer';
    this.tranModeList = this.TranModeCash;


    //get syspara details
    this._service.getSysParaData().subscribe(data => {
      this.date = data[0].CURRENT_DATE;
    })

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.selectedBranch = user.branchId;
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'TD')
      });
      this.allScheme = allscheme;


    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var schemeList = data.filter(function (schemeName) {
        return (schemeName.name == 'TD' || schemeName.name == 'SB' || schemeName.name == 'CA' || schemeName.name == 'LN' || schemeName.name == 'CC' || schemeName.name == 'DS' || schemeName.name == 'PG' || schemeName.name == 'GL')
      });
      this.Scheme = schemeList;
    })
    //Scheme Code
    this._service.getSchemeCodeList().subscribe(data => {
      var schemeList = data.filter(function (schemeName) {
        return (schemeName.S_ACNOTYPE != 'LK')
      });
      this.master = schemeList;
      //debugger
      this.allSchemeCode = [...new Map(schemeList.map(item => [item['S_ACNOTYPE'], item])).values()]
      this.allSchemeCode = this.allSchemeCode.sort(this.dynamicSort("S_ACNOTYPE"));
    })

    //Narration List
    this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
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

  createForm() {
    this.angForm = this.fb.group({
      branch_code: ['', [Validators.required]],
      temp_over_draft: [''],
      over_draft: [''],
      token: [''],
      slip_no: [''],
      account_no: ['', [Validators.required]],
      ac_no: ['', [Validators.required]],
      scheme: ['', [Validators.required]],
      scheme1: ['', [Validators.required]],
      scheme_type: ['', [Validators.required]],
      date: [''],
      type: new FormControl('cash'),
      POSTED_INT: [0],
      Intdate: [''],
      SAVING_PIGMY: ['FormC'],
      chequeNo: ['', [Validators.pattern]],
      ChequeDate: ['', [Validators.pattern]],
      // Token_Num: ['', [Validators.pattern]],
      particulars: [null],
      tran_mode: ['', [Validators.required]],
      ClosingQuaters: [0],
      QInterest: [0],
      ClosingMonth: [''],
      MInterest: [0],
      DInterest: [0],
      ClosingDays: [0],
      TDS_AMT: [0],
      SURCHARGE_AMT: [0],
      PENAL_INT: [0],
      EXCESS_INT: [0],
      InterestRate: [0],
      maturedIntAmt: [0],
      maturedInterest: [0],
      TOTAL_INT: [0],
      narration: ['', [Validators.required]],
      TschemeAC: [''],
      Tscheme: [''],
      MaturedDays: [''],
      NET_INTAMT: [0],
      NETPAYABLEAMT: [0],
      LEDGER_BAL: [0],
      PAYABLE_INTAMT: [0],
      TRAN_NO: [''],
      total_amt: [0],
      amount: [0],
      afterMaturityDays: [0],
    });
    this._service.getSysParaData().subscribe(data => {
      this.date = data[0].CURRENT_DATE;
      this.angForm.patchValue({
        date: this.date
      })
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    // if (result.RoleDefine[0].Role.id == 1) {
    //   this.angForm.controls['branch_code'].enable()
    //   this.selectedBranch = result.branch.id
    // }
    // else {
    this.angForm.controls['branch_code'].disable()
    this.angForm.patchValue({
      'branch_code': result.branch.id
    })
    this.selectedBranch = result.branch.id
    // }
  }

  getschemename
  isInterestApplicable
  afterMaturedInt: boolean = false
  monthDays
  Quarterly
  prematureRate = '0'
  interestUptoCalDate
  afterMatureIntRate
  FIXED_MATURITY_AMT
  schemeget
  dormant

  schemechange(event) {
    this.getschemename = event.name
    this.selectedScheme = event.value
    this.schemeget = event.id
    this.isInterestApplicable = event.intapp
    this.FIXED_MATURITY_AMT = event.FIXED_MATURITY_AMT
    this.monthDays = event.monthDays
    this.Quarterly = event.Quarterly
    this.prematureRate = event.prematureRate
    this.interestUptoCalDate = event.interestUptoCalDate
    this.afterMatureIntRate = event.afterMatureIntRate
    this.customer = null
    this.introducerACNo = []
    this.getIntroducer()
  }


  getacc
  //get account no according scheme for introducer
  getIntroducer() {
    this.getacc = [];
    // this.customer = null
    this.obj = [this.selectedScheme, this.selectedBranch]
    // switch (this.getschemename) {
    //   case 'TD':
    this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
      this.getacc = data;
    })
    // break;
    // }
  }
  Scode
  schemecode
  getScheme(event) {
    this.Scode = event.S_NAME
    this.schemecode = event.S_APPL
  }
  INTRATE = 0.00
  bankacno
  lastIntDate
  opDate
  asOnDate
  maturityDate
  maturityDate1
  recNo
  operator
  months
  days
  interestCategory
  preMature: boolean = false
  intRateShow = 0
  Customer_info
  customerId
  modalClass: string = 'modalHide';
  DEPO_AC_NO
  getdata
  bankno
  getscheme
  form
  hideShow: boolean = true
  hideShow1: boolean


  getAccountDetails(event) {
    this.hideShow = true
    this.hideShow1 = false
    this.bankacno = event.bankacno
    this.customerId = event.id
    this.dormant = event.dormant
    let mem = [this.bankacno, this.getschemename, this.selectedScheme]
    this.modalClass = 'modalShow';
    this.intRateShow = 0
    this.NET_EXC_INTAMT = 0
    this.transferTotalAmount = 0
    this.multigrid = []
    this.angForm.patchValue({
      InterestRate: 0,
      MaturedDays: 0,
      ClosingQuaters: 0,
      QInterest: 0,
      ClosingMonth: 0,
      MInterest: 0,
      ClosingDays: 0,
      DInterest: 0,
      maturedInterest: 0,
      maturedIntAmt: 0,
      TOTAL_INT: 0,
      POSTED_INT: 0,
      NET_INTAMT: 0,
      LEDGER_BAL: 0,
      PAYABLE_INTAMT: 0,
      TDS_AMT: 0,
      SURCHARGE_AMT: 0,
      PENAL_INT: 0,
      NETPAYABLEAMT: 0
    })
    this.http.get(this.url + '/term-deposit-account-closing/details/' + mem).subscribe((data) => {

      this.modalClass = 'modalHide';
      if (data[0].ODGIVEN == true) {
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`,`${this.translate.instant('Swal_Msg.Overdraft')}`, 'error')
        // Swal.fire('Oops', 'Overdraft given so Account cannot close', 'error')
        this.customer = null
        return
      }
      else if (data[0].ISFREEZ == true) {
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.Freezed_account')}`, 'error')
        // Swal.fire('Oops', 'Freezed account so Account cannot close', 'error')
        this.customer = null
        return
      }
      else if (data[0].ISCLOSED == true) {
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.account_cannot_close')}`, 'error')
        // Swal.fire('Oops', 'Account is already closed so account cannot close', 'error')
        this.customer = null
        return
      }
      else if (data[0].PASSINGPENDING == true) {
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.passing_pending')}`, 'error')
        // Swal.fire('Oops', 'Account is already closed but passing pending', 'error')
        this.customer = null
        return
      }
      else if (data[0].ISLIEN === true || data[0].ISLIEN === null) {
        let cashRadio = document.getElementById('formT') as HTMLInputElement;

        Swal.fire({
          // title: 'Transfer to Loan Account?',
          // text: 'This Account is LIEN, Do you want to transfer to the loan account?',
          title: `${this.translate.instant('Swal_Msg.Transfer_to_loan_account')}`,
          text: `${this.translate.instant('Swal_Msg.Do_you_want_to_transfer')}`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Continue',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.isConfirmed) {
            // this.introducerACNo1 = this.introducerACNo
            this.isTransfer = true;

            cashRadio.disabled = true;
            let obj1 = { DEPO_AC_NO: event.bankacno };

            this.http.post<any>(this.url + '/term-deposits-master/ownDeposit', obj1).subscribe(
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
      if (Number(data[0].LedgerBal) >= 0) {
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.Balance_is_insufficient')}`, 'error')
        // Swal.fire('Oops', 'Balance is insufficient so account cannot close', 'error')
        this.customer = null
        return
      }
      this.DayOpBal = data[0].AC_SCHMAMT
      this.Pass = data[0].AC_MATUAMT
      this.INTRATE = data[0].AC_INTRATE
      this.lastIntDate = data[0].AC_LINTEDT
      this.opDate = data[0].AC_OPDATE
      this.asOnDate = data[0].AC_ASON_DATE
      this.maturityDate = data[0].AC_LINTEDT != null ? data[0].AC_LINTEDT : data[0].AC_EXPDT
      this.maturityDate1 = data[0].AC_EXPDT
      this.recNo = data[0].AC_REF_RECEIPTNO
      this.operator = data[0].operation
      this.months = data[0].AC_MONTHS
      this.days = data[0].AC_DAYS
      this.interestCategory = data[0].AC_INTCATA
      this.preMature = data[0].preMature

      this.angForm.patchValue({
        LEDGER_BAL: Number(Math.abs(data[0].LedgerBal)).toFixed(2),
        PAYABLE_INTAMT: Number(Math.abs(data[0].payableInterest)).toFixed(2),
        TDS_AMT: Number(data[0].tds_amt),
        PENAL_INT: Number(data[0].penalInterest)
      })
      if (this.isInterestApplicable == '1') {
        this.angForm.patchValue({
          InterestRate: data[0].AC_INTRATE
        })
        this.intRateShow = data[0].AC_INTRATE
      }
      else {
        this.angForm.patchValue({
          InterestRate: '0'
        })
        this.intRateShow = 0
      }
      if (data[0].preMature == '1') {
        this.angForm.patchValue({
          InterestRate: Number(data[0].prematureRate) - Number(this.prematureRate)
        })
        this.afterMaturedInt = false
        this.intRateShow = data[0].AC_INTRATE
        if (data[0].post_Interest < 0) {
          this.angForm.patchValue({
            // EXCESS_INT: Number(data[0].post_Interest).toFixed(2),
            NET_INTAMT: Number(data[0].post_Interest).toFixed(0),
            POSTED_INT: 0,
          })
          this.NET_EXC_INTAMT = Number(data[0].post_Interest)
        }
        else if (data[0].post_Interest > 0) {
          this.angForm.patchValue({
            POSTED_INT: Number(data[0].post_Interest).toFixed(0),
            NET_INTAMT: 0
            // EXCESS_INT: 0
          })
          this.NET_EXC_INTAMT = 0
        }
        else {
          this.angForm.patchValue({
            POSTED_INT: 0,
            NET_INTAMT: 0
            // EXCESS_INT: 0
          })
          this.NET_EXC_INTAMT = 0
        }
        this.getMonthDays()
      }
      else {
        this.angForm.patchValue({
          InterestRate: data[0].AC_INTRATE
        })
        this.intRateShow = data[0].AC_INTRATE
        if (this.interestUptoCalDate == '1') {
          this.afterMaturedInt = false
          this.angForm.patchValue({
            TOTAL_INT: Math.round(data[0].InterestAmount)  //FUNCTION AMT
          })
        }
        else {
          this.afterMaturedInt = true
          // var b1 = moment(this.maturityDate, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY');
          // var a1 = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
          var a1 = moment(this.maturityDate, "DD/MM/YYYY")
          var b1
          this.lastIntDate == null ? b1 = moment(this.opDate, 'DD/MM/YYYY') : b1 = moment(this.lastIntDate, "DD/MM/YYYY")

          var b = moment(b1, 'DD/MM/YYYY')
          var a = moment(this.date, "DD/MM/YYYY");
          let Days = a1.diff(b1, 'days');
          let total_int = Math.abs(Number(Math.abs(data[0].LedgerBal)) * Days * (parseFloat(this.angForm.controls['InterestRate'].value) / 36500))
          this.angForm.patchValue({
            TOTAL_INT: Math.round(total_int)
          })
        }

        if (this.maturityDate1 == this.date) {
          this.angForm.patchValue({
            InterestRate: this.INTRATE,
            MaturedDays: data[0].totDays,
            TOTAL_INT: Math.round(data[0].InterestAmount)

          })

          

        }

        if (this.afterMatureIntRate != 0 && this.afterMatureIntRate != '' && this.maturityDate1 < this.date) {
          // var b = moment(this.date, "DD/MM/YYYY");
          // var a = this.lastIntDate != '' && this.lastIntDate != null ? moment(this.lastIntDate, 'DD/MM/YYYY') : (this.asOnDate != '' && this.asOnDate != null) ? moment(this.asOnDate, "DD/MM/YYYY") : moment(this.opDate, "DD/MM/YYYY")
          // let maturedDays = Math.abs(a.diff(b, 'days'))
          // let total_int = Number(this.angForm.controls['TOTAL_INT'].value) + Math.abs(maturedDays * (parseFloat(this.afterMatureIntRate) / 100))
          var a1 = moment(this.date, "DD/MM/YYYY")
          this.afterMaturedInt = true
          var b = moment(this.maturityDate1, "DD/MM/YYYY");
          var a = moment(this.date, "DD/MM/YYYY")
          let maturedDaysDiff = Math.abs(a1.diff(b, 'days'))
          this.angForm.patchValue({
            maturedInterest: this.afterMatureIntRate,
            InterestRate:   this.INTRATE ,
            afterMaturityDays: maturedDaysDiff,
            MaturedDays: data[0].totDays,
            TOTAL_INT: Math.round(data[0].InterestAmount)
          })
          // this.intRateShow = this.afterMatureIntRate
          // this.afterMaturedInt = false
          // var b = moment(this.maturityDate, "DD/MM/YYYY");
          // var a = (this.asOnDate != '' && this.asOnDate != null) ? moment(this.asOnDate, "DD/MM/YYYY") : moment(this.opDate, "DD/MM/YYYY")
          // let maturedDays = Math.abs(a.diff(b, 'days'))
          // let total_int = Math.abs(maturedDays * (parseFloat(this.afterMatureIntRate) / 100))
          // this.angForm.patchValue({
          //   InterestRate: this.afterMatureIntRate,
          //   MaturedDays: maturedDays,
          //   TOTAL_INT: Math.round(total_int)
          // })
          // this.intRateShow = this.afterMatureIntRate
          // this.afterMaturedInt = false
        }
        // else if (this.maturityDate1 == this.date) {
        //   var a1 = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
        //   this.afterMaturedInt = true
        //   var b = moment(this.maturityDate, "DD/MM/YYYY");
        //   var a = moment(this.date, "DD/MM/YYYY")
        //   let maturedDays = Math.abs(a1.diff(b, 'days'))
        //   this.angForm.patchValue({
        //     MaturedDays: maturedDays,
            

        //   })
        // }
        if (this.FIXED_MATURITY_AMT == '1' && this.interestUptoCalDate == '0') {
          if (Number(this.Pass) < Number(Math.abs(data[0].LedgerBal))) {
            let excessInt = Number(Math.abs(data[0].LedgerBal)) - Number(this.Pass)
            this.angForm.patchValue({
              POSTED_INT: excessInt,
              NET_INTAMT: 0,
              TOTAL_INT: 0
            })
            this.afterMaturedInt = false
          }
          if (Number(this.Pass) > Number(Math.abs(data[0].LedgerBal))) {
            let maturedIntAmt1 = Number(this.Pass) - (Number(Math.abs(data[0].LedgerBal)) + Number(data[0].payableInterest))
            let PostIntAmount = (Number(Math.abs(data[0].InterestAmount)) - maturedIntAmt1)
            this.angForm.patchValue({
              POSTED_INT: PostIntAmount,
              //  TOTAL_INT: 0,

            })
          }
        }
      }
      let total_int = this.angForm.controls['TOTAL_INT'].value
      let post_int = this.angForm.controls['POSTED_INT'].value
      let netInt = (Math.abs(Number(total_int) - Number(post_int))).toFixed(0)
      this.angForm.patchValue({
        NET_INTAMT: (netInt)
      })
      this.NET_EXC_INTAMT = Number(total_int) - Number(post_int)
      let ledgerAmt = Number(this.angForm.controls['LEDGER_BAL'].value)
      let netAmt = Number(this.angForm.controls['NET_INTAMT'].value)
      let TDSAmt = Number(this.angForm.controls['TDS_AMT'].value)
      let surchargeAmt = Number(this.angForm.controls['SURCHARGE_AMT'].value)
      let penalAmt = Number(this.angForm.controls['PENAL_INT'].value)
      let totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (Number(ledgerAmt) + Number(netAmt) - Number(TDSAmt) - Number(surchargeAmt) - Number(penalAmt)).toFixed(2) : (Number(ledgerAmt) - Number(Math.abs(netAmt)) - Number(TDSAmt) - Number(surchargeAmt) - Number(penalAmt)).toFixed(2)
      this.angForm.patchValue({
        NETPAYABLEAMT: totalNetAmt
      })
      this.getNetPayAmount()
    })
    this.showCustomerDeatils()
  }

  getNetPayAmount() {
    let ledgerAmt = Number(this.angForm.controls['LEDGER_BAL'].value)
    let netAmt = Number(this.angForm.controls['NET_INTAMT'].value)
    let TDSAmt = Number(this.angForm.controls['TDS_AMT'].value)
    let surchargeAmt = Number(this.angForm.controls['SURCHARGE_AMT'].value)
    let penalAmt = Number(this.angForm.controls['PENAL_INT'].value)
    this.totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (Math.abs(ledgerAmt + netAmt - TDSAmt - surchargeAmt - penalAmt)).toFixed(2) : (Math.abs(ledgerAmt - Math.abs(netAmt) - TDSAmt - surchargeAmt - penalAmt)).toFixed(2)
    this.preMature == false ? this.totalNetAmt = (Number(this.totalNetAmt) + Number(this.angForm.controls['PAYABLE_INTAMT'].value)).toFixed(2) : this.totalNetAmt = this.totalNetAmt
    this.angForm.patchValue({
      NETPAYABLEAMT: this.totalNetAmt
    })
  }
  getNetInterest() {
    let total_int = this.angForm.controls['TOTAL_INT'].value
    let post_int = this.angForm.controls['POSTED_INT'].value
    let netInt = (Number(total_int) - Number(post_int)).toFixed(0)
    this.NET_EXC_INTAMT = Number(total_int) - Number(post_int)
    this.angForm.patchValue({
      NET_INTAMT: Math.abs(Number(netInt))
    })
    this.getNetPayAmount()
  }
  getMaturedIntRate() {
    let total_int1 = Number(this.angForm.controls['TOTAL_INT'].value) - Number(this.angForm.controls['maturedIntAmt'].value)
    let ledgerAmt = Number(this.angForm.controls['LEDGER_BAL'].value)
    let maturedIntAmt = Math.abs(ledgerAmt * Number(this.angForm.controls['MaturedDays'].value) * (parseFloat(this.angForm.controls['maturedInterest'].value) / 36500))
    // let total_int = maturedIntAmt - Number(this.angForm.controls['maturedInterest'].value) + Number(this.angForm.controls['TOTAL_INT'].value)
    let total_int = maturedIntAmt + Number(total_int1)
    this.angForm.patchValue({
      maturedIntAmt: Math.round(maturedIntAmt),
      TOTAL_INT: Math.round(total_int),
      NET_INTAMT: Math.round(total_int)
    })
  }
  calQuarter: number = 0
  calMonths: number = 0
  calDays: number = 0
  calMonthDays: number = 0
  getMonthDays() {
    let Days: number = 0
    if (this.asOnDate != null && this.asOnDate != "") {
      var b1 = moment(this.asOnDate, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY');
      var b = moment(b1, 'DD/MM/YYYY')
      let matureDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY')
      var a = moment(matureDate, "DD/MM/YYYY");
      Days = a.diff(b, 'days');
      if (this.Quarterly != '' && this.Quarterly == 'Q') {
        this.calQuarter = Math.floor(a.diff(b, 'months') / 3)
        if (Days > 90)
          this.calDays = Days - 90
        this.calMonths = 0
      }
      else {
        Days = a.diff(b, 'days');
        if (this.monthDays == 'M') {
          this.calMonths = a.diff(b, 'months')
          this.calQuarter = 0
          this.calDays = 0
        }
        else if (this.monthDays == 'D' || this.monthDays == 'P') {
          this.calDays = a.diff(b, 'days')
          this.calQuarter = 0
          this.calMonths = 0
        }
        else if (this.monthDays == 'B') {
          this.calMonths = a.diff(b, 'months')
          // this.calDays = a.diff(b, 'days')
          // this.calDays = this.calDays - (this.calMonths * 30)
          this.calQuarter = 0
          var bd = moment(b, "DD-MM-YYYY");
          var ab = moment(a, "DD-MM-YYYY");
          var Diffmonths = ab.diff(bd, 'months');
          bd.add(this.calMonths, 'months');
          var Diffdays = ab.diff(bd, 'days');
          this.calDays = Diffdays
        }
      }
    }
    else {
      var b1 = moment(this.opDate, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY');
      var b = moment(b1, "DD/MM/YYYY");
      let matureDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY')
      var a = moment(matureDate, "DD/MM/YYYY");
      Days = a.diff(b, 'days');
      if (this.Quarterly != '' && this.Quarterly == 'Q') {
        this.calQuarter = Math.floor(a.diff(b, 'months') / 3)
        if (Days > 90)
          this.calDays = Days - 90
        this.calMonths = 0
      }
      else {
        Days = a.diff(b, 'days');
        if (this.monthDays == 'M') {
          this.calMonths = a.diff(b, 'months')
          this.calQuarter = 0
          this.calDays = 0
        }
        else if (this.monthDays == 'D' || this.monthDays == 'P') {
          this.calDays = a.diff(b, 'days')
          this.calQuarter = 0
          this.calMonths = 0
        }
        else if (this.monthDays == 'B') {
          var bd = moment(b, "DD-MM-YYYY");
          var ab = moment(a, "DD-MM-YYYY");

          this.calMonths = a.diff(b, 'months')
          // this.calDays = a.diff(b, 'days')
          // this.calDays = this.calDays - (this.calMonths * 30)
          var Diffmonths = ab.diff(bd, 'months');
          bd.add(this.calMonths, 'months');
          var Diffdays = ab.diff(bd, 'days');
          this.calDays = Diffdays
          this.calQuarter = 0
        }
      }
    }
    let balance = Number(this.angForm.controls['LEDGER_BAL'].value) - Number(this.angForm.controls['POSTED_INT'].value)
    let daysInterest = ((balance * this.calDays * Number(this.angForm.controls['InterestRate'].value)) / 36500)
    let monthInterest = ((balance * this.calMonths * Number(this.angForm.controls['InterestRate'].value)) / 1200)
    let qurterInterest = ((balance * this.calQuarter * Number(this.angForm.controls['InterestRate'].value)) / 1200)
    let totalInterest = (Number(daysInterest) + Number(monthInterest) + Number(qurterInterest)).toFixed(2)
    this.angForm.patchValue({
      ClosingQuaters: this.calQuarter,
      ClosingMonth: this.calMonths,
      ClosingDays: this.calDays,
      DInterest: Math.abs(Math.round(Number(daysInterest))),
      MInterest: Math.abs(Math.round(Number(monthInterest))),
      QInterest: Math.abs(Math.round(Number(qurterInterest))),
      TOTAL_INT: Math.abs(Math.round(Number(totalInterest)))
    })

  }

  getEditData() {
    let mem = [this.bankacno, this.getschemename, this.selectedScheme]
    this.http.get(this.url + '/term-deposit-account-closing/details/' + mem).subscribe((data) => {

      this.DayOpBal = data[0].AC_SCHMAMT
      this.Pass = data[0].AC_MATUAMT
      this.INTRATE = data[0].AC_INTRATE
      this.lastIntDate = data[0].AC_LINTEDT
      this.opDate = data[0].AC_OPDATE
      this.asOnDate = data[0].AC_ASON_DATE
      this.maturityDate = data[0].AC_EXPDT
      this.recNo = data[0].AC_REF_RECEIPTNO
      this.operator = data[0].operation
      this.months = data[0].AC_MONTHS
      this.days = data[0].AC_DAYS
      this.interestCategory = data[0].AC_INTCATA
      this.preMature = data[0].preMature
      this.angForm.patchValue({
        LEDGER_BAL: Number(data[0].LedgerBal).toFixed(2),
        PAYABLE_INTAMT: Number(data[0].payableInterest).toFixed(2),
        TDS_AMT: data[0].tds_amt
      })
      this.getNetPayAmount()

      if (this.isInterestApplicable == '1') {
        this.angForm.patchValue({
          InterestRate: data[0].AC_INTRATE
        })
        this.intRateShow = data[0].AC_INTRATE
      }
      else {
        this.angForm.patchValue({
          InterestRate: '0'
        })
        this.intRateShow = 0
      }
      if (data[0].post_Interest < 0) {
        this.angForm.patchValue({
          // EXCESS_INT: data[0].post_Interest,
          NET_INTAMT: data[0].post_Interest,
          POSTED_INT: 0,
        })
        this.NET_EXC_INTAMT = (data[0].post_Interest)
      }
      else if (data[0].post_Interest > 0) {
        this.angForm.patchValue({
          POSTED_INT: Number(data[0].post_Interest).toFixed(0),
          NET_INTAMT: 0
          // EXCESS_INT: 0
        })
        this.NET_EXC_INTAMT = 0
      }
      else {
        this.angForm.patchValue({
          POSTED_INT: 0,
          NET_INTAMT: 0
          // EXCESS_INT: 0
        })
        this.NET_EXC_INTAMT = 0
      }

      if (data[0].preMature == '1') {
        this.angForm.patchValue({
          InterestRate: parseFloat(data[0].prematureRate) - parseFloat(this.prematureRate)
        })
        this.afterMaturedInt = false
        this.intRateShow = parseFloat(data[0].prematureRate) - parseFloat(this.prematureRate)
        this.getMonthDays()
      }
      else {
        this.angForm.patchValue({
          InterestRate: data[0].AC_INTRATE
        })
        this.intRateShow = data[0].AC_INTRATE
        if (this.interestUptoCalDate == '1') {
          this.afterMaturedInt = false
          this.angForm.patchValue({
            TOTAL_INT: Math.round(data[0].InterestAmount)
          })
        }
        else {
          this.afterMaturedInt = true
          var b = moment(this.maturityDate, "DD/MM/YYYY");
          var a = moment(this.date, "DD/MM/YYYY");
          let Days = b.diff(a, 'days');
          let total_int = Math.abs(Days * (parseFloat(this.angForm.controls['InterestRate'].value) / 100))
          this.angForm.patchValue({
            TOTAL_INT: Math.round(total_int)
          })
        }

        if (this.afterMatureIntRate != 0 && this.afterMatureIntRate != '') {
          var b = moment(this.maturityDate, "DD/MM/YYYY");
          var a = (this.asOnDate != '' && this.asOnDate != null) ? moment(this.asOnDate, "DD/MM/YYYY") : moment(this.opDate, "DD/MM/YYYY")
          let maturedDays = Math.abs(a.diff(b, 'days'))
          let total_int = Math.abs(maturedDays * (parseFloat(this.afterMatureIntRate) / 100))
          this.angForm.patchValue({
            InterestRate: this.afterMatureIntRate,
            MaturedDays: maturedDays,
            TOTAL_INT: Math.round(total_int)
          })
          this.intRateShow = this.afterMatureIntRate
          this.afterMaturedInt = false
        }
        else {
          this.afterMaturedInt = true
          var b = moment(this.maturityDate, "DD/MM/YYYY");
          var a = moment(this.date, "DD/MM/YYYY")
          let maturedDays = Math.abs(a.diff(b, 'days'))
          this.angForm.patchValue({
            MaturedDays: maturedDays,
          })

        }

      }

      let total_int = this.angForm.controls['TOTAL_INT'].value
      let post_int = this.angForm.controls['POSTED_INT'].value
      let netInt = (Number(total_int) - Number(post_int)).toFixed(0)
      this.NET_EXC_INTAMT = Number(total_int) - Number(post_int)
      this.angForm.patchValue({
        NET_INTAMT: netInt
      })
    })
    this.getNetPayAmount()
  }
  NET_EXC_INTAMT = 0

  selectedTransScheme: any = null
  ngacno: any = null
  schemeACNo
  transferSchemeDetails
  transferAccountDetails
  //get account no according scheme for transfer
  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.obj = [this.selectedTransScheme, this.selectedBranch]
    this.ngacno = null
    switch (event.name) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerListForClosing().subscribe(data => {
          this.schemeACNo = data;
        })
        break;
    }
  }
  getTransferAccountDeatil(event) {
    this.transferAccountDetails = event
  }

  headFlag: boolean = false;
  submitTranMode: any;


  changeMode(item) {

    this.submitForm = true
    this.headData = []
    this.submitTranMode = item;
    if (this.submitTranMode.tran_type == 'TR') {
      this.showChequeDetails = true;

    }

    //get Head details
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
    ]
    let date = this.date;
    var rowData = date.split('/');
    let lastdate = Number(rowData[0]) - 1;
    // let result    = rowData[2]+'-'+rowData[1]+'-'+lastdate;
    this.IntersetHeadDate = lastdate + '/' + rowData[1] + '/' + rowData[2];
    this._vservice.getHeadDetails(obj).subscribe(data => {
      this.sendFunction(this.ChequeDate)
      this.updateheadbalance(this.ChequeDate);
      this.calculateVoucher()

      if (data.length != 0) {

        if (!this.headFlag) {
          // this.headData = data;
          this.headShow = true;

          for (let item of data) {
            let value = {}
            // if (value != undefined) {
            if (this.submitTranMode.tran_drcr == item.DRCR_APPLICABLE || item.DRCR_APPLICABLE == 'B') {
              item['Amount'] = 0;
              item['Amount'] = 0;
              if (this.submitScheme.S_ACNOTYPE == 'TD') {
                if (this.submitScheme.IS_RECURRING_TYPE == '1' && this.submitScheme.INTEREST_RULE == '0' && item.HEAD_TYPE == 'PNI') {
                  this.headData.push(item)
                } else {
                  if (item.HEAD_TYPE != 'PNI') {
                    this.headData.push(item)
                  }
                }
              } else {
                this.headData.push(item)
              }
            }

            // }
          }
          // this.updateheadbalance(this.date)

        }
      } else {
        this.headShow = false;
      }
    }, err => {
      console.log(err);
    })
    // if (this.submitScheme.S_ACNOTYPE == 'TD' || this.submitScheme.S_ACNOTYPE == 'SB' || this.submitScheme.S_ACNOTYPE == 'PG' || this.submitScheme.S_ACNOTYPE == 'AG' || this.submitScheme.S_ACNOTYPE == 'CA') {
    //   this.interestMaxDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
    //   this.interestMaxDate = this.interestMaxDate._d
    //   this.interestMinDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'months')
    //   this.interestMinDate = this.interestMinDate._d
    // }
    // else if (this.submitScheme.S_ACNOTYPE == 'LN' || this.submitScheme.S_ACNOTYPE == 'CC' || this.submitScheme.S_ACNOTYPE == 'DS') {
    //   this.interestMinDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
    //   this.interestMinDate = this.interestMinDate._d
    //   this.interestMaxDate = moment(this.date, "DD/MM/YYYY").add(1, 'months')
    //   this.interestMaxDate = this.interestMaxDate._d
    // }
    this.angForm.patchValue({
      amount: 0
    })
    if (item.id == 6) {
      this.angForm.controls.amount.setValue('0.00');
      this.angForm.controls.totalAmt.setValue('0.00');
      this.totalAmt = 0.00
      this.angForm.controls['amount'].disable();
    }
    else if (item.id == 2 || item.id == 5 || item.id == 15) {
      this.angForm.patchValue({
        amount: Number(this.ClearBalance).toFixed(2)
      })
      // this.getaftervoucher()
      this.angForm.controls['amount'].disable();
      this.decimalAllContent(this.ClearBalance);
      this.checkCondition(this.ClearBalance);
      this.checkSanctionAmountWithAmount()
      this.checkamtcondition(this.ClearBalance)
      this.getAmt(this.ClearBalance)
    }
    else {
      this.angForm.controls.amount.setValue('0.00');
      this.angForm.controls['amount'].enable();
    }

    // if (this.selectedCode == 'GL') {
    //   this.showChequeDetails = true
    // }
  }

  tran_mode
  deamount
  paidamt
  user: any = []

  decimalAllContent($event) {
    if (this.submitTranMode == undefined) {
      // Swal.fire('Oops', 'Please First Select Tran Mode then enter Amount', 'error');
      Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`,`${this.translate.instant('Swal_Msg.O_Msg1')}`, 'error');
      this.tran_mode.focus()
      let value = Number($event);
      this.totalAmt = 0;
      $event = 0
      let amt = Number(this.AfterVoucher) - value;
      if (amt < 0) {
        amt = 0;
      }
      this.AfterVoucher = Math.abs(Number(parseFloat((amt).toString()).toFixed(2)))
    }
    else {
      let value = Number($event);
      let data = value.toFixed(2);
      $event = data;
      var t = $event;
      $event = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    }
  }


  balancedata
  sendFunction(mlsdate) {
    let formValues = this.angForm.value;
    let userData = JSON.parse(localStorage.getItem("user"));
    this.date = userData.branch.syspara.CURRENT_DATE;
    let obj = {
      'accountNo': this.submitAccountNo.BANKACNO,
      'schemeType': this.submitScheme.S_ACNOTYPE,
      'scheme': this.submitScheme.S_APPL,
      'currentDate': this.date,

    };

    this.http.post<any>(this.url + '/voucher/getInputHeadBal', obj).subscribe((data1: any) => {
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
        this.totalAmt = count + Number(this.ClearBalance)
        this.totalAmt = Number(this.totalAmt).toFixed(2)
      }
      else {
        this.totalAmt = 0
      }
      // );
    })
  }

  submitAccountNo: any;

  checkCondition($event) {

    let obj = {
      value: Number($event),
      clearBalance: Number(this.ClearBalance),
      accountNo: this.submitAccountNo.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
      tran: this.submitTranMode.tran_drcr,
      tranMode: this.submitTranMode.id,
      // odAmount: this.overdraftAmt,
      currentDate: this.ChequeDate,
      totalAmt: this.angForm.controls['total_amt'].value,
      type: this.typeclearbal
    }

    if (Number(obj.value) >= 50000 && this.submitTranMode.tran_type == 'CS') {
      Swal.fire({
        // title: 'Are you sure?',
        title:`${this.translate.instant('Swal_Msg.Title')}`,
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
          this.SideDetails()
          this.submitForm = true
        } else {
          this.amount.nativeElement.blur();
          this.checkamtcondition($event)
          this.checkSanctionAmountWithAmount()
        }
      })
    } if (Number(obj.value) >= 200000) {

      Swal.fire({
        // title: 'Are you sure?',
        title:`${this.translate.instant('Swal_Msg.Title')}`,
        html: '<span style="text-justify: inter-word;">The government has banned cash transactions of Rs 2 lakh or more from April 1, 2017, through the Finance Act 2017.The newly inserted section 269ST in the Income Tax Act bans such cash dealings on a single day, in respect of a single transaction or transactions relating to one event or occasion from an individual. Contravention  of Section 269ST would entail levy of 100 percent penalty on receiver of the amount the tax department said in a public advertisement in leading dailies. This transaction make on your own risk</span>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.checkamtcondition($event)
          this.checkSanctionAmountWithAmount()
          this.amount.nativeElement.blur();
        } else {
          this.angForm.controls['amount'].reset();
          // this.angForm.controls['total_amount'].reset(0);
          this.submitForm = true
          this.SideDetails()
        }
      })

    } else {
      this.checkamtcondition($event)
    }
  }

  tokenshowhide: boolean = false

  checktranCondition() {

    if (this.angForm.controls['type'].value == 'cash' && this.submitTranMode.tran_drcr == 'D') {
      this.tokenshowhide = true
    } else {
      this.tokenshowhide = false

    }

    let obj = {
      accountNo: this.submitAccountNo.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
      tran: this.submitTranMode.tran_drcr,
      tranMode: this.submitTranMode.id,
      // currentDate: this.date
    }

    if (this.submitTranMode.id == 7 && this.selectedCode == 'SH') {
      this.angForm.controls['amount'].disable();
      this.angForm.controls['particulars'].disable();
      let other2amounttotal
      this._vservice.calculateDividend(obj).subscribe(data => {
        other2amounttotal = data.Bcount
        let str = []
        for (let x in data.calculationdata) {
          str.push(data.calculationdata[x].DIV_FROM_YEAR)
        }
        this.headData.forEach(element => {
          if (element.FIELD_TRAN_TABLE == 'OTHER2_AMOUNT') {
            element['Balance'] = other2amounttotal
          }
        });
        this.angForm.patchValue({
          'amount': data.count,
          'particulars': str + ' Paid Dividend'
        })
      })
    }

    this._vservice.StandingOrInterestInstruction(obj).subscribe(data => {
      if (data != 0) {
        // Swal.fire('Oops!', data.message, 'error');
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
        this.selectedMode = null
      } else {
        this._vservice.VoucherPassing(obj).subscribe(data => {
          if (data != 0) {
            // Swal.fire('Oops!', data.message, 'error');
            Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
            this.selectedMode = null
          } else {
            this._vservice.LienMarkChecking(obj).subscribe(data => {
              if (data != 0) {
                // Swal.fire('Oops!', data.message, 'error');
                Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                this.selectedMode = null

              } else {
                this._vservice.RecurringTypeDeposite(obj).subscribe(data => {
                  if (data != 0) {
                    // Swal.fire('Oops!', data.message, 'error');
                    Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                    this.selectedMode = null

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
  submitCustomer: any;

  getaftervoucher(event) {
    this.submitForm = true
    var t = event.target.value;
    if (this.submitCustomer.AC_ACNOTYPE == 'LN' && this.submitTranMode.tran_drcr == 'D') {
      let value = Number(event.target.value);
      let data = value.toFixed(0);
      event.target.value = data
    }
    else
      event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    let value = Number(event.target.value);
    let tran = this.submitTranMode.tran_drcr;

    if (tran == 'D' && this.typeclearbal == 'Dr') {
      this.AfterVoucher = Math.abs(Number(this.ClearBalance) + value);
      this.AfterVoucher = Number(this.AfterVoucher).toFixed(2)
      this.extenstionaftervoucher = 'Dr';
    } else if (tran == 'D' && this.typeclearbal == 'Cr') {
      this.AfterVoucher = Math.abs(Number(this.ClearBalance) - value);
      this.AfterVoucher = Number(this.AfterVoucher).toFixed(2)
      if (value > Number(this.ClearBalance)) {
        if (tran == 'C') {
          this.extenstionaftervoucher = 'Cr';
        } else {
          this.extenstionaftervoucher = 'Dr';
        }
      }
      else if (value < Number(this.ClearBalance)) {
        this.extenstionaftervoucher = this.typeclearbal
      }
    } else if (tran == 'C' && this.typeclearbal == 'Dr') {
      this.AfterVoucher = Math.abs(Number(this.ClearBalance) - value);
      this.AfterVoucher = Number(this.AfterVoucher).toFixed(2)
      if (value > Number(this.ClearBalance)) {
        if (tran == 'C') {
          this.extenstionaftervoucher = 'Cr';
        } else {
          this.extenstionaftervoucher = 'Dr';
        }
      }
      else if (value < Number(this.ClearBalance)) {
        this.extenstionaftervoucher = this.typeclearbal
      }
    } else {
      this.AfterVoucher = Math.abs(Number(this.ClearBalance) + value);
      this.AfterVoucher = Number(this.AfterVoucher).toFixed(2)
      this.extenstionaftervoucher = 'Cr';
    }
  }

  // checkSanctionAmountWithAmount() {
  //   // let ledgerbal = Number(this.tempDayOpBal) > 0 ? Number(this.tempDayOpBal) : 0
  //   let sancAmt = (Number(this.amount) - Number(this.ClearBalance))
  //   if (sancAmt < Number(this.angForm.controls['amount'].value) && this.submitTranMode.id == 4 && this.submitTranMode.tran_drcr == 'D' && (this.submitScheme?.S_ACNOTYPE == 'CC' || this.submitScheme?.S_ACNOTYPE == 'LN')) {
  //     this.SideDetails()
  //     this.angForm.controls['amount'].reset();
  //     this.angForm.patchValue({
  //       total_amt: 0
  //     })
  //     this.amount.nativeElement.focus();
  //     Swal.fire('Oops!', `Access Denied, Amount Can't Be Withdraw More Than Rs. ${sancAmt}`, 'error');
  //     this.submitForm = true
  //   }
  // }
  Submitscheme
  checkSanctionAmountWithAmount() {
    // let ledgerbal = Number(this.tempDayOpBal) > 0 ? Number(this.tempDayOpBal) : 0
    let sancAmt = (Number(this.sanctionamt) - Number(this.ClearBalance)) + Number(this.overdraftAmt)
    if (sancAmt < Number(this.angForm.controls['amt'].value) && this.submitTranMode.id == 4 && this.submitTranMode.tran_drcr == 'D' && this.Submitscheme.IS_GOLD_LOAN != '1' && (this.Submitscheme?.S_ACNOTYPE == 'CC' || this.Submitscheme?.S_ACNOTYPE == 'LN')) {
      this.SideDetails()
      this.angForm.controls['amt'].reset();
      this.angForm.patchValue({
        total_amt: 0.00,
        amt: 0.00
      })
      // Swal.fire('Oops!', `Access Denied, Amount Can't Be Withdraw More Than Rs. ${sancAmt}`, 'error');
      Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.O_Msg2')}. ${sancAmt}`, 'error');
      this.swiper.nativeElement.focus();
      this.submitForm = true
      this.angForm.patchValue({
        total_amt: 0.00,
        amt: 0.00
      })
    }
  }
  typeclearbal
  checkamtcondition($event) {
    let obj = {
      // value: Number($event.target.value),
      value: Number(this.angForm.controls['amount'].value),
      // clearBalance: Number(this.ClearBalance),
      accountNo: this.submitAccountNo.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
      // tran: this.submitTranMode.tran_drcr,
      tranMode: this.submitTranMode.id,
      // odAmount: this.overdraftAmt,
      // currentDate: this.date,
      totalAmt: this.angForm.controls['total_amt'].value,
      type: this.typeclearbal
    }
    this._service.checkZeroBalance(obj).subscribe(data => {
      // this.modalClass = 'modalShow';
      if (data != 0) {
        this.SideDetails()
        this.angForm.controls['amount'].reset();
        this.angForm.controls['total_amount'].reset(0);
        this.amount.nativeElement.focus();
        this.submitForm = true
        // this.modalClass = 'modalHide';
        // Swal.fire('Oops!', data.message, 'error');
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
      } else {
        this._service.clearWithdrawBal(obj).subscribe(data => {
          if (data != 0) {
            this.SideDetails()
            this.angForm.controls['amount'].reset();
            this.angForm.controls['total_amount'].reset(0);
            this.amount.nativeElement.focus();
            this.submitForm = true
            // this.modalClass = 'modalHide';
            // Swal.fire('Oops!', data.message, 'error');
            Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
          } else {
            this._service.CheckPanNoInIDMaster(obj).subscribe(data => {
              if (data != 0) {
                // this.submitForm = true
                // this.modalClass = 'modalHide';
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
                    this.angForm.controls['amount'].reset();
                    this.angForm.controls['total_amount'].reset(0);
                    this.SideDetails()
                  }
                })

              } else {
                this._service.ClearVoucherSameBal(obj).subscribe(data => {
                  if (data != 0) {
                    this.SideDetails()
                    this.angForm.controls['amount'].reset();
                    this.angForm.controls['total_amount'].reset(0);
                    this.amount.nativeElement.focus();
                    this.submitForm = true
                    // this.modalClass = 'modalHide';
                    // Swal.fire('Oops!', data.message, 'error');
                    Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                  } else {
                    this._service.BalancePresentOrOverdraft(obj).subscribe(data => {
                      if (data != 0) {
                        this.SideDetails()
                        this.angForm.controls['amount'].reset();
                        this.angForm.controls['total_amount'].reset(0);
                        this.amount.nativeElement.focus();
                        this.submitForm = true
                        // this.modalClass = 'modalHide';
                        // Swal.fire('Oops!', data.message, 'error');
                        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                      } else {
                        this._service.ClearBalanceDebitAmt(obj).subscribe(data => {
                          if (data != 0) {
                            this.SideDetails()
                            this.angForm.controls['amount'].reset();
                            this.angForm.controls['total_amount'].reset(0);
                            this.amount.nativeElement.focus();
                            this.submitForm = true
                            // this.modalClass = 'modalHide';
                            // Swal.fire('Oops!', data.message, 'error');
                            Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                          } else {
                            this._vservice.InstructionFreezeAc(obj).subscribe(data => {
                              if (data != 0) {
                                this.SideDetails()
                                this.angForm.controls['amount'].reset();
                                this.angForm.controls['total_amount'].reset(0);
                                this.amount.nativeElement.focus();
                                this.submitForm = true
                                // this.modalClass = 'modalHide';
                                // Swal.fire('Oops!', data.message, 'error');
                                Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                              } else {
                                this._vservice.MinBalanceChecking(obj).subscribe(data => {
                                  if (data != 0) {
                                    this.SideDetails()
                                    this.angForm.controls['amount'].reset();
                                    this.angForm.controls['total_amount'].reset(0);
                                    this.amount.nativeElement.focus();
                                    this.submitForm = true
                                    // this.modalClass = 'modalHide';
                                    // Swal.fire('Oops!', data.message, 'error');
                                    Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                  } else {
                                    this._vservice.CheckClearBalAndAmt(obj).subscribe(data => {
                                      if (data != 0) {
                                        this.SideDetails()
                                        this.angForm.controls['amount'].reset();
                                        this.angForm.controls['total_amount'].reset(0);
                                        this.amount.nativeElement.focus();
                                        this.submitForm = true
                                        // this.modalClass = 'modalHide';
                                        // Swal.fire('Oops!', data.message, 'error');
                                        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                      } else {
                                        this._vservice.WithdrawAmtClosingEqualClearBal(obj).subscribe(data => {
                                          if (data != 0) {
                                            this.SideDetails()
                                            this.angForm.controls['amount'].reset();
                                            this.angForm.controls['total_amount'].reset(0);
                                            this.amount.nativeElement.focus();
                                            this.submitForm = true
                                            // this.modalClass = 'modalHide';
                                            // Swal.fire('Oops!', data.message, 'error');
                                            Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                          } else {
                                            this._vservice.DepositeAmountAndIntallments(obj).subscribe(data => {
                                              if (data != 0) {
                                                this.SideDetails()
                                                this.angForm.controls['amount'].reset();
                                                this.angForm.controls['total_amount'].reset(0);
                                                this.amount.nativeElement.focus();
                                                this.submitForm = true
                                                // this.modalClass = 'modalHide';
                                                // Swal.fire('Oops!', data.message, 'error');
                                                Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                              } else {
                                                this._vservice.DepositAndTotalInstallments(obj).subscribe(data => {
                                                  if (data != 0) {
                                                    this.SideDetails()
                                                    this.angForm.controls['amount'].reset();
                                                    this.angForm.controls['total_amount'].reset(0);
                                                    this.amount.nativeElement.focus();
                                                    this.submitForm = true
                                                    // this.modalClass = 'modalHide';
                                                    Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                                    // Swal.fire('Oops!', data.message, 'error');
                                                  } else {
                                                    this._vservice.DepositAndDepositAmount(obj).subscribe(data => {
                                                      if (data != 0) {
                                                        this.SideDetails()
                                                        this.angForm.controls['amount'].reset();
                                                        this.angForm.controls['total_amount'].reset(0);
                                                        this.amount.nativeElement.focus();
                                                        this.submitForm = true
                                                        // this.modalClass = 'modalHide';
                                                        // Swal.fire('Oops!', data.message, 'error');
                                                        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                                      } else {
                                                        this._vservice.PremcloseTdateTamtCom(obj).subscribe(data => {
                                                          if (data != 0) {
                                                            this.SideDetails()
                                                            this.angForm.controls['amount'].reset();
                                                            this.angForm.controls['total_amount'].reset(0);
                                                            this.amount.nativeElement.focus();
                                                            this.submitForm = true
                                                            // this.modalClass = 'modalHide';
                                                            // Swal.fire('Oops!', data.message, 'error');
                                                            Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                                          } else {
                                                            this._vservice.PrecloseTrDateTrAmtComCol(obj).subscribe(data => {
                                                              if (data != 0) {
                                                                this.SideDetails()
                                                                this.angForm.controls['amount'].reset();
                                                                this.angForm.controls['total_amount'].reset(0);
                                                                this.amount.nativeElement.focus();
                                                                this.submitForm = true
                                                                // this.modalClass = 'modalHide';
                                                                // Swal.fire('Oops!', data.message, 'error');
                                                                Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                                              } else {
                                                                this._vservice.ComVouamtClearbalAndStrs(obj).subscribe(data => {
                                                                  if (data != 0) {
                                                                    this.SideDetails()
                                                                    this.angForm.controls['amount'].reset();
                                                                    this.angForm.controls['total_amount'].reset(0);
                                                                    this.amount.nativeElement.focus();
                                                                    this.submitForm = true
                                                                    // this.modalClass = 'modalHide';
                                                                    // Swal.fire('Oops!', data.message, 'error');
                                                                    Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                                                  } else {
                                                                    this._vservice.DepositGreaterShareLimitAmt(obj).subscribe(data => {
                                                                      if (data != 0) {
                                                                        this.SideDetails()
                                                                        this.angForm.controls['amount'].reset();
                                                                        this.angForm.controls['total_amount'].reset(0);
                                                                        this.amount.nativeElement.focus();
                                                                        this.submitForm = true
                                                                        // this.modalClass = 'modalHide';
                                                                        // Swal.fire('Oops!', data.message, 'error');
                                                                        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                                                      } else {
                                                                        this._vservice.ZeroBalance(obj).subscribe(data => {
                                                                          if (data != 0) {
                                                                            this.SideDetails()
                                                                            this.angForm.controls['amount'].reset();
                                                                            this.angForm.controls['total_amount'].reset(0);
                                                                            this.amount.nativeElement.focus();
                                                                            this.submitForm = true
                                                                            // this.modalClass = 'modalHide';
                                                                            // Swal.fire('Oops!', data.message, 'error');
                                                                            Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                                                          } else {
                                                                            this._vservice.CashWithdraw(obj).subscribe(data => {
                                                                              if (data != 0) {
                                                                                this.SideDetails()
                                                                                this.angForm.controls['amount'].reset();
                                                                                this.angForm.controls['total_amount'].reset(0);
                                                                                this.amount.nativeElement.focus();
                                                                                this.submitForm = true
                                                                                // this.modalClass = 'modalHide';
                                                                                // Swal.fire('Oops!', data.message, 'error');
                                                                                Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                                                                // } else {
                                                                                //   this._vservice.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                //     if (data != 0) {
                                                                                //       this.SideDetails()
                                                                                //       this.angForm.controls['amt'].reset();
                                                                                //       this.angForm.controls['total_amt'].reset(0);
                                                                                //       this.amt.nativeElement.focus();
                                                                                //       this.submitForm = true
                                                                                this.modalClass = 'modalHide';
                                                                                //       Swal.fire('Oops!', data.message, 'error');
                                                                              } else {
                                                                                this._vservice.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                  // debugger
                                                                                  if (data != 0) {
                                                                                    this.SideDetails()
                                                                                    this.angForm.controls['amount'].reset();
                                                                                    this.angForm.controls['total_amount'].reset(0);
                                                                                    this.amount.nativeElement.focus();
                                                                                    this.submitForm = true
                                                                                    // this.modalClass = 'modalHide';
                                                                                    // Swal.fire('Oops!', data.message, 'error');
                                                                                    Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                                                                                  } else {
                                                                                    this._vservice.withdrawClosingCondition(obj).subscribe(data => {
                                                                                      if (data != 0) {
                                                                                        this.SideDetails()
                                                                                        this.angForm.controls['amount'].reset();
                                                                                        this.angForm.controls['total_amount'].reset(0);
                                                                                        this.selectMode.focus()
                                                                                        this.submitForm = true
                                                                                        // this.modalClass = 'modalHide';
                                                                                        // Swal.fire('Oops!', data.message, 'error');
                                                                                        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
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
      // Swal.fire('Info', 'Please fill proper amount!', 'info')
      Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.S9')}`, 'info')
    }
    else {
      if (this.headData[i].IS_GLBAL_MAINTAIN == '1' && Number(this.headData[i].Balance) != 0 && Number(this.headData[i].Balance) != Number(ele.target.value)) {
        this.headData[i].Amount = '0'
        if (this.headData[i].FIELD_AMOUNT == 'INTEREST_AMOUNT')
          this.INTAMT.nativeElement.focus();
        else
          this.NOTINTAMT.nativeElement.focus();
        this.submitForm = true
        // Swal.fire('Oops!', `Amount Must Be Equal to ${this.headData[i].Balance}`, 'error');
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `Amount Must Be Equal to ${this.headData[i].Balance}`, 'error');
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
        this.totalAmt = count + Number(this.angForm.controls['amount'].value)
        this.submitForm = false
        if (this.headData.length == 0)
          this.submitbtn.nativeElement.focus();
      }
    }
    this.totalAmt = Number(this.totalAmt).toFixed(2)
  }
  checkBalanceFlag(event, i) {
    if (this.headData[i].CHECK_REQUIRE == '1' && Number(event.target.value) == 0) {
      if (this.headData[i].FIELD_AMOUNT == 'INTEREST_AMOUNT')
        this.INTAMT.nativeElement.focus();
      else
        this.NOTINTAMT.nativeElement.focus();
      this.submitForm = true
      // Swal.fire('Info', 'Please fill proper amount!', 'info')
      Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.Information')}`, 'info')
    }
  }


  Add() {
    if (Number(this.totalAmt) != 0 && this.totalAmt != undefined) {
      let user = JSON.parse(localStorage.getItem('user'));
      let obj = this.angForm.value;
      obj['user'] = user;
      for (let ele of this.headData) {
        if (ele['INTEREST_DATE_INPUT'] == '0' && ele.FIELD_AMOUNT == 'INTEREST_AMOUNT') {
          ele['ChequeDate'] = null
        }
      }
      obj['InputHead'] = this.headData;
      obj['tran_mode'] = this.submitTranMode;
      obj['scheme'] = this.submitScheme;
      obj['ac_no'] = this.submitAccountNo;
      obj['amt'] = Number(this.angForm.controls['amt'].value).toFixed(2)
      obj['branch_code'] = this.selectedBranch
      obj['total_amt'] = Number(this.angForm.controls['total_amt'].value).toFixed(2)
      if (this.submitTranMode.id == 4 && this.submitTranMode.tran_drcr == 'D' && (this.submitScheme?.S_ACNOTYPE == 'CC' || this.submitScheme?.S_ACNOTYPE == 'LN')) {
        let ledgerbal = Number(this.tempDayOpBal) > 0 ? Number(this.tempDayOpBal) : 0
        let amount = Number(this.angForm.controls['amt'].value)
        if (amount > ledgerbal)
          obj['isOverdraftTaken'] = 1
        else
          obj['isOverdraftTaken'] = 0
      }
      else
        obj['isOverdraftTaken'] = 0
      this.mainMaster.push(obj);
      this.DayOpBal = 0

      this.angForm.controls['temp_over_draft'].reset()
      this.angForm.controls['over_draft'].reset()
      this.angForm.controls['token'].reset()
      // this.angForm.controls['particulars'].reset()
      this.angForm.controls['total_amt'].reset()
      this.angForm.controls['amt'].reset()
      this.angForm.controls['slip_no'].reset()
      this.angForm.controls['tran_mode'].reset()
      this.angForm.controls['account_no'].reset()
      this.angForm.controls['ac_no'].reset()
      this.angForm.controls['scheme'].reset()
      this.angForm.controls['scheme_type'].reset()
      this.angForm.controls['type'].reset()
      this.angForm.controls['chequeDate'].reset()
      this.angForm.controls['chequeNo'].reset()
      this.angForm.controls['bank'].reset()
      // this.getVoucherData();
      this.headData = [];
      this.headShow = false;
      this.showChequeDetails = false;
      this.submitAccountNo = {};
      this.submitScheme = {};
      this.submitTranMode = {};
      this.selectedCode = '';
      this.selectedScheme = '';
      this.selectedMode = '';
      this.customer = '';

      // this.calculateVoucher()
    } else {
      // Swal.fire('Oops!', 'Please once check your voucher, and fill requied data', 'error');
      Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.Inf')}`, 'error')
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
  //  SideDetails() {
  //   //debugger
  //   this.AfterVoucher = 0
  //   this.extenstionaftervoucher = ''
  //   // this.angForm.controls['amt'].reset()
  //   // this.angForm.controls['total_amt'].reset()
  //   this.SideView = true
  //   if (this.submitCustomer.AC_ACNOTYPE == 'LN' || this.submitCustomer.AC_ACNOTYPE == 'CC' || this.submitCustomer.AC_ACNOTYPE == 'DS') {
  //     this.ShowLNCC = true
  //     this.ShownotLNCC = false
  //     this.sanctionamt = (this.submitCustomer.AC_SANCTION_AMOUNT != null ? this.submitCustomer.AC_SANCTION_AMOUNT : 0)
  //     this.sanctionamt = Number(this.sanctionamt).toFixed(2)
  //     this.sanctiondate = (this.submitCustomer.AC_SANCTION_DATE != null ? this.submitCustomer.AC_SANCTION_DATE : '---')
  //     this.expirydate = (this.submitCustomer.AC_EXPIRE_DATE != null ? this.submitCustomer.AC_EXPIRE_DATE : '---')
  //     this.asondate = (this.submitCustomer.AC_ASON_DATE != null ? this.submitCustomer.AC_ASON_DATE : '---')
  //     this.opendate = (this.submitCustomer.AC_OPDATE != null ? this.submitCustomer.AC_OPDATE : '---')
  //     this.renewaldate = (this.submitCustomer.AC_OPEN_OLD_DATE != null ? this.submitCustomer.AC_OPEN_OLD_DATE : '---')
  //   } else if (this.submitCustomer.AC_ACNOTYPE == 'TD' || this.submitCustomer.AC_ACNOTYPE == 'PG' || this.submitCustomer.AC_ACNOTYPE == 'IV') {
  //     this.ShowLNCC = false
  //     this.ShownotLNCC = true
  //     this.expirydate = (this.submitCustomer.AC_EXPDT != null ? this.submitCustomer.AC_EXPDT : '---')
  //     this.maturityamt = (this.submitCustomer.AC_MATUAMT != null ? this.submitCustomer.AC_MATUAMT : 0)
  //     this.maturityamt = Number(this.maturityamt).toFixed(2)
  //     this.depositamt = (this.submitCustomer.AC_SCHMAMT != null ? this.submitCustomer.AC_SCHMAMT : 0)
  //     this.depositamt = Number(this.depositamt).toFixed(2)
  //     this.asondate = (this.submitCustomer.AC_ASON_DATE != null ? this.submitCustomer.AC_ASON_DATE : '---')
  //     this.opendate = (this.submitCustomer.AC_OPDATE != null ? this.submitCustomer.AC_OPDATE : '---')
  //   } else {
  //     this.ShowLNCC = false
  //     this.ShownotLNCC = false
  //   }
  //   if (this.submitCustomer.AC_ACNOTYPE == 'PG') {
  //     let obj = {
  //       scheme: this.Submitscheme.S_APPL,
  //       acno: this.Submitscheme.S_APPL == '980' ? this.submitCustomer.AC_NO : this.submitCustomer.BANKACNO,
  //       date: addInFrom,
  //       branch: this.branchCODE

  //     }
  //     this._service.getpigmychartBalance(obj).subscribe(data2 => {
  //       console.log(data2, 'pigmy');
  //       this.pigmyamount = data2
  //     })
  //   }

  //   this.submitCustomer.AC_ODAMT == undefined ? this.submitCustomer.AC_ODAMT = 0 : this.submitCustomer.AC_ODAMT = this.submitCustomer.AC_ODAMT
  //   this.submitCustomer.AC_SODAMT == undefined ? this.submitCustomer.AC_SODAMT = 0 : this.submitCustomer.AC_SODAMT = this.submitCustomer.AC_SODAMT
  //   this.overdraftAmt = Number(this.submitCustomer.AC_ODAMT) + Number(this.submitCustomer.AC_SODAMT)
  //   this.overdraftAmt = Number(this.overdraftAmt).toFixed(2)

  //   var startdate = this.angForm.controls['date'].value

  //   let formDT = moment(startdate, 'DD/MM/YYYY')
  //   var addInFrom: any;
  //   // if (this.Submitscheme.S_ACNOTYPE == 'PG') {
  //   //   addInFrom = startdate;
  //   // } else {
  //   addInFrom = moment(formDT, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY')
  //   // }
  //   let obj = {
  //     scheme: this.Submitscheme.S_APPL,
  //     acno: this.Submitscheme.S_APPL == '980' ? this.submitCustomer.AC_NO : this.submitCustomer.BANKACNO,
  //     date: addInFrom,
  //     branch: this.branchCode

  //   }

  //   this._service.getledgerbalance(obj).subscribe(data => {

  //     //debugger
  //     this.DayOpBal = Math.abs(data);
  //     this.DayOpBalance = Number(this.DayOpBal).toFixed(2)
  //     if (data < 0) {
  //       this.extensionopenbal = 'Cr'
  //     } else {
  //       this.extensionopenbal = 'Dr'
  //     }
  //     //debugger
  //     this.tempDayOpBal = data;
  //     if (this.submitCustomer.AC_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && Number(this.DayOpBal) > 0 && this.Submitscheme.S_INSTTYPE == '0') {
  //       this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1)
  //     }
  //     if (this.Submitscheme?.S_ACNOTYPE == 'TD' && this.Submitscheme?.WITHDRAWAL_APPLICABLE == '0')
  //       this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
  //     if (this.Submitscheme?.S_ACNOTYPE == 'PG' && this.Submitscheme?.WITHDRAWAL_APPLICABLE == '0')
  //       this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
  //     if (this.Submitscheme?.S_ACNOTYPE == 'LN' && this.Submitscheme?.IS_DEPO_LOAN == '1' && Number(this.DayOpBal) > 0)
  //       this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9)
  //     this._service.getPassedUnpassedBalance(obj).subscribe(data1 => {
  //       this.Pass = Math.abs(data1.passedamt).toFixed(2)
  //       this.Unpass = Math.abs(data1.unpassamt).toFixed(2)
  //       this.passextension = (data1.passextension != undefined ? data1.passextension : '')
  //       this.unpassextension = (data1.unpassextension != undefined ? data1.unpassextension : '')
  //       // this.ClearBalance = this.DayOpBal + this.Pass
  //       var open = (this.tempDayOpBal <= 0 ? Math.abs(this.tempDayOpBal) : (-this.tempDayOpBal))
  //       var pass = (data1.passedamt <= 0 ? Math.abs(data1.passedamt) : (-data1.passedamt))
  //       var unpass = (data1.unpassamt <= 0 ? Math.abs(data1.unpassamt) : (-data1.unpassamt))

  //       // let value = open + pass + data2;
  //       // let value = open + pass + this.pigmyamount;
  //       let value = open + pass;
  //       if (value < 0) {
  //         this.ClearBalance = Math.abs(value).toFixed(2)
  //         this.typeclearbal = 'Dr'
  //       } else {
  //         this.ClearBalance = Math.abs(value).toFixed(2)
  //         this.typeclearbal = 'Cr'
  //       }
  //     })
  //   })

  // }

  SideDetails() {
    // debugger
    this.AfterVoucher = 0
    this.extenstionaftervoucher = ''
    // this.angForm.controls['amt'].reset()
    // this.angForm.controls['total_amt'].reset()
    this.SideView = true
    if (this.submitAccountNo.AC_ACNOTYPE == 'LN' || this.submitAccountNo.AC_ACNOTYPE == 'CC' || this.submitAccountNo.AC_ACNOTYPE == 'DS' || this.submitAccountNo.AC_ACNOTYPE == 'TD') {
      this.hideShow1 = true
      this.hideShow = false
      this.sanctionamt = (this.submitAccountNo.AC_SANCTION_AMOUNT != null ? this.submitAccountNo.AC_SANCTION_AMOUNT : 0)
      this.sanctionamt = Number(this.sanctionamt).toFixed(2)
      this.sanctiondate = (this.submitAccountNo.AC_SANCTION_DATE != null ? this.submitAccountNo.AC_SANCTION_DATE : '---')
      this.expirydate = (this.submitAccountNo.AC_EXPIRE_DATE != null ? this.submitAccountNo.AC_EXPIRE_DATE : '---')
      this.asondate = (this.submitAccountNo.AC_ASON_DATE != null ? this.submitAccountNo.AC_ASON_DATE : '---')
      this.opendate = (this.submitAccountNo.AC_OPDATE != null ? this.submitAccountNo.AC_OPDATE : '---')
      this.renewaldate = (this.submitAccountNo.AC_OPEN_OLD_DATE != null ? this.submitAccountNo.AC_OPEN_OLD_DATE : '---')
    } else if (this.submitAccountNo.AC_ACNOTYPE == 'PG' || this.submitAccountNo.AC_ACNOTYPE == 'IV') {
      this.hideShow1 = false
      this.hideShow = true
      this.expirydate = (this.submitAccountNo.AC_EXPDT != null ? this.submitAccountNo.AC_EXPDT : '---')
      this.maturityamt = (this.submitAccountNo.AC_MATUAMT != null ? this.submitAccountNo.AC_MATUAMT : 0)
      this.maturityamt = Number(this.maturityamt).toFixed(2)
      this.depositamt = (this.submitAccountNo.AC_SCHMAMT != null ? this.submitAccountNo.AC_SCHMAMT : 0)
      this.depositamt = Number(this.depositamt).toFixed(2)
      this.asondate = (this.submitAccountNo.AC_ASON_DATE != null ? this.submitAccountNo.AC_ASON_DATE : '---')
      this.opendate = (this.submitAccountNo.AC_OPDATE != null ? this.submitAccountNo.AC_OPDATE : '---')
    } else {
      this.hideShow1 = false
      this.hideShow = false
    }
    this.overdraftAmt = Number(this.submitAccountNo.AC_ODAMT) + Number(this.submitAccountNo.AC_SODAMT)
    this.overdraftAmt = Number(this.overdraftAmt).toFixed(2)

    var startdate = this.angForm.controls['date'].value
    // startdate = startdate.subtract(1, 'd');
    // startdate = startdate.format("DD-MM-YYYY");
    let formDT = moment(startdate, 'DD/MM/YYYY')
    var addInFrom: any;
    if (this.submitScheme.S_ACNOTYPE == 'PG') {
      addInFrom = startdate;
    } else {
      addInFrom = moment(formDT, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY')
    }
    let obj = {
      scheme: this.submitScheme.S_APPL,
      acno: this.submitScheme.S_APPL == '980' ? this.submitAccountNo.AC_NO : this.submitAccountNo.BANKACNO,
      date: addInFrom,
      branch: this.branchCode

    }
    //
    this._vservice.getpigmychartBalance(obj).subscribe(data2 => {
      this._vservice.getledgerbalance(obj).subscribe(data => {
        this.DayOpBal = Math.abs(data);
        this.DayOpBal = Number(this.DayOpBal).toFixed(2)
        if (data < 0) {
          this.extensionopenbal = 'Cr'
        } else {
          this.extensionopenbal = 'Dr'
        }
        this.tempDayOpBal = data;
        if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == "0" && this.submitScheme.IS_RECURRING_TYPE == "0" && this.submitScheme.IS_CALLDEPOSIT_TYPE == "0" && this.submitScheme.REINVESTMENT == "0" && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1)
        }
        if (this.submitScheme?.S_ACNOTYPE == 'TD' && this.submitScheme?.WITHDRAWAL_APPLICABLE == '0')
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
        if (this.submitScheme?.S_ACNOTYPE == 'PG' && this.submitScheme?.WITHDRAWAL_APPLICABLE == '0')
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
        if (this.submitScheme?.S_ACNOTYPE == 'LN' && this.submitScheme?.IS_DEPO_LOAN == '1' && Number(this.DayOpBal) > 0)
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
        this._vservice.getPassedUnpassedBalance(obj).subscribe(data1 => {
          //
          this.Pass = Math.abs(data1.passedamt).toFixed(2)
          this.Unpass = Math.abs(data1.unpassamt).toFixed(2)
          this.passextension = (data1.passextension != undefined ? data1.passextension : '')
          this.unpassextension = (data1.unpassextension != undefined ? data1.unpassextension : '')
          // this.ClearBalance = this.DayOpBal + this.Pass
          var open = (this.tempDayOpBal <= 0 ? Math.abs(this.tempDayOpBal) : (-this.tempDayOpBal))
          var pass = (data1.passedamt <= 0 ? Math.abs(data1.passedamt) : (-data1.passedamt))
          var unpass = (data1.unpassamt <= 0 ? Math.abs(data1.unpassamt) : (-data1.unpassamt))
          this.pigmyamount = data2
          let value = open + pass + data2;
          if (value < 0) {
            this.ClearBalance = Math.abs(value).toFixed(2)
            this.typeclearbal = 'Dr'
          } else {
            this.ClearBalance = Math.abs(value).toFixed(2)
            this.typeclearbal = 'Cr'
          }
        })
      })
    })
  }


  updateheadbalance(ChequeDate) {

    let formValues = this.angForm.value;
    let newobj = {
      'accountNo': formValues.TschemeAC,
      'schemeType': this.submitScheme.name,
      'scheme': this.submitScheme.label,
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
        this.totalAmt = count + Number(this.ClearBalance)
        this.totalAmt = Number(this.totalAmt).toFixed(2)
      }
      else {
        this.totalAmt = 0
      }
      // );
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
      clearBalance: Number(this.ClearBalance),
      accountNo: this.submitAccountNo.BANKACNO,
      accno: this.submitAccountNo.AC_NO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
      usertype: result.RoleDefine[0].RoleId,
      // currentDate: this.date
    }

    this._vservice.CheckAccountCloseFlagInDailytran(obj).subscribe(data => {
      if (data != 0) {
        // Swal.fire('Oops!', data.message, 'error');
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
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
              // title: 'Warning',
              title: `${this.translate.instant('Swal_Msg.Warning')}`,
              icon: 'warning',
              html:
                data.message + '<br>' +
                '<span style="font-weight:bold;">Instruction:</span>' + '<br>'
                + data.DETAILS
            })
          } else {
            this._vservice.CheckLoginFlagInDpmaster(obj).subscribe(data => {
              if (data != 0) {
                // Swal.fire('Oops!', data.message, 'error');
                Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                this.customer = null
                this.showlgindetails()

              } else {
                this._vservice.checkDormantAccount(obj).subscribe(data => {
                  if (data != 0) {
                    // Swal.fire('Oops!', data.message, 'error');
                    Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
                    this.customer = null
                    this.showlgindetails()

                  } else {
                    this._vservice.InstructionFreezeAc(obj).subscribe(data => {
                      if (data != 0) {
                        Swal.fire({
                          // title: 'Are you sure?',
                          title:`${this.translate.instant('Swal_Msg.Sure')}`,
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
                            // Swal.fire('Oops!', data.message, 'error');
                            Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, data.message, 'error');
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
  allScheme1
  selectedScheme1
  selectedSchemeCode() {

    this.allScheme1 = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCode) {
        this.allScheme1.push(element)
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
  tempscheme
  id
  sanction
  expdate
  opedate
  sancdate
  installment
  getIntroducer1(item) {
    this.id = item.id
    this.tempschmetype = this.selectedCode
    this.introducerACNo = [];
    this.submitScheme = item;

    if (this.tempscheme != this.selectedScheme) {
      this.customer1 = null
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
  tempschmetype
  resetscheme() {
    // console.log(this.tempschmetype)
    if (this.tempschmetype != this.selectedCode) {
      this.selectedScheme = null
      this.customer = null
      this.introducerACNo = []
    }
  }



  transferGrid
  jointShowButton: boolean = true
  jointUpdateShow: boolean = false
  transferACID: number
  // getscheme: number

  transferIndex: number
  transferTotalAmount: number = 0
  //transfer account grid functions
  addTransferAccount() {

    this.formSubmitted = true;
    let formVal = this.angForm.value;
    // this.getscheme = this.allScheme[0].id;
    var object = {
      // Scheme: this.submitScheme.S_NAME,
      Scheme: this.schemeget,

      // TRANSFER_ACNOTYPE: this.transferSchemeDetails.name,
      TRANSFER_ACNO: this.submitAccountNo.BANKACNO,
      TRANSFER_ACTYPE: this.submitAccountNo.AC_TYPE,
      TRANSFER_ACNOTYPE: formVal.scheme_type,
      ACNO: this.customer,
      NARRATION: formVal.particulars,
      TRAN_AMOUNT: formVal.total_amt,
      AC_CLOSED: '0'
    }
    // console.log(this.multigrid)

    this.getTransferAccountList(event)
    if (formVal.scheme == "" || formVal.scheme == null) {
      // Swal.fire("Warning!", "Please Select Scheme!", "error");
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`,`${this.translate.instant('Swal_Msg.W1')}`, "error");
    } else if (formVal.ac_no == "" || formVal.ac_no == null) {
      Swal.fire(
        // "Warning!",
        // "Please Select Account!",
        // "info"
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.Select_Account')}`,
        "info"
      );
      // this.resetgrid()
    }
    else if (formVal.total_amt == "" || formVal.total_amt == null) {
      Swal.fire(
        // "Warning!",
        // "Please Insert Amount!",
        // "info"
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.Insert_Amount')}`,
        "info"
      );
      // this.resetgrid()
    }

    else if (this.multigrid.find(ob => ob['TRANSFER_ACNO'] === object.TRANSFER_ACNO)) {
      // Swal.fire('Info', 'This Account is Already Exists!', 'error');
      Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.Acc_Already_E')}`, 'error');
    }
    else {
      if (object.TRANSFER_ACNO != this.bankacno) {
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
          let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
          if (comparison <= this.transferTotalAmount) {
            if (formVal.amount >= termAmount) {
              this.multigrid.push(object);
              // this.resetgrid();
            }
            else {
              // Swal.fire('info', `Amount Must be less than or same as ${termAmount}`, 'info')
              Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.Amount_less_same')} ${termAmount}`, 'info')
              this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            }
          }
          else {
            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            // Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
            Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.check_Transfer')} ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
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
            if (Number(ledgerBal) == Number(formVal.total_amt)) {
              object['AC_CLOSED'] = '1'
              this.transferTotalAmount = this.transferTotalAmount + Number(formVal.total_amt)
              let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
              if (comparison >= this.transferTotalAmount) {
                this.multigrid.push(object);
              }
              else {
                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.total_amt)
                // Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
                Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.check_Transfer')} ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
              }
            }
            else if (Number(ledgerBal) > Number(formVal.total_amt)) {
              this.transferTotalAmount = this.transferTotalAmount + Number(formVal.total_amt)
              let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
              if (comparison >= this.transferTotalAmount) {
                this.multigrid.push(object);
                // this.resetgrid();
              }
              else {
                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.total_amt)
                // Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
                Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.check_Transfer')}  ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
              }
            }
            else if (Number(ledgerBal) < Number(formVal.total_amt)) {
              // Swal.fire('info', `Amount Is Greater Than Closing Balance`, 'info')
              Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.Closing_Balance')}`, 'info')
            }
          })
        }
        else {
          this.transferTotalAmount = this.transferTotalAmount + Number(formVal.total_amt)
          let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
          if (comparison >= this.transferTotalAmount) {
            this.multigrid.push(object);
          }
          else {
            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.total_amt)
            // Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
            Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.check_Transfer')} ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
          }
        }
      }
      else {
        // Swal.fire('info', 'Closing Account And Transfer Account Cannot Be Same', 'info')
        Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.Clo_Acc_Tra_Acc')}`, 'info')
        // this.resetgrid();

      }
      // this.resetgrid()
    }
    // this.resetForm()
  }

  // editTransferAccount(id) {
  //   this.transferIndex = id
  //   this.transferACID = this.multigrid[id].id;
  //   // this.getscheme = this.allScheme[id].id;
  //   this.transferGrid = this.multigrid[id]
  //   this.jointShowButton = false;
  //   this.jointUpdateShow = true;
  //   this.angForm.patchValue({
  //     particulars: this.multigrid[id].NARRATION,
  //     amount: this.multigrid[id].TRAN_AMOUNT,
  //     ac_no: this.multigrid[id].TRANSFER_ACNO,
  //     scheme_type: this.selectedTransScheme,
  //     scheme: this.submitScheme.S_NAME,


  //   })
  //   this.ngacno = this.multigrid[id].ACNO
  //   this.selectedTransScheme = this.multigrid[id].TRANSFER_ACTYPE
  // }

  editTransferAccount(id) {
    this.transferIndex = id
    this.transferACID = this.multigrid[id].id;
    this.transferGrid = this.multigrid[id]
    this.jointShowButton = false;
    this.jointUpdateShow = true;

    this.particulars = this.multigrid[id].NARRATION,
      this.amount = this.multigrid[id].TRAN_AMOUNT,
      this.scheme_type = this.multigrid[id].TRANSFER_ACNOTYPE,
      // this.ac_no =  this.multigrid[id].TRANSFER_ACNO,

      this.ngacno = this.multigrid[id].ACNO
    this.selectedTransScheme = this.multigrid[id].TRANSFER_ACTYPE
  }

  updateTransferAcccount() {
    let index = this.transferIndex;
    let formVal = this.angForm.value;
    var object = {
      Scheme: this.submitScheme.S_NAME,
      TRANSFER_ACNO: this.submitAccountNo.AC_NO,
      TRANSFER_ACTYPE: this.selectedTransScheme,
      NARRATION: formVal.particulars,
      TRAN_AMOUNT: formVal.amount,
    }
    if (formVal.scheme == "" || formVal.scheme == null) {
      // Swal.fire("Warning!", "Please Select Scheme!", "error");
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Select_Scheme')}`, "error");
    } else if (formVal.ac_no == "" || formVal.ac_no == null) {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
       `${this.translate.instant('Swal_Msg.Select_Acoount')}`,
        "info"
      );
    }
    else if (formVal.amount == "" || formVal.amount == null) {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.Insert_Amount')}`,
        "info"
      );
    }
    // else {
    // if (object.TRANSFER_ACNO != this.bankacno) {
    //   this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
    //   if (Number(this.angForm.controls['NETPAYABLEAMT'].value) >= this.transferTotalAmount) {
    //     this.transferTotalAmount = this.transferTotalAmount - Number(this.multigrid[index].TRAN_AMOUNT)
    //     this.multigrid[index] = object
    //     this.jointShowButton = true;
    //     this.jointUpdateShow = false;
    //     this.resetgrid();
    //   }
    //   else {
    //      Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
    //     this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
    //   }
    // }
    // else {
    //   Swal.fire('info', 'Closing Account And Transfer Account Cannot Be Same', 'info')
    //   this.resetgrid();
    // }
    else {
      if (object.TRANSFER_ACNO != this.bankacno) {
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
          let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
          this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
          if (Number(this.angForm.controls['NETPAYABLEAMT'].value) >= this.transferTotalAmount) {
            if (formVal.amount >= termAmount) {
              this.multigrid[index] = object
              this.jointShowButton = true;
              this.jointUpdateShow = false;
              this.resetgrid();
            }
            else {
              // Swal.fire('info', `Amount Must be less than or same as ${termAmount}`, 'info')
              Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`,`${this.translate.instant('Swal_Msg.Amount_less_same')} ${termAmount}`, 'info')
              this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            }
          }
          else {
            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            // Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
            Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.check_Transfer')} ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
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
              let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
              if (Number(this.angForm.controls['NETPAYABLEAMT'].value) >= this.transferTotalAmount) {
                this.multigrid[index] = object
                this.jointShowButton = true;
                this.jointUpdateShow = false;
                this.resetgrid();
              }
              else {
                // Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
                Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.check_Transfer')} ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
              }
            }
            else if (Number(ledgerBal) > Number(formVal.amount)) {
              let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
              this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
              if (Number(this.angForm.controls['NETPAYABLEAMT'].value) >= this.transferTotalAmount) {
                this.multigrid[index] = object
                this.jointShowButton = true;
                this.jointUpdateShow = false;
                this.resetgrid();
              }
              else {
                // Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
                Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.check_Transfer')} ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
              }
            }
            else if (Number(ledgerBal) < Number(formVal.amount)) {
              // Swal.fire('info', `Amount Is Greater Than Closing Balance`, 'info')
              Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.Closing_Balance')}`, 'info')
            }
          })
        }
        else {
          let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
          this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
          if (Number(this.angForm.controls['NETPAYABLEAMT'].value) >= this.transferTotalAmount) {
            this.multigrid[index] = object
            this.jointShowButton = true;
            this.jointUpdateShow = false;
            this.resetgrid();
          }
          else {
            // Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
            Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.check_Transfer')} ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
          }
        }
      }
      else {
        // Swal.fire('info', 'Closing Account And Transfer Account Cannot Be Same', 'info')
        Swal.fire(`${this.translate.instant('Swal_Msg.Information')}`, `${this.translate.instant('Swal_Msg.Clo_Acc_Tra_Acc')}`, 'info')
        this.resetgrid();
      }
    }
  }

  //transfer and cash radio button effect
  isFormA(value) {
    if (value == 1) {
      this.isTransfer = false
      this.multigrid = []
    }
    else if (value == 2) {
      this.isTransfer = true
      this.multigrid = []
    }
  }


  //get Narration Details 
  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
    this.narrationField.nativeElement.focus()
  }

  //get Narration Details 
  getFormNarration(ele) {
    this.narration = ele;
    let el: HTMLElement = this.triggerNarrationhide.nativeElement;
    el.click();
  }
  Status
  showCustomerDeatils() {
    //  this.signture = ''
    // this.customerImg = ''
    this.customerImg = 'assets/images/nouser.png';
    this.signture = 'assets/images/nosignature.png'
    if (this.angForm.controls['account_no'].value != null) {
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

  //movable
  isOptionTooLong(option: any): boolean {
    const selectedText = option.label + ' ' + option.name;
    return selectedText.length > 40;
  }

  submit() {
    let formValue = this.angForm.value
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
    if (formValue.SAVING_PIGMY == 'FormT' && comparison != this.transferTotalAmount) {
      // Swal.fire("Warning!", `Transfer Amount should be  Rs.${comparison}!`, "info");
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.W8')}${comparison}!`, "info");
    }
    else if ((formValue.SAVING_PIGMY == 'FormT' && comparison == this.transferTotalAmount) || formValue.SAVING_PIGMY == 'FormC') {
      let dataToSend = {
        TRAN_DATE: this.date,
        TRAN_TYPE: formValue.SAVING_PIGMY == 'FormT' ? 'TR' : 'CS',
        BRANCH_CODE: this.selectedBranch,
        TRAN_ACNOTYPE: 'TD',
        TRAN_ACTYPE: this.selectedScheme,
        TRAN_ACNO: this.bankacno,
        SURCHARGE_AMOUNT: formValue.SURCHARGE_AMT,
        PENAL_INTEREST_AMOUNT: formValue.PENAL_INT,
        NET_INTEREST_AMOUNT: formValue.NET_INTAMT,
        EXCESS_INTEREST: this.NET_EXC_INTAMT >= 0 ? 0 : this.NET_EXC_INTAMT,
        TOTAL_INTEREST_AMOUNT: formValue.TOTAL_INT,
        NET_PAYABLE_AMOUNT: formValue.NETPAYABLEAMT,
        INTEREST_RATE: formValue.InterestRate,
        IS_PREMATURE_CLOSE: this.preMature == true ? 1 : 0,
        NARRATION: formValue.narration,
        // TOKEN_NO: formValue.Token_Num,
        PAYABLE_INTEREST_AMOUNT: formValue.PAYABLE_INTAMT,
        CHEQUE_NO: formValue.chequeNo,
        TDS_AMT: formValue.TDS_AMT,
        USER: result.id,
        LEDGER_BAL: formValue.LEDGER_BAL,
        CHEQUE_DATE: (formValue.ChequeDate == '' || formValue.ChequeDate == 'Invalid date') ? '' : moment(formValue.ChequeDate).format('DD/MM/YYYY'),
        PAID_INTEREST_AMOUNT: formValue.POSTED_INT,
        AFT_MATURE_INT_RATE: formValue.maturedInterest,
        AFT_MATURE_INT_AMT: formValue.maturedIntAmt,
        multigrid: this.multigrid
      }
      this._TDService.postData(dataToSend).subscribe(data => {
        // this.getVoucherData();
        const successMessage = `Account Closed Successfully ! <b> Please Note Voucher Number </b> <br> ${data.TRAN_NO}`;
        // Swal.fire('Success!', successMessage, 'success');
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, successMessage, 'success');

        let totalDebit = formValue.amount;
        let totalCredit = data.NET_PAYABLE_AMOUNT;
        let difference = totalCredit - totalDebit;

        this.totalDebit = totalDebit;
        this.totalCredit = totalCredit;
        this.difference = difference;
        this.transferTotalAmount = 0
        this.multigrid = []
        this.customerImg = 'assets/images/nouser.png';
        this.signture = 'assets/images/nosignature.png'
        this.DayOpBal = null
        this.Pass = null
        this.INTRATE = null
        this.lastIntDate = null
        this.opDate = null
        this.asOnDate = null
        this.maturityDate = null
        this.recNo = null
        this.operator = null
        this.months = null
        this.days = null
        this.interestCategory = null
        this.preMature = null
        this.resetForm()
      }, err => {
        console.log(err);
      })
    }
  }

  //   resetForm() {

  //     let branchCode = this.angForm.controls['branch_code'].value;
  //     let date = this.angForm.controls['date'].value;

  //     this.angForm.reset({
  //         branch_code: branchCode,
  //         date: date
  //     });


  //     this.DayOpBal = null;
  //     this.Pass = null;
  //     this.Unpass = null;
  //     this.overdraftAmt = null;
  //     this.opendate = null;
  //     this.asondate = null;
  //     this.sanctiondate = null;
  //     this.expirydate = null;
  //     this.renewaldate = null;
  //     this.sanctionamt = null;
  //     this.depositamt = null;
  //     this.maturityamt = null;
  //     this.ClearBalance = null;
  //     this.AfterVoucher = null;


  //     if (this.headData) {
  //         this.headData = [];
  //     }

  //     if (this.multigrid) {
  //         this.multigrid = [];
  //     }


  //     this.totalCredit = null;
  //     this.totalDebit = null;


  //     let data: any = localStorage.getItem('user');
  //     let result = JSON.parse(data);
  //     this.angForm.patchValue({
  //         branch_code: result.branch.id
  //     });

  //     this._service.getSysParaData().subscribe(data => {
  //         this.date = data[0].CURRENT_DATE;
  //         this.angForm.patchValue({
  //             date: this.date
  //         });
  //     });
  // }




  resetForm() {
    this.isTransfer = false
    this.customer = null
    this._service.getSysParaData().subscribe(data => {
      this.date = data[0].CURRENT_DATE;
    })
    this.createForm()

  }

  resetgrid() {
    this.angForm.controls["Tscheme"].reset();
    this.angForm.controls["particulars"].reset();
    this.angForm.controls["TschemeAC"].reset();
    this.angForm.controls["amount"].reset();
    this.angForm.controls["scheme1"].reset();
    this.angForm.controls["scheme_type"].reset();
    this.angForm.controls["ac_no"].reset();

    this.angForm.controls["tran_mode"].reset();
    this.angForm.controls["total_amt"].reset();
    this.angForm.controls["chequeNo"].reset();
    this.angForm.controls["ChequeDate"].reset();

  }


  //get Amount Details
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

  totalNetAmt
  showHide(reportId) {

    var ev = document.getElementById(reportId).hidden;
    if (ev) {
      document.getElementById(reportId).hidden = false;
    } else {
      document.getElementById(reportId).hidden = true;
    }
  }

  deleteData(index) {
    this.mainMaster.splice(index, 1);
  }

  updatecheckdata
  // editClickHandler(id) {
  //   this._TDService.getFormData(id).subscribe((data1) => {
  //     this.angForm.enable();
  //     this.updatecheckdata = data1
  //     if (data1.TRAN_STATUS == '0') {
  //       this.showButton = false;
  //       this.updateShow = true;
  //       this.newbtnShow = true;
  //       this.approveShow = true;
  //       this.rejectShow = true
  //       this.unapproveShow = false
  //     } else if (data1.TRAN_STATUS != '0') {
  //       this.showButton = false;
  //       this.updateShow = false;
  //       this.newbtnShow = true;
  //       this.approveShow = false;
  //       this.rejectShow = false
  //       this.unapproveShow = true
  //     } else {
  //       this.showButton = false;
  //       this.updateShow = false;
  //       this.newbtnShow = true;
  //       this.approveShow = false;
  //       this.rejectShow = false
  //       this.unapproveShow = false
  //     }
  //     this.date = data1.TRAN_DATE
  //     this.updateID = data1.id;
  //     this.getschemename = data1.TRAN_ACNOTYPE
  //     this.selectedScheme = Number(data1.TRAN_ACTYPE)
  //     this.selectedBranch = data1.BRANCH_CODE
  //     this.customerId = data1.customerID
  //     this.dormant = data1.dormant
  //     this.monthDays = data1.SCHEME.S_INTCALTP

  //     data1.IS_PREMATURE_CLOSE == '1' ? this.preMature = true : this.preMature = false
  //     this.getIntroducer()
  //     this.customer = data1.TRAN_ACNO
  //     this.bankacno = data1.TRAN_ACNO
  //     let mem = [this.bankacno, this.getschemename, this.selectedScheme]
  //     this.http.get(this.url + '/term-deposit-account-closing/details/' + mem).subscribe((data) => {
  //       if (Number(data[0].LedgerBal) > 0) {
  //         Swal.fire('Oops', 'Account cannot close', 'error')
  //         return
  //       }
  //       this.DayOpBal = data[0].AC_SCHMAMT
  //       this.Pass = data[0].AC_MATUAMT
  //       this.INTRATE = data[0].AC_INTRATE
  //       this.lastIntDate = data[0].AC_LINTEDT
  //       this.opDate = data[0].AC_OPDATE
  //       this.asOnDate = data[0].AC_ASON_DATE
  //       this.maturityDate = data[0].AC_EXPDT
  //       this.recNo = data[0].AC_REF_RECEIPTNO
  //       this.operator = data[0].operation
  //       this.months = data[0].AC_MONTHS
  //       this.days = data[0].AC_DAYS
  //       this.interestCategory = data[0].AC_INTCATA
  //       this.preMature = data[0].preMature

  //       this.angForm.patchValue({
  //         LEDGER_BAL: Number(Math.abs(data[0].LedgerBal)).toFixed(2),
  //         PAYABLE_INTAMT: Number(Math.abs(data[0].payableInterest)).toFixed(2),
  //         TDS_AMT: Number(data[0].tds_amt),
  //         PENAL_INT: Number(data[0].penalInterest)
  //       })
  //       if (this.isInterestApplicable == '1') {
  //         this.angForm.patchValue({
  //           InterestRate: data[0].AC_INTRATE
  //         })
  //         this.intRateShow = data[0].AC_INTRATE
  //       }
  //       else {
  //         this.angForm.patchValue({
  //           InterestRate: '0'
  //         })
  //         this.intRateShow = 0
  //       }
  //       if (data[0].post_Interest < 0) {
  //         this.angForm.patchValue({
  //           // EXCESS_INT: Number(data[0].post_Interest).toFixed(2),
  //           NET_INTAMT: Number(data[0].post_Interest).toFixed(0),
  //           POSTED_INT: 0,
  //         })
  //         this.NET_EXC_INTAMT = Number(data[0].post_Interest)
  //       }
  //       else if (data[0].post_Interest > 0) {
  //         this.angForm.patchValue({
  //           POSTED_INT: Number(data[0].post_Interest).toFixed(2),
  //           NET_INTAMT: 0
  //           // EXCESS_INT: 0
  //         })
  //         this.NET_EXC_INTAMT = 0
  //       }
  //       else {
  //         this.angForm.patchValue({
  //           POSTED_INT: 0,
  //           NET_INTAMT: 0
  //           // EXCESS_INT: 0
  //         })
  //         this.NET_EXC_INTAMT = 0
  //       }

  //       if (data[0].preMature == '1') {
  //         this.angForm.patchValue({
  //           InterestRate: Number(data[0].prematureRate) - Number(this.prematureRate)
  //         })
  //         this.afterMaturedInt = false
  //         this.intRateShow = Number(data[0].prematureRate) - Number(this.prematureRate)
  //         this.getMonthDays()
  //       }
  //       else {
  //         this.angForm.patchValue({
  //           InterestRate: data[0].AC_INTRATE
  //         })
  //         this.intRateShow = data[0].AC_INTRATE
  //         if (this.interestUptoCalDate == '1') {
  //           this.afterMaturedInt = false
  //           this.angForm.patchValue({
  //             TOTAL_INT: Math.round(data[0].InterestAmount)  //FUNCTION AMT
  //           })
  //         }
  //         else {
  //           this.afterMaturedInt = true
  //           var b = moment(this.maturityDate, "DD/MM/YYYY");
  //           var a = moment(this.date, "DD/MM/YYYY");
  //           let Days = b.diff(a, 'days');
  //           let total_int = Math.abs(Days * (parseFloat(this.angForm.controls['InterestRate'].value) / 100))
  //           this.angForm.patchValue({
  //             TOTAL_INT: Math.round(total_int)
  //           })
  //         }

  //         if (this.afterMatureIntRate != 0 && this.afterMatureIntRate != '') {
  //           var b = moment(this.maturityDate, "DD/MM/YYYY");
  //           var a = (this.asOnDate != '' && this.asOnDate != null) ? moment(this.asOnDate, "DD/MM/YYYY") : moment(this.opDate, "DD/MM/YYYY")
  //           let maturedDays = Math.abs(a.diff(b, 'days'))
  //           let total_int = Math.abs(maturedDays * (parseFloat(this.afterMatureIntRate) / 100))
  //           this.angForm.patchValue({
  //             InterestRate: this.afterMatureIntRate,
  //             MaturedDays: maturedDays,
  //             TOTAL_INT: Math.round(total_int)
  //           })
  //           this.intRateShow = this.afterMatureIntRate
  //           this.afterMaturedInt = false
  //         }
  //         else {
  //           this.afterMaturedInt = true
  //           var b = moment(this.maturityDate, "DD/MM/YYYY");
  //           var a = moment(this.date, "DD/MM/YYYY")
  //           let maturedDays = Math.abs(a.diff(b, 'days'))
  //           this.angForm.patchValue({
  //             MaturedDays: maturedDays,
  //           })
  //         }
  //       }
  //       // let total_int = this.angForm.controls['TOTAL_INT'].value
  //       // let post_int = this.angForm.controls['POSTED_INT'].value
  //       // let netInt = (Math.abs(Number(total_int) - Number(post_int))).toFixed(0)
  //       // this.angForm.patchValue({
  //       //   NET_INTAMT: (netInt)
  //       // })
  //       // this.NET_EXC_INTAMT = Number(total_int) - Number(post_int)
  //       // let ledgerAmt = Number(this.angForm.controls['LEDGER_BAL'].value)
  //       // let netAmt = Number(this.angForm.controls['NET_INTAMT'].value)
  //       // let TDSAmt = Number(this.angForm.controls['TDS_AMT'].value)
  //       // let surchargeAmt = Number(this.angForm.controls['SURCHARGE_AMT'].value)
  //       // let penalAmt = Number(this.angForm.controls['PENAL_INT'].value)
  //       // this.totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (ledgerAmt + netAmt - TDSAmt - surchargeAmt - penalAmt).toFixed(2) : (ledgerAmt - Math.abs(netAmt) - TDSAmt - surchargeAmt - penalAmt).toFixed(2)
  //       // this.angForm.patchValue({
  //       //   NETPAYABLEAMT: this.totalNetAmt
  //       // })
  //       // this.getNetPayAmount()
  //       if (data1.TRAN_TYPE == 'TR') {
  //         this.isTransfer = true
  //         this.multigrid = data1.multigrid
  //       }
  //       else {
  //         this.isTransfer = false
  //       }
  //       this.transferTotalAmount = Number(data1.NET_PAYABLE_AMOUNT)
  //       this.angForm.patchValue({
  //         type: data1.TRAN_TYPE == 'CS' ? 'cash' : data1.TRAN_TYPE == 'TR' ? 'transfer' : '',
  //         TRAN_NO: data1.TRAN_NO,
  //         branch_code: data1.BRANCH_CODE,
  //         selectedScheme: Number(data1.SCHEME.S_NAME),
  //         ac_no: data1.TRAN_ACNO,
  //         date: data1.TRAN_DATE,
  //         SAVING_PIGMY: data1.TRAN_TYPE == 'CS' ? 'FormC' : 'FormT',
  //         chequeNo: data1.CHEQUE_NO,
  //         ChequeDate: data1.CHEQUE_DATE,
  //         LEDGER_BAL: Number(data1.LEDGER_BAL).toFixed(2),
  //         // Token_Num: data1.TOKEN_NO,
  //         PENAL_INT: data1.PENAL_INTEREST_AMOUNT,
  //         InterestRate: data1.INTEREST_RATE,
  //         maturedIntAmt: data1.AFT_MATURE_INT_AMT,
  //         maturedInterest: data1.AFT_MATURE_INT_RATE,
  //         POSTED_INT: data1.PAID_INTEREST_AMOUNT,
  //         TOTAL_INT: data1.TOTAL_INTEREST_AMOUNT,
  //         narration: data1.NARRATION,
  //         NET_INTAMT: data1.NET_INTEREST_AMOUNT,
  //         NETPAYABLEAMT: data1.NET_PAYABLE_AMOUNT,
  //         PAYABLE_INTAMT: Number(data1.PAYABLE_INTEREST_AMOUNT).toFixed(2),
  //         TDS_AMT: data1.TDS_AMOUNT,
  //         SURCHARGE_AMT: data1.SURCHARGE_AMOUNT,
  //         EXCESS_INT: data1.EXCESS_INT != 0 ? this.NET_EXC_INTAMT = data1.EXCESS_INT : this.NET_EXC_INTAMT = 0
  //       })
  //       // this.getEditData()
  //       this.showCustomerDeatils()
  //     })

  //   })
  // }



  //change by pooja and mahesh sir
  editClickHandler(id) {
    this._TDService.getFormData(id).subscribe((data1) => {
      this.angForm.enable();
      this.updatecheckdata = data1;


      if (data1.TRAN_STATUS == '0') {
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = true;
        this.rejectShow = true;
        this.unapproveShow = false;
      } else if (data1.TRAN_STATUS != '0') {
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
        this.unapproveShow = true;
      } else {
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
        this.unapproveShow = false;
      }


      this.date = data1.TRAN_DATE;
      this.updateID = data1.id;
      this.getschemename = data1.TRAN_ACNOTYPE;
      this.selectedScheme = Number(data1.TRAN_ACTYPE);
      this.selectedBranch = data1.BRANCH_CODE;
      this.customerId = data1.customerID;
      this.dormant = data1.dormant;
      this.monthDays = data1.SCHEME.S_INTCALTP;
      this.preMature = data1.IS_PREMATURE_CLOSE == '1';

      this.getIntroducer();
      this.customer = data1.TRAN_ACNO;
      this.bankacno = data1.TRAN_ACNO;

      this.http.get(this.url + '/term-deposit-account-closing/details/' + [this.bankacno, this.getschemename, this.selectedScheme])
        .subscribe((data) => {


          this.angForm.patchValue({
            LEDGER_BAL: Number(data[0].LedgerBal).toFixed(2),
            PAYABLE_INTAMT: Number(data[0].payableInterest).toFixed(2),
            TDS_AMT: Number(data[0].tds_amt),
            PENAL_INT: Number(data[0].penalInterest)
          });

          if (this.isInterestApplicable == '1') {
            this.angForm.patchValue({
              InterestRate: data[0].AC_INTRATE
            });
            this.intRateShow = data[0].AC_INTRATE;
          } else {
            this.angForm.patchValue({
              InterestRate: '0'
            });
            this.intRateShow = 0;
          }

          if (data[0].post_Interest < 0) {
            this.angForm.patchValue({
              NET_INTAMT: Number(data[0].post_Interest).toFixed(0),
              POSTED_INT: 0
            });
            this.NET_EXC_INTAMT = Number(data[0].post_Interest);
          } else if (data[0].post_Interest > 0) {
            this.angForm.patchValue({
              POSTED_INT: Number(data[0].post_Interest).toFixed(2),
              NET_INTAMT: 0
            });
            this.NET_EXC_INTAMT = 0;
          } else {
            this.angForm.patchValue({
              POSTED_INT: 0,
              NET_INTAMT: 0
            });
            this.NET_EXC_INTAMT = 0;
          }

          if (data[0].preMature == '1') {
            this.angForm.patchValue({
              InterestRate: Number(data[0].prematureRate) - Number(this.prematureRate)
            });
            this.afterMaturedInt = false;
            this.intRateShow = Number(data[0].prematureRate) - Number(this.prematureRate);
          } else {
            this.angForm.patchValue({
              InterestRate: data[0].AC_INTRATE
            });
            this.intRateShow = data[0].AC_INTRATE;
          }

          if (this.afterMatureIntRate != 0 && this.afterMatureIntRate != '') {
            this.angForm.patchValue({
              InterestRate: this.afterMatureIntRate
            });
            this.intRateShow = this.afterMatureIntRate;
            this.afterMaturedInt = false;
          } else {
            this.afterMaturedInt = true;
          }

          if (data1.TRAN_TYPE == 'TR') {
            this.isTransfer = true;
            this.multigrid = data1.multigrid;
          } else {
            this.isTransfer = false;
          }

          // this.transferTotalAmount = Number(data1.NET_PAYABLE_AMOUNT);
          this.angForm.patchValue({
            type: data1.TRAN_TYPE == 'CS' ? 'cash' : data1.TRAN_TYPE == 'TR' ? 'transfer' : '',
            TRAN_NO: data1.TRAN_NO,
            branch_code: data1.BRANCH_CODE,
            selectedScheme: Number(data1.SCHEME.S_NAME),
            ac_no: data1.TRAN_ACNO,
            date: data1.TRAN_DATE,
            SAVING_PIGMY: data1.TRAN_TYPE == 'CS' ? 'FormC' : 'FormT',
            chequeNo: data1.CHEQUE_NO,
            ChequeDate: data1.CHEQUE_DATE,
            LEDGER_BAL: Number(data1.LEDGER_BAL).toFixed(2),
            PENAL_INT: data1.PENAL_INTEREST_AMOUNT,
            InterestRate: data1.INTEREST_RATE,
            maturedIntAmt: data1.AFT_MATURE_INT_AMT,
            maturedInterest: data1.AFT_MATURE_INT_RATE,
            POSTED_INT: data1.PAID_INTEREST_AMOUNT,
            TOTAL_INT: data1.TOTAL_INTEREST_AMOUNT,
            narration: data1.NARRATION,
            NET_INTAMT: data1.NET_INTEREST_AMOUNT,
            NETPAYABLEAMT: data1.NET_PAYABLE_AMOUNT,
            PAYABLE_INTAMT: Number(data1.PAYABLE_INTEREST_AMOUNT).toFixed(2),
            TDS_AMT: data1.TDS_AMOUNT,
            SURCHARGE_AMT: data1.SURCHARGE_AMOUNT,
            EXCESS_INT: data1.EXCESS_INT != 0 ? data1.EXCESS_INT : 0
          });
          this.totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0
            ? (Number(this.angForm.controls['LEDGER_BAL'].value) + Number(this.angForm.controls['NET_INTAMT'].value) - Number(this.angForm.controls['TDS_AMT'].value) - Number(this.angForm.controls['SURCHARGE_AMT'].value) - Number(this.angForm.controls['PENAL_INT'].value)).toFixed(2)
            : (Number(this.angForm.controls['LEDGER_BAL'].value) - Math.abs(Number(this.angForm.controls['NET_INTAMT'].value)) - Number(this.angForm.controls['TDS_AMT'].value) - Number(this.angForm.controls['SURCHARGE_AMT'].value) - Number(this.angForm.controls['PENAL_INT'].value)).toFixed(2);

          this.totalAmt = Number(this.NET_EXC_INTAMT) >= 0
            ? (Number(this.angForm.controls['LEDGER_BAL'].value) + Number(this.angForm.controls['NET_INTAMT'].value) - Number(this.angForm.controls['TDS_AMT'].value) - Number(this.angForm.controls['SURCHARGE_AMT'].value) - Number(this.angForm.controls['PENAL_INT'].value)).toFixed(2)
            : (Number(this.angForm.controls['LEDGER_BAL'].value) - Math.abs(Number(this.angForm.controls['NET_INTAMT'].value)) - Number(this.angForm.controls['TDS_AMT'].value) - Number(this.angForm.controls['SURCHARGE_AMT'].value) - Number(this.angForm.controls['PENAL_INT'].value)).toFixed(2);


          this.angForm.patchValue({
            NETPAYABLEAMT: this.totalNetAmt
          });

          this.showCustomerDeatils();
        });
    });
  }


  updateData() {
    let formValue = this.angForm.value
    if (formValue.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLEAMT'].value) != this.transferTotalAmount) {
      // Swal.fire("Warning!", "Please Check Net Payable Amount and Transfer Amount!", "info");
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`,`${this.translate.instant('Swal_Msg.W11')}`, "info");
    }
    else if ((formValue.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLEAMT'].value) == this.transferTotalAmount) || formValue.SAVING_PIGMY == 'FormC') {
      let ChequeDate
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let dataToSend = {
        id: this.updateID,
        TRAN_NO: formValue.TRAN_NO,
        TRAN_DATE: this.date,
        TRAN_TYPE: formValue.SAVING_PIGMY == 'FormT' ? 'TR' : 'CS',
        BRANCH_CODE: this.selectedBranch,
        TRAN_ACNOTYPE: 'TD',
        TRAN_ACTYPE: this.selectedScheme,
        TRAN_ACNO: this.bankacno,
        LEDGER_BAL: formValue.LEDGER_BAL,
        SURCHARGE_AMOUNT: formValue.SURCHARGE_AMT,
        PENAL_INTEREST_AMOUNT: formValue.PENAL_INT,
        NET_INTEREST_AMOUNT: formValue.NET_INTAMT,
        EXCESS_INTEREST: this.NET_EXC_INTAMT >= 0 ? 0 : this.NET_EXC_INTAMT,
        TOTAL_INTEREST_AMOUNT: formValue.TOTAL_INT,
        NET_PAYABLE_AMOUNT: formValue.NETPAYABLEAMT,
        INTEREST_RATE: formValue.InterestRate,
        IS_PREMATURE_CLOSE: this.preMature == true ? 1 : 0,
        NARRATION: formValue.narration,
        // TOKEN_NO: formValue.Token_Num,
        PAYABLE_INTEREST_AMOUNT: formValue.PAYABLE_INTAMT,
        CHEQUE_NO: formValue.chequeNo,
        TDS_AMT: formValue.TDS_AMT,
        USER: result.id,
        PAID_INTEREST_AMOUNT: formValue.POSTED_INT,
        AFT_MATURE_INT_RATE: formValue.maturedInterest,
        AFT_MATURE_INT_AMT: formValue.maturedIntAmt,
        multigrid: this.multigrid
      }
      if (this.updatecheckdata.CHEQUE_DATE != formValue.ChequeDate) {
        (formValue.ChequeDate == 'Invalid date' || formValue.ChequeDate == '' || formValue.ChequeDate == null) ? (ChequeDate = '', formValue['ChequeDate'] = ChequeDate) : (ChequeDate = formValue.ChequeDate, dataToSend['CHEQUE_DATE'] = moment(ChequeDate).format('DD/MM/YYYY'))
      } else {
        dataToSend['CHEQUE_DATE'] = formValue.ChequeDate
      }
      this._TDService.updateData(dataToSend).subscribe(data => {
        // this.getVoucherData();
        this.angForm.enable()
        // Swal.fire('Success!', 'Account Close Updated Successfully !', 'success');
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.W12')}`, 'success');
        this.multigrid = []
        this.resetForm()
        var button = document.getElementById('trigger');
        button.click();
      }, err => {
        console.log(err);
      })
    }
  }
  getVoucherData(item) {
    this.hideShow1 = true
    this.hideShow = false
    this.submitAccountNo = item;
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
        // Swal.fire('Oops!', 'Access dined Account Close Already!', 'error');
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.O_Msg3')}`, 'error');
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
  addNewData() {
    this.showButton = true;
    this.angForm.enable()
    this.updateShow = false;
    this.newbtnShow = true;
    this.resetForm();
  }

  //approve account
  Approve() {
    let ChequeDate
    let formValue = this.angForm.value
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let dataToSend = {
      id: this.updateID,
      TRAN_NO: formValue.TRAN_NO,
      TRAN_DATE: this.date,
      TRAN_TYPE: formValue.SAVING_PIGMY == 'FormT' ? 'TR' : 'CS',
      BRANCH_CODE: this.selectedBranch,
      TRAN_ACNOTYPE: 'TD',
      TRAN_ACTYPE: this.selectedScheme,
      TRAN_ACNO: this.bankacno,
      LEDGER_BAL: formValue.LEDGER_BAL,
      SURCHARGE_AMOUNT: formValue.SURCHARGE_AMT,
      PENAL_INTEREST_AMOUNT: formValue.PENAL_INT,
      NET_INTEREST_AMOUNT: formValue.NET_INTAMT,
      TOTAL_INTEREST_AMOUNT: formValue.TOTAL_INT,
      NET_PAYABLE_AMOUNT: formValue.NETPAYABLEAMT,
      INTEREST_RATE: formValue.InterestRate,
      IS_PREMATURE_CLOSE: this.preMature == true ? 1 : 0,
      NARRATION: formValue.narration,
      // TOKEN_NO: formValue.Token_Num,
      PAYABLE_INTEREST_AMOUNT: formValue.PAYABLE_INTAMT,
      CHEQUE_NO: formValue.chequeNo,
      TDS_AMT: formValue.TDS_AMT,
      USER: result.USER_NAME,
      PAID_INTEREST_AMOUNT: formValue.POSTED_INT,
      AFT_MATURE_INT_RATE: formValue.maturedInterest,
      AFT_MATURE_INT_AMT: formValue.maturedIntAmt,
      EXCESS_INTEREST: this.NET_EXC_INTAMT >= 0 ? 0 : formValue.EXCESS_INT,
      userID: result.id,
      multigrid: this.multigrid
    }
    if (this.updatecheckdata.CHEQUE_DATE != formValue.ChequeDate) {
      (formValue.ChequeDate == 'Invalid date' || formValue.ChequeDate == '' || formValue.ChequeDate == null) ? (ChequeDate = '', formValue['ChequeDate'] = ChequeDate) : (ChequeDate = formValue.ChequeDate, dataToSend['CHEQUE_DATE'] = moment(ChequeDate).format('DD/MM/YYYY'))
    } else {
      dataToSend['CHEQUE_DATE'] = formValue.ChequeDate
    }
    this._TDService.approve(dataToSend).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        // 'Approved',
        // 'Term Deposit Account Closing Approved Successfully',
        // 'success'
        `${this.translate.instant('Swal_Msg.Approve')}`,
        `${this.translate.instant('Swal_Msg.W13')}`,
        'success'
      );
      // this.child.reload()
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }


  //reject account
  reject() {
    let ChequeDate
    let formValue = this.angForm.value
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let dataToSend = {
      LEDGER_BAL: formValue.LEDGER_BAL,
      id: this.updateID,
      TRAN_NO: formValue.TRAN_NO,
      TRAN_DATE: this.date,
      TRAN_TYPE: formValue.SAVING_PIGMY == 'FormT' ? 'TR' : 'CS',
      BRANCH_CODE: this.selectedBranch,
      TRAN_ACNOTYPE: 'TD',
      TRAN_ACTYPE: this.selectedScheme,
      TRAN_ACNO: this.bankacno,
      SURCHARGE_AMOUNT: formValue.SURCHARGE_AMT,
      PENAL_INTEREST_AMOUNT: formValue.PENAL_INT,
      NET_INTEREST_AMOUNT: formValue.NET_INTAMT,
      TOTAL_INTEREST_AMOUNT: formValue.TOTAL_INT,
      NET_PAYABLE_AMOUNT: formValue.NETPAYABLEAMT,
      INTEREST_RATE: formValue.InterestRate,
      IS_PREMATURE_CLOSE: this.preMature == true ? 1 : 0,
      NARRATION: formValue.narration,
      // TOKEN_NO: formValue.Token_Num,
      PAYABLE_INTEREST_AMOUNT: formValue.PAYABLE_INTAMT,
      CHEQUE_NO: formValue.chequeNo,
      TDS_AMT: formValue.TDS_AMT,
      USER: result.USER_NAME,
      PAID_INTEREST_AMOUNT: formValue.POSTED_INT,
      AFT_MATURE_INT_RATE: formValue.maturedInterest,
      AFT_MATURE_INT_AMT: formValue.maturedIntAmt,
      userID: result.id
    }
    if (this.updatecheckdata.CHEQUE_DATE != formValue.ChequeDate) {
      (formValue.ChequeDate == 'Invalid date' || formValue.ChequeDate == '' || formValue.ChequeDate == null) ? (ChequeDate = '', formValue['ChequeDate'] = ChequeDate) : (ChequeDate = formValue.ChequeDate, dataToSend['CHEQUE_DATE'] = moment(ChequeDate).format('DD/MM/YYYY'))
    } else {
      dataToSend['CHEQUE_DATE'] = formValue.ChequeDate
    }
    this._TDService.reject(dataToSend).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        // 'Rejected',
        // 'Term Deposit Account Closing Rejected Successfully',
        // 'success'
        `${this.translate.instant('Swal_Msg.Rejected')}`,
        `${this.translate.instant('Swal_Msg.W14')}`,
         'success'
      );
      // this.child.reload()
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }
  public visibleAnimate = false;
  public visible = false;
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = true;
  unapproveShow: boolean = false;
  unApprove() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      LOG_DATE: this.logDate
    }
    this._TDService.unapprove(obj).subscribe(data => {
      Swal.fire(
        // 'Unapproved',
        // 'Account unapproved successfully',
        // 'success'
        `${this.translate.instant('Swal_Msg.Unapprove')}`,
        `${this.translate.instant('Swal_Msg.U_Msg')}`,
         'success'
      );
      this.angForm.enable()
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
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
    var button = document.getElementById('trigger');
    button.click();
    this.reloadTablePassing.emit();
  }

  // getBranch() {
  //   this.introducerACNo = null
  //   this.customer = null
  //   this.getIntroducer()
  // }
  branchCODE
  selectedAccountno
  // getBranch(ele) {
  //   this.branchCODE = ele
  //   this.selectedScheme = null
  //   this.selectedAccountno = null
  //   this.introducerACNo = []
  // }
  scheme_type

  ResetForm() {
    this.ngOnInit()
    this.resetForm()
    this.scheme_type = ''
    this.DayOpBal = 0
    this.Pass = 0
    this.INTRATE = 0
    this.lastIntDate = ''
    this.opDate = ''
    this.asOnDate = ''
    this.maturityDate = ''
    this.maturityDate1 = ''
    this.recNo = 0
    this.operator = ''
    this.months = 0
    this.days = 0
    this.interestCategory = ''
    this.preMature = false
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = true;

    if (this.headData) {
      this.headData = [];
    }

    if (this.multigrid) {
      this.multigrid = [];
    }

    this.totalCredit = null;
    this.totalDebit = null;

  }
}
