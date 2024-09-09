import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TransactionCashModeService } from '../../../shared/elements/transaction-cash-mode.service';
import { TransactionTransferModeService } from '../../../shared/elements/transaction-transfer-mode.service';
import { SchemeTypeService } from '../../../shared/elements/scheme-type.service';
import Swal from 'sweetalert2';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { MultiVoucherService } from './multi-voucher.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { CustomerIdService } from '../../master/customer/customer-id/customer-id.service';
import { environment } from 'src/environments/environment';
import { VoucherEntryService } from '../voucher-entry/voucher-entry.service'
import { BankMasterService } from '../../../shared/dropdownService/bank-Master-dropdown.service'
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { NgSelectComponent } from '@ng-select/ng-select';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-multi-voucher',
  templateUrl: './multi-voucher.component.html',
  styleUrls: ['./multi-voucher.component.scss'],

})

export class MultiVoucherComponent implements OnInit {
  @Output() reloadTablePassing = new EventEmitter<string>();
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('triggrhide1') triggrhide1: ElementRef<HTMLElement>;
  @ViewChild('focusbutton') focusbutton: ElementRef<HTMLElement>;
  @ViewChild('selectMode') selectMode: NgSelectComponent;
  @ViewChild('amt') amt: ElementRef;
  @ViewChild('INTAMT') INTAMT: ElementRef;
  @ViewChild('NOTINTAMT') NOTINTAMT: ElementRef;
  @ViewChild('submitbtn') submitbtn: ElementRef;
  @ViewChild('bankNameField') bankNameField: ElementRef;
  @ViewChild('narrationField') narrationField: ElementRef;
  branchCode: any = null
  @ViewChild('myDiv') myDiv: ElementRef;

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
  Pass: any = 0;
  Unpass: any = 0;
  ClearBalance: any = 0;
  AfterVoucher: any = 0;
  InputHeadAmt: number = 0.00;
  EditFlag: boolean = false;
  index: number;
  AmountEqual: boolean = false;
  //object created to get data when row is clicked
  pigmyamount = 0
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
    { key: 'PG', data: { cash: [1, 4, 5, 10], transfer: [1, 4, 5, 10] } },
    { key: 'TD', data: { cash: [1, 4, 5, 6, 10], transfer: [1, 4, 5, 6, 9, 10] } },
  ]

  bankName
  selectBankName

  tranModeList: any;
  particular: any;
  date: any;
  isture: boolean = true;
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
  Customer_Name
  Customer_Pan_No = '---'
  Customer_Contact_No = '---'
  Status
  maxDate: Date;
  minDate: Date;
  submitForm = false
  interestMinDate: any
  interestMaxDate: any

  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  unapproveShow: boolean = false;
  loginUser: any;
  modalClass: string = 'modalHide';
  constructor(
    public TransactionCashModeService: TransactionCashModeService,
    public TransactionTransferModeService: TransactionTransferModeService,
    public SchemeTypeService: SchemeTypeService,
    private ownbranchMasterService: OwnbranchMasterService,
    private _SchemeCodeDropdown: SchemeCodeDropdownService,
    private _service: MultiVoucherService,
    private _vservice: VoucherEntryService,
    private savingMasterService: SavingMasterService,
    private fb: FormBuilder,
    private _bankmasterService: BankMasterService,
    private router: Router,
    private _CustomerIdService: CustomerIdService,
    private _ACMasterDropdownService: ACMasterDropdownService,

  ) {
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
    // this.maxDate = new Date();
    // this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    this.createForm()

    //Day opening Amount
    //get session branch data
    let user = JSON.parse(localStorage.getItem('user'));
    this.loginUser = user;
    this.type = 'tranfer';


    //get syspara details
    this._service.getSysParaData().subscribe(data => {
      // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
      this.date = data[0].CURRENT_DATE;
      let nextDate = moment(this.date, 'DD/MM/YYYY').add(3, 'month').format('YYYY-MM-DD');
      let lastDate = moment(this.date, 'DD/MM/YYYY').subtract(3, 'month').format('YYYY-MM-DD');

      this.maxDate = new Date(nextDate);
      this.maxDate.setDate(this.maxDate.getDate());

      this.minDate = new Date(lastDate);
      this.minDate.setDate(this.minDate.getDate());

    })

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.selectedBranch = user.branchId;
    })

    this._bankmasterService.getBankList().subscribe(banks => {
      this.bankName = banks
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

  // getBankName(ele) {
  //   this.bankName = ele;
  //   let el1: HTMLElement = this.triggrhide1.nativeElement;
  //   el1.click();
  // }
  createForm() {
    this.angForm = this.fb.group({
      branch_code: ['', [Validators.required]],
      // temp_over_draft: [''],
      // over_draft: [''],
      token: [''],
      NARRATION: [''],
      total_amt: [''],
      amt: [0],
      slip_no: [''],
      tran_mode: ['', [Validators.required]],
      account_no: ['', [Validators.required]],
      scheme: ['', [Validators.required]],
      scheme_type: ['', [Validators.required]],
      date: [''],
      type: new FormControl('cash'),
      chequeDate: [''],
      chequeNo: [''],
      bank: [''],
      Intdate: ['']
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.selectedBranch = result.branch.id
      this.angForm.controls['branch_code'].enable()
      this.branchCode = result.branch.CODE
    }
    else {
      this.angForm.controls['branch_code'].disable()
      this.selectedBranch = result.branch.id
      this.branchCode = result.branch.CODE
      this.angForm.patchValue({
        'branch_code': result.branch.id
      })
    }

  }

  IntersetHeadDate: any;
  selectedSchemeCode() {

    this.allScheme = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCode) {
        this.allScheme.push(element)
      }
    });



    //get Head details
    let obj = { 'code': this.selectedCode };
    let date = this.date;
    var rowData = date.split('/');
    let lastdate = Number(rowData[0]) - 1;
    // let result    = rowData[2]+'-'+rowData[1]+'-'+lastdate;
    this.IntersetHeadDate = lastdate + '/' + rowData[1] + '/' + rowData[2];
    // this._service.getHeadDetails(obj).subscribe(data => {

    //   if (data.length != 0) {

    //     if (!this.headflag) {
    //       this.headData = data;
    //       this.headShow = true;
    //       this.headData.forEach(element => {
    //         element['date'] = this.IntersetHeadDate;
    //         element['Amount'] = 0.00
    //       });
    //     }
    //   } else {
    //     this.headShow = false;
    //   }
    // }, err => {
    //   console.log(err);
    // })
  }




  //get account no according scheme for introducer
  submitScheme: any;
  getIntroducer(item, branch) {
    this.tempschmetype = this.selectedCode
    this.introducerACNo = [];
    this.submitScheme = item;

    if (this.tempscheme != this.selectedScheme) {
      this.customer = null
    }

    this.obj = [item.id, branch]
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
  getIntroducer1(item) {
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

  //Transaction mode select
  transactionMode(mode) {
    this.type = mode;
    let object = this.TranData.find(t => t.key === this.selectedCode);
    if (this.type == 'cash') {
      this.tranModeList = [];
      object.data.cash.forEach(ele => {
        let obj = this.TranModeCash.find(t => t.id === ele);
        this.tranModeList.push(obj);
      })
    } else {
      this.tranModeList = [];
      object.data.transfer.forEach(ele => {
        let obj = this.TranModeTransfer.find(t => t.id === ele);
        this.tranModeList.push(obj);
      })
    }
  }

  selectAllContent($event) {
    $event.target.select();
  }

  //get Narration Details 
  getNarration(ele) {
    this.particular = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
    this.narrationField.nativeElement.focus()
  }

  //get Narration Details 
  getBankName(ele) {
    this.selectBankName = ele;
    let el: HTMLElement = this.triggrhide1.nativeElement;
    el.click();
    this.bankNameField.nativeElement.focus()
  }

  //submit Form
  Add() {
    if (Number(this.totalAmt) != 0 && this.totalAmt != undefined) {
      let user = JSON.parse(localStorage.getItem('user'));
      let obj = this.angForm.value;
      obj['user'] = user;
      for (let ele of this.headData) {
        if (ele['INTEREST_DATE_INPUT'] == '0' && ele.FIELD_AMOUNT == 'INTEREST_AMOUNT') {
          ele['date'] = null
        }
      }
      let chequeDate = moment(obj.chequeDate).format('DD/MM/YYYY')
      obj['InputHead'] = this.headData;
      obj['tran_mode'] = this.submitTranMode;
      obj['chequeDate'] = chequeDate
      obj['scheme'] = this.submitScheme;
      obj['chequeDate'] = chequeDate
      obj['account_no'] = this.submitAccountNo;
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

      // this.angForm.controls['temp_over_draft'].reset()
      // this.angForm.controls['over_draft'].reset()
      this.angForm.controls['token'].reset()
      // this.angForm.controls['NARRATION'].reset()
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
      // this.getVoucherData();
      this.headData = [];
      this.headShow = false;
      this.showChequeDetails = false;
      this.submitAccountNo = {};
      this.submitScheme = {};
      this.submitTranMode = {};
      this.selectedCode = undefined;
      this.selectedScheme = '';
      this.selectedMode = '';
      this.customer = '';

      this.calculateVoucher()
    } else {
      Swal.fire('Oops!', 'Please once check your voucher, and fill requied data', 'error');
    }

  }

  submit() {
    if (this.totalCredit == this.totalDebit && Number(this.totalCredit) != 0 && Number(this.totalDebit) != 0) {
      this._service.insertVoucher(this.mainMaster).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Multi Voucher updated Successfully!',
          html:
            '<b>Please Note Down Voucher Number : </b>' + data.TRAN_NO + '<br>'
        })
        // this.getVoucherData();
        // Swal.fire('Success!', 'Voucher update Successfully !', 'success');
        this.type = 'cash';
        this.mainMaster = [];
        this.headData = [];
        this.headShow = false;
        this.totalCredit = '0';
        this.totalDebit = '0';
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
      Swal.fire('Oops', 'Total credit amount ' + this.totalCredit + ' and ' + 'total debit amount' + this.totalDebit + ' are not match')
    }

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

  //Mode data
  submitTranMode: any;
  headFlag: boolean = false;
  changeMode(item) {
    //
    this.submitForm = true
    this.headData = []
    this.submitTranMode = item;
    if (this.submitTranMode.tran_type == 'TR') {
      this.showChequeDetails = true;
      // this.angForm.controls['chequeNo'].reset()
      // this.angForm.controls['chequeDate'].reset()
      // this.angForm.controls['bank'].reset()

    }
    else {
      this.showChequeDetails = false;
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
      if (data.length != 0) {

        if (!this.headFlag) {
          // this.headData = data;
          this.headShow = true;
          // for (let i = 0; i <= headType.length; i++) {
          //   let value = {}
          //   value = data.find(data => data['FIELD_AMOUNT'] == headType[i].FieldAmount)
          //   if (value != undefined) {
          //     if (this.submitTranMode.tran_drcr == value['DRCR_APPLICABLE'] || value['DRCR_APPLICABLE'] == 'B') {
          //       this.headData.push(value)
          //     }

          //   }
          // }
          for (let item of data) {
            let value = {}
            // value = data.find(data => data['FIELD_AMOUNT'] == headType[i].FieldAmount)
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
    if (this.submitScheme.S_ACNOTYPE == 'TD' || this.submitScheme.S_ACNOTYPE == 'SB' || this.submitScheme.S_ACNOTYPE == 'PG' || this.submitScheme.S_ACNOTYPE == 'AG' || this.submitScheme.S_ACNOTYPE == 'CA') {
      this.interestMaxDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
      this.interestMaxDate = this.interestMaxDate._d
      this.interestMinDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'months')
      this.interestMinDate = this.interestMinDate._d
    }
    else if (this.submitScheme.S_ACNOTYPE == 'LN' || this.submitScheme.S_ACNOTYPE == 'CC' || this.submitScheme.S_ACNOTYPE == 'DS') {
      this.interestMinDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
      this.interestMinDate = this.interestMinDate._d
      this.interestMaxDate = moment(this.date, "DD/MM/YYYY").add(1, 'months')
      this.interestMaxDate = this.interestMaxDate._d
    }

    if (item.id == 6) {
      this.angForm.controls.amt.setValue('0.00');
      this.angForm.controls.totalAmt.setValue('0.00');
      this.totalAmt = 0.00
      this.angForm.controls['amt'].disable();
    }
    else if (item.id == 2 || item.id == 5 || item.id == 15) {
      this.angForm.patchValue({
        amt: Number(this.ClearBalance).toFixed(2)
      })
      // this.getaftervoucher()
      this.angForm.controls['amt'].disable();
      this.decimalAllContent(this.ClearBalance);
      this.checkCondition(this.ClearBalance);
      this.checkSanctionAmountWithAmount()
      this.checkamtcondition(this.ClearBalance)
      this.getAmt(this.ClearBalance)
    }
    else {
      this.angForm.controls.amt.setValue('0.00');
      this.angForm.controls['amt'].enable();
    }

    // if (this.selectedCode == 'GL') {
    //   this.showChequeDetails = true
    // }
  }


  tempscheme
  //get customer today voucher data
  submitAccountNo: any;
  // submitAccountNo: any;
  isMinor: boolean = false
  isJoint: boolean = false
  minor
  accountEvent
  grdName
  custId
  getVoucherData(item) {
    this.accountEvent = item
    this.grdName = this.accountEvent.AC_GRDNAME;
    this.custId = this.accountEvent.AC_CUSTID;
    this.patchToTable(this.grdName, this.custId);
    this.minor = item.AC_MINOR
    if (item.AC_MINOR == '1') {
      this.isMinor = true
    }
    else if (item.AC_MINOR == '0') {
      this.isMinor = false
    }
    if (item.jointAccounts && item.jointAccounts.length > 0) {
      this.isJoint = true
    }
    else if (item.jointAccounts = '0') {
      this.isJoint = false
    }
    this.DayOpBal = 0
    this.selectedMode = null
    this.angForm.controls['total_amt'].reset()
    this.angForm.controls['amt'].reset()
    this.angForm.controls['tran_mode'].reset();
    this.tempscheme = this.selectedScheme
    this.submitAccountNo = item;
    let customer = this.angForm.controls['account_no'].value;
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
      date: addInFrom,
      branch: this.branchCode

    }
    //
    this._vservice.getledgerbalance(openingobj).subscribe(data => {
      this.DayOpBal = Math.abs(data);
      this.DayOpBal = Number(this.DayOpBal).toFixed(2)
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


  // //get Input head Amount
  // getInputHeadAmt(ele, i) {
  //   var t = ele.target.value;
  //   ele.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  //   let value = Number(ele.target.value);
  //   if (Number(ele.target.value) > Number(this.headData[i].Balance) && this.headData[i].CHECK_BALANCE == '1') {
  //     Swal.fire('Info', 'Please fill proper amount!', 'info')
  //     this.headData[i].Amount = '0';
  //   }
  //   else {
  //     this.headData[i].Amount = value;
  //     let tran = this.submitTranMode.tran_drcr
  //     let count = 0
  //     this.headData.forEach(element => {
  //       count = Number(element.Amount) + Number(count)
  //     });
  //     this.totalAmt = count + Number(this.angForm.controls['amt'].value)
  //   }
  //   this.totalAmt = Number(this.totalAmt).toFixed(2)
  // }

  //get Input head Amount
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
  checkheadcondition(event, i) {
    console.log('event', event)
    let value = event.target.value;
    this.headData[i].Amount = value
    let data = this.headData[i]

    if (data.FIELD_AMOUNT != 'PENAL_INT_AMOUNT') {
      if ((this.submitTranMode.id == 5 || this.submitTranMode.id == 2) && Number(data.Balance) != 0 && Number(data.Amount) != Number(data.Balance)) {
        Swal.fire('Oops', 'Please Fill ' + data.DESCRIPTION + ' Amount', 'error')
        this.headData[i].Amount = '0.00'
      } else {
        if (data.CHECK_REQUIRE == '1' && Number(data.Amount) != Number(data.Balance)) {
          Swal.fire('Oops', 'Please Fill ' + data.DESCRIPTION + ' Amount', 'error')
          this.headData[i].Amount = '0.00'
        }
      }

    }
  }

  //decimal content show purpose wrote below function
  decimalAllContent($event) {

    if (this.submitTranMode == undefined) {
      Swal.fire('Oops', 'Please First Select Tran Mode then enter Amount', 'error');
      let value = Number($event);
      this.totalAmt = 0;
      $event = 0
      let amt = Number(this.AfterVoucher) - value;
      if (amt < 0) {
        amt = 0;
      }
      this.AfterVoucher = Math.abs(Number(parseFloat((amt).toString()).toFixed(2)))
    } else {
      let value = Number($event);
      let data = value.toFixed(2);
      $event = data;
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
    this.calculateVoucher()
  }

  //Edit Voucher Data
  headflag: boolean = false;
  editVoucher(index) {
    // debugger
    this.headflag = true;

    this.EditFlag = true;
    this.index = index;
    var data = this.mainMaster[index];
    this.selectedCode = data.scheme_type;
    this.selectedSchemeCode()
    this.selectedScheme = data.scheme.id;
    this.getIntroducer(data.scheme, data.BRANCH_CODE)
    this.customer = data.account_no.id;
    this.selectedMode = data.tran_mode.id;
    this.particular = data.NARRATION;
    this.submitAccountNo = data.account_no;
    this.submitScheme = data.scheme;
    this.submitTranMode = data.tran_mode;
    this.bank = data.bank;
    this.angForm.patchValue({
      chequeNo: data.chequeNo,
      chequeDate: data.chequeDate,
      bank: data.bank,
      amt: Number(data.amt).toFixed(2),
      // NARRATION: data.NARRATION,
      total_amt: data.total_amt,
      // bank:data.bank
    })
    // this.changeMode(data.tran_mode);
    this.headData = []
    this.headData = data.InputHead;
    if (this.headData.length > 0) {
      this.headShow = true;
    }

    if (data.chequeDate != undefined) {
      this.showChequeDetails = true;
    }
    this.showAdd = false;
    this.showUpdate = true;
    this.calculateVoucher()
    this.showlgindetails()
    this.SideDetails()
    this.angForm.patchValue({
      chequeNo: data.chequeNo,
      chequeDate: data.chequeDate,
      amt: Number(data.amt).toFixed(2),
      NARRATION: data.NARRATION,
      total_amt: Number(data.total_amt).toFixed(2),
      bank: data.bank
    })
  }


  update() {

    if (Number(this.totalAmt) != 0 && this.totalAmt != undefined) {
      let user = JSON.parse(localStorage.getItem('user'));
      let obj = this.angForm.value;
      obj['user'] = user;
      obj['InputHead'] = this.headData;
      obj['tran_mode'] = this.submitTranMode;
      obj['scheme'] = this.submitScheme;
      obj['account_no'] = this.submitAccountNo;
      obj['amt'] = Number(this.angForm.controls['amt'].value).toFixed(2)
      obj['total_amt'] = Number(this.angForm.controls['total_amt'].value).toFixed(2)
      this.mainMaster[this.index] = obj;
      this.showAdd = true;
      this.showUpdate = false;
      this.EditFlag = false;

      // this.angForm.controls['temp_over_draft'].reset()
      // this.angForm.controls['over_draft'].reset()
      this.angForm.controls['token'].reset()
      // this.angForm.controls['NARRATION'].reset()
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
      this.calculateVoucher()
    } else {
      Swal.fire('Oops!', 'Please once check your voucher, and fill requied data', 'error');

    }
  }

  updatecheckdata
  public visibleAnimate = false;
  public visible = false;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateID
  item1: any;
  editClickHandler(id) {
    //
    this._service.getFormData(id).subscribe((data) => {
      //
      this.angForm.disable()
      // console.log(data);
      this.updateID = data[0].TRAN_NO
      this.updatecheckdata = data
      if (data[0].TRAN_STATUS == '0') {
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
        this.approveShow = true;
        this.rejectShow = true
        this.unapproveShow = false
      } else if (data[0].TRAN_STATUS != '0') {
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
      this.mainMaster = data

      for (let ele of this.mainMaster) {
        ele['total_amt'] = Number(ele['total_amt']).toFixed(2)

      }
      this.selectedCode = data[0].scheme.S_ACNOTYPE;
      this.selectedSchemeCode()
      this.selectedScheme = data[0].scheme.id;
      this.getIntroducer(this.mainMaster[0].scheme, data[0].BRANCH_CODE);
      this.customer = data[0].account_no.id;
      this.submitAccountNo = data[0].account_no;
      this.selectedMode = data[0].tran_mode.id;
      this.particular = data[0].NARRATION;
      this.angForm.patchValue({
        scheme: this.selectedScheme,
        NARRATION: data[0].NARRATION,
        amt: Number(data[0].amt).toFixed(2)
      })
      this.calculateVoucher()
      this.showlgindetails()
      this.SideDetails()
    })
  }

  updateData() {

  }

  totalCredit = '0';
  totalDebit = '0';
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

  //approve account
  Approve() {
    let obj = {
      id: Number(this.updateID),
      userid: this.loginUser.id,
      branch: this.selectedBranch
    }
    this._service.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Multi Voucher approved successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.angForm.enable()
      this.reloadTablePassing.emit();

    }, err => {
      console.log('something is wrong');
    })
  }

  //reject account
  reject() {
    let obj = {
      id: this.updateID,
      branch: this.selectedBranch
    }
    this._service.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Multi Voucher rejected successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.angForm.enable()
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  unApprove() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      LOG_DATE: this.date,
      BRANCH_CODE: this.updatecheckdata[0]['BRANCH_CODE']
    }
    this._service.unapporveMultiVoucher(obj).subscribe(data => {
      Swal.fire(
        'Unapproved',
        'Multivoucher unapproved successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.angForm.enable()
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  addNewData() {
    this.createForm()
    this.angForm.enable()
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

  SideView: boolean = false
  ShowLNCC: boolean = false
  ShownotLNCC: boolean = false
  sanctionamt
  passextension
  unpassextension

  typeclearbal
  tempDayOpBal
  extensionopenbal
  maturityamt: any = 0
  depositamt: any = 0
  expirydate = ''
  sanctiondate = ''
  asondate = ''
  opendate = ''
  renewaldate = ''
  extenstionaftervoucher = ''
  overdraftAmt

  SideDetails() {
    // debugger
    this.AfterVoucher = 0
    this.extenstionaftervoucher = ''
    this.angForm.controls['amt'].reset()
    this.angForm.controls['total_amt'].reset()
    this.SideView = true
    if (this.submitAccountNo.AC_ACNOTYPE == 'LN' || this.submitAccountNo.AC_ACNOTYPE == 'CC' || this.submitAccountNo.AC_ACNOTYPE == 'DS') {
      this.ShowLNCC = true
      this.ShownotLNCC = false
      this.sanctionamt = (this.submitAccountNo.AC_SANCTION_AMOUNT != null ? this.submitAccountNo.AC_SANCTION_AMOUNT : 0)
      this.sanctionamt = Number(this.sanctionamt).toFixed(2)
      this.sanctiondate = (this.submitAccountNo.AC_SANCTION_DATE != null ? this.submitAccountNo.AC_SANCTION_DATE : '---')
      this.expirydate = (this.submitAccountNo.AC_EXPIRE_DATE != null ? this.submitAccountNo.AC_EXPIRE_DATE : '---')
      this.asondate = (this.submitAccountNo.AC_ASON_DATE != null ? this.submitAccountNo.AC_ASON_DATE : '---')
      this.opendate = (this.submitAccountNo.AC_OPDATE != null ? this.submitAccountNo.AC_OPDATE : '---')
      this.renewaldate = (this.submitAccountNo.AC_OPEN_OLD_DATE != null ? this.submitAccountNo.AC_OPEN_OLD_DATE : '---')
    } else if (this.submitAccountNo.AC_ACNOTYPE == 'TD' || this.submitAccountNo.AC_ACNOTYPE == 'PG' || this.submitAccountNo.AC_ACNOTYPE == 'IV') {
      this.ShowLNCC = false
      this.ShownotLNCC = true
      this.expirydate = (this.submitAccountNo.AC_EXPDT != null ? this.submitAccountNo.AC_EXPDT : '---')
      this.maturityamt = (this.submitAccountNo.AC_MATUAMT != null ? this.submitAccountNo.AC_MATUAMT : 0)
      this.maturityamt = Number(this.maturityamt).toFixed(2)
      this.depositamt = (this.submitAccountNo.AC_SCHMAMT != null ? this.submitAccountNo.AC_SCHMAMT : 0)
      this.depositamt = Number(this.depositamt).toFixed(2)
      this.asondate = (this.submitAccountNo.AC_ASON_DATE != null ? this.submitAccountNo.AC_ASON_DATE : '---')
      this.opendate = (this.submitAccountNo.AC_OPDATE != null ? this.submitAccountNo.AC_OPDATE : '---')
    } else {
      this.ShowLNCC = false
      this.ShownotLNCC = false
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


  url = environment.base_url;
  ShowDocuments: boolean = false
  showlgindetails() {
    this.customerImg = 'assets/images/nouser.png';
    this.signture = 'assets/images/nosignature.png'
    if (this.angForm.controls['account_no'].value != null) {
      this.ShowDocuments = true
      this._CustomerIdService.getFormData(this.submitAccountNo.idmasterID).subscribe(data => {
        this.Customer_Name = data.AC_NAME
        this.Customer_Pan_No = data.AC_PANNO
        this.Customer_Contact_No = data.AC_MOBILENO
        this.Status = this.submitAccountNo.IS_DORMANT
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
    }
  }
  checkSanctionAmountWithAmount() {
    // let ledgerbal = Number(this.tempDayOpBal) > 0 ? Number(this.tempDayOpBal) : 0
    let sancAmt = (Number(this.sanctionamt) - Number(this.ClearBalance)) + Number(this.overdraftAmt)
    if (sancAmt < Number(this.angForm.controls['amt'].value) && this.submitTranMode.id == 4 && this.submitTranMode.tran_drcr == 'D' && (this.submitScheme?.S_ACNOTYPE == 'CC' || this.submitScheme?.S_ACNOTYPE == 'LN') && this.submitScheme.IS_GOLD_LOAN != '1') {
      this.SideDetails()
      this.angForm.controls['amt'].reset();
      this.angForm.patchValue({
        total_amt: 0
      })
      this.amt.nativeElement.focus();
      Swal.fire('Oops!', `Access Denied, Amount Can't Be Withdraw More Than Rs. ${sancAmt}`, 'error');
      this.submitForm = true
    }
  }


  // Check Voucher Conditions On Amount Field
  checkCondition($event) {

    let obj = {
      value: Number($event),
      clearBalance: Number(this.ClearBalance),
      accountNo: this.submitAccountNo.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
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
          this.angForm.controls['total_amt'].reset(0);
          this.SideDetails()
          this.submitForm = true
        } else {
          this.amt.nativeElement.blur();
          this.checkamtcondition($event)
          this.checkSanctionAmountWithAmount()
        }
      })
    } if (Number(obj.value) >= 200000) {

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
          this.checkSanctionAmountWithAmount()
          this.amt.nativeElement.blur();
        } else {
          this.angForm.controls['amt'].reset();
          this.angForm.controls['total_amt'].reset(0);
          this.submitForm = true
          this.SideDetails()
        }
      })

    } else {
      this.checkamtcondition($event)
    }
  }

  //cheque no captial function
  chequeNoData(event) {
    //
    this.angForm.patchValue({
      chequeNo: event.target.value.toUpperCase()
    })
  }
  checkamtcondition($event) {
    let obj = {
      // value: Number($event.target.value),
      value: Number(this.angForm.controls['amt'].value),
      clearBalance: Number(this.ClearBalance),
      accountNo: this.submitAccountNo.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
      tran: this.submitTranMode.tran_drcr,
      tranMode: this.submitTranMode.id,
      odAmount: this.overdraftAmt,
      currentDate: this.date,
      totalAmt: this.angForm.controls['total_amt'].value,
      type: this.typeclearbal
    }
    this._service.checkZeroBalance(obj).subscribe(data => {
      this.modalClass = 'modalShow';
      if (data != 0) {
        this.SideDetails()
        this.angForm.controls['amt'].reset();
        this.angForm.controls['total_amt'].reset(0);
        this.amt.nativeElement.focus();
        this.submitForm = true
        this.modalClass = 'modalHide';
        Swal.fire('Oops!', data.message, 'error');
      } else {
        this._service.clearWithdrawBal(obj).subscribe(data => {
          if (data != 0) {
            this.SideDetails()
            this.angForm.controls['amt'].reset();
            this.angForm.controls['total_amt'].reset(0);
            this.amt.nativeElement.focus();
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
                    this.amt.nativeElement.focus();
                    this.submitForm = true
                    this.modalClass = 'modalHide';
                    Swal.fire('Oops!', data.message, 'error');
                  } else {
                    this._service.BalancePresentOrOverdraft(obj).subscribe(data => {
                      if (data != 0) {
                        this.SideDetails()
                        this.angForm.controls['amt'].reset();
                        this.angForm.controls['total_amt'].reset(0);
                        this.amt.nativeElement.focus();
                        this.submitForm = true
                        this.modalClass = 'modalHide';
                        Swal.fire('Oops!', data.message, 'error');
                      } else {
                        this._service.ClearBalanceDebitAmt(obj).subscribe(data => {
                          if (data != 0) {
                            this.SideDetails()
                            this.angForm.controls['amt'].reset();
                            this.angForm.controls['total_amt'].reset(0);
                            this.amt.nativeElement.focus();
                            this.submitForm = true
                            this.modalClass = 'modalHide';
                            Swal.fire('Oops!', data.message, 'error');
                          } else {
                            this._vservice.InstructionFreezeAc(obj).subscribe(data => {
                              if (data != 0) {
                                this.SideDetails()
                                this.angForm.controls['amt'].reset();
                                this.angForm.controls['total_amt'].reset(0);
                                this.amt.nativeElement.focus();
                                this.submitForm = true
                                this.modalClass = 'modalHide';
                                Swal.fire('Oops!', data.message, 'error');
                              } else {
                                this._vservice.MinBalanceChecking(obj).subscribe(data => {
                                  if (data != 0) {
                                    this.SideDetails()
                                    this.angForm.controls['amt'].reset();
                                    this.angForm.controls['total_amt'].reset(0);
                                    this.amt.nativeElement.focus();
                                    this.submitForm = true
                                    this.modalClass = 'modalHide';
                                    Swal.fire('Oops!', data.message, 'error');
                                  } else {
                                    this._vservice.CheckClearBalAndAmt(obj).subscribe(data => {
                                      if (data != 0) {
                                        this.SideDetails()
                                        this.angForm.controls['amt'].reset();
                                        this.angForm.controls['total_amt'].reset(0);
                                        this.amt.nativeElement.focus();
                                        this.submitForm = true
                                        this.modalClass = 'modalHide';
                                        Swal.fire('Oops!', data.message, 'error');
                                      } else {
                                        this._vservice.WithdrawAmtClosingEqualClearBal(obj).subscribe(data => {
                                          if (data != 0) {
                                            this.SideDetails()
                                            this.angForm.controls['amt'].reset();
                                            this.angForm.controls['total_amt'].reset(0);
                                            this.amt.nativeElement.focus();
                                            this.submitForm = true
                                            this.modalClass = 'modalHide';
                                            Swal.fire('Oops!', data.message, 'error');
                                          } else {
                                            this._vservice.DepositeAmountAndIntallments(obj).subscribe(data => {
                                              if (data != 0) {
                                                this.SideDetails()
                                                this.angForm.controls['amt'].reset();
                                                this.angForm.controls['total_amt'].reset(0);
                                                this.amt.nativeElement.focus();
                                                this.submitForm = true
                                                this.modalClass = 'modalHide';
                                                Swal.fire('Oops!', data.message, 'error');
                                              } else {
                                                this._vservice.DepositAndTotalInstallments(obj).subscribe(data => {
                                                  if (data != 0) {
                                                    this.SideDetails()
                                                    this.angForm.controls['amt'].reset();
                                                    this.angForm.controls['total_amt'].reset(0);
                                                    this.amt.nativeElement.focus();
                                                    this.submitForm = true
                                                    this.modalClass = 'modalHide';
                                                    Swal.fire('Oops!', data.message, 'error');
                                                  } else {
                                                    this._vservice.DepositAndDepositAmount(obj).subscribe(data => {
                                                      if (data != 0) {
                                                        this.SideDetails()
                                                        this.angForm.controls['amt'].reset();
                                                        this.angForm.controls['total_amt'].reset(0);
                                                        this.amt.nativeElement.focus();
                                                        this.submitForm = true
                                                        this.modalClass = 'modalHide';
                                                        Swal.fire('Oops!', data.message, 'error');
                                                      } else {
                                                        this._vservice.PremcloseTdateTamtCom(obj).subscribe(data => {
                                                          if (data != 0) {
                                                            this.SideDetails()
                                                            this.angForm.controls['amt'].reset();
                                                            this.angForm.controls['total_amt'].reset(0);
                                                            this.amt.nativeElement.focus();
                                                            this.submitForm = true
                                                            this.modalClass = 'modalHide';
                                                            Swal.fire('Oops!', data.message, 'error');
                                                          } else {
                                                            this._vservice.PrecloseTrDateTrAmtComCol(obj).subscribe(data => {
                                                              if (data != 0) {
                                                                this.SideDetails()
                                                                this.angForm.controls['amt'].reset();
                                                                this.angForm.controls['total_amt'].reset(0);
                                                                this.amt.nativeElement.focus();
                                                                this.submitForm = true
                                                                this.modalClass = 'modalHide';
                                                                Swal.fire('Oops!', data.message, 'error');
                                                              } else {
                                                                this._vservice.ComVouamtClearbalAndStrs(obj).subscribe(data => {
                                                                  if (data != 0) {
                                                                    this.SideDetails()
                                                                    this.angForm.controls['amt'].reset();
                                                                    this.angForm.controls['total_amt'].reset(0);
                                                                    this.amt.nativeElement.focus();
                                                                    this.submitForm = true
                                                                    this.modalClass = 'modalHide';
                                                                    Swal.fire('Oops!', data.message, 'error');
                                                                  } else {
                                                                    this._vservice.DepositGreaterShareLimitAmt(obj).subscribe(data => {
                                                                      if (data != 0) {
                                                                        this.SideDetails()
                                                                        this.angForm.controls['amt'].reset();
                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                        this.amt.nativeElement.focus();
                                                                        this.submitForm = true
                                                                        this.modalClass = 'modalHide';
                                                                        Swal.fire('Oops!', data.message, 'error');
                                                                      } else {
                                                                        this._vservice.ZeroBalance(obj).subscribe(data => {
                                                                          if (data != 0) {
                                                                            this.SideDetails()
                                                                            this.angForm.controls['amt'].reset();
                                                                            this.angForm.controls['total_amt'].reset(0);
                                                                            this.amt.nativeElement.focus();
                                                                            this.submitForm = true
                                                                            this.modalClass = 'modalHide';
                                                                            Swal.fire('Oops!', data.message, 'error');
                                                                          } else {
                                                                            this._vservice.CashWithdraw(obj).subscribe(data => {
                                                                              if (data != 0) {
                                                                                this.SideDetails()
                                                                                this.angForm.controls['amt'].reset();
                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                this.amt.nativeElement.focus();
                                                                                this.submitForm = true
                                                                                this.modalClass = 'modalHide';
                                                                                Swal.fire('Oops!', data.message, 'error');
                                                                                // } else {
                                                                                //   this._vservice.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                //     if (data != 0) {
                                                                                //       this.SideDetails()
                                                                                //       this.angForm.controls['amt'].reset();
                                                                                //       this.angForm.controls['total_amt'].reset(0);
                                                                                //       this.amt.nativeElement.focus();
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
                                                                                    this.amt.nativeElement.focus();
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
                                                                                        this.amt.nativeElement.blur()
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
  // Check Voucher Conditions On Account Field
  checkAccountCondition() {

    let data1: any = localStorage.getItem('user');
    let result = JSON.parse(data1);
    let tempacno = this.submitAccountNo.BANKACNO
    let obj = {
      clearBalance: Number(this.ClearBalance),
      accountNo: this.submitAccountNo.BANKACNO,
      accno: this.submitAccountNo.AC_NO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
      usertype: result.RoleDefine[0].RoleId,
      currentDate: this.date
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
              this.customer = tempacno
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

  tokenshowhide: boolean = false


  // Check Voucher Conditions On Transaction Mode
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
      currentDate: this.date
    }

    if (this.submitTranMode.id == 7 && this.selectedCode == 'SH') {
      this.angForm.controls['amt'].disable();
      this.angForm.controls['NARRATION'].disable();
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
          'amt': data.count,
          'NARRATION': str + ' Paid Dividend'
        })
      })
    }

    this._vservice.StandingOrInterestInstruction(obj).subscribe(data => {
      if (data != 0) {
        Swal.fire('Oops!', data.message, 'error');
        this.selectedMode = null
      } else {
        this._vservice.VoucherPassing(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Oops!', data.message, 'error');
            this.selectedMode = null
          } else {
            this._vservice.LienMarkChecking(obj).subscribe(data => {
              if (data != 0) {
                Swal.fire('Oops!', data.message, 'error');
                this.selectedMode = null

              } else {
                this._vservice.RecurringTypeDeposite(obj).subscribe(data => {
                  if (data != 0) {
                    Swal.fire('Oops!', data.message, 'error');
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

  // Check Voucher Conditions On Interest Date
  getColumnValue(event) {
    if (event != null) {
      let obj = {
        accountNo: this.submitAccountNo.BANKACNO,
        schemeType: this.selectedCode,
        scheme: this.submitScheme.S_APPL,
        tran: this.submitTranMode.tran_drcr,
        tranMode: this.submitTranMode.id,
        currentDate: this.date,
        interestDate: moment(event).format('DD/MM/YYYY')
      }
      let date = moment(event).format('DD/MM/YYYY');
      this.updateheadbalance(date)

      this._vservice.ComInterestDateAndCurrentDate(obj).subscribe(data => {
        if (data != 0) {
          Swal.fire('Oops!', data.message, 'error');
          this.angForm.controls['Intdate'].reset()
        } else {
          this._vservice.ComInterestDateAndLastDMonth(obj).subscribe(data => {
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
      clearBalance: Number(this.ClearBalance),
      accountNo: this.submitAccountNo.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
      tran: this.submitTranMode.tran_drcr,
      tranMode: this.submitTranMode.id,
      tran_type: this.submitTranMode.tran_type,
      odAmount: this.overdraftAmt,
      currentDate: this.date
    }


    this._vservice.ComInterestDateAndLastDMonth(obj).subscribe(data => {
      if (data != 0) {
        Swal.fire('Oops!', data.message, 'error');
      }
    }, err => {
      console.log(err);
    })

  }

  updateheadbalance(date) {

    let newobj = {
      accountNo: this.submitAccountNo.BANKACNO,
      scheme: this.submitScheme.S_APPL,
      currentDate: date,
      schemeType: this.selectedCode,
    }

    let balancedata
    this._vservice.getInputHeadBal(newobj).subscribe(data1 => {
      balancedata = data1
      //
      // this.headData.forEach(element =>
      for (let element of this.headData) {
        let newobj = {
          acno: element?.GL_CODE,
          scheme: '101',
          date: this.date,
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
          element['date'] = this.IntersetHeadDate;
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

  getaftervoucher(event) {
    this.submitForm = true
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    let value = Number(event.target.value);
    let tran = this.submitTranMode.tran_drcr
    // if (tran == 'D') {
    //   this.AfterVoucher = Math.abs(this.tempDayOpBal - value)
    //   this.extenstionaftervoucher = 'Dr'
    // } else {
    //   this.AfterVoucher = Math.abs(this.tempDayOpBal + value)
    //   this.extenstionaftervoucher = 'Cr'
    // }
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
    } else {
      this.AfterVoucher = Math.abs(Number(this.ClearBalance) + value);
      this.AfterVoucher = Number(this.AfterVoucher).toFixed(2)
      this.extenstionaftervoucher = 'Cr';
    }
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
    console.log(ele);
  }

  onOpen(select: NgSelectComponent) {
    //
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }


  checkIfZero(value) {
    if (Number(value) == 0 || value == 'NaN') {
      this.submitForm = true
      this.angForm.controls.amt.setValue('0.00');
      this.amt.nativeElement.focus()
    }
    else {
      this.submitForm = false
      this.totalAmt = parseFloat(value).toFixed(2);
    }
  }
  closeModal() {
    var button = document.getElementById('trigger');
    button.click();
    this.reloadTablePassing.emit();
  }

  checkBalanceFlag(event, i) {
    if (this.headData[i].CHECK_REQUIRE == '1' && Number(event.target.value) == 0) {
      if (this.headData[i].FIELD_AMOUNT == 'INTEREST_AMOUNT')
        this.INTAMT.nativeElement.focus();
      else
        this.NOTINTAMT.nativeElement.focus();
      this.submitForm = true
      Swal.fire('Info', 'Please fill proper amount!', 'info')
    }
  }
  getBranch() {
    this.selectedScheme = null
    this.selectedCode = null
    this.customer = null
    this.introducerACNo = []
  }

  adjustsize() {
    this.myDiv.nativeElement.style.height = 'auto';
    this.myDiv.nativeElement.style.height = `${this.myDiv.nativeElement.scrollHeight}px`;
  }
  resetForm() {

    this.angForm.controls['token'].reset()
    // this.angForm.controls['NARRATION'].reset()
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
    this.angForm.controls['NARRATION'].reset()

    this.DayOpBal = null;
    this.Pass = null;
    this.Unpass = null;
    this.overdraftAmt = null;
    this.opendate = null;
    this.asondate = null;
    this.sanctiondate = null;
    this.expirydate = null;
    this.renewaldate = null;
    this.sanctionamt = null;
    this.depositamt = null;
    this.maturityamt = null;
    this.ClearBalance = null;
    this.AfterVoucher = null;


    if (this.headData) {
      this.headData = [];
    }

    if (this.mainMaster) {
      this.mainMaster = [];
    }

    this.totalCredit = null;
    this.totalDebit = null;

  }

  Cancel() {
    this.resetForm()

  }
  IsJointView: boolean = false
  display

  isMinor1 = false
  isJoint1 = false
  openModal(view) {
    if (view == 'minor') {
      this.isMinor = true
      this.isJoint = false
      this.display = "block";
    }
    else if (view == 'joint') {
      this.isJoint = true
      this.isMinor = false
      this.display = "block";
    }
  }

  tableData: any[] = [];
  patchToTable(grdName: string, custId: string) {
    // if (grdName && custId) {
    //   this.tableData.push({ grdName: grdName, custId: custId });
    // }

    const exists = this.tableData.some(item => item.grdName === grdName && item.custId === custId);

    if (!exists && grdName && custId) {
      this.tableData.push({ grdName: grdName, custId: custId });
    }
  }
  onCloseHandled() {
    this.display = 'none';

  }
}
