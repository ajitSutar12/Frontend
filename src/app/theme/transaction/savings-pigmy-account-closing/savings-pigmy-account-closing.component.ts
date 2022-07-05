import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';

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

@Component({
  selector: 'app-savings-pigmy-account-closing',
  templateUrl: './savings-pigmy-account-closing.component.html',
  styleUrls: ['./savings-pigmy-account-closing.component.scss']
})
export class SavingsPigmyAccountClosingComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('narrationhide') narrationhide: ElementRef<HTMLElement>;

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
  allScheme: any[];
  ngscheme: any = null;
  accountedit: any = null;
  ngacno: any = null;
  schemeACNo: any[];
  ngglacno: any = null;
  selectedScheme: any = null
  multigrid = [];

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  dataSub: Subscription;
  characters: IOption[];
  sysparaData: any;
  ngFnarration: any = null
  // for radio button
  isTransfer: boolean = false
  master: any;
  selectedCode: any = null
  allSchemeCode: any//from schme master
  // allScheme = new Array()//from schme master
  narration: any;
  narrationList: any;

  ngschemecode: any = null
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
  ngCommission: any = null
  GlACNo
  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  ngGlAcno: any = null
  constructor(
    // public NarrationService: NarrationService,
    private fb: FormBuilder, private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
    private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private _service1: MultiVoucherService,
    private _service: SavingPigmyAccountClosingService
  ) {
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.getSystemParaDate();

    //Narration List
    this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })


    // this.dataSub = this.NarrationService.loadCharacters().subscribe((options) => {
    //   this.narrationList = options;
    // });

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })


    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'PG')
      });
      this.allScheme = allscheme;
    })

    // this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
    //  this.allSchemeCode=data;
    //  console.log('data',data)
    //  console.log(this.allSchemeCode);
    // })


    // //Scheme Code
    // this._service1.getSchemeCodeList().subscribe(data => {
    //   console.log(data);

    //   this.master = data;
    //   this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()]

    // })


    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'IV' || scheme.name == 'GS' || scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH')
      });
      this.scheme = allscheme;
    })

    this.schemeAccountNoService.getGeneralLedgerListForClosing().pipe(first()).subscribe(data => {
      this.GlACNo = data;
    })
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
      INT_RATE: [''],
      LAST_INT: [''],
      MATURITY_DATE: [''],
      INT_RATE2: [''],
      MONTHS: [''],
      INT_RATE3: ['', [Validators.pattern]],
      INT_RATE4: [''],
      INT_RATE5: [''],
      AMOUNT: ['', [Validators.pattern]],
      INT_RATE6: [''],
      GL_AC: [''],
      SAVING_PIGMY: [''],
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
      amount: [''],
      DepositAmount: [''],
      OpenDate: [''],
      OTHER_CHARGES_GLACNO: [''],
      OTHER_CHARGES_AMOUNT: [''],
      COMMISSION_GLACNO: [''],
      COMMISSION_CHARGES: [''],
      Months: [''],
      renewalDate: [''],
      maturityDate: [''],
      AC_Months: [''],
      AC_DAYS: [''],
      INTRATE: [''],
      INTREST_RATE: [''],
      CalCulateAmt: [4342],
      TotalInterest: [4342],
      LEDGER_BAL: [4342],
      PAYABLE_INT: [4342],
      POSTED_INT: [''],
      NET_INT: [''],
      PENAL_INT: ['1000'],
      NETPAYABLE_AMT: [''],
      Fnarration: [''],
    });
  }


  obj: any
  getschemename: any
  isHideForSaving: boolean = true
  isInterestApplicable: boolean = false
  schemechange(event) {
    this.ngGlAcno = Number(event.SVR_CHARGE_GLCODE)
    this.getschemename = event.name
    this.ngscheme = event.value
    this.OTHER_CHARGES_AMOUNT = event.SVR_CHARGE_RATE
    this.isInterestApplicable = event.intapp
    this.getAccountlist()
  }

  //  Fetching account from seleted scheme
  getAccountlist() {

    this.accountedit = null
    this.obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        this.isHideForSaving = false
        break;



      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        this.isHideForSaving = true
        break;


    }
  }
  transferAcnoType
  //get account no according scheme for transfer
  getTransferAccountList(event) {
    debugger
    this.obj = [this.ngschemecode, this.ngBranchCode]
    this.ngacno = null
    this.transferAcnoType = event.name
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

  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.sysparaData = data
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
  getAccountDetails(event) {
    this.bankacno = event.bankacno
    let mem = [this.bankacno, this.getschemename, this.ngscheme]
    this.http.get(this.url + '/saving-pigmy-account-closing/details/' + mem).subscribe((data) => {
      console.log('acc data', data)
      this.OpenDate = data[0].AC_OPDATE
      this.renewalDate = data[0].AC_ASON_DATE
      this.INTRATE = data[0].INT_RATE
      this.LastIntDate = data[0].AC_LINTEDT
      this.maturityDate = data[0].AC_EXPDT
      this.angForm.patchValue({
        // OpenDate: data[0].AC_OPDATE,
        // renewalDate: data[0].AC_ASON_DATE,
        // LastIntDate: data[0].AC_LINTEDT,
        // maturityDate: data[0].AC_EXPDT,
        AC_Months: data[0].AC_MONTHS,
        AC_DAYS: data[0].AC_DAYS,
        // INTRATE: data[0].INT_RATE,
        POSTED_INT: data[0].post_Interest
      })
      if (this.isInterestApplicable == true) {
        this.angForm.patchValue({
          INTREST_RATE: data[0].INT_RATE
        })
      }
      else {
        this.angForm.patchValue({
          INTREST_RATE: '0'
        })
      }
      let netInt: number = 0
      var months
      netInt = this.angForm.controls['TotalInterest'].value - data[0].post_Interest
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
        NET_INT: netInt
      })
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

  getNetInterest() {
    let ledger_bal = this.angForm.controls['LEDGER_BAL'].value
    let net_int = this.angForm.controls['NET_INT'].value
    let other_charge_amt = this.angForm.controls['OTHER_CHARGES_AMOUNT'].value
    let comm_amt = this.angForm.controls['COMMISSION_CHARGES'].value
    let penal_amt = this.angForm.controls['PENAL_INT'].value
    let netInt = (Number(ledger_bal) + Number(net_int) - Number(other_charge_amt) - Number(comm_amt) - Number(penal_amt)).toFixed(2)
    this.angForm.patchValue({
      NETPAYABLE_AMT: netInt
    })
  }

  //transfer account grid functions
  addTransferAccount() {
    debugger
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    var object = {
      TRANSFER_ACNO: formVal.TschemeAC,
      TRANSFER_ACTYPE: this.ngschemecode,
      ACNO: this.ngacno,
      NARRATION: formVal.NARRATION,
      TRAN_AMOUNT: formVal.amount,
      TRANSFER_ACNOTYPE: this.transferAcnoType
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
      console.log('multi', this.multigrid)
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
      this.multigrid[index] = object
      console.log('update grid', this.multigrid)
      this.resetgrid();
    }
  }

  resetgrid() {
    this.ngacno = null
    this.ngschemecode = null
    this.angForm.controls["NARRATION"].reset();
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

  submit() {
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
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
      IS_PREMATURE_CLOSE: this.isPrematureClose,
      NARRATION: formVal.Fnarration,
      TOKEN_NO: formVal.Token_Num,
      COMMISSION_CHARGES: formVal.COMMISSION_CHARGES,
      COMMISSION_GLACNO: formVal.COMMISSION_GLACNO,
      OTHER_CHARGES_GLACNO: formVal.OTHER_CHARGES_GLACNO,
      PAYABLE_INTEREST_AMOUNT: formVal.PAYABLE_INT,
      CHEQUE_NO: formVal.chequeNo,
      CHEQUE_DATE: (formVal.ChequeDate == '' || formVal.ChequeDate == 'Invalid date') ? '' : moment(formVal.ChequeDate).format('DD/MM/YYYY'),
      USER: result.id,
      multigrid: this.multigrid
    }
    this._service.postData(dataToSend).subscribe(data => {
      // this.getVoucherData();
      Swal.fire('Success!', 'Account Closed Successfully !', 'success');
      this.multigrid = []
      this.resetForm()
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

  resetForm() {
    this.createForm()
  }
  //function toggle update to add button
  updateData() {
    // this.showButton = true;
    // this.updateShow = false;
  }

  updatecheckdata
  updateID
  TRAN_NO
  //function for edit button clicked
  editClickHandler(id): void {
    this._service.getFormData(id).subscribe((data) => {
      console.log('edit', data)
      this.updatecheckdata = data
      if (data.SYSCHNG_LOGIN == null) {
        this.showButton = false;
        this.updateShow = false;
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
      }
      data.TRAN_ACNOTYPE == 'SB' ? this.isHideForSaving = false : this.isHideForSaving = true
      this.getschemename = data.TRAN_ACNOTYPE
      this.ngscheme = Number(data.TRAN_ACTYPE)
      this.ngBranchCode = data.BRANCH_CODE
      this.getAccountlist()
      this.angForm.patchValue({
        TRAN_NO: data.TRAN_NO,
        BRANCH_CODE: data.BRANCH_CODE,
        SAVING_PIGMY: data.TRAN_TYPE == 'CS' ? 'FormC' : 'FormT',
        chequeNo: data.CHEQUE_NO,
        ChequeDate: data.CHEQUE_DATE,
        Fnarration: data.NARRATION,
        NET_INT: data.NET_INTEREST_AMOUNT,
        NETPAYABLE_AMT: data.NET_PAYABLE_AMOUNT,
        OTHER_CHARGES_AMOUNT: data.OTHER_CHARGES_AMOUNT,
        OTHER_CHARGES_GLACNO: data.OTHER_CHARGES_GLACNO,
        POSTED_INT: data.PAID_INTEREST_AMOUNT,
        PAYABLE_INT: data.PAYABLE_INTEREST_AMOUNT,
        PENAL_INT: data.PENAL_INTEREST_AMOUNT,
        TotalInterest: data.TOTAL_INTEREST_AMOUNT,
        AC_NO: data.TRAN_ACNO,
        AC_TYPE: Number(data.TRAN_ACTYPE),
        DATE: data.TRAN_DATE,
        Token_Num: data.TOKEN_NO,
      })
      this.accountedit = data.TRAN_ACNO
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
      Swal.fire(
        'Approved',
        'Saving and Pigmy Account Closing approved successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();

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
      Swal.fire(
        'Rejected',
        'Saving and Pigmy Account Closing rejected successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();

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


}
