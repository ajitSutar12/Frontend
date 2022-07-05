import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
@Component({
  selector: 'app-term-deposit-account-closing',
  templateUrl: './term-deposit-account-closing.component.html',
  styleUrls: ['./term-deposit-account-closing.component.scss']
})
export class TermDepositAccountClosingComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('triggerNarrationhide') triggerNarrationhide: ElementRef<HTMLElement>;

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
  customerImg: string = '../../../../assets/images/user-card/img-round4.jpg';
  signture: string = '../../../../assets/sign/signture.jpg';
  Scheme
  multigrid = []

  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
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
    private schemeCodeDropdownService: SchemeCodeDropdownService,) {
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
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
      this.Scheme = data;
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
      POSTED_INT: [''],
      Intdate: [''],

      SAVING_PIGMY: [''],
      chequeNo: ['', [Validators.pattern]],
      ChequeDate: ['', [Validators.pattern]],
      Token_Num: ['', [Validators.pattern]],
      particulars: [''],
      amount: ['', [Validators.pattern, Validators.required]],
      ClosingQuaters: [''],
      QInterest: ['0.00'],
      ClosingMonth: [''],
      MInterest: ['0.00'],
      DInterest: ['23.05'],
      ClosingDays: [''],
      TDS_AMT: ['125'],
      SURCHARGE_AMT: ['75'],
      PENAL_INT: ['1.00'],
      EXCESS_INT: [''],
      InterestRate: [''],
      maturedIntAmt: [''],
      maturedInterest: [''],
      TOTAL_INT: [''],
      narration: ['', [Validators.required]],
      TschemeAC: [''],
      Tscheme: [''],
      MaturedDays: [''],
      NET_INTAMT: [''],
      NETPAYABLEAMT: [''],
      LEDGER_BAL: ['10000'],
      PAYABLE_INTAMT: ['1000'],
      TRAN_NO: ['']
    });
  }

  getschemename
  isInterestApplicable
  afterMaturedInt: boolean = false
  monthDays
  Quarterly
  prematureRate
  interestUptoCalDate
  afterMatureIntRate

  schemechange(event) {
    this.getschemename = event.name
    this.selectedScheme = event.value
    this.isInterestApplicable = event.intapp
    this.monthDays = event.monthDays
    this.Quarterly = event.Quarterly
    this.prematureRate = event.prematureRate
    this.interestUptoCalDate = event.interestUptoCalDate
    this.afterMatureIntRate = event.afterMatureIntRate
    this.getIntroducer()
  }

  //get account no according scheme for introducer
  getIntroducer() {
    this.introducerACNo = [];
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
  recNo
  operator
  months
  days
  interestCategory
  preMature: boolean = false
  getAccountDetails(event) {

    this.bankacno = event.bankacno
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

      if (this.isInterestApplicable == '1') {
        this.angForm.patchValue({
          InterestRate: data[0].AC_INTRATE
        })
      }
      else {
        this.angForm.patchValue({
          InterestRate: '0'
        })
      }
      if (data[0].post_Interest < 0) {
        this.angForm.patchValue({
          EXCESS_INT: data[0].post_Interest,
          POSTED_INT: 0,
        })
      }
      else if (data[0].post_Interest > 0) {
        this.angForm.patchValue({
          POSTED_INT: data[0].post_Interest,
          EXCESS_INT: 0
        })
      }
      else {
        this.angForm.patchValue({
          POSTED_INT: 0,
          EXCESS_INT: 0
        })
      }

      if (data[0].preMature == '1') {
        this.angForm.patchValue({
          InterestRate: parseFloat(data[0].prematureRate) - parseFloat(this.prematureRate)
        })
        this.afterMaturedInt = false
        this.getMonthDays()
      }
      else {
        this.angForm.patchValue({
          InterestRate: data[0].AC_INTRATE
        })
        if (this.interestUptoCalDate == '1') {
          this.afterMaturedInt = false
          this.angForm.patchValue({
            TOTAL_INT: '921.00'  //FUNCTION AMT
          })
        }
        else {
          this.afterMaturedInt = true
          var b = moment(this.maturityDate, "DD/MM/YYYY");
          var a = moment(this.date, "DD/MM/YYYY");
          let Days = b.diff(a, 'days');
          let total_int = Math.abs(Days * (parseFloat(this.angForm.controls['InterestRate'].value) / 100))
          this.angForm.patchValue({
            TOTAL_INT: total_int.toFixed(2)
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
            TOTAL_INT: total_int
          })
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
      let netInt = (total_int - post_int).toFixed(2)
      this.angForm.patchValue({
        NET_INTAMT: netInt
      })
    })
  }
  getNetPayAmount() {

    let ledgerAmt = this.angForm.controls['LEDGER_BAL'].value
    let netAmt = this.angForm.controls['NET_INTAMT'].value
    let TDSAmt = this.angForm.controls['TDS_AMT'].value
    let surchargeAmt = this.angForm.controls['SURCHARGE_AMT'].value
    let penalAmt = this.angForm.controls['PENAL_INT'].value
    let totalNetAmt = (ledgerAmt - netAmt - TDSAmt - surchargeAmt - penalAmt).toFixed(2)
    this.angForm.patchValue({
      NETPAYABLEAMT: totalNetAmt
    })

  }
  getNetInterest() {
    let total_int = this.angForm.controls['TOTAL_INT'].value
    let post_int = this.angForm.controls['POSTED_INT'].value
    let netInt = (total_int - post_int).toFixed(2)
    this.angForm.patchValue({
      NET_INTAMT: netInt
    })
  }
  getMaturedIntRate() {

    let maturedIntAmt = Math.abs(this.angForm.controls['MaturedDays'].value * (parseFloat(this.angForm.controls['maturedInterest'].value) / 100))
    let total_int = maturedIntAmt + parseFloat(this.angForm.controls['maturedInterest'].value)
    this.angForm.patchValue({
      maturedIntAmt: maturedIntAmt.toFixed(2),
      TOTAL_INT: total_int.toFixed(2)
    })
  }
  calQuarter: number = 0
  calMonths: number = 0
  calDays: number = 0
  calMonthDays: number = 0
  getMonthDays() {
    let Days: number = 0
    if (this.asOnDate != null && this.asOnDate != "") {
      var b = moment(this.asOnDate, "DD/MM/YYYY");
      var a = moment(this.date, "DD/MM/YYYY");
      Days = a.diff(b, 'days');
      if (this.Quarterly != '' && this.Quarterly == 'Quarterly') {
        this.calQuarter = Math.floor(a.diff(b, 'months') / 3)
        if (Days > 90)
          this.calDays = Days - 90
        this.calMonths = 0
      }
      else {
        Days = a.diff(b, 'days');
        if (this.monthDays == 'MonthProductBase') {
          this.calMonths = a.diff(b, 'months')
          this.calQuarter = 0
          this.calDays = 0
        }
        else if (this.monthDays == 'CalculationOnDays' || this.monthDays == 'DaysProductBase') {
          this.calDays = a.diff(b, 'days')
          this.calQuarter = 0
          this.calMonths = 0
        }
        else if (this.monthDays == 'Month&DaysBase') {
          this.calMonths = a.diff(b, 'months')
          this.calDays = a.diff(b, 'days')
          this.calDays = this.calDays - (this.calMonths * 30)
          this.calQuarter = 0
        }
      }
    }
    else {
      var b = moment(this.opDate, "DD/MM/YYYY");
      var a = moment(this.date, "DD/MM/YYYY");
      Days = a.diff(b, 'days');
      if (this.Quarterly != '' && this.Quarterly == 'Quarterly') {
        this.calQuarter = Math.floor(a.diff(b, 'months') / 3)
        if (Days > 90)
          this.calDays = Days - 90
        this.calMonths = 0
      }
      else {
        Days = a.diff(b, 'days');
        if (this.monthDays == 'MonthProductBase') {
          this.calMonths = a.diff(b, 'months')
          this.calQuarter = 0
          this.calDays = 0
        }
        else if (this.monthDays == 'CalculationOnDays' || this.monthDays == 'DaysProductBase') {
          this.calDays = a.diff(b, 'days')
          this.calQuarter = 0
          this.calMonths = 0
        }
        else if (this.monthDays == 'Month&DaysBase') {
          this.calMonths = a.diff(b, 'months')
          this.calDays = a.diff(b, 'days')
          this.calDays = this.calDays - (this.calMonths * 30)
          this.calQuarter = 0
        }
      }
    }
    this.angForm.patchValue({
      ClosingQuaters: this.calQuarter,
      ClosingMonth: this.calMonths,
      ClosingDays: this.calDays
    })

  }

  selectedTransScheme: any = null
  ngacno: any = null
  schemeACNo
  //get account no according scheme for transfer
  getTransferAccountList(event) {

    this.obj = [this.selectedTransScheme, this.selectedBranch]
    this.ngacno = null
    switch (event.name) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
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

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
    }
  }

  transferGrid
  jointShowButton: boolean = true
  jointUpdateShow: boolean = false
  transferACID: number
  transferIndex: number
  //transfer account grid functions
  addTransferAccount() {

    this.formSubmitted = true;
    const formVal = this.angForm.value;
    var object = {
      AC_NO: formVal.TschemeAC,
      AC_TYPE: this.selectedTransScheme,
      ACNO: this.ngacno,
      particulars: formVal.particulars,
      amount: formVal.amount,
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
    else {
      this.multigrid.push(object);
      this.resetgrid();
    }
  }

  editTransferAccount(id) {
    this.transferIndex = id
    this.transferACID = this.multigrid[id].id;
    this.transferGrid = this.multigrid[id]
    this.jointShowButton = false;
    this.jointUpdateShow = true;
    this.angForm.patchValue({
      particulars: this.multigrid[id].particulars,
      amount: this.multigrid[id].amount
    })
    this.ngacno = this.multigrid[id].ACNO
    this.selectedTransScheme = this.multigrid[id].AC_TYPE
  }

  updateTransferAcccount() {
    let index = this.transferIndex;
    this.jointShowButton = true;
    this.jointUpdateShow = false;
    const formVal = this.angForm.value;
    var object = {
      AC_NO: formVal.TschemeAC,
      AC_TYPE: this.selectedTransScheme,
      ACNO: this.ngacno,
      particulars: formVal.particulars,
      amount: formVal.amount,
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
    else {
      this.multigrid[index] = object
      this.resetgrid();
    }
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


  //get Narration Details 
  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  //get Narration Details 
  getFormNarration(ele) {
    this.narration = ele;
    let el: HTMLElement = this.triggerNarrationhide.nativeElement;
    el.click();
  }

  submit() {
    const formValue = this.angForm.value
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    const dataToSend = {
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
      TOKEN_NO: formValue.Token_Num,
      PAYABLE_INTEREST_AMOUNT: formValue.PAYABLE_INTAMT,
      CHEQUE_NO: formValue.chequeNo,
      TDS_AMT: formValue.TDS_AMT,
      USER: result.USER_NAME,
      CHEQUE_DATE: (formValue.ChequeDate == '' || formValue.ChequeDate == 'Invalid date') ? '' : moment(formValue.ChequeDate).format('DD/MM/YYYY'),
      PAID_INTEREST_AMOUNT: formValue.POSTED_INT,
      AFT_MATURE_INT_RATE: formValue.maturedInterest,
      AFT_MATURE_INT_AMT: formValue.maturedIntAmt
    }
    this._TDService.postData(dataToSend).subscribe(data => {
      // this.getVoucherData();
      Swal.fire('Success!', 'Account Closed Successfully !', 'success');
      this.multigrid = []
      this.resetForm()
    }, err => {
      console.log(err);
    })
  }

  resetForm() {
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


  update() {
    this.mainMaster[this.index] = this.angForm.value;
    this.showAdd = true;
    this.showUpdate = false;
    this.EditFlag = false;

    this.angForm.controls['temp_over_draft'].reset()
    this.angForm.controls['over_draft'].reset()
    this.angForm.controls['token'].reset()
    this.angForm.controls['particulars'].reset()
    this.angForm.controls['total_amt'].reset()
    this.angForm.controls['amt'].reset()
    this.angForm.controls['slip_no'].reset()
    this.angForm.controls['tran_mode'].reset()
    this.angForm.controls['account_no'].reset()
    this.angForm.controls['scheme'].reset()
    this.angForm.controls['scheme_type'].reset()
    this.angForm.controls['type'].reset()
    this.angForm.controls['chequeDate'].reset()
    this.angForm.controls['chequeDate'].reset()
    this.angForm.controls['chequeNo'].reset()
    this.angForm.controls['bank'].reset()
    // this.getVoucherData();
    this.headData = [];
    this.headShow = false;
    this.showChequeDetails = false;
  }
  updatecheckdata
  editClickHandler(id) {
    this._TDService.getFormData(id).subscribe((data) => {
      this.updatecheckdata = data
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
      this.getschemename = data.TRAN_ACNOTYPE
      this.selectedScheme = Number(data.TRAN_ACTYPE)
      this.selectedBranch = data.BRANCH_CODE
      data.IS_PREMATURE_CLOSE == '1' ? this.preMature = true : this.preMature = false
      this.getIntroducer()
      this.customer = data.TRAN_ACNO
      this.bankacno = data.TRAN_ACNO
      this.angForm.patchValue({
        TRAN_NO: data.TRAN_NO,
        branch_code: data.BRANCH_CODE,
        // scheme: Number(data.TRAN_ACTYPE),
        // account_no: data.TRAN_ACNO,
        date: data.TRAN_DATE,
        SAVING_PIGMY: data.TRAN_TYPE == 'CS' ? 'FormC' : 'FormT',
        chequeNo: data.CHEQUE_NO,
        ChequeDate: data.CHEQUE_DATE,
        Token_Num: data.TOKEN_NO,
        PENAL_INT: data.PENAL_INTEREST_AMOUNT,
        InterestRate: data.INTEREST_RATE,
        maturedIntAmt: data.AFT_MATURE_INT_AMT,
        maturedInterest: data.AFT_MATURE_INT_RATE,
        POSTED_INT: data.PAID_INTEREST_AMOUNT,
        TOTAL_INT: data.TOTAL_INTEREST_AMOUNT,
        narration: data.NARRATION,
        NET_INTAMT: data.NET_INTEREST_AMOUNT,
        NETPAYABLEAMT: data.NET_PAYABLE_AMOUNT,
        PAYABLE_INTAMT: data.PAYABLE_INTEREST_AMOUNT,
        TDS_AMT: data.TDS_AMOUNT,
        SURCHARGE_AMT: data.SURCHARGE_AMOUNT
      })
    })
  }

  updateData() {
    let ChequeDate
    const formValue = this.angForm.value
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    const dataToSend = {
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
      TOKEN_NO: formValue.Token_Num,
      PAYABLE_INTEREST_AMOUNT: formValue.PAYABLE_INTAMT,
      CHEQUE_NO: formValue.chequeNo,
      TDS_AMT: formValue.TDS_AMT,
      USER: result.USER_NAME,
      PAID_INTEREST_AMOUNT: formValue.POSTED_INT,
      AFT_MATURE_INT_RATE: formValue.maturedInterest,
      AFT_MATURE_INT_AMT: formValue.maturedIntAmt
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
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  //approve account
  Approve() {
    let ChequeDate
    const formValue = this.angForm.value
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    const dataToSend = {
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
      TOKEN_NO: formValue.Token_Num,
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
    this._TDService.approve(dataToSend).subscribe(data => {
      Swal.fire(
        'Approved',
        'Term Deposit Account Closing approved successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();

    }, err => {
      console.log('something is wrong');
    })
  }


  //reject account
  reject() {
    let ChequeDate
    const formValue = this.angForm.value
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    const dataToSend = {
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
      TOKEN_NO: formValue.Token_Num,
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
        'Term Deposit Account Closing rejected successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
    }, err => {
      console.log('something is wrong');
    })
  }
  public visibleAnimate = false;
  public visible = false;
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;

  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

}
