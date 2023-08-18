import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild, Output } from '@angular/core';
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
  introducerACNo
  type: any; //cash or transfer
  narrationList: any;
  syspara: any;
  // Created Form Group
  angForm: FormGroup;
  Pass: number = 0;
  Unpass: number = 0;
  ClearBalance: number = 0;
  AfterVoucher: number = 0;
  InputHeadAmt: number = 0.00;
  EditFlag: boolean = false;
  index: number;
  isture: boolean = true;

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
    { key: 'AG', data: { cash: [1, 4, 5], transfer: [1, 4] } },
    { key: 'SB', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5] } },
    { key: 'CA', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5] } },
    { key: 'CC', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5, 9] } },
    { key: 'DS', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9, 15] } },
    { key: 'LN', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9, 15] } },
    { key: 'GL', data: { cash: [1, 4], transfer: [1, 4] } },
    { key: 'GS', data: { cash: [1, 4], transfer: [1, 4] } },
    { key: 'SH', data: { cash: [1, 4, 5, 7], transfer: [1, 4, 5, 7] } },
    { key: 'IV', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9] } },
    { key: 'PG', data: { cash: [1, 4, 5, 10], transfer: [1, 4, 5, 10] } },
    { key: 'TD', data: { cash: [1, 4, 5, 6, 10], transfer: [1, 4, 5, 6, 9, 10] } },
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
  totalAmt: any;
  showChequeDetails: boolean = false;
  DayOpBal: number = 0.00;
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
  constructor(public TransactionCashModeService: TransactionCashModeService,
    public TransactionTransferModeService: TransactionTransferModeService,
    public SchemeTypeService: SchemeTypeService,
    private ownbranchMasterService: OwnbranchMasterService,
    private _service: MultiVoucherService,
    private savingMasterService: SavingMasterService,
    private schemeAccountNoService: SchemeAccountNoService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private _TDService: TermDepositAccountClosingService,
    private _CustomerIdService: CustomerIdService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter: SystemMasterParametersService,) {
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

    //Narration List
    this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      branch_code: ['', [Validators.required]],
      temp_over_draft: [''],
      over_draft: [''],
      token: [''],
      slip_no: [''],
      account_no: ['', [Validators.required]],
      scheme: ['', [Validators.required]],
      scheme_type: [''],
      date: [''],
      type: new FormControl('cash'),
      POSTED_INT: [0],
      Intdate: [''],
      SAVING_PIGMY: ['FormC'],
      chequeNo: ['', [Validators.pattern]],
      ChequeDate: ['', [Validators.pattern]],
      // Token_Num: ['', [Validators.pattern]],
      particulars: [null],
      amount: [, [Validators.pattern]],
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
      TRAN_NO: ['']
    });
    this._service.getSysParaData().subscribe(data => {
      this.date = data[0].CURRENT_DATE;
      this.angForm.patchValue({
        date: this.date
      })
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['branch_code'].enable()
      this.selectedBranch = result.branch.id
    }
    else {
      this.angForm.controls['branch_code'].disable()
      this.angForm.patchValue({
        'branch_code': result.branch.id
      })
      this.selectedBranch = result.branch.id
    }
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

  dormant
  schemechange(event) {
    this.getschemename = event.name
    this.selectedScheme = event.value
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

  //get account no according scheme for introducer
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
  getAccountDetails(event) {
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
      else if (data[0].ISLIEN == true) {
        Swal.fire('Oops', 'Account is liened so account cannot close', 'error')
        this.customer = null
        return
      }
      if (Number(data[0].LedgerBal) >= 0) {
        Swal.fire('Oops', 'Balance is insufficient so account cannot close', 'error')
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
        this.intRateShow = Number(data[0].prematureRate) - Number(this.prematureRate)
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
          var a1 = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
          var b1 = moment(this.maturityDate, "DD/MM/YYYY")
          var b = moment(b1, 'DD/MM/YYYY')
          var a = moment(this.date, "DD/MM/YYYY");
          let Days = a1.diff(b1, 'days');
          let total_int = Math.abs(Number(Math.abs(data[0].LedgerBal)) * Days * (parseFloat(this.angForm.controls['InterestRate'].value) / 36500))
          this.angForm.patchValue({
            TOTAL_INT: Math.round(total_int)
          })
        }

        if (this.afterMatureIntRate != 0 && this.afterMatureIntRate != '') {
          // var b = moment(this.date, "DD/MM/YYYY");
          // var a = this.lastIntDate != '' && this.lastIntDate != null ? moment(this.lastIntDate, 'DD/MM/YYYY') : (this.asOnDate != '' && this.asOnDate != null) ? moment(this.asOnDate, "DD/MM/YYYY") : moment(this.opDate, "DD/MM/YYYY")
          // let maturedDays = Math.abs(a.diff(b, 'days'))
          // let total_int = Number(this.angForm.controls['TOTAL_INT'].value) + Math.abs(maturedDays * (parseFloat(this.afterMatureIntRate) / 100))
          this.angForm.patchValue({
            InterestRate: this.afterMatureIntRate,
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
        else {
          var a1 = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
          this.afterMaturedInt = true
          var b = moment(this.maturityDate, "DD/MM/YYYY");
          var a = moment(this.date, "DD/MM/YYYY")
          let maturedDays = Math.abs(a1.diff(b, 'days'))
          this.angForm.patchValue({
            MaturedDays: maturedDays,
          })
        }
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
    let totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (Math.abs(ledgerAmt + netAmt - TDSAmt - surchargeAmt - penalAmt)).toFixed(2) : (Math.abs(ledgerAmt - Math.abs(netAmt) - TDSAmt - surchargeAmt - penalAmt)).toFixed(2)
    this.preMature == false ? totalNetAmt = (Number(totalNetAmt) + Number(this.angForm.controls['PAYABLE_INTAMT'].value)).toFixed(2) : totalNetAmt = totalNetAmt
    this.angForm.patchValue({
      NETPAYABLEAMT: totalNetAmt
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
        this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
    }
  }
  getTransferAccountDeatil(event) {
    this.transferAccountDetails = event
  }

  transferGrid
  jointShowButton: boolean = true
  jointUpdateShow: boolean = false
  transferACID: number
  transferIndex: number
  transferTotalAmount: number = 0
  //transfer account grid functions
  addTransferAccount() {

    this.formSubmitted = true;
    let formVal = this.angForm.value;
    var object = {
      Scheme: this.transferSchemeDetails.id,
      TRANSFER_ACNOTYPE: this.transferSchemeDetails.name,
      TRANSFER_ACNO: formVal.TschemeAC,
      TRANSFER_ACTYPE: this.selectedTransScheme,
      ACNO: this.ngacno,
      NARRATION: formVal.particulars,
      TRAN_AMOUNT: formVal.amount,
      AC_CLOSED: '0'
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
    else if (this.multigrid.find(ob => ob['TRANSFER_ACNO'] === object.TRANSFER_ACNO)) {
      Swal.fire('Info', 'This Account is Already Exists!', 'error');
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
              this.resetgrid();
            }
            else {
              Swal.fire('info', `Amount Must be less than or same as ${termAmount}`, 'info')
              this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            }
          }
          else {
            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
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
              if (comparison >= this.transferTotalAmount) {
                this.multigrid.push(object);
                this.resetgrid();
              }
              else {
                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
                Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
              }
            }
            else if (Number(ledgerBal) > Number(formVal.amount)) {
              this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
              let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
              if (comparison >= this.transferTotalAmount) {
                this.multigrid.push(object);
                this.resetgrid();
              }
              else {
                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
                Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
              }
            }
            else if (Number(ledgerBal) < Number(formVal.amount)) {
              Swal.fire('info', `Amount Is Greater Than Closing Balance`, 'info')
            }
          })
        }
        else {
          this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
          let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
          if (comparison >= this.transferTotalAmount) {
            this.multigrid.push(object);
            this.resetgrid();
          }
          else {
            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
          }
        }
      }
      else {
        Swal.fire('info', 'Closing Account And Transfer Account Cannot Be Same', 'info')
        this.resetgrid();
      }
    }
  }

  editTransferAccount(id) {
    this.transferIndex = id
    this.transferACID = this.multigrid[id].id;
    this.transferGrid = this.multigrid[id]
    this.jointShowButton = false;
    this.jointUpdateShow = true;
    this.angForm.patchValue({
      particulars: this.multigrid[id].NARRATION,
      amount: this.multigrid[id].TRAN_AMOUNT
    })
    this.ngacno = this.multigrid[id].ACNO
    this.selectedTransScheme = this.multigrid[id].TRANSFER_ACTYPE
  }

  updateTransferAcccount() {
    let index = this.transferIndex;
    let formVal = this.angForm.value;
    var object = {
      Scheme: this.transferSchemeDetails.id,
      TRANSFER_ACNOTYPE: this.transferSchemeDetails.name,
      TRANSFER_ACNO: formVal.TschemeAC,
      TRANSFER_ACTYPE: this.selectedTransScheme,
      ACNO: this.ngacno,
      NARRATION: formVal.particulars,
      TRAN_AMOUNT: formVal.amount,
      id: this.transferACID
    }
    if (formVal.Tscheme == "" || formVal.Tscheme == null) {
      Swal.fire("Warning!", "Please Select Scheme!", "error");
    } else if (formVal.TschemeAC == "" || formVal.TschemeAC == null) {
      Swal.fire(
        "Warning!",
        "Please Select Acoount!",
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
              Swal.fire('info', `Amount Must be less than or same as ${termAmount}`, 'info')
              this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            }
          }
          else {
            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')

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
                Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
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
          let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
          this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
          if (Number(this.angForm.controls['NETPAYABLEAMT'].value) >= this.transferTotalAmount) {
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

  submit() {
    let formValue = this.angForm.value
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
    if (formValue.SAVING_PIGMY == 'FormT' && comparison != this.transferTotalAmount) {
      Swal.fire("Warning!", `Transfer Amount should be  Rs.${comparison}!`, "info");
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
        Swal.fire('Success!', 'Account Closed Successfully !', 'success');
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

  }


  //get Amount Details
  getAmt(ele) {
    this.totalAmt = ele.target.value + '.00';
  }

  //decimal content show purpose wrote below function
  decimalAllContent($event) {
    let value = Number($event.target.value);
    let data = value.toFixed(2);
    $event.target.value = data;
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
  editClickHandler(id) {
    this._TDService.getFormData(id).subscribe((data1) => {
      this.updatecheckdata = data1
      if (data1.TRAN_STATUS == '0') {
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = true;
        this.rejectShow = true
        this.unapproveShow = false
      } else if (data1.TRAN_STATUS != '0') {
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
      this.date = data1.TRAN_DATE
      this.updateID = data1.id;
      this.getschemename = data1.TRAN_ACNOTYPE
      this.selectedScheme = Number(data1.TRAN_ACTYPE)
      this.selectedBranch = data1.BRANCH_CODE
      this.customerId = data1.customerID
      this.dormant = data1.dormant
      data1.IS_PREMATURE_CLOSE == '1' ? this.preMature = true : this.preMature = false
      this.getIntroducer()
      this.customer = data1.TRAN_ACNO
      this.bankacno = data1.TRAN_ACNO
      let mem = [this.bankacno, this.getschemename, this.selectedScheme]
      this.http.get(this.url + '/term-deposit-account-closing/details/' + mem).subscribe((data) => {
        if (Number(data[0].LedgerBal) > 0) {
          Swal.fire('Oops', 'Account cannot close', 'error')
          return
        }
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
            POSTED_INT: Number(data[0].post_Interest).toFixed(2),
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
            InterestRate: Number(data[0].prematureRate) - Number(this.prematureRate)
          })
          this.afterMaturedInt = false
          this.intRateShow = Number(data[0].prematureRate) - Number(this.prematureRate)
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
        let totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (ledgerAmt + netAmt - TDSAmt - surchargeAmt - penalAmt).toFixed(2) : (ledgerAmt - Math.abs(netAmt) - TDSAmt - surchargeAmt - penalAmt).toFixed(2)
        this.angForm.patchValue({
          NETPAYABLEAMT: totalNetAmt
        })
        this.getNetPayAmount()
        if (data1.TRAN_TYPE == 'TR') {
          this.isTransfer = true
          this.multigrid = data1.multigrid
        }
        else {
          this.isTransfer = false
        }
        this.transferTotalAmount = Number(data1.NET_PAYABLE_AMOUNT)
        this.angForm.patchValue({
          TRAN_NO: data1.TRAN_NO,
          branch_code: data1.BRANCH_CODE,
          // scheme: Number(data1.TRAN_ACTYPE),
          // account_no: data1.TRAN_ACNO,
          date: data1.TRAN_DATE,
          SAVING_PIGMY: data1.TRAN_TYPE == 'CS' ? 'FormC' : 'FormT',
          chequeNo: data1.CHEQUE_NO,
          ChequeDate: data1.CHEQUE_DATE,
          LEDGER_BAL: Number(data1.LEDGER_BAL).toFixed(2),
          // Token_Num: data1.TOKEN_NO,
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
          EXCESS_INT: data1.EXCESS_INT != 0 ? this.NET_EXC_INTAMT = data1.EXCESS_INT : this.NET_EXC_INTAMT = 0
        })
        // this.getEditData()
        this.showCustomerDeatils()
      })

    })
  }

  updateData() {
    let formValue = this.angForm.value
    if (formValue.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLEAMT'].value) != this.transferTotalAmount) {
      Swal.fire("Warning!", "Please Check Net Payable Amount and Transfer Amount!", "info");
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
        Swal.fire('Success!', 'Account Close Updated Successfully !', 'success');
        this.multigrid = []
        this.resetForm()
        var button = document.getElementById('trigger');
        button.click();
      }, err => {
        console.log(err);
      })
    }
  }
  addNewData() {
    this.showButton = true;
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
      Swal.fire(
        'Approved',
        'Term Deposit Account Closing Approved Successfully',
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
      Swal.fire(
        'Rejected',
        'Term Deposit Account Closing Rejected Successfully',
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
        'Unapproved',
        'Account unapproved successfully',
        'success'
      );
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

  getBranch() {
    this.introducerACNo = null
    this.customer = null
    this.getIntroducer()
  }

  ResetForm() {
    this.ngOnInit()
    this.resetForm()
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
  }
}
