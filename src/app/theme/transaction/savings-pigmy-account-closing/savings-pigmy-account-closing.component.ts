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
  dataSub: Subscription;
  characters: IOption[];
  sysparaData: any;

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
      SVR_CHARGE_GLCODE: [''],
      SVR_CHARGE_RATE: [''],
      COMM_GLCODE: [''],
      CommsionAmt: [''],
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
    });
  }


  obj: any
  getschemename: any
  isHideForSaving: boolean = true
  isInterestApplicable: boolean = false
  schemechange(event) {
    debugger
    this.ngGlAcno = Number(event.SVR_CHARGE_GLCODE)
    this.getschemename = event.name
    this.ngscheme = event.value
    this.SVR_CHARGE_RATE = event.SVR_CHARGE_RATE
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
  //get account no according scheme for transfer
  getTransferAccountList(event) {
    this.obj = [this.ngschemecode, this.ngBranchCode]
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
  getAccountDetails(event) {
    this.bankacno = event.bankacno
    let mem = [this.bankacno, this.getschemename, this.ngscheme]
    this.http.get(this.url + '/saving-pigmy-account-closing/details/' + mem).subscribe((data) => {
      console.log('acc data', data)
      this.angForm.patchValue({
        OpenDate: data[0].AC_OPDATE,
        renewalDate: data[0].AC_ASON_DATE,
        LastIntDate: data[0].AC_LINTEDT,
        maturityDate: data[0].AC_EXPDT,
        AC_Months: data[0].AC_MONTHS,
        AC_DAYS: data[0].AC_DAYS,
        INTRATE: data[0].INT_RATE,
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
  SVR_CHARGE_GLCODE
  SVR_CHARGE_RATE
  calculation() {
    this.angForm.patchValue({
      SVR_CHARGE_GLCODE: this.SVR_CHARGE_GLCODE,
      SVR_CHARGE_RATE: this.SVR_CHARGE_RATE
    })
  }

  //transfer account grid functions
  addTransferAccount() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    var object = {
      chequeNo: formVal.chequeNo,
      ChequeDate: (formVal.ChequeDate == '' || formVal.ChequeDate == 'Invalid date') ? '' : moment(formVal.ChequeDate).format('DD/MM/YYYY'),
      AC_NO: formVal.TschemeAC,
      AC_TYPE: this.ngschemecode,
      ACNO: this.ngacno,
      particulars: formVal.NARRATION,
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
      chequeNo: this.multigrid[id].chequeNo,
      ChequeDate: this.multigrid[id].ChequeDate,
      NARRATION: this.multigrid[id].particulars,
      amount: this.multigrid[id].amount
    })
    this.ngacno = this.multigrid[id].ACNO
    this.ngschemecode = this.multigrid[id].AC_TYPE
  }

  updateTransferAcccount() {
    let index = this.transferIndex;
    this.jointShowButton = true;
    this.jointUpdateShow = false;
    let cheqDate
    const formVal = this.angForm.value;
    if (this.transferGrid.ChequeDate != formVal.ChequeDate) {
      cheqDate = moment(formVal.ChequeDate).format('DD/MM/YYYY');
    } else {
      cheqDate = formVal.ChequeDate
    }
    var object = {
      chequeNo: formVal.chequeNo,
      ChequeDate: cheqDate,
      AC_NO: formVal.TschemeAC,
      AC_TYPE: this.ngschemecode,
      ACNO: this.ngacno,
      particulars: formVal.NARRATION,
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
      console.log('update grid', this.multigrid)
      this.resetgrid();
    }
  }

  resetgrid() {
    this.ngacno = null
    this.ngschemecode = null
    this.angForm.controls["chequeNo"].reset();
    this.angForm.controls["ChequeDate"].reset();
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
    // TRAN_DATE
    // TRAN_TYPE
    // BRANCH_CODE
    // TRAN_ACNOTYPE
    // TRAN_ACTYPE
    // TRAN_ACNO
    // SURCHARGE_AMOUNT
    // PENAL_INTEREST_AMOUNT
    // NET_INTEREST_AMOUNT
    // TOTAL_INTEREST_AMOUNT
    // NET_PAYABLE_AMOUNT
    // INTEREST_RATE
    // IS_PREMATURE_CLOSE
    // NARRATION
    // TRAN_STATUS
    // TOKEN_NO
    // PAYABLE_INTEREST_AMOUNT
    // CHEQUE_NO
    // USER
  }
  //function toggle update to add button
  updateData() {
    // this.showButton = true;
    // this.updateShow = false;
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    // this.message.BranchCode = info.SchemeCode;
    // this.message.OtherChargesGLAccount = info.OtherChargesGLAccount;
    // this.message.TokenNo = info.TokenNo;
    // this.message.InterestRate = info.InterestRate;
    // this.message.TotalInterest = info.TotalInterest;
    // this.message.OtherChargesAmount = info.OtherChargesAmount;
    // this.message.SchemeCode = info.SchemeCode;
    // this.message.AccountNumber = info.AccountNumber;
    // this.message.HOSubGL = info.HOSubGL;
    // this.message.Amount = info.Amount;
    // this.message.AccountName = info.AccountName;

    // this.showButton = false;
    // this.updateShow = true;
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


}
