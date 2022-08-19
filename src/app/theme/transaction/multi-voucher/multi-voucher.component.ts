import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
import { MultiVoucherService } from './multi-voucher.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CustomerIdService } from '../../master/customer/customer-id/customer-id.service';
import { environment } from 'src/environments/environment';
import { VoucherEntryService } from '../voucher-entry/voucher-entry.service'
import { BankMasterService } from '../../../shared/dropdownService/bank-Master-dropdown.service'

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
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;

  branchCode: any = null

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
  isture: boolean = true;
  totalAmt: any;
  showChequeDetails: boolean = false;
  DayOpBal: number = 0;
  headData: any;
  headShow: boolean = false;
  lastday: any;
  mainMaster = new Array();
  showAdd: boolean = true;
  showUpdate: boolean = false;
  customerImg = '../../../../assets/images/nouser.png';
  signture = '../../../../assets/images/nosignature.png';
  Customer_Name
  Customer_Pan_No = '---'
  Customer_Contact_No = '---'
  Status
  maxDate: Date;


  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
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

  ) {
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    this.createForm()

    //Day opening Amount
    // this.DayOpBal = 1000;
    // get session branch data
    let user = JSON.parse(localStorage.getItem('user'));
    this.type = 'tranfer';
    this.tranModeList = this.TranModeCash;


    //get syspara details
    this._service.getSysParaData().subscribe(data => {

      // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
      this.date = data[0].CURRENT_DATE;
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
      this.master = data;
      this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()]
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
      particulars: [''],
      total_amt: [''],
      amt: [''],
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

  }

  IntersetHeadDate: any;
  selectedSchemeCode() {

    this.allScheme = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCode) {
        this.allScheme.push(element)
      }
    });

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
  getIntroducer(item) {
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


  //get Narration Details 
  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  //submit Form
  Add() {

    let user = JSON.parse(localStorage.getItem('user'));
    let obj = this.angForm.value;
    obj['user'] = user;
    obj['InputHead'] = this.headData;
    obj['tran_mode'] = this.submitTranMode;
    obj['scheme'] = this.submitScheme;
    obj['account_no'] = this.submitAccountNo;

    this.mainMaster.push(obj);
    this.DayOpBal = 0

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
    this.submitAccountNo = {};
    this.submitScheme = {};
    this.submitTranMode = {};
    this.selectedCode = undefined;
    this.selectedScheme = '';
    this.selectedMode = '';
    this.customer = '';

    this.calculateVoucher()

  }

  submit() {
    if (this.totalCredit == this.totalDebit) {
      this._service.insertVoucher(this.mainMaster).subscribe(data => {
        // this.getVoucherData();
        Swal.fire('Success!', 'Voucher update Successfully !', 'success');
        this.mainMaster = [];
        this.headData = [];
        this.headShow = false;
      }, err => {
        console.log(err);
      })
    } else {
      Swal.fire('Error', 'Total credit amount ' + this.totalCredit + ' and ' + 'total debit amount' + this.totalDebit + ' are not match')
    }

  }

  //get Amount Details
  getAmt(ele) {
    let count = 0
    if (this.headData.length != 0) {
      this.headData.forEach(element => {
        count = Number(element.Amount) + Number(count)
      });
      let num = Number(ele.target.value) + Number(count)
      this.totalAmt = num + '.00'
    } else {
      this.totalAmt = ele.target.value + '.00'
    }
  }

  //Mode data
  submitTranMode: any;
  headFlag: boolean = false;
  changeMode(item) {

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
    this._vservice.getHeadDetails(obj).subscribe(data => {
      if (data.length != 0) {

        if (!this.headFlag) {
          // this.headData = data;
          this.headShow = true;
          for (let i = 0; i <= headType.length; i++) {
            let value = {}
            value = data.find(data => data['FIELD_AMOUNT'] == headType[i].FieldAmount)
            if (value != undefined) {
              if (this.submitTranMode.tran_drcr == value['DRCR_APPLICABLE'] || value['DRCR_APPLICABLE'] == 'B') {
                this.headData.push(value)
              }

            }
          }
        }
      } else {
        this.headShow = false;
      }
    }, err => {
      console.log(err);
    })
  }


  tempscheme
  //get customer today voucher data
  submitAccountNo: any;
  getVoucherData(item) {
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
        Swal.fire('Error!', 'Access dined Account Close Already!', 'error');
        return 0;
      }
    }, err => {
      console.log(err);
    })

    this._service.getVoucherPassAndUnpassData(obj).subscribe(data => {

      // let passType = '';
      // let unpassType = '';

      // //DayOfOpening 
      // this.ClearBalance = this.ClearBalance + this.DayOpBal;

      // //Pass condition checked
      // if (data.passObj.pass == undefined) {
      //   this.Pass = 0;
      //   passType = 'Cr';
      // } else {
      //   this.Pass = data.passObj.pass;
      //   passType = data.passObj.type;
      // }

      // //Unpass condition checked
      // if (data.unpassObj.UnPass == undefined) {
      //   this.Unpass = 0;
      //   let unpassType = 'Cr';
      // } else {
      //   this.Unpass = data.unpassObj.UnPass;
      //   let unpassType = data.unpassObj.type;
      // }


      // if (passType == 'Cr') {
      //   this.ClearBalance = this.Pass + this.ClearBalance;
      // } else {
      //   this.ClearBalance = this.Pass - this.ClearBalance;
      // }

      // if (unpassType == 'Cr') {
      //   this.ClearBalance = this.Unpass + this.ClearBalance;
      // } else {
      //   this.ClearBalance = this.Unpass - this.ClearBalance;
      // }
      // this.ClearBalance = this.DayOpBal + this.Pass + this.Unpass;
      this.AfterVoucher = this.ClearBalance;
    }, err => {
      console.log(err);
    })
  }


  //get Input head Amount
  getInputHeadAmt(ele, i) {
    let value = ele.target.value;
    this.headData[i].Amount = value;
    let tran = this.submitTranMode.tran_drcr

    console.log('this.headData', this.headData)
    let count = 0
    this.headData.forEach(element => {

      count = Number(element.Amount) + Number(count)

    });
    this.totalAmt = count + Number(this.angForm.controls['amt'].value)
    // 
  }

  checkheadcondition(event, i) {
    console.log('event', event)
    let value = event.target.value;
    this.headData[i].Amount = value
    let data = this.headData[i]

    if (data.FIELD_AMOUNT != 'PENAL_INT_AMOUNT') {
      if ((this.submitTranMode.id == 5 || this.submitTranMode.id == 2) && Number(data.Balance) != 0 && Number(data.Amount) != Number(data.Balance)) {
        Swal.fire('Error', 'Please Fill ' + data.DESCRIPTION + ' Amount', 'error')
        this.headData[i].Amount = '0.00'
      } else {
        if (data.CHECK_REQUIRE == '1' && Number(data.Amount) != Number(data.Balance)) {
          Swal.fire('Error', 'Please Fill ' + data.DESCRIPTION + ' Amount', 'error')
          this.headData[i].Amount = '0.00'
        }
      }

    }
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

  //Edit Voucher Data
  headflag: boolean = false;
  editVoucher(index) {
    debugger
    this.headflag = true;

    this.EditFlag = true;
    this.index = index;
    var data = this.mainMaster[index];
    this.selectedCode = data.scheme_type;
    this.selectedSchemeCode()
    this.selectedScheme = data.scheme.id;
    this.getIntroducer(data.scheme)
    this.customer = data.account_no.id;
    this.selectedMode = data.tran_mode.id;
    this.particulars = data.data[0].NARRATION;
    this.submitAccountNo = data.account_no;
    this.submitScheme = data.scheme;
    this.submitTranMode = data.tran_mode;
    this.bank = data.bank;
    this.angForm.patchValue({
      'chequeNo': data.chequeNo,
      'chequeDate': data.chequeDate,
      'amt': data.data[0].TRAN_AMOUNT,
      'particulars': data.particulars,
      'total_amt': data.total_amt
    })
    this.changeMode(data.tran_mode);
    this.headData = data.InputHead;
    if (this.headData.length > 0) {
      this.headShow = true;
    }

    if (data.chequeDate != undefined) {
      this.showChequeDetails = true;
    }
    this.showAdd = false;
    this.showUpdate = true;
  }


  update() {

    let user = JSON.parse(localStorage.getItem('user'));
    let obj = this.angForm.value;
    obj['user'] = user;
    obj['InputHead'] = this.headData;
    obj['tran_mode'] = this.submitTranMode;
    obj['scheme'] = this.submitScheme;
    obj['account_no'] = this.submitAccountNo;
    this.mainMaster[this.index] = obj;
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
    this.calculateVoucher()
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

    this._service.getFormData(id).subscribe((data) => {

      this.updateID = data[0].TRAN_NO
      // this.updatecheckdata = data
      // if (data.TRAN_STATUS == 0) {
      //   this.showButton = false;
      //   this.updateShow = true;
      //   this.newbtnShow = true;
      // } else {
      //   this.showButton = false;
      //   this.updateShow = false;
      //   this.newbtnShow = true;
      // }
      this.mainMaster = data
      // this.selectedCode = data[0].scheme.S_SHNAME;
      // this.selectedSchemeCode()
      // this.selectedScheme = data[0].scheme.id;
      // this.getIntroducer(data[0].scheme);
      // this.customer = data[0].account_no.id;
      // this.selectedMode = data[0].tran_mode.id;
      // this.angForm.patchValue({
      //     scheme : this.selectedScheme,
      //     particulars:data[0].NARRATION
      // })
    })
  }

  updateData() {

  }

  totalCredit = 0;
  totalDebit = 0;
  calculateVoucher() {
    this.totalCredit = 0;
    this.totalDebit = 0;
    for (let item of this.mainMaster) {
      if (item.tran_mode.tran_drcr == 'C') {
        this.totalCredit = this.totalCredit + Number(item.total_amt)
      } else {
        this.totalDebit = this.totalDebit + Number(item.total_amt);
      }
    }
  }

  //approve account
  Approve() {
    let obj = {
      id: Number(this.updateID),
    }
    this._service.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Multi Voucher approved successfully',
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
        'Multi Voucher rejected successfully',
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

  tempschmetype
  resetscheme() {
    console.log(this.tempschmetype)
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
  maturityamt = 0
  depositamt = 0
  expirydate = ''
  sanctiondate = ''
  asondate = ''
  opendate = ''
  renewaldate = ''
  extenstionaftervoucher = ''
  overdraftAmt

  SideDetails() {
    this.AfterVoucher = 0
    this.extenstionaftervoucher = ''
    this.angForm.controls['amt'].reset()
    this.angForm.controls['total_amt'].reset()
    this.SideView = true
    if (this.submitAccountNo.AC_ACNOTYPE == 'LN' || this.submitAccountNo.AC_ACNOTYPE == 'CC' || this.submitAccountNo.AC_ACNOTYPE == 'DS') {
      this.ShowLNCC = true
      this.ShownotLNCC = false
      this.sanctionamt = (this.submitAccountNo.AC_SANCTION_AMOUNT != null ? this.submitAccountNo.AC_SANCTION_AMOUNT : 0)
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
      this.depositamt = (this.submitAccountNo.AC_SCHMAMT != null ? this.submitAccountNo.AC_SCHMAMT : 0)
      this.asondate = (this.submitAccountNo.AC_ASON_DATE != null ? this.submitAccountNo.AC_ASON_DATE : '---')
      this.opendate = (this.submitAccountNo.AC_OPDATE != null ? this.submitAccountNo.AC_OPDATE : '---')
    } else {
      this.ShowLNCC = false
      this.ShownotLNCC = false
    }
    this.overdraftAmt = Number(this.submitAccountNo.AC_ODAMT) + Number(this.submitAccountNo.AC_SODAMT)

    var startdate = this.angForm.controls['date'].value
    // startdate = startdate.subtract(1, 'd');
    // startdate = startdate.format("DD-MM-YYYY");
    let formDT = moment(startdate, 'DD/MM/YYYY')
    var addInFrom = moment(formDT, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY')
    let obj = {
      scheme: this.submitScheme.S_APPL,
      acno: this.submitAccountNo.BANKACNO,
      date: addInFrom
    }

    this._vservice.getledgerbalance(obj).subscribe(data => {
      this.DayOpBal = Math.abs(data);
      if (data < 0) {
        this.extensionopenbal = 'Cr'
      } else {
        this.extensionopenbal = 'Dr'
      }
      this.tempDayOpBal = data;
      this._vservice.getPassedUnpassedBalance(obj).subscribe(data1 => {
        this.Pass = Math.abs(data1.passedamt)
        this.Unpass = Math.abs(data1.unpassamt)
        this.passextension = (data1.passextension != undefined ? data1.passextension : '')
        this.unpassextension = (data1.unpassextension != undefined ? data1.unpassextension : '')
        // this.ClearBalance = this.DayOpBal + this.Pass
        var open = (this.tempDayOpBal <= 0 ? Math.abs(this.tempDayOpBal) : (-this.tempDayOpBal))
        var pass = (data1.passedamt <= 0 ? Math.abs(data1.passedamt) : (-data1.passedamt))
        var unpass = (data1.unpassamt <= 0 ? Math.abs(data1.unpassamt) : (-data1.unpassamt))

        let value = open + pass + unpass
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


  url = environment.base_url;
  ShowDocuments: boolean = false
  showlgindetails() {
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
          this.customerImg = '../../../../assets/images/nouser.png';
          this.signture = '../../../../assets/images/nosignature.png'
        }
      })

      // if((this.angForm.controls['account_no'].value.idmaster['AC_MOBILENO'])
    } else {
      this.ShowDocuments = false
    }
  }



  // Check Voucher Conditions On Amount Field
  checkCondition($event) {

    let obj = {
      value: Number($event.target.value),
      clearBalance: this.ClearBalance,
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

    if (Number(obj.value) >= 200000) {

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
        if (result.isConfirmed == false) {
          this.angForm.controls['amt'].reset();
          this.angForm.controls['total_amt'].reset();
        } else {
          this.checkamtcondition($event)
        }
      })

    }
  }
  checkamtcondition($event) {
    let obj = {
      value: Number($event.target.value),
      clearBalance: this.ClearBalance,
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
      if (data != 0) {
        Swal.fire('Error!', data.message, 'error');
        this.angForm.controls['amt'].reset();
        this.angForm.controls['total_amt'].reset();
      } else {
        this._service.clearWithdrawBal(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
            this.angForm.controls['amt'].reset();
            this.angForm.controls['total_amt'].reset();
          } else {
            this._service.CheckPanNoInIDMaster(obj).subscribe(data => {
              if (data != 0) {
                Swal.fire('Error!', data.message, 'error');
                this.angForm.controls['amt'].reset();
                this.angForm.controls['total_amt'].reset();
              } else {
                this._service.ClearVoucherSameBal(obj).subscribe(data => {
                  if (data != 0) {
                    Swal.fire('Error!', data.message, 'error');
                    this.angForm.controls['amt'].reset();
                    this.angForm.controls['total_amt'].reset();
                  } else {
                    this._service.BalancePresentOrOverdraft(obj).subscribe(data => {
                      if (data != 0) {
                        Swal.fire('Error!', data.message, 'error');
                        this.angForm.controls['amt'].reset();
                        this.angForm.controls['total_amt'].reset();
                      } else {
                        this._service.ClearBalanceDebitAmt(obj).subscribe(data => {
                          if (data != 0) {
                            Swal.fire('Error!', data.message, 'error');
                            this.angForm.controls['amt'].reset();
                            this.angForm.controls['total_amt'].reset();
                          } else {
                            this._service.InstructionFreezeAc(obj).subscribe(data => {
                              if (data != 0) {
                                Swal.fire('Error!', data.message, 'error');
                                this.angForm.controls['amt'].reset();
                                this.angForm.controls['total_amt'].reset();
                              } else {
                                this._service.MinBalanceChecking(obj).subscribe(data => {
                                  if (data != 0) {
                                    Swal.fire('Error!', data.message, 'error');
                                    this.angForm.controls['amt'].reset();
                                    this.angForm.controls['total_amt'].reset();
                                  } else {
                                    this._service.CheckClearBalAndAmt(obj).subscribe(data => {
                                      if (data != 0) {
                                        Swal.fire('Error!', data.message, 'error');
                                        this.angForm.controls['amt'].reset();
                                        this.angForm.controls['total_amt'].reset();
                                      } else {
                                        this._service.WithdrawAmtClosingEqualClearBal(obj).subscribe(data => {
                                          if (data != 0) {
                                            Swal.fire('Error!', data.message, 'error');
                                            this.angForm.controls['amt'].reset();
                                            this.angForm.controls['total_amt'].reset();
                                          } else {
                                            this._service.DepositeAmountAndIntallments(obj).subscribe(data => {
                                              if (data != 0) {
                                                Swal.fire('Error!', data.message, 'error');
                                                this.angForm.controls['amt'].reset();
                                                this.angForm.controls['total_amt'].reset();
                                              } else {
                                                this._service.DepositAndTotalInstallments(obj).subscribe(data => {
                                                  if (data != 0) {
                                                    Swal.fire('Error!', data.message, 'error');
                                                    this.angForm.controls['amt'].reset();
                                                    this.angForm.controls['total_amt'].reset();
                                                  } else {
                                                    this._service.DepositAndDepositAmount(obj).subscribe(data => {
                                                      if (data != 0) {
                                                        Swal.fire('Error!', data.message, 'error');
                                                        this.angForm.controls['amt'].reset();
                                                        this.angForm.controls['total_amt'].reset();
                                                      } else {
                                                        this._service.PremcloseTdateTamtCom(obj).subscribe(data => {
                                                          if (data != 0) {
                                                            Swal.fire('Error!', data.message, 'error');
                                                            this.angForm.controls['amt'].reset();
                                                            this.angForm.controls['total_amt'].reset();
                                                          } else {
                                                            this._service.PrecloseTrDateTrAmtComCol(obj).subscribe(data => {
                                                              if (data != 0) {
                                                                Swal.fire('Error!', data.message, 'error');
                                                                this.angForm.controls['amt'].reset();
                                                                this.angForm.controls['total_amt'].reset();
                                                              } else {
                                                                this._service.ComVouamtClearbalAndStrs(obj).subscribe(data => {
                                                                  if (data != 0) {
                                                                    Swal.fire('Error!', data.message, 'error');
                                                                    this.angForm.controls['amt'].reset();
                                                                    this.angForm.controls['total_amt'].reset();
                                                                  } else {
                                                                    this._service.DepositGreaterShareLimitAmt(obj).subscribe(data => {
                                                                      if (data != 0) {
                                                                        Swal.fire('Error!', data.message, 'error');
                                                                        this.angForm.controls['amt'].reset();
                                                                        this.angForm.controls['total_amt'].reset();
                                                                      } else {
                                                                        this._service.ZeroBalance(obj).subscribe(data => {
                                                                          if (data != 0) {
                                                                            Swal.fire('Error!', data.message, 'error');
                                                                            this.angForm.controls['amt'].reset();
                                                                            this.angForm.controls['total_amt'].reset();
                                                                          } else {

                                                                            this._service.CashWithdraw(obj).subscribe(data => {
                                                                              if (data != 0) {
                                                                                Swal.fire('Error!', data.message, 'error');
                                                                                this.angForm.controls['amt'].reset();
                                                                                this.angForm.controls['total_amt'].reset();
                                                                              } else {

                                                                                this._service.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                  if (data != 0) {
                                                                                    Swal.fire('Error!', data.message, 'error');
                                                                                    this.angForm.controls['amt'].reset();
                                                                                    this.angForm.controls['total_amt'].reset();
                                                                                  } else {
                                                                                    this._service.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                      if (data != 0) {
                                                                                        Swal.fire('Error!', data.message, 'error');
                                                                                        this.angForm.controls['amt'].reset();
                                                                                        this.angForm.controls['total_amt'].reset();
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


  // Check Voucher Conditions On Account Field
  checkAccountCondition() {

    let data1: any = localStorage.getItem('user');
    let result = JSON.parse(data1);
    let tempacno = this.submitAccountNo.BANKACNO
    let obj = {
      clearBalance: this.ClearBalance,
      accountNo: this.submitAccountNo.BANKACNO,
      accno: this.submitAccountNo.AC_NO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
      usertype: result.RoleDefine[0].RoleId,
      currentDate: this.date
    }

    this._vservice.CheckAccountCloseFlagInDailytran(obj).subscribe(data => {
      if (data != 0) {
        Swal.fire('Error!', data.message, 'error');
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
                Swal.fire('Error!', data.message, 'error');
                this.customer = null
                this.showlgindetails()

              } else {
                this._vservice.checkDormantAccount(obj).subscribe(data => {
                  if (data != 0) {
                    Swal.fire('Error!', data.message, 'error');
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
                            Swal.fire('Error!', data.message, 'error');
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
          'amt': data.count,
          'particulars': str + ' Paid Dividend'
        })
      })
    }

    this._vservice.StandingOrInterestInstruction(obj).subscribe(data => {
      if (data != 0) {
        Swal.fire('Error!', data.message, 'error');
        this.selectedMode = null
      } else {
        this._vservice.VoucherPassing(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          } else {
            this._vservice.LienMarkChecking(obj).subscribe(data => {
              if (data != 0) {
                Swal.fire('Error!', data.message, 'error');
              } else {
                this._vservice.RecurringTypeDeposite(obj).subscribe(data => {
                  if (data != 0) {
                    Swal.fire('Error!', data.message, 'error');
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

      this._service.ComInterestDateAndCurrentDate(obj).subscribe(data => {
        if (data != 0) {
          Swal.fire('Error!', data.message, 'error');
          this.angForm.controls['Intdate'].reset()
        } else {
          this._service.ComInterestDateAndLastDMonth(obj).subscribe(data => {
            if (data != 0) {
              Swal.fire('Error!', data.message, 'error');
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
      accountNo: this.submitAccountNo.BANKACNO,
      schemeType: this.selectedCode,
      scheme: this.submitScheme.S_APPL,
      tran: this.submitTranMode.tran_drcr,
      tranMode: this.submitTranMode.id,
      tran_type: this.submitTranMode.tran_type,
      odAmount: this.overdraftAmt,
      currentDate: this.date
    }


    this._service.ComInterestDateAndLastDMonth(obj).subscribe(data => {
      if (data != 0) {
        Swal.fire('Error!', data.message, 'error');
      }
    }, err => {
      console.log(err);
    })

  }

  updateheadbalance() {
    let newobj = {
      accountNo: this.submitAccountNo.BANKACNO,
      scheme: this.submitScheme.S_APPL,
      currentDate: this.date,
      schemeType: this.selectedCode,
    }

    let balancedata
    this._vservice.getInputHeadBal(newobj).subscribe(data1 => {
      balancedata = data1
      // this.headData.forEach(element =>
      for (let element of this.headData) {
        let newobj = {
          acno: element?.GL_CODE,
          scheme: '101',
          date: this.date,
          schemeType: this.selectedCode,
        }

        if (element.FIELD_AMOUNT == 'INTEREST_AMOUNT') {
          element['date'] = this.IntersetHeadDate;
          element['Amount'] = 0.00
          element['Balance'] = Math.abs(data1.intpenal.InterestAmount)
          element['tempBalance'] = data1.intpenal.InterestAmount
          element['type'] = (data1.intpenal.InterestAmount <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'PENAL_INT_AMOUNT') {
          element['Amount'] = 0.00
          element['Balance'] = Math.abs(data1.intpenal.PenalInterest)
          element['tempBalance'] = data1.intpenal.PenalInterest
          element['type'] = (data1.intpenal.PenalInterest <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'REC_PENAL_INT_AMOUNT') {
          element['Amount'] = 0.00
          element['Balance'] = Math.abs(data1.recpaypen)
          element['tempBalance'] = data1.recpaypen
          element['type'] = (data1.recpaypen <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'RECPAY_INT_AMOUNT' && element.HEAD_TYPE == 'PYI') {
          element['Amount'] = 0.00
          element['Balance'] = Math.abs(data1.recpaybal)
          element['tempBalance'] = data1.recpaybal
          element['type'] = (data1.recpaybal <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'RECPAY_INT_AMOUNT' && element.HEAD_TYPE == 'REC') {
          element['Amount'] = 0.00
          element['Balance'] = Math.abs(data1.recpaybal)
          element['tempBalance'] = data1.recpaybal
          element['type'] = (data1.recpaybal <= 0 ? 'Cr' : 'Dr')
        } else if (element.FIELD_AMOUNT == 'OTHER2_AMOUNT') {
          element['Amount'] = 0.00
          if (element?.GL_CODE != null) {
            this._vservice.getledgerbalance(newobj).subscribe(data2 => {

              console.log('data', data2)

              element['Balance'] = Math.abs(data2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')

            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER3_AMOUNT') {
          element['Amount'] = 0.00
          if (element?.GL_CODE != null) {
            this._vservice.getledgerbalance(newobj).subscribe(data2 => {

              console.log('data', data2)

              element['Balance'] = Math.abs(data2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')

            })
          }

        } else if (element.FIELD_AMOUNT == 'OTHER4_AMOUNT') {
          element['Amount'] = 0.00
          if (element?.GL_CODE != null) {
            this._vservice.getledgerbalance(newobj).subscribe(data2 => {

              console.log('data', data2)

              element['Balance'] = Math.abs(data2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')

            })
          }

        } else if (element.FIELD_AMOUNT == 'OTHER5_AMOUNT') {
          element['Amount'] = 0.00
          if (element?.GL_CODE != null) {
            this._vservice.getledgerbalance(newobj).subscribe(data2 => {

              console.log('data', data2)

              element['Balance'] = Math.abs(data2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')

            })
          }

        } else if (element.FIELD_AMOUNT == 'OTHER6_AMOUNT') {
          element['Amount'] = 0.00
          if (element?.GL_CODE != null) {
            this._vservice.getledgerbalance(newobj).subscribe(data2 => {

              console.log('data', data2)

              element['Balance'] = Math.abs(data2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')

            })
          }

        } else if (element.FIELD_AMOUNT == 'OTHER7_AMOUNT') {
          element['Amount'] = 0.00
          if (element?.GL_CODE != null) {
            this._vservice.getledgerbalance(newobj).subscribe(data2 => {

              console.log('data', data2)

              element['Balance'] = Math.abs(data2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')

            })
          }

        } else if (element.FIELD_AMOUNT == 'OTHER8_AMOUNT') {
          element['Amount'] = 0.00
          if (element?.GL_CODE != null) {
            this._vservice.getledgerbalance(newobj).subscribe(data2 => {

              console.log('data', data2)

              element['Balance'] = Math.abs(data2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')

            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER9_AMOUNT') {
          element['Amount'] = 0.00
          if (element?.GL_CODE != null) {
            this._vservice.getledgerbalance(newobj).subscribe(data2 => {

              console.log('data', data2)

              element['Balance'] = Math.abs(data2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')

            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER11_AMOUNT') {
          element['Amount'] = 0.00
          if (element?.GL_CODE != null) {
            this._vservice.getledgerbalance(newobj).subscribe(data2 => {

              console.log('data', data2)

              element['Balance'] = Math.abs(data2)
              element['tempBalance'] = data2
              element['type'] = (data2 <= 0 ? 'Cr' : 'Dr')

            })
          }
        } else if (element.FIELD_AMOUNT == 'OTHER10_AMOUNT') {
          element['Amount'] = 0.00
          element['Balance'] = Math.abs(data1.overduebal)
          element['tempBalance'] = data1.overduebal
          element['type'] = (data1.overduebal <= 0 ? 'Cr' : 'Dr')
        }

      }
      // );

    })
  }

  getaftervoucher(event) {
    let value = Number(event.target.value);
    let tran = this.submitTranMode.tran_drcr
    if (tran == 'D') {
      this.AfterVoucher = Math.abs(this.tempDayOpBal - value)
      this.extenstionaftervoucher = 'Dr'
    } else {
      this.AfterVoucher = Math.abs(this.tempDayOpBal + value)
      this.extenstionaftervoucher = 'Cr'
    }
  }
}
