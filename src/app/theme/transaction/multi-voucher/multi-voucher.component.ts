import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service'
import { first } from 'rxjs/operators';
import { MultiVoucherService } from './multi-voucher.service'
import { SchemeAccountNoService } from '../../../shared/dropdownService/schemeAccountNo.service'
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
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
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;

  // Created Form Group
  angForm: FormGroup;

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

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;

  //variable for checkbox and radio button 
  isCredit: boolean = true;

  //Transaction Mode
  titleForSchemeType: boolean = false;
  transactioncreditMode: boolean = true;
  transactiondebitMode: boolean = false;

  selectedMode: any;
  selectedScheme: any;
  master: any;
  introducerACNo
  branch_code
  tableArr: any
  selectedCode: any = null
  tranModeList: any;
  particulars: any;
  date: any;
  isture: boolean = true;
  totalAmt: any;
  showChequeDetails: boolean = false;
  DayOpBal: number;
  headData: any;
  headShow: boolean = false;
  lastday: any;
  obj: any
  allSchemeCode: any//from schme master
  allScheme = new Array()//from schme master
  selectedBranch: number;
  type: any; //cash or transfer
  narrationList: any;
  customerImg: string = '../../../../assets/images/user-card/img-round4.jpg';
  signture: string = '../../../../assets/sign/signture.jpg';
  Pass:number = 0;
  Unpass:number = 0;
  ClearBalance:number =0;
  AfterVoucher:number=0;
  InputHeadAmt:number = 0.00;

  constructor(private fb: FormBuilder, private systemParameter: SystemMasterParametersService, private ownbranchMasterService: OwnbranchMasterService, private _service: MultiVoucherService, private schemeAccountNoService: SchemeAccountNoService,) { }

  ngOnInit(): void {
    this.createForm()
    this.getSystemParaDate()
    this.dtExportButtonOptions = {
      ajax: 'fake-data/multi-voucher-entry.json',
      columns: [
        {
          title: 'Action'
        },
        {
          title: 'Voucher No',
          data: 'voucherno'
        },
        {
          title: 'Voucher Date',
          data: 'voucherdate'
        },
        {
          title: 'Branch Code',
          data: 'branchcode'
        },
        {
          title: 'Scheme Type',
          data: 'SchemeType'
        },
        {
          title: 'Scheme Code',
          data: 'SchemeCode'
        },
        {
          title: 'Account No.',
          data: 'AccountNumber'
        },

        {
          title: 'Transaction Mode',
          data: 'TransactionMode'
        },
        {
          title: 'Voucher Amount',
          data: 'voucheramount'
        },
        {
          title: 'Credit',
          data: 'credit'
        },
        {
          title: 'Debit',
          data: 'debit'
        },
        {
          title: 'Cheque No.',
          data: 'chequeno'
        },
        {
          title: 'Particulars',
          data: 'particulars'
        },
        {
          title: 'Total Debit Amount',
          data: 'totaldebitamount'
        },
        {
          title: 'Total Credit Amount',
          data: 'totalcreditamount'
        },
        {
          title: 'Day Opening Balance',
          data: 'dayopeningbalance'
        },
        {
          title: 'Passed',
          data: 'passed'
        },
        {
          title: 'Unpassed',
          data: 'unpassed'
        },
        {
          title: 'Cleared Balance',
          data: 'clearedbalance'
        },
        {
          title: 'After This Voucher',
          data: 'afterthisvoucher'
        }

      ],
      dom: 'Bfrtip',
    };

    let user = JSON.parse(localStorage.getItem('user'));
    this.type = 'transfer';
    this.tranModeList = this.TranModeCash;


    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
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

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;

    this.ngBranchCode = branchCode
    this.angForm.controls['BRANCH'].disable()
  }

  //get Narration Details 
  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }
  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }
  creditMode() {
    this.transactioncreditMode = true;
    this.transactiondebitMode = false;
  }
  debitMode() {
    this.transactioncreditMode = false;
    this.transactiondebitMode = true;
  }

  public schemeTypeSelected;
  public transactionModeSelected;

  amountDetails: any = {};



  createForm() {
    this.angForm = this.fb.group({
      voucherNo: [''],
      voucherDate: [''],
      BRANCH: [''],
      SchemeType: [''],
      SchemeCode: [''],
      AccountNumber: [''],
      TransactionMode: [''],
      voucheramount: [''],
      chequeno: [''],
      particulars: [''],
      totaldebitamount: [''],
      totalcreditamount: [''],
      creditRadio: [''],

      acnotype: [''],
      acnocode: [''],
      AccNo: [''],
      transCode: [''],
      narration: [''],
      Intdate: [''],

    })
  }
  ngBranchCode: any = null

  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.date = data.CURRENT_DATE
      this.angForm.patchValue({
        voucherDate: data.CURRENT_DATE
      })
      if (data.ON_LINE === true) {
        this.angForm.controls['voucherDate'].disable()
      } else {
        this.angForm.controls['voucherDate'].enable()
      }
    })
  }

  IntersetHeadDate: any;
  selectedSchemeCode() {
    debugger
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
    console.log('IntrestDate', this.IntersetHeadDate);
    this._service.getHeadDetails(obj).subscribe(data => {
      if (data.length != 0) {
        this.headData = data;
        this.headShow = true;
        this.headData.forEach(element => {
          element['date'] = this.IntersetHeadDate;
          element['Amount'] = 0.00
        });
        console.log(this.headData);
      } else {
        this.headShow = false;
      }
    }, err => {
      console.log(err);
    })
  }

  //get account no according scheme for introducer
  //get account no according scheme for introducer
  getIntroducer() {
    this.introducerACNo = []
    this.obj = [this.selectedScheme.id, this.selectedBranch]
    switch (this.selectedCode) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          console.log(data)
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;
    }
  }

  //get customer today voucher data
  getVoucherData() {
    debugger
    // let customer = this.angForm.controls['account_no'].value;
    // let obj = {
    //   'customer': customer.BANKACNO,
    //   'date': this.date
    // }

    // //Check Account Close or not
    // let Obj = {
    //   'customer_ACNO': customer.BANKACNO,
    //   'type': this.selectedCode
    // }
    // this._service.checkAccountCloseOrNot(Obj).subscribe(data => {
    //   if (data == true) {
    //     Swal.fire('Error!', 'Access dined Account Close Already!', 'error');
    //     return 0;
    //   }
    // }, err => {
    //   console.log(err);
    // })

    // this._service.getVoucherPassAndUnpassData(obj).subscribe(data => {
    //   debugger
    //   let passType = '';
    //   let unpassType = '';

    //   //DayOfOpening 
    //   this.ClearBalance = this.ClearBalance + this.DayOpBal;

    //   //Pass condition checked
    //   if (data.passObj.pass == undefined) {
    //     this.Pass = 0;
    //     passType = 'Cr';
    //   } else {
    //     this.Pass = data.passObj.pass;
    //     passType = data.passObj.type;
    //   }

    //   //Unpass condition checked
    //   if (data.unpassObj.UnPass == undefined) {
    //     this.Unpass = 0;
    //     let unpassType = 'Cr';
    //   } else {
    //     this.Unpass = data.unpassObj.UnPass;
    //     let unpassType = data.unpassObj.type;
    //   }


    //   if (passType == 'Cr') {
    //     this.ClearBalance = this.Pass + this.ClearBalance;
    //   } else {
    //     this.ClearBalance = this.Pass - this.ClearBalance;
    //   }

    //   if (unpassType == 'Cr') {
    //     this.ClearBalance = this.Unpass + this.ClearBalance;
    //   } else {
    //     this.ClearBalance = this.Unpass - this.ClearBalance;
    //   }
    //   // this.ClearBalance = this.DayOpBal + this.Pass + this.Unpass;
    //   this.AfterVoucher = this.ClearBalance;
    // }, err => {
    //   console.log(err);
    // })
  }


  //Mode data
  changeMode() {
    debugger
    if (this.selectedMode.tran_drcr == 'D') {
      this.showChequeDetails = true;
    } else {
      this.showChequeDetails = false;
    }
    if (this.selectedCode == 'GL') {
      this.showChequeDetails = true
    }
  }

  //get Input head Amount
  getInputHeadAmt(ele, i) {
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

  //get Amount Details
  getAmt(ele) {
    this.totalAmt = ele.target.value + '.00';
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
    console.log(src)
    var largeSrc = src.replace('small', 'large');
    this.previewImg = src;
    this.PreviewDiv = true;
    // document.getElementById('full').src = largeSrc;
  }
  // Method to insert data into database through NestJS
  submit() {

  }

  addNewData() {

  }

  resetForm() {

  }

  //function executes when edit button clicked
  editClickHandler(info: any): void {

    //return boolean value and toggle add to update button
    this.showButton = false;
    this.updateShow = true;
  }

  //function execute when delete button clicked
  delClickHandler(info: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Voucher No data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your data is safe.',
          'error'
        )
      }
    })
  }

}
