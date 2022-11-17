import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { TransactionCashModeService } from '../../../shared/elements/transaction-cash-mode.service';
import { TransactionTransferModeService } from '../../../shared/elements/transaction-transfer-mode.service';
import { SchemeTypeService } from '../../../shared/elements/scheme-type.service';
import Swal from 'sweetalert2';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { VoucherEntryService } from './voucher-entry.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { CustomerIdService } from '../../master/customer/customer-id/customer-id.service'
import { environment } from '../../../../environments/environment';
import { BankMasterService } from '../../../shared/dropdownService/bank-Master-dropdown.service'
import { NgSelectComponent } from '@ng-select/ng-select'

@Component({
  selector: 'app-voucher-entry',
  templateUrl: './voucher-entry.component.html',
  styleUrls: ['./voucher-entry.component.scss']
})
export class VoucherEntryComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('triggerhide1') triggerhide1: ElementRef<HTMLElement>;
  @ViewChild('focusbutton') focusbutton: ElementRef<HTMLElement>;
  @ViewChild('swiper') swiper: ElementRef;
  @ViewChild('INTAMT') INTAMT: ElementRef;
  @ViewChild('NOTINTAMT') NOTINTAMT: ElementRef;
  // @ViewChild('tran_mode') tran_mode: ElementRef;
  @ViewChild('tran_mode') tran_mode: NgSelectComponent;


  branchCode: any = null

  selectedBranch: number;
  selectedScheme: any;
  selectedAccountno: any;
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

  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  url = environment.base_url;

  submitForm = true
  interestMinDate: any
  interestMaxDate: any
  // for show hide photo and signature
  ShowDocuments: boolean = false

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
    { key: 'AG', data: { cash: [1, 4, 5], transfer: [1, 4, 5] } },
    { key: 'SB', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5] } },
    { key: 'CA', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5] } },
    { key: 'CC', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5, 9] } },
    { key: 'DS', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9, 15] } },
    { key: 'LN', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9, 15] } },
    { key: 'GL', data: { cash: [1, 4], transfer: [1, 4] } },
    { key: 'GS', data: { cash: [1, 4], transfer: [1, 4] } },
    { key: 'SH', data: { cash: [1, 4, 5, 7, 14], transfer: [1, 4, 5, 7, 14] } },
    { key: 'IV', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9] } },
    { key: 'PG', data: { cash: [1, 5, 10], transfer: [1, 5, 10] } },
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
  isture: boolean = true;
  totalAmt: any = 0;
  showChequeDetails: boolean = false;
  DayOpBal: number = 0;
  headData = [];
  headShow: boolean = false;
  lastday: any;
  overdraftAmt
  // customerImg: string
  // signture: string
  customerImg = 'assets/images/nouser.png';
  signture = 'assets/images/nosignature.png';
  Customer_Name
  Customer_Pan_No = '---'
  Customer_Contact_No = '---'
  Status
  maxDate: Date;
  minDate: Date;
  dtTrigger: any;
  dtElement: any;
  loginUser: any;
  constructor(
    public TransactionCashModeService: TransactionCashModeService,
    public TransactionTransferModeService: TransactionTransferModeService,
    public SchemeTypeService: SchemeTypeService,
    private ownbranchMasterService: OwnbranchMasterService,
    private _SchemeCodeDropdown: SchemeCodeDropdownService,
    private _service: VoucherEntryService,
    private savingMasterService: SavingMasterService,
    private _ACMasterDropdownService: ACMasterDropdownService,
    private _CustomerIdService: CustomerIdService,
    private _bankmasterService: BankMasterService,
    private fb: FormBuilder,
    private router: Router
  ) {
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
    this.loginUser = user;
    this.type = 'cash';
    // this.tranModeList = this.TranModeCash;


    //get syspara details
    this._service.getSysParaData().subscribe(data => {
      // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
      //debugger
      this.date = data[0].CURRENT_DATE;
      let nextDate = moment(this.date, 'DD/MM/YYYY').add(3, 'month').format('YYYY-MM-DD');
      let lastDate = moment(this.date, 'DD/MM/YYYY').subtract(3, 'month').format('YYYY-MM-DD');

      this.maxDate = new Date(nextDate);
      this.maxDate.setDate(this.maxDate.getDate());

      this.minDate = new Date(lastDate);
      this.minDate.setDate(this.minDate.getDate());
    })

    this._bankmasterService.getBankList().subscribe(banks => {
      this.bankName = banks
    })
    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.selectedBranch = user.branchId;
    })

    //Scheme Code
    this._service.getSchemeCodeList().subscribe(data => {
      this.master = data;
      //debugger
      this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()]
      this.allSchemeCode = this.allSchemeCode.sort(this.dynamicSort("S_ACNOTYPE"));;

    })

    //Narration List
    this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
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
      branch_code: ['', [Validators.required]],
      temp_over_draft: [''],
      over_draft: [''],
      token: [0],
      particulars: [''],
      total_amt: [''],
      amt: [0],
      slip_no: [''],
      tran_mode: ['', [Validators.required]],
      account_no: ['', [Validators.required]],
      scheme: ['', [Validators.required]],
      scheme_type: ['', [Validators.required]],
      date: [''],
      type: ['cash'],
      chequeDate: [''],
      chequeNo: [''],
      bank: [''],
      Intdate: ['']
    })
  }

  resetscheme() {
    if (this.tempschmetype != this.selectedCode) {
      this.selectedScheme = null
      this.selectedMode = null
      this.selectedAccountno = null
      this.introducerACNo = []
    }
  }
  tempschmetype
  IntersetHeadDate: any;
  selectedSchemeCode() {

    this.allScheme = [];
    this.headData = []
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCode) {
        this.allScheme.push(element)
      }
    });
  }



  //get account no according scheme for introducer
  Submitscheme: any;
  getIntroducer(item) {
    //debugger

    this.tempschmetype = this.selectedCode
    this.introducerACNo = [];
    this.obj = [item.id, this.selectedBranch]
    this.Submitscheme = item
    if (this.tempscheme != this.selectedScheme) {
      this.selectedAccountno = null
    }

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
    //debugger
    if (this.type == 'cash') {
      this.tranModeList = [];
      object.data.cash.forEach(ele => {
        let obj = this.TranModeCash.find(t => t.id === ele);
        this.tranModeList.push(obj);
      })
      if (this.Submitscheme.S_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && this.DayOpBal > 0) {
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1)
      }
      if (this.Submitscheme?.S_ACNOTYPE == 'TD' && this.Submitscheme?.WITHDRAWAL_APPLICABLE == '0')
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
      if (this.Submitscheme?.S_ACNOTYPE == 'LN' && this.Submitscheme?.IS_DEPO_LOAN == '1' && this.DayOpBal > 0)
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9)
    } else {
      this.tranModeList = [];
      object.data.transfer.forEach(ele => {
        let obj = this.TranModeTransfer.find(t => t.id === ele);
        this.tranModeList.push(obj);
      })
      if (this.Submitscheme.S_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && this.DayOpBal > 0) {
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1)
      }
      if (this.Submitscheme?.S_ACNOTYPE == 'TD' && this.Submitscheme?.WITHDRAWAL_APPLICABLE == '0')
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
      if (this.Submitscheme?.S_ACNOTYPE == 'LN' && this.Submitscheme?.IS_DEPO_LOAN == '1' && this.DayOpBal > 0)
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9)
    }
  }

  //Transaction mode select
  transactionMode(mode) {
    // debugger
    this.selectedMode = null
    this.type = mode;
    var startdate = this.angForm.controls['date'].value

    let formDT = moment(startdate, 'DD/MM/YYYY')
    var addInFrom: any;
    if (this.Submitscheme.S_ACNOTYPE == 'PG') {
      addInFrom = startdate;
    } else {
      addInFrom = moment(formDT, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY')
    }
    let obj = {
      scheme: this.Submitscheme.S_APPL,
      acno: this.Submitscheme.S_APPL == '980' ? this.submitCustomer.AC_NO : this.submitCustomer.BANKACNO,
      date: addInFrom
    }

    this._service.getledgerbalance(obj).subscribe(data => {
      //debugger
      this.DayOpBal = Math.abs(data);
      let object = this.TranData.find(t => t.key === this.selectedCode);
      if (this.type == 'cash') {
        this.tranModeList = [];
        object.data.cash.forEach(ele => {
          let obj = this.TranModeCash.find(t => t.id === ele);
          this.tranModeList.push(obj);
        })
        if (this.Submitscheme?.S_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && this.DayOpBal > 0) {
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1)
        }
        if (this.Submitscheme?.S_ACNOTYPE == 'TD' && this.Submitscheme?.WITHDRAWAL_APPLICABLE == '0')
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
        if (this.Submitscheme?.S_ACNOTYPE == 'LN' && this.Submitscheme?.IS_DEPO_LOAN == '1' && this.DayOpBal > 0)
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9)
        this.angForm.patchValue({
          chequeDate: null
        })
      } else {
        this.tranModeList = [];
        object.data.transfer.forEach(ele => {
          let obj = this.TranModeTransfer.find(t => t.id === ele);
          this.tranModeList.push(obj);
        })
        if (this.Submitscheme?.S_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && this.DayOpBal > 0) {
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1)
        }
        if (this.Submitscheme?.S_ACNOTYPE == 'TD' && this.Submitscheme?.WITHDRAWAL_APPLICABLE == '0')
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
        if (this.Submitscheme?.S_ACNOTYPE == 'LN' && this.Submitscheme?.IS_DEPO_LOAN == '1' && this.DayOpBal > 0)
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9)
      }
    })
  }


  //get Narration Details 
  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  BankName
  getBankName(ele) {
    this.BankName = ele;
    let el: HTMLElement = this.triggerhide1.nativeElement;
    el.click();
  }

  selectAllContent($event) {
    $event.target.select();
  }
  //submit Form
  submit() {
    //debugger
    if (this.angForm.status == "INVALID") {
      this.angForm.markAllAsTouched();

    }
    //debugger
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = this.angForm.value;
    obj['user'] = user;
    obj['InputHead'] = this.headData;
    obj['scheme'] = this.Submitscheme;
    obj['account_no'] = this.submitCustomer;
    obj['tran_mode'] = this.submitTranMode;
    if (this.submitTranMode.id == 4 && this.submitTranMode.tran_drcr == 'D' && (this.Submitscheme?.S_ACNOTYPE == 'CC' || this.Submitscheme?.S_ACNOTYPE == 'LN')) {
      let ledgerbal = Number(this.tempDayOpBal) > 0 ? Number(this.tempDayOpBal) : 0
      let amount = Number(this.angForm.controls['amt'].value)
      if (amount > ledgerbal)
        obj['isOverdraftTaken'] = 1
      else
        obj['isOverdraftTaken'] = 0
    }
    console.log(obj);
    if (Number(this.totalAmt) != 0 && this.totalAmt != undefined && this.totalAmt != '' && this.totalAmt != '0.00' && this.totalAmt != 'NaN.00') {
      this._service.insertVoucher(obj).subscribe(data => {
        // this.getVoucherData();
        // Swal.fire('Success!', 'Voucher update Successfully !', 'success');
        Swal.fire({
          icon: 'success',
          title: 'Voucher update Successfully!',
          html:
            '<b>Please Note Down Voucher Number : </b>' + data.TRAN_NO + '<br>'
        })
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
        this.angForm.controls['chequeNo'].reset()
        this.angForm.controls['bank'].reset()
        this.angForm.patchValue({
          type: 'cash',
        })
        this.type = 'cash';
        this.headData = [];
        this.selectedMode = null
        this.Customer_Name = null
        this.DayOpBal = 0
        this.Pass = 0
        this.Unpass = 0
        this.sanctionamt = 0
        this.ClearBalance = 0
        this.overdraftAmt = 0
        this.AfterVoucher = 0
        this.customerImg = 'assets/images/nouser.png';
        this.signture = 'assets/images/nosignature.png'
        this.Status = '0'
        this.Customer_Pan_No = '---'
        this.Customer_Contact_No = '---'
        this.headShow = false;
        this.maturityamt = 0
        this.depositamt = 0
        this.expirydate = ''
        this.sanctiondate = ''
        this.asondate = ''
        this.opendate = ''
        this.renewaldate = ''
        this.showChequeDetails = false;
      }, err => {
        console.log(err);
      })
    } else {
      Swal.fire('Oops!', 'Invalid Amount Details', 'error');
    }
  }
  // Reset Function
  resetForm() {
    this.createForm();

  }

  //get Amount Details
  getAmt(ele) {
    let count = 0
    if (this.headData.length != 0) {
      this.headData.forEach(element => {
        count = Number(element.Amount) + Number(count)
      });
      let num = Number(ele.target.value) + Number(count)
      // this.totalAmt = num 
      this.totalAmt = parseFloat(num.toString()).toFixed(2);
    } else {
      // this.totalAmt = ele.target.value 
      this.totalAmt = parseFloat(ele.target.value).toFixed(2);
    }
  }

  //Mode data
  submitTranMode: any;
  changeMode(item) {
    //debugger
    this.angForm.patchValue({
      amt: 0
    })
    this.submitForm = true
    this.headData = []
    this.submitTranMode = item;
    if (this.submitTranMode.tran_type == 'TR') {
      this.showChequeDetails = true;
      this.angForm.controls['chequeNo'].reset()
      this.angForm.controls['chequeDate'].reset()
      this.angForm.controls['bank'].reset()
    }
    else {
      this.showChequeDetails = false;
    }
    if (item.id == 6) {
      this.angForm.controls.amt.setValue('0.00');
      this.angForm.controls['amt'].disable();
    }
    else if (item.id == 2 || item.id == 5 || item.id == 15) {
      this.angForm.patchValue({
        amt: this.ClearBalance
      })
      this.angForm.controls['amt'].disable();
    }
    else {
      this.angForm.controls.amt.setValue('0.00');
      this.angForm.controls['amt'].enable();
    }
    // if (this.selectedCode == 'GL') {
    //   this.showChequeDetails = true
    // }

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
    this._service.getHeadDetails(obj).subscribe(data => {
      //debugger
      console.log(this.Submitscheme);
      if (data.length != 0) {

        if (!this.headFlag) {
          // this.headData = data;
          this.headShow = true;
          for (let item of data) {

            let value = {}
            // value = data.find(data => data['FIELD_AMOUNT'] == headType[i].FieldAmount)
            // if (value != undefined) {
            console.log(item);
            if (this.submitTranMode.tran_drcr == item.DRCR_APPLICABLE || item.DRCR_APPLICABLE == 'B') {
              item['Amount'] = 0;
              if (this.Submitscheme.S_ACNOTYPE == 'TD') {
                if (this.Submitscheme.IS_RECURRING_TYPE == '1' && this.Submitscheme.INTEREST_RULE == '0' && item.HEAD_TYPE == 'PNI') {
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
          }

          this.updateheadbalance(this.date)
        }
      } else {
        this.headShow = false;
      }
    }, err => {
      console.log(err);
    })
    if (this.Submitscheme.S_ACNOTYPE == 'TD' || this.Submitscheme.S_ACNOTYPE == 'SB' || this.Submitscheme.S_ACNOTYPE == 'PG' || this.Submitscheme.S_ACNOTYPE == 'AG' || this.Submitscheme.S_ACNOTYPE == 'CA') {
      // this.interestMaxDate = moment(this.date, 'DD/MM/YYYY')
      this.interestMaxDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
      this.interestMaxDate = this.interestMaxDate._d
      this.interestMinDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'months')
      this.interestMinDate = this.interestMinDate._d
    }
    else if (this.Submitscheme.S_ACNOTYPE == 'LN' || this.Submitscheme.S_ACNOTYPE == 'CC' || this.Submitscheme.S_ACNOTYPE == 'DS') {
      // this.interestMinDate = moment(this.date, 'DD/MM/YYYY')
      this.interestMinDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
      this.interestMinDate = this.interestMinDate._d
      this.interestMaxDate = moment(this.date, "DD/MM/YYYY").add(1, 'months')
      this.interestMaxDate = this.interestMaxDate._d
    }
  }

  updateheadbalance(date) {
    let newobj = {
      accountNo: this.submitCustomer.BANKACNO,
      scheme: this.Submitscheme.S_APPL,
      currentDate: date,
      schemeType: this.selectedCode,
    }

    let balancedata
    this._service.getInputHeadBal(newobj).subscribe(data1 => {

      balancedata = data1
      this.headData.forEach(element => {
        let newobj = {
          acno: element?.GL_CODE,
          scheme: '101',
          date: this.date,
          schemeType: this.selectedCode,
        }

        if (element.FIELD_AMOUNT == 'INTEREST_AMOUNT') {
          element['date'] = this.IntersetHeadDate;
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.abs(data1.intpenal.InterestAmount).toFixed(2)
            element['Balance'] = Math.abs(data1.intpenal.InterestAmount).toFixed(2)
          } else {
            element['Amount'] = 0
            element['Balance'] = Math.abs(data1.intpenal.InterestAmount).toFixed(2)
          }
          element['tempBalance'] = data1.intpenal.InterestAmount
          element['type'] = (data1.intpenal.InterestAmount <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'PENAL_INT_AMOUNT') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.abs(data1.intpenal.PenalInterest).toFixed(2)
            element['Balance'] = Math.abs(data1.intpenal.PenalInterest).toFixed(2)
          }
          else {
            element['Amount'] = 0
            element['Balance'] = Math.abs(data1.intpenal.PenalInterest).toFixed(2)
          }
          element['tempBalance'] = data1.intpenal.PenalInterest
          element['type'] = (data1.intpenal.PenalInterest <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'REC_PENAL_INT_AMOUNT') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.abs(data1.recpaypen).toFixed(2)
            element['Balance'] = Math.abs(data1.recpaypen).toFixed(2)
          }
          else {
            element['Amount'] = 0
            element['Balance'] = Math.abs(data1.recpaypen).toFixed(2)
          }
          element['tempBalance'] = data1.recpaypen
          element['type'] = (data1.recpaypen <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'RECPAY_INT_AMOUNT' && element.HEAD_TYPE == 'PYI') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.abs(data1.recpaybal).toFixed(2)
            element['Balance'] = Math.abs(data1.recpaybal).toFixed(2)
          }
          else {
            element['Amount'] = 0
            element['Balance'] = Math.abs(data1.recpaybal).toFixed(2)
          }
          element['tempBalance'] = data1.recpaybal
          element['type'] = (data1.recpaybal <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'RECPAY_INT_AMOUNT' && element.HEAD_TYPE == 'REC') {
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = Math.abs(data1.recpaybal).toFixed(2)
            element['Balance'] = Math.abs(data1.recpaybal).toFixed(2)
          }
          else {
            element['Amount'] = 0
            element['Balance'] = Math.abs(data1.recpaybal).toFixed(2)
          }
          element['tempBalance'] = data1.recpaybal
          element['type'] = (data1.recpaybal <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'OTHER2_AMOUNT') {
          if (element?.GL_CODE != null) {
            this._service.getledgerbalance(newobj).subscribe(data2 => {
              element['Balance'] = Math.abs(data2).toFixed(2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
            })
          }
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = element['Balance']
          }
          else {
            element['Amount'] = 0
          }
        } else if (element.FIELD_AMOUNT == 'OTHER3_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._service.getledgerbalance(newobj).subscribe(data2 => {
              element['Balance'] = Math.abs(data2).toFixed(2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
            })
          }
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = element['Balance']
          }
          else {
            element['Amount'] = 0
          }
        } else if (element.FIELD_AMOUNT == 'OTHER4_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._service.getledgerbalance(newobj).subscribe(data2 => {
              element['Balance'] = Math.abs(data2).toFixed(2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
            })
          }
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = element['Balance']
          }
          else {
            element['Amount'] = 0
          }
        } else if (element.FIELD_AMOUNT == 'OTHER5_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._service.getledgerbalance(newobj).subscribe(data2 => {
              element['Balance'] = Math.abs(data2).toFixed(2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
            })
          }
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = element['Balance']
          }
          else {
            element['Amount'] = 0
          }
        } else if (element.FIELD_AMOUNT == 'OTHER6_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._service.getledgerbalance(newobj).subscribe(data2 => {
              element['Balance'] = Math.abs(data2).toFixed(2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
            })
          }
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = element['Balance']
          }
          else {
            element['Amount'] = 0
          }
        } else if (element.FIELD_AMOUNT == 'OTHER7_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._service.getledgerbalance(newobj).subscribe(data2 => {
              element['Balance'] = Math.abs(data2).toFixed(2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
            })
          }
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = element['Balance']
          }
          else {
            element['Amount'] = 0
          }
        } else if (element.FIELD_AMOUNT == 'OTHER8_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._service.getledgerbalance(newobj).subscribe(data2 => {
              element['Balance'] = Math.abs(data2).toFixed(2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
            })
          }
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = element['Balance']
          }
          else {
            element['Amount'] = 0
          }
        } else if (element.FIELD_AMOUNT == 'OTHER9_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._service.getledgerbalance(newobj).subscribe(data2 => {
              element['Balance'] = Math.abs(data2).toFixed(2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
            })
          }
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = element['Balance']
          }
          else {
            element['Amount'] = 0
          }
        } else if (element.FIELD_AMOUNT == 'OTHER11_AMOUNT') {
          element['Amount'] = 0
          if (element?.GL_CODE != null) {
            this._service.getledgerbalance(newobj).subscribe(data2 => {
              element['Balance'] = Math.abs(data2).toFixed(2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')
            })
          }
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = element['Balance']
          }
          else {
            element['Amount'] = 0
          }
        } else if (element.FIELD_AMOUNT == 'OTHER10_AMOUNT') {
          element['Amount'] = 0
          element['Balance'] = Math.abs(data1.overduebal).toFixed(2)
          element['tempBalance'] = data1.overduebal
          element['type'] = (data1.overduebal <= 0 ? 'Cr' : 'Dr')
          if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
            element['Amount'] = element['Balance']
          }
          else {
            element['Amount'] = 0
          }
        } else {
          element['Amount'] = 0
          element['Balance'] = 0
          element['tempBalance'] = 0
          element['type'] = (data1.overduebal <= 0 ? 'Cr' : 'Dr')
        }

      });

    })
  }

  showlgindetails() {
    //debugger
    if (this.angForm.controls['account_no'].value != null && this.selectedCode != 'GL') {
      this.ShowDocuments = true
      console.log(this.submitCustomer.idmasterID)
      this._CustomerIdService.getFormData(this.submitCustomer.idmasterID).subscribe(data => {
        this.Customer_Name = data.AC_NAME
        this.Customer_Pan_No = data.AC_PANNO
        this.Customer_Contact_No = data.AC_MOBILENO
        this.Status = this.submitCustomer.IS_DORMANT
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

      // if((this.angForm.controls['account_no'].value.idmaster['AC_MOBILENO'])
    } else {
      this.ShowDocuments = false
      this.Customer_Name = null
      this.Customer_Pan_No = null
      this.Customer_Contact_No = null
      this.Status = this.submitCustomer.IS_DORMANT
    }
  }
  tempscheme
  submitCustomer: any;
  //get customer today voucher data
  getVoucherData(item) {
    this.submitCustomer = null
    this.angForm.controls['total_amt'].reset()
    this.angForm.controls['amt'].reset()
    this.angForm.controls['tran_mode'].reset();
    this.submitCustomer = item;
    this.tempscheme = this.selectedScheme
    //Hide / Show and show account wie Photo and signature
    let customer = this.angForm.controls['account_no'].value;
    var startdate = this.angForm.controls['date'].value

    let formDT = moment(startdate, 'DD/MM/YYYY')
    var addInFrom: any;
    if (this.Submitscheme.S_ACNOTYPE == 'PG') {
      addInFrom = startdate;
    } else {
      addInFrom = moment(formDT, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY')
    }
    let obj = {
      scheme: this.Submitscheme.S_APPL,
      acno: this.Submitscheme.S_APPL == '980' ? this.submitCustomer.AC_NO : this.submitCustomer.BANKACNO,
      date: addInFrom
    }

    this._service.getledgerbalance(obj).subscribe(data => {
      //debugger
      this.DayOpBal = Math.abs(data);
      let object = this.TranData.find(t => t.key === this.selectedCode);
      //debugger
      if (this.type == 'cash') {
        this.tranModeList = [];
        object.data.cash.forEach(ele => {
          let obj = this.TranModeCash.find(t => t.id === ele);
          this.tranModeList.push(obj);
        })
        if (this.submitCustomer.AC_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && this.DayOpBal > 0) {
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1)
        }
        if (this.Submitscheme?.S_ACNOTYPE == 'TD' && this.Submitscheme?.WITHDRAWAL_APPLICABLE == '0')
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
        if (this.Submitscheme?.S_ACNOTYPE == 'LN' && this.Submitscheme?.IS_DEPO_LOAN == '1' && this.DayOpBal > 0)
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)

      } else {
        this.tranModeList = [];
        object.data.transfer.forEach(ele => {
          let obj = this.TranModeTransfer.find(t => t.id === ele);
          this.tranModeList.push(obj);
        })
        if (this.submitCustomer.AC_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && this.DayOpBal > 0) {
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1)
        }
        if (this.Submitscheme?.S_ACNOTYPE == 'TD' && this.Submitscheme?.WITHDRAWAL_APPLICABLE == '0')
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
        if (this.Submitscheme?.S_ACNOTYPE == 'LN' && this.Submitscheme?.IS_DEPO_LOAN == '1' && this.DayOpBal > 0)
          this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9)
      }
    })

  }


  //get Input head Amount
  getInputHeadAmt(ele, i) {
    // let value = ele.target.value;
    var t = ele.target.value;
    ele.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    let value = Number(ele.target.value);
    if (this.headData[i].Balance == undefined)
      this.headData[i].Balance = 0
    if (Number(ele.target.value) > Number(this.headData[i]?.Balance)) {
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
      }
    }
  }

  checkheadcondition(event, i) {
    let value = event.target.value;
    this.headData[i].Amount = value
    let data = this.headData[i]
    if (data.FIELD_AMOUNT != 'PENAL_INT_AMOUNT') {
      if ((this.submitTranMode.id == 5 || this.submitTranMode.id == 2) && Number(data.Balance) != 0 && Number(value)) {
        this.headData[i].Amount = 0
        Swal.fire('Oops', 'Please Fill ' + data.DESCRIPTION + ' Amount', 'error')
      } else {
        if (data.CHECK_REQUIRE == '1' && Number(value) != Number(data.Balance)) {
          this.headData[i].Amount = 0
          Swal.fire('Oops', 'Please Fill ' + data.DESCRIPTION + ' Amount', 'error')
        }
      }

    }
  }

  //cheque no captial function
  chequeNoData(event) {
    //debugger
    this.angForm.patchValue({
      chequeNo: event.target.value.toUpperCase()
    })
  }

  extenstionaftervoucher = ''

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
    // if (tran == 'D') {
    //   this.AfterVoucher = Math.abs(this.tempDayOpBal - value)
    //   this.extenstionaftervoucher = 'Dr'
    // } else {
    //   this.AfterVoucher = Math.abs(this.tempDayOpBal + value)
    //   this.extenstionaftervoucher = 'Cr'
    // }

    if (tran == 'D' && this.typeclearbal == 'Dr') {
      this.AfterVoucher = Math.abs(this.ClearBalance + value);
      this.extenstionaftervoucher = 'Dr';
    } else if (tran == 'D' && this.typeclearbal == 'Cr') {
      this.AfterVoucher = Math.abs(this.ClearBalance - value);
      if (value > this.ClearBalance) {
        if (tran == 'C') {
          this.extenstionaftervoucher = 'Cr';
        } else {
          this.extenstionaftervoucher = 'Dr';
        }
      }
      else if (value < this.ClearBalance) {
        this.extenstionaftervoucher = this.typeclearbal
      }
    } else if (tran == 'C' && this.typeclearbal == 'Dr') {
      this.AfterVoucher = Math.abs(this.ClearBalance - value);
      if (value > this.ClearBalance) {
        if (tran == 'C') {
          this.extenstionaftervoucher = 'Cr';
        } else {
          this.extenstionaftervoucher = 'Dr';
        }
      }
      else if (value < this.ClearBalance) {
        this.extenstionaftervoucher = this.typeclearbal
      }
    } else {
      this.AfterVoucher = Math.abs(this.ClearBalance + value);
      this.extenstionaftervoucher = 'Cr';
    }
  }

  //decimal content show purpose wrote below function
  decimalAllContent($event) {
    if (this.submitTranMode == undefined) {
      Swal.fire('Oops', 'Please First Select Tran Mode then enter Amount', 'error');
      this.tran_mode.focus()
      let value = Number($event.target.value);
      this.totalAmt = 0;
      $event.target.value = 0

      let amt = Number(this.AfterVoucher) - value;
      if (amt < 0) {
        amt = 0;
      }
      this.AfterVoucher = Math.abs(Number(parseFloat((amt).toString()).toFixed(2)))
    }
    else {
      let value = Number($event.target.value);
      let data = value.toFixed(2);
      $event.target.value = data;
      var t = $event.target.value;
      $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    }
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

  checkSanctionAmountWithAmount() {
    let ledgerbal = Number(this.tempDayOpBal) > 0 ? Number(this.tempDayOpBal) : 0
    let sancAmt = ledgerbal + Number(this.overdraftAmt)
    if (sancAmt < Number(this.angForm.controls['amt'].value) && this.submitTranMode.id == 4 && this.submitTranMode.tran_drcr == 'D' && (this.Submitscheme?.S_ACNOTYPE == 'CC' || this.Submitscheme?.S_ACNOTYPE == 'LN')) {
      this.SideDetails()
      this.angForm.controls['amt'].reset();
      this.angForm.patchValue({
        total_amt: 0
      })
      this.swiper.nativeElement.focus();
      Swal.fire('Oops!', `Access Denied, Amount Can't Be More Than Sanction Limit Rs. ${sancAmt}`, 'error');
      this.submitForm = true
    }
  }

  // Check Voucher Conditions On Amount Field
  checkCondition($event) {
    let obj = {
      value: Number($event.target.value),
      clearBalance: this.ClearBalance,
      accountNo: this.submitCustomer.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.Submitscheme.S_APPL,
      tran: this.submitTranMode.tran_drcr,
      tranMode: this.submitTranMode.id,
      odAmount: this.overdraftAmt,
      currentDate: this.date,
      totalAmt: this.angForm.controls['total_amt'].value,
      type: this.typeclearbal
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
          this.angForm.controls['total_amt'].reset();
          this.SideDetails()
          // this.swiper.nativeElement.focus();
          this.submitForm = true
        } else {
          this.checkamtcondition($event)
        }
      })
    } if (Number(obj.value) >= 200000 && this.submitTranMode.tran_type == 'CS') {
      Swal.fire({
        title: 'Are you sure?',
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
        } else {
          this.angForm.controls['amt'].reset();
          this.angForm.controls['total_amt'].reset();
          this.SideDetails()
          this.submitForm = true
          this.swiper.nativeElement.focus();
        }
      })
    } else {
      this.checkamtcondition($event)
    }
  }
  checkamtcondition($event) {
    let obj = {
      // value: Number($event.target.value),
      value: Number(this.angForm.controls['amt'].value),
      clearBalance: this.ClearBalance,
      accountNo: this.submitCustomer.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.Submitscheme.S_APPL,
      tran: this.submitTranMode.tran_drcr,
      tranMode: this.submitTranMode.id,
      odAmount: this.overdraftAmt,
      currentDate: this.date,
      totalAmt: this.angForm.controls['total_amt'].value,
      type: this.typeclearbal
    }
    this._service.checkZeroBalance(obj).subscribe(data => {
      if (data != 0) {
        this.angForm.controls['amt'].reset();
        this.swiper.nativeElement.focus();
        this.angForm.controls['total_amt'].reset();
        Swal.fire('Oops!', data.message, 'error');
        this.submitForm = true
      } else {
        this._service.clearWithdrawBal(obj).subscribe(data => {
          if (data != 0) {
            this.angForm.controls['amt'].reset();
            this.swiper.nativeElement.focus();
            this.angForm.controls['total_amt'].reset();
            Swal.fire('Oops!', data.message, 'error');
            this.submitForm = true
          } else {
            this._service.CheckPanNoInIDMaster(obj).subscribe(data => {
              // if (data != 0) {
              //   // this.submitForm = true
              // }
              // else {
              this._service.ClearVoucherSameBal(obj).subscribe(data => {
                //debugger
                if (data != 0) {
                  this.SideDetails()
                  this.angForm.controls['amt'].reset();
                  this.angForm.controls['total_amt'].reset();
                  this.swiper.nativeElement.focus();
                  Swal.fire('Oops!', data.message, 'error');
                  this.submitForm = true
                } else {
                  this._service.BalancePresentOrOverdraft(obj).subscribe(data => {
                    //debugger
                    if (data != 0) {
                      this.SideDetails()
                      this.angForm.controls['amt'].reset();
                      this.angForm.controls['total_amt'].reset();
                      this.swiper.nativeElement.focus();
                      Swal.fire('Oops!', data.message, 'error');
                      this.submitForm = true
                    } else {
                      this._service.ClearBalanceDebitAmt(obj).subscribe(data => {
                        //debugger
                        if (data != 0) {
                          this.SideDetails()
                          this.angForm.controls['amt'].reset();
                          this.angForm.controls['total_amt'].reset();
                          this.swiper.nativeElement.focus();
                          Swal.fire('Oops!', data.message, 'error');
                          this.submitForm = true
                        } else {
                          this._service.InstructionFreezeAc(obj).subscribe(data => {
                            //debugger
                            if (data != 0) {
                              this.SideDetails()
                              this.angForm.controls['amt'].reset();
                              this.angForm.controls['total_amt'].reset();
                              this.swiper.nativeElement.focus();
                              let el: HTMLElement = this.focusbutton.nativeElement;
                              Swal.fire('Oops!', data.message, 'error');
                              this.submitForm = true
                            } else {
                              this._service.MinBalanceChecking(obj).subscribe(data => {
                                //debugger
                                if (data != 0) {
                                  this.SideDetails()
                                  this.angForm.controls['amt'].reset();
                                  this.angForm.controls['total_amt'].reset();
                                  this.swiper.nativeElement.focus();
                                  Swal.fire('Oops!', data.message, 'error');
                                  this.submitForm = true
                                } else {
                                  this._service.CheckClearBalAndAmt(obj).subscribe(data => {
                                    //debugger
                                    if (data != 0) {
                                      this.SideDetails()
                                      this.angForm.controls['amt'].reset();
                                      this.angForm.controls['total_amt'].reset();
                                      this.swiper.nativeElement.focus();
                                      Swal.fire('Oops!', data.message, 'error');
                                      this.submitForm = true
                                    } else {
                                      this._service.WithdrawAmtClosingEqualClearBal(obj).subscribe(data => {
                                        //debugger
                                        if (data != 0) {
                                          this.SideDetails()
                                          this.angForm.controls['amt'].reset();
                                          this.angForm.controls['total_amt'].reset();
                                          this.swiper.nativeElement.focus();
                                          // let el: HTMLElement = this.focusbutton.nativeElement;
                                          Swal.fire('Oops!', data.message, 'error');
                                          this.submitForm = true
                                        } else {
                                          this._service.DepositeAmountAndIntallments(obj).subscribe(data => {
                                            //debugger
                                            if (data != 0) {
                                              this.SideDetails()
                                              this.angForm.controls['amt'].reset();
                                              this.angForm.controls['total_amt'].reset();
                                              this.swiper.nativeElement.focus();
                                              let el: HTMLElement = this.focusbutton.nativeElement;
                                              Swal.fire('Oops!', data.message, 'error');
                                              this.submitForm = true
                                            } else {
                                              this._service.DepositAndTotalInstallments(obj).subscribe(data => {
                                                //debugger
                                                if (data != 0) {
                                                  this.SideDetails()
                                                  this.angForm.controls['amt'].reset();
                                                  this.angForm.controls['total_amt'].reset();
                                                  this.swiper.nativeElement.focus();
                                                  let el: HTMLElement = this.focusbutton.nativeElement;
                                                  Swal.fire('Oops!', data.message, 'error');
                                                  this.submitForm = true
                                                } else {
                                                  this._service.DepositAndDepositAmount(obj).subscribe(data => {
                                                    //debugger
                                                    if (data != 0) {
                                                      this.SideDetails()
                                                      this.angForm.controls['amt'].reset();
                                                      this.angForm.controls['total_amt'].reset();
                                                      this.swiper.nativeElement.focus();
                                                      Swal.fire('Oops!', data.message, 'error');
                                                      this.submitForm = true
                                                    } else {
                                                      this._service.PremcloseTdateTamtCom(obj).subscribe(data => {
                                                        //debugger
                                                        if (data != 0) {
                                                          this.SideDetails()
                                                          this.angForm.controls['amt'].reset();
                                                          this.angForm.controls['total_amt'].reset();
                                                          this.swiper.nativeElement.focus();
                                                          let el: HTMLElement = this.focusbutton.nativeElement;
                                                          Swal.fire('Oops!', data.message, 'error');
                                                          this.submitForm = true
                                                        } else {
                                                          this._service.PrecloseTrDateTrAmtComCol(obj).subscribe(data => {
                                                            //debugger
                                                            if (data != 0) {
                                                              this.SideDetails()
                                                              this.angForm.controls['amt'].reset();
                                                              this.angForm.controls['total_amt'].reset();
                                                              this.swiper.nativeElement.focus();
                                                              let el: HTMLElement = this.focusbutton.nativeElement;
                                                              Swal.fire('Oops!', data.message, 'error');
                                                              this.submitForm = true
                                                            } else {
                                                              this._service.ComVouamtClearbalAndStrs(obj).subscribe(data => {
                                                                //debugger
                                                                if (data != 0) {
                                                                  this.SideDetails()
                                                                  this.angForm.controls['amt'].reset();
                                                                  this.angForm.controls['total_amt'].reset();
                                                                  this.swiper.nativeElement.focus();
                                                                  let el: HTMLElement = this.focusbutton.nativeElement;
                                                                  Swal.fire('Oops!', data.message, 'error');
                                                                  this.submitForm = true
                                                                } else {
                                                                  this._service.DepositGreaterShareLimitAmt(obj).subscribe(data => {
                                                                    //debugger
                                                                    if (data != 0) {
                                                                      this.SideDetails()
                                                                      this.angForm.controls['amt'].reset();
                                                                      this.angForm.controls['total_amt'].reset();
                                                                      this.swiper.nativeElement.focus();
                                                                      Swal.fire('Oops!', data.message, 'error');
                                                                      this.submitForm = true
                                                                    } else {
                                                                      this._service.ZeroBalance(obj).subscribe(data => {
                                                                        //debugger
                                                                        if (data != 0) {
                                                                          this.SideDetails()
                                                                          this.angForm.controls['amt'].reset();
                                                                          this.angForm.controls['total_amt'].reset();
                                                                          this.swiper.nativeElement.focus();
                                                                          Swal.fire('Oops!', data.message, 'error');
                                                                          this.submitForm = true
                                                                        } else {
                                                                          this._service.CashWithdraw(obj).subscribe(data => {
                                                                            //debugger
                                                                            if (data != 0) {
                                                                              this.SideDetails()
                                                                              this.angForm.controls['amt'].reset();
                                                                              this.angForm.controls['total_amt'].reset();
                                                                              this.swiper.nativeElement.focus();
                                                                              Swal.fire('Oops!', data.message, 'error');
                                                                              this.submitForm = true
                                                                            } else {
                                                                              this._service.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                //debugger
                                                                                if (data != 0) {
                                                                                  this.SideDetails()
                                                                                  this.angForm.controls['amt'].reset();
                                                                                  this.angForm.controls['total_amt'].reset();
                                                                                  this.swiper.nativeElement.focus();
                                                                                  Swal.fire('Oops!', data.message, 'error');
                                                                                  this.submitForm = true
                                                                                } else {
                                                                                  this._service.withdrawClosingCondition(obj).subscribe(data => {
                                                                                    //debugger
                                                                                    if (data != 0) {
                                                                                      this.SideDetails()
                                                                                      this.angForm.controls['amt'].reset();
                                                                                      this.angForm.controls['total_amt'].reset();
                                                                                      // this.tran_mode.nativeElement.focus()
                                                                                      this.tran_mode.focus()
                                                                                      Swal.fire('Oops!', data.message, 'error');
                                                                                      this.submitForm = true
                                                                                    }
                                                                                    else {
                                                                                      this.submitForm = false
                                                                                      this.swiper.nativeElement.blur();
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
              // }
            }
              , err => {
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

  // Check Voucher Conditions On Account Field
  checkAccountCondition() {

    let data1: any = localStorage.getItem('user');
    let result = JSON.parse(data1);
    let tempacno = this.submitCustomer.BANKACNO
    let obj = {
      clearBalance: this.ClearBalance,
      accountNo: this.submitCustomer?.BANKACNO,
      accno: this.submitCustomer?.AC_NO,
      schemeType: this.selectedCode,
      scheme: this.Submitscheme?.S_APPL,
      usertype: result.RoleDefine[0].RoleId,
      currentDate: this.date
    }

    this._service.CheckAccountCloseFlagInDailytran(obj).subscribe(data => {
      if (data != 0) {
        Swal.fire('Oops!', data.message, 'error');
        this.selectedAccountno = null;
        this.showlgindetails()
      } else {
        this._service.specialInstruction(obj).subscribe(data => {
          if (data != 0) {
            if (data.restriction == 1) {
              this.selectedAccountno = null
              this.showlgindetails()

            } else {
              this.selectedAccountno = tempacno
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
            this._service.CheckLoginFlagInDpmaster(obj).subscribe(data => {
              if (data != 0) {
                Swal.fire('Oops!', data.message, 'error');
                this.selectedAccountno = null
                this.showlgindetails()

              } else {
                this._service.checkDormantAccount(obj).subscribe(data => {
                  if (data != 0) {
                    Swal.fire('Oops!', data.message, 'error');
                    this.selectedAccountno = null
                    this.showlgindetails()

                  } else {
                    this._service.InstructionFreezeAc(obj).subscribe(data => {
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
                            this.selectedAccountno = null
                            this.showlgindetails()

                          }
                        })
                      } else {
                        this._service.IsDirectEntryAllow(obj).subscribe(data => {
                          if (data != 0) {
                            Swal.fire('Oops!', data.message, 'error');
                            this.selectedAccountno = null
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
        }, err => {
          console.log(err);
        })
      }
    }, err => {
      console.log(err);
    })



  }
  tokenshowhide: boolean = false

  // Check Voucher Conditions On Transaction Mode
  checktranCondition() {
    if (this.angForm.controls['type'].value == 'cash' && this.submitTranMode?.tran_drcr == 'D') {
      this.tokenshowhide = true
    } else {
      this.tokenshowhide = false

    }

    let obj = {
      accountNo: this.submitCustomer.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.Submitscheme.S_APPL,
      tran: this.submitTranMode?.tran_drcr,
      tranMode: this.submitTranMode?.id,
      currentDate: this.date
    }

    if (this.submitTranMode?.id == 7 && this.selectedCode == 'SH') {
      this.angForm.controls['amt'].disable();
      this.angForm.controls['particulars'].disable();
      let other2amounttotal
      this._service.calculateDividend(obj).subscribe(data => {
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
          'amt': data.count,
          'particulars': str + ' Paid Dividend'
        })
      })
    }

    this._service.StandingOrInterestInstruction(obj).subscribe(data => {
      if (data != 0) {
        this.selectedMode = null
        this.submitForm = true
        Swal.fire('Oops!', data.message, 'error');
      } else {
        this._service.VoucherPassing(obj).subscribe(data => {
          if (data != 0) {
            this.selectedMode = null
            this.submitForm = true
            Swal.fire('Oops!', data.message, 'error');
          } else {
            this._service.LienMarkChecking(obj).subscribe(data => {
              if (data != 0) {
                this.selectedMode = null
                this.submitForm = true
                Swal.fire('Oops!', data.message, 'error');
              } else {
                this._service.RecurringTypeDeposite(obj).subscribe(data => {
                  if (data != 0) {
                    this.selectedMode = null
                    this.submitForm = true
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

  // Check Voucher Conditions On Interest Date
  getColumnValue(event) {
    if (event != null) {
      let obj = {
        accountNo: this.submitCustomer.BANKACNO,
        schemeType: this.selectedCode,
        scheme: this.Submitscheme.S_APPL,
        tran: this.submitTranMode.tran_drcr,
        tranMode: this.submitTranMode.id,
        currentDate: this.date,
        interestDate: moment(event).format('DD/MM/YYYY')
      }
      let date = moment(event).format('DD/MM/YYYY');
      this.updateheadbalance(date)
      this._service.ComInterestDateAndCurrentDate(obj).subscribe(data => {
        if (data != 0) {
          Swal.fire('Oops!', data.message, 'error');
          this.angForm.controls['Intdate'].reset()
        } else {
          this._service.ComInterestDateAndLastDMonth(obj).subscribe(data => {
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
  }

  checkTokenCondition(event) {
    let obj = {
      value: Number(event.target.value),
      clearBalance: this.ClearBalance,
      accountNo: this.submitCustomer.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.Submitscheme.S_APPL,
      tran: this.submitTranMode.tran_drcr,
      tranMode: this.submitTranMode.id,
      tran_type: this.submitTranMode.tran_type,
      odAmount: this.overdraftAmt,
      currentDate: this.date
    }


    this._service.ComInterestDateAndLastDMonth(obj).subscribe(data => {
      if (data != 0) {
        Swal.fire('Oops!', data.message, 'error');
      }
    }, err => {
      console.log(err);
    })

  }

  ngAfterViewInit(): void {
    // this.dtTrigger.next();
    // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //   $('#transactiontable tfoot tr').appendTo('#transactiontable thead');
    //   dtInstance.columns().every(function () {
    //     const that = this;
    //     $('input', this.footer()).on('keyup change', function () {
    //       if (this['value'] != '') {
    //         that
    //           .search(this['value'])
    //           .draw();
    //       } else {
    //         that
    //           .search(this['value'])
    //           .draw();
    //       }
    //     });
    //   });
    // });
  }

  updatecheckdata
  public visibleAnimate = false;
  public visible = false;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateID: any;

  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  headFlag: boolean = false;
  editClickHandler(id) {

    this._service.getFormData(id).subscribe((data) => {
      //debugger
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
      this.updateID = data.id;
      this.selectedBranch = data.BRANCH_CODE
      this.selectedCode = data.TRAN_ACNOTYPE
      this.selectedSchemeCode();

      this.headFlag = true;
      this.headData = data.InputHead;
      this.headShow = true;
      this.selectedScheme = data.scheme.id
      this.Submitscheme = data.scheme;
      this.selectedMode = data.tran_mode[0].id;
      this.introducerACNo = [];
      this.obj = [this.selectedScheme, this.selectedBranch]
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
          this.savingMasterService.getGLAccountSchemeList1(this.obj).subscribe(data => {
            this.introducerACNo = data
          })
          break;
      }

      this.selectedAccountno = data.account_no[0].id
      this.getVoucherData(data.account_no[0]);
      this.headData.forEach(ele => {
        this.totalAmt = Number(this.totalAmt) + Number(ele.Amount)
      })
      this.totalAmt = Number(this.totalAmt) + Number(data.TRAN_AMOUNT)
      if (data.TRAN_TYPE == 'TR')
        this.showChequeDetails = true;
      else
        this.showChequeDetails = false
      this.angForm.patchValue({
        type: data.TRAN_TYPE == 'CS' ? 'cash' : data.TRAN_TYPE == 'TR' ? 'transfer' : '',
        date: data.TRAN_DATE,
        // account_no: data.TRAN_ACNO,
        chequeNo: data.CHEQUE_NO,
        chequeDate: data.CHEQUE_DATE,
        amt: Number(data.TRAN_AMOUNT).toFixed(2),
        total_amt: Number(this.totalAmt).toFixed(2),
        particulars: data.NARRATION,
        token: data.TOKEN_NO,
      })


      // this.resetscheme();
      this.checkAccountCondition();
      this.showlgindetails();
      this.SideDetails();
      this.checktranCondition();
      // this.updateheadbalance()
      this.angForm.patchValue({
        tran_mode: data.tran_mode[0].id,
      })
      this.selectedMode = data.tran_mode[0].id;
    })

  }

  updateData() {

  }

  //approve account
  Approve() {
    let obj = {
      id: this.updateID,
      userid: this.loginUser.id
    }
    this._service.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Voucher approved successfully',
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
    let obj = {
      id: this.updateID,
    }
    this._service.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Voucher rejected successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
    }, err => {
      console.log('something is wrong');
    })
  }


  addNewData() {
    this.createForm()
  }
  SideView: boolean = false
  ShowLNCC: boolean = false
  ShownotLNCC: boolean = false
  sanctionamt
  passextension
  unpassextension

  typeclearbal
  tempDayOpBal
  extensionopenbal
  maturityamt = 0
  depositamt = 0
  expirydate = ''
  sanctiondate = ''
  asondate = ''
  opendate = ''
  renewaldate = ''
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
      this.depositamt = (this.submitCustomer.AC_SCHMAMT != null ? this.submitCustomer.AC_SCHMAMT : 0)
      this.asondate = (this.submitCustomer.AC_ASON_DATE != null ? this.submitCustomer.AC_ASON_DATE : '---')
      this.opendate = (this.submitCustomer.AC_OPDATE != null ? this.submitCustomer.AC_OPDATE : '---')
    } else {
      this.ShowLNCC = false
      this.ShownotLNCC = false
    }

    this.submitCustomer.AC_ODAMT == undefined ? this.submitCustomer.AC_ODAMT = 0 : this.submitCustomer.AC_ODAMT = this.submitCustomer.AC_ODAMT
    this.submitCustomer.AC_SODAMT == undefined ? this.submitCustomer.AC_SODAMT = 0 : this.submitCustomer.AC_SODAMT = this.submitCustomer.AC_SODAMT
    this.overdraftAmt = Number(this.submitCustomer.AC_ODAMT) + Number(this.submitCustomer.AC_SODAMT)

    var startdate = this.angForm.controls['date'].value

    let formDT = moment(startdate, 'DD/MM/YYYY')
    var addInFrom: any;
    if (this.Submitscheme.S_ACNOTYPE == 'PG') {
      addInFrom = startdate;
    } else {
      addInFrom = moment(formDT, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY')
    }
    let obj = {
      scheme: this.Submitscheme.S_APPL,
      acno: this.Submitscheme.S_APPL == '980' ? this.submitCustomer.AC_NO : this.submitCustomer.BANKACNO,
      date: addInFrom
    }

    this._service.getledgerbalance(obj).subscribe(data => {
      //debugger
      this.DayOpBal = Math.abs(data);
      if (data < 0) {
        this.extensionopenbal = 'Cr'
      } else {
        this.extensionopenbal = 'Dr'
      }
      //debugger
      this.tempDayOpBal = data;
      if (this.submitCustomer.AC_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && this.DayOpBal > 0) {
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1)
      }
      if (this.Submitscheme?.S_ACNOTYPE == 'TD' && this.Submitscheme?.WITHDRAWAL_APPLICABLE == '0')
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4)
      if (this.Submitscheme?.S_ACNOTYPE == 'LN' && this.Submitscheme?.IS_DEPO_LOAN == '1' && this.DayOpBal > 0)
        this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9)
      this._service.getPassedUnpassedBalance(obj).subscribe(data1 => {
        this.Pass = Math.abs(data1.passedamt)
        this.Unpass = Math.abs(data1.unpassamt)
        this.passextension = (data1.passextension != undefined ? data1.passextension : '')
        this.unpassextension = (data1.unpassextension != undefined ? data1.unpassextension : '')
        // this.ClearBalance = this.DayOpBal + this.Pass
        var open = (this.tempDayOpBal <= 0 ? Math.abs(this.tempDayOpBal) : (-this.tempDayOpBal))
        var pass = (data1.passedamt <= 0 ? Math.abs(data1.passedamt) : (-data1.passedamt))
        var unpass = (data1.unpassamt <= 0 ? Math.abs(data1.unpassamt) : (-data1.unpassamt))

        let value = open + pass;
        if (value < 0) {
          this.ClearBalance = Math.abs(value)
          this.typeclearbal = 'Dr'
        } else {
          this.ClearBalance = Math.abs(value)
          this.typeclearbal = 'Cr'
        }
      })
    })
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
    console.log(ele);
  }

  onOpen(select: NgSelectComponent) {
    //debugger
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }

  @Output() newCustomerEvent = new EventEmitter<string>();
  addNewCustomer(value) {
    this.dtTrigger.next()
  }
}
