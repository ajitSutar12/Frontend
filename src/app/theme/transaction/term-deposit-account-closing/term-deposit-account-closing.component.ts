import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { SchemeCodeService } from '../../../shared/elements/scheme-code.service';
import { AcountnoService } from '../../../shared/elements/acountno.service';
import { TransactionCashModeService } from '../../../shared/elements/transaction-cash-mode.service';
import { TransactionTransferModeService } from '../../../shared/elements/transaction-transfer-mode.service';
import { SchemeTypeService } from '../../../shared/elements/scheme-type.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-term-deposit-account-closing',
  templateUrl: './term-deposit-account-closing.component.html',
  styleUrls: ['./term-deposit-account-closing.component.scss']
})
export class TermDepositAccountClosingComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;

  // for radio button
  isTransfer: boolean = false
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
  isture:boolean = true;

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
  DayOpBal: number;
  headData: any;
  headShow: boolean = false;
  lastday: any;
  mainMaster = new Array();
  showAdd: boolean = true;
  showUpdate: boolean = false;
  customerImg: string = '../../../../assets/images/user-card/img-round4.jpg';
  signture: string = '../../../../assets/sign/signture.jpg';

  multigrid=[]
  constructor(public TransactionCashModeService: TransactionCashModeService,
    public TransactionTransferModeService: TransactionTransferModeService,
    public SchemeTypeService: SchemeTypeService,
    private ownbranchMasterService: OwnbranchMasterService,
    private _SchemeCodeDropdown: SchemeCodeDropdownService,
    private _service: MultiVoucherService,
    private savingMasterService: SavingMasterService,
    private fb: FormBuilder,
    private router: Router) {  }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      branch_code : ['', [Validators.required]],
      temp_over_draft: [''],
      over_draft: [''],
      token: [''], 
      // particulars: [''],
      // total_amt: [''],
      // amt: [''],
      slip_no: [''],
      // tran_mode: [''],
      account_no:[''],
      scheme:[''],
      scheme_type:[''],
      date:[''],
      type:new FormControl('cash'),
      // chequeDate:[''],
      // chequeNo:[''],
      // bank: [''],
      Intdate:[''],

      SAVING_PIGMY:[''],
      chequeNo:['',[Validators.pattern]],
      ChequeDate:['',[Validators.pattern]],
      Token_Num:['',[Validators.pattern]],
      particulars:[''],
    })

        //Day opening Amount
        this.DayOpBal = 1000;
        // get session branch data
        let user = JSON.parse(localStorage.getItem('user'));
        this.type = 'tranfer';
        this.tranModeList = this.TranModeCash;
    
    
        //get syspara details
        this._service.getSysParaData().subscribe(data => {
          debugger
          // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
          this.date = data[0].CURRENT_DATE;
          console.log(this.date);
        })
    
        //branch List
        this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
          this.branch_code = data;
          console.log('branch_data',this.branch_code);
          this.selectedBranch = user.branchId;
        })
    
        //Scheme Code
        this._service.getSchemeCodeList().subscribe(data => {
          console.log(data);
          this.master = data;
          this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()]
        })
    
        //Narration List
        this._service.getNarrationMaster().subscribe(data => {
          this.narrationList = data;
        })
  }

  IntersetHeadDate:any;
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
        debugger
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
    let obj       = {'code': this.selectedCode};
    let date      = this.date;
    var rowData   = date.split('/');
    let lastdate  = Number(rowData[0])-1;
    // let result    = rowData[2]+'-'+rowData[1]+'-'+lastdate;
    this.IntersetHeadDate    = lastdate+'/'+rowData[1]+'/'+rowData[2];
    console.log('IntrestDate', this.IntersetHeadDate);
    this._service.getHeadDetails(obj).subscribe(data=>{
      if(data.length !=0){
        this.headData = data;
        this.headShow = true;
        this.headData.forEach(element => {
          element['date'] = this.IntersetHeadDate;
          element['Amount'] = 0.00
        });
        console.log(this.headData);
      }else{
        this.headShow = false;
      }
    },err=>{
      console.log(err);
    })
  }

  //get account no according scheme for introducer
  getIntroducer() {
    this.introducerACNo = [];
    this.obj = [this.selectedScheme.id, this.selectedBranch]
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
        debugger
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

  //transfer and cash radio button effect
  isFormA(value) {
    if (value == 1) {
      this.isTransfer=false
    }
    if (value == 2) {
      this.isTransfer=true
    }
  }


  //get Narration Details 
  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  //submit Form
  Add(){
    debugger
    let user   = JSON.parse(localStorage.getItem('user'));
    let obj    = this.angForm.value;
    obj['user']= user;
    obj['InputHead'] = this.headData;
    console.log(obj);
    this.mainMaster.push(obj);
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

  submit(){
    this._service.insertVoucher(this.mainMaster).subscribe(data=>{
      // this.getVoucherData();
      Swal.fire('Success!', 'Voucher update Successfully !', 'success');
      this.mainMaster = [];
      this.headData = [];
      this.headShow = false;
    },err=>{
      console.log(err);
    })

    // Submit  transfer data in table
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    var object ={
      chequeNo: formVal.chequeNo,
      ChequeDate: formVal.ChequeDate,
      scheme_type: formVal.scheme_type,
      AC_NO: formVal.AC_NO,
      particulars: formVal.particulars,
      amount: formVal.amount,
    }
    if (formVal.chequeNo == "" || formVal.chequeNo == null) {
      Swal.fire("Warning!","Please Insert Mandatory Record for type!","error");
    } else if (formVal.ChequeDate == "" || formVal.ChequeDate == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Mandatory Record for Head!",
        "info"
      );
    } else if (formVal.scheme_type == "" || formVal.scheme_type == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Mandatory Record for Sub Head!",
        "info"
      );
    } 
    else {
      this.multigrid.push(object);
      console.log(this.multigrid)

    }
    // this.multigrid.push(object);
    this.resetgrid();
  }

  resetgrid() {
    this.angForm.controls["chequeNo"].reset();
    this.angForm.controls["ChequeDate"].reset();
    this.angForm.controls["scheme_type"].reset();
    this.angForm.controls["particulars"].reset();
    this.angForm.controls["AC_NO"].reset();
    this.angForm.controls["amount"].reset();

  }


  //get Amount Details
  getAmt(ele){
    this.totalAmt =  ele.target.value+'.00';
  }

  //Mode data
  changeMode(){
    debugger
    if(this.selectedMode.tran_drcr == 'D'){
      this.showChequeDetails = true;
    }else{
      this.showChequeDetails = false;
    }
    if(this.selectedCode == 'GL'){
      this.showChequeDetails = true
    }
  }

  //get customer today voucher data
  getVoucherData(){
    debugger
    let customer = this.angForm.controls['account_no'].value;
    let obj = {
      'customer' : customer.BANKACNO,
      'date'     : this.date
    }

    //Check Account Close or not
    let Obj = {
      'customer_ACNO' : customer.BANKACNO,
      'type': this.selectedCode
    }
    this._service.checkAccountCloseOrNot(Obj).subscribe(data=>{
      if(data == true){
        Swal.fire('Error!', 'Access dined Account Close Already!', 'error');
        return 0;
      }
    },err=>{
      console.log(err);
    })
    
    this._service.getVoucherPassAndUnpassData(obj).subscribe(data=>{
      debugger
      let passType   = '';
      let unpassType = '';

      //DayOfOpening 
      this.ClearBalance = this.ClearBalance + this.DayOpBal;

      //Pass condition checked
      if(data.passObj.pass == undefined){
        this.Pass =  0;
        passType  = 'Cr';
      }else{
        this.Pass =  data.passObj.pass;
        passType  = data.passObj.type;
      }

      //Unpass condition checked
      if(data.unpassObj.UnPass == undefined){
        this.Unpass = 0;
        let unpassType = 'Cr';
      }else{
        this.Unpass = data.unpassObj.UnPass;
        let unpassType = data.unpassObj.type;
      }


      if(passType == 'Cr'){ 
        this.ClearBalance = this.Pass + this.ClearBalance;
      }else{
        this.ClearBalance = this.Pass - this.ClearBalance;
      }

      if(unpassType == 'Cr'){
        this.ClearBalance = this.Unpass + this.ClearBalance;
      }else{
        this.ClearBalance = this.Unpass - this.ClearBalance;
      }
      // this.ClearBalance = this.DayOpBal + this.Pass + this.Unpass;
      this.AfterVoucher = this.ClearBalance;
    },err=>{
      console.log(err);
    })
  }


  //get Input head Amount
  getInputHeadAmt(ele,i){
    let value = ele.target.value;
    this.headData[i].Amount = value;
    console.log(this.headData);
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
  previewImg:string;
  PreviewDiv : boolean = false;
  showImage(img) {
    var src = img;
    console.log(src)
    var largeSrc = src.replace('small', 'large');
    this.previewImg = src;
    this.PreviewDiv = true;
    // document.getElementById('full').src = largeSrc;
  }


  showHide(reportId) {
    debugger
    var ev = document.getElementById(reportId).hidden;
    if(ev){
      document.getElementById(reportId).hidden = false;
    }else{
      document.getElementById(reportId).hidden = true; 
    }
  }

  deleteData(index){
    this.mainMaster.splice(index,1);
  }

  //Edit Voucher Data
  editVoucher(index){
    debugger;
    this.EditFlag = true;
    this.index = index;
    var data            = this.mainMaster[index];
    this.selectedCode   = data.scheme_type;
    this.selectedScheme = data.scheme;  
    this.customer       = data.account_no;
    this.selectedMode   = data.tran_mode;
    this.particulars    = data.particulars;
    this.bank           = data.bank;
    this.angForm.patchValue({
      'chequeNo': data.chequeNo,
      'chequeDate': data.chequeDate,
      'amt': data.Amount,
      'particulars': data.particulars,
      'total_amt':data.total_amt
    })
    // this.changeMode();
    this.headData = data.InputHead;
    if(this.headData.length > 0){
      this.headShow = true;
    }

    if(data.chequeDate !=''){
      this.showChequeDetails = true;
    }
    this.showAdd = false;
    this.showUpdate = true;
  }


  update(){
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



}
