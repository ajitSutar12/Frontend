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
import { VoucherEntryService } from './voucher-entry.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
@Component({
  selector: 'app-voucher-entry',
  templateUrl: './voucher-entry.component.html',
  styleUrls: ['./voucher-entry.component.scss']
})
export class VoucherEntryComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;

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
  DayOpBal: number;
  headData: any;
  headShow: boolean = false;
  lastday: any;
  overdraftAmt
  customerImg: string = '../../../../assets/images/user-card/img-round4.jpg';
  signture: string = '../../../../assets/sign/signture.jpg';
  maxDate: Date;
  dtTrigger: any;
  dtElement: any;
  constructor(
    public TransactionCashModeService: TransactionCashModeService,
    public TransactionTransferModeService: TransactionTransferModeService,
    public SchemeTypeService: SchemeTypeService,
    private ownbranchMasterService: OwnbranchMasterService,
    private _SchemeCodeDropdown: SchemeCodeDropdownService,
    private _service: VoucherEntryService,
    private savingMasterService: SavingMasterService,
    private _ACMasterDropdownService: ACMasterDropdownService,
    private fb: FormBuilder,
    private router: Router
  ) {
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    this.createForm();


    //Day opening Amount
    this.DayOpBal = 1000;
    // get session branch data
    let user = JSON.parse(localStorage.getItem('user'));
    this.type = 'cash';
    this.tranModeList = this.TranModeCash;


    //get syspara details
    this._service.getSysParaData().subscribe(data => {
      // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
      this.date = data[0].CURRENT_DATE;
      console.log(this.date);
    })

    //branch List
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
    console.log('IntrestDate', this.IntersetHeadDate);
    this._service.getHeadDetails(obj).subscribe(data => {
      if (data.length != 0) {

        if(!this.headFlag){
        this.headData = data;
        this.headShow = true;


        this.headData.forEach(element => {
          element['date'] = this.IntersetHeadDate;
          element['Amount'] = 0.00
          element['Balance'] = 0.00
        });
        console.log(this.headData);
      }
      } else {
        this.headShow = false;
      }
    }, err => {
      console.log(err);
    })
  }

  //get account no according scheme for introducer
  Submitscheme :any;
  getIntroducer(item) {
    this.introducerACNo = [];
    this.obj = [item.id, this.selectedBranch]
    this.Submitscheme = item
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
    debugger
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  //submit Form
  submit() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = this.angForm.value;
    obj['user'] = user;
    obj['InputHead'] = this.headData;
    obj['scheme'] = this.Submitscheme;
    obj['account_no'] = this.submitCustomer;
    obj['tran_mode']  = this.submitTranMode;
    console.log(obj);
    this._service.insertVoucher(obj).subscribe(data => {
      // this.getVoucherData();
      Swal.fire('Success!', 'Voucher update Successfully !', 'success');
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
      this.headData = [];
      this.headShow = false;
    }, err => {
      console.log(err);
    })
  }
  // Reset Function
  resetForm() {
    this.createForm();

  }

  //get Amount Details
  getAmt(ele) {
    this.totalAmt = ele.target.value + '.00';
  }

  //Mode data
  submitTranMode : any;
  changeMode(item) {
    this.submitTranMode = item;
    if (this.selectedMode.tran_type == 'TR') {
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
  }

  Customer_Name
  Customer_Pan_No
  Customer_Contact_No
  showlgindetails() {
    if (this.selectedAccountno != null) {
      this.ShowDocuments = true
      let tempdata = this.angForm.controls['account_no'].value.idmaster
      console.log(this.angForm.controls['account_no'].value)
      console.log(tempdata)
      this.Customer_Name = this.angForm.controls['account_no'].value.idmaster['AC_NAME']
      this.Customer_Pan_No = (this.angForm.controls['account_no'].value.idmaster['AC_PANNO'] == '' ? '-' : this.angForm.controls['AC_PANNO'].value.idmaster['AC_PANNO'])
      this.Customer_Contact_No = (this.angForm.controls['account_no'].value.idmaster['AC_MOBILENO'] == '' ? '-' : this.angForm.controls['account_no'].value.idmaster['AC_MOBILENO'])
      // if((this.angForm.controls['account_no'].value.idmaster['AC_MOBILENO'])
    } else {
      this.ShowDocuments = false
    }
  }

  submitCustomer : any;
  //get customer today voucher data
  getVoucherData(item) {
    this.submitCustomer = item;
    //Hide / Show and show account wie Photo and signature
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
    // this._service.checkAccountCloseOrNot(Obj).subscribe(data => {
    //   if (data == true) {
    //     Swal.fire('Error!', 'Access dined Account Close Already!', 'error');
    //     return 0;
    //   }
    // }, err => {
    //   console.log(err);
    // })

    this._service.getVoucherPassAndUnpassData(obj).subscribe(data => {
      let passType = '';
      let unpassType = '';

      //DayOfOpening 
      this.ClearBalance = this.ClearBalance + this.DayOpBal;

      //Pass condition checked
      if (data.passObj.pass == undefined) {
        this.Pass = 0;
        this.overdraftAmt = 0
        passType = 'Cr';
      } else {
        this.Pass = data.passObj.pass;
        passType = data.passObj.type;
      }

      //Unpass condition checked
      if (data.unpassObj.UnPass == undefined) {
        this.Unpass = 0;
        let unpassType = 'Cr';
      } else {
        this.Unpass = data.unpassObj.UnPass;
        let unpassType = data.unpassObj.type;
      }


      if (passType == 'Cr') {
        this.ClearBalance = this.Pass + this.ClearBalance;
      } else {
        this.ClearBalance = this.Pass - this.ClearBalance;
      }

      if (unpassType == 'Cr') {
        this.ClearBalance = this.Unpass + this.ClearBalance;
      } else {
        this.ClearBalance = this.Unpass - this.ClearBalance;
      }
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


  // Check Voucher Conditions On Amount Field
  checkCondition($event) {
    let obj = {
      value: Number($event.target.value),
      clearBalance: this.ClearBalance,
      accountNo: this.angForm.controls['account_no'].value.BANKACNO,
      schemeType: this.angForm.controls['scheme_type'].value,
      scheme: this.angForm.controls['scheme'].value.S_APPL,
      tran: this.selectedMode.tran_drcr,
      tranMode: this.selectedMode.id,
      odAmount: this.overdraftAmt,
      currentDate: this.date,
      totalAmt: this.angForm.controls['total_amt'].value
    }

    if (obj.value == 200000) {

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
        }
      })

    } else {
      if (obj) {
        this._service.checkZeroBalance(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
            this.angForm.controls['amt'].reset();
            this.angForm.controls['total_amt'].reset();
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.clearWithdrawBal(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
            this.angForm.controls['amt'].reset();
            this.angForm.controls['total_amt'].reset();
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.CheckPanNoInIDMaster(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.ClearVoucherSameBal(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
            this.angForm.controls['amt'].reset();
            this.angForm.controls['total_amt'].reset();
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.BalancePresentOrOverdraft(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
            this.angForm.controls['amt'].reset();
            this.angForm.controls['total_amt'].reset();
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.ClearBalanceDebitAmt(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
            this.angForm.controls['amt'].reset();
            this.angForm.controls['total_amt'].reset();
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.MinBalanceChecking(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
            this.angForm.controls['amt'].reset();
            this.angForm.controls['total_amt'].reset();
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.CheckClearBalAndAmt(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
            this.angForm.controls['amt'].reset();
            this.angForm.controls['total_amt'].reset();
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.InstructionFreezeAc(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
            this.angForm.controls['amt'].reset();
            this.angForm.controls['total_amt'].reset();
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.CashWithdraw(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
            this.angForm.controls['amt'].reset();
            this.angForm.controls['total_amt'].reset();
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.WithdrawAmtClosingEqualClearBal(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.DepositeAmountAndIntallments(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.DepositAndTotalInstallments(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.DepositAndDepositAmount(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.PremcloseTdateTamtCom(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.PrecloseTrDateTrAmtComCol(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.CheckClearBalNotEqualAmt(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.ComVouamtClearbalAndStrs(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.DepositGreaterShareLimitAmt(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }

      //total amt
      if (obj) {
        this._service.SysAndScheCheckTotalAmt(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }
    }
  }

  // Check Voucher Conditions On Account Field
  checkAccountCondition() {

    let data1: any = localStorage.getItem('user');
    let result = JSON.parse(data1);
    console.log(result.RoleDefine[0].RoleId)
    let tempacno = this.selectedAccountno
    let obj = {
      clearBalance: this.ClearBalance,
      accountNo: this.angForm.controls['account_no'].value.BANKACNO,
      schemeType: this.angForm.controls['scheme_type'].value,
      scheme: this.angForm.controls['scheme'].value.S_APPL,
      usertype: result.RoleDefine[0].RoleId,
      currentDate: this.date
    }

    if (obj) {
      this._service.CheckAccountCloseFlagInDailytran(obj).subscribe(data => {
        if (data != 0) {
          Swal.fire('Error!', data.message, 'error');
          this.selectedAccountno = null;
          this.showlgindetails()

        }
      }, err => {
        console.log(err);
      })
    }

    if (obj) {
      this._service.CheckAccountCloseFlagInDailytran(obj).subscribe(data => {
        if (data != 0) {
          Swal.fire('Error!', data.message, 'error');
          this.selectedAccountno = null;
          this.showlgindetails()

        }
      }, err => {
        console.log(err);
      })
    }

    if (obj) {
      this._service.specialInstruction(obj).subscribe(data => {
        console.log('data.DETAILS', data.DETAILS)

        if (data != 0) {
          if (data.restriction == true) {
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
        }
      }, err => {
        console.log(err);
      })
    }

    if (obj) {
      this._service.CheckLoginFlagInDpmaster(obj).subscribe(data => {
        if (data != 0) {
          Swal.fire('Error!', data.message, 'error');
          this.selectedAccountno = null
          this.showlgindetails()

        }
      }, err => {
        console.log(err);
      })
    }

    if (obj) {
      this._service.checkDormantAccount(obj).subscribe(data => {
        if (data != 0) {
          Swal.fire('Error!', data.message, 'error');
          this.selectedAccountno = null
          this.showlgindetails()

        }
      }, err => {
        console.log(err);
      })
    }

    if (obj) {
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
        }
      }, err => {
        console.log(err);
      })
    }

    if (obj) {
      this._service.RecurringTypeDeposite(obj).subscribe(data => {
        if (data != 0) {
          Swal.fire('Error!', data.message, 'error');
        }
      }, err => {
        console.log(err);
      })
    }

    if (obj) {
      this._service.IsDirectEntryAllow(obj).subscribe(data => {
        if (data != 0) {
          Swal.fire('Error!', data.message, 'error');
        }
      }, err => {
        console.log(err);
      })
    }
  }


  // Check Voucher Conditions On Transaction Mode
  checktranCondition() {

    let obj = {
      accountNo: this.angForm.controls['account_no'].value.AC_NO,
      schemeType: this.angForm.controls['scheme_type'].value,
      scheme: this.angForm.controls['scheme'].value.S_APPL,
      tran: this.selectedMode.tran_drcr,
      tranMode: this.selectedMode.id,
      currentDate: this.date
    }

    if (obj) {
      if (this.selectedMode.id == 7 && this.selectedCode == 'SH') {
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
    }


    let temptranmode = this.selectedMode
    if (obj) {
      this._service.StandingOrInterestInstruction(obj).subscribe(data => {
        if (data != 0) {
          Swal.fire('Error!', data.message, 'error');
          this.selectedMode = null
        }
      }, err => {
        console.log(err);
      })
    }

    if (obj) {
      this._service.LienMarkChecking(obj).subscribe(data => {
        if (data != 0) {
          Swal.fire('Error!', data.message, 'error');
        }
      }, err => {
        console.log(err);
      })
    }
  }

  // Check Voucher Conditions On Interest Date
  getColumnValue(event) {
    if (event != null) {
      console.log('event', event)
      let obj = {
        accountNo: this.angForm.controls['account_no'].value?.BANKACNO,
        schemeType: this.angForm.controls['scheme_type'].value,
        scheme: this.angForm.controls['scheme'].value?.S_APPL,
        tran: this.selectedMode.tran_drcr,
        tranMode: this.selectedMode.id,
        currentDate: this.date,
        interestDate: moment(event).format('DD/MM/YYYY')
      }

      if (obj) {
        this._service.ComInterestDateAndCurrentDate(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }

      if (obj) {
        this._service.ComInterestDateAndLastDMonth(obj).subscribe(data => {
          if (data != 0) {
            Swal.fire('Error!', data.message, 'error');
          }
        }, err => {
          console.log(err);
        })
      }
    }
  }

  checkTokenCondition(event) {
    let obj = {
      value: Number(event.target.value),
      clearBalance: this.ClearBalance,
      accountNo: this.angForm.controls['account_no'].value.BANKACNO,
      schemeType: this.angForm.controls['scheme_type'].value,
      scheme: this.angForm.controls['scheme'].value.S_APPL,
      tran: this.selectedMode.tran_drcr,
      tranMode: this.selectedMode.id,
      tran_type: this.selectedMode.tran_type,
      odAmount: this.overdraftAmt,
      currentDate: this.date
    }

    if (obj) {
      this._service.ComInterestDateAndLastDMonth(obj).subscribe(data => {
        if (data != 0) {
          Swal.fire('Error!', data.message, 'error');
        }
      }, err => {
        console.log(err);
      })
    }

  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#transactiontable tfoot tr').appendTo('#transactiontable thead');
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (this['value'] != '') {
            that
              .search(this['value'])
              .draw();
          } else {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

  updatecheckdata
  public visibleAnimate = false;
  public visible = false;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateID:any;

  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  headFlag : boolean = false;
  editClickHandler(id) {
    this._service.getFormData(id).subscribe((data) => {
      debugger
      console.log('edit', data)
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
      }

      this.selectedAccountno = data.account_no[0].id

      this.angForm.patchValue({
        type: data.TRAN_TYPE == 'CS' ? 'cash' : data.TRAN_TYPE == 'TR' ? 'transfer' : '',
        date: data.TRAN_DATE,
        account_no: data.TRAN_ACNO,
        chequeNo: data.CHEQUE_NO,
        chequeDate: data.CHEQUE_DATE,
        amt: data.TRAN_AMOUNT,
        total_amt: data.TRAN_AMOUNT,
        particulars: data.NARRATION,
        token: data.TOKEN_NO,


      })
    })

  }

  updateData() {

  }

  //approve account
  Approve() {
    let obj = {
      id: this.updateID,
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
}
