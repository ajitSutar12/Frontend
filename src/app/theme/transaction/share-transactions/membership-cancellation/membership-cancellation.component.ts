import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { glMasterService } from '../../../../shared/elements/gl-master.service';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import * as moment from 'moment';
import { event } from 'jquery';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-membership-cancellation',
  templateUrl: './membership-cancellation.component.html',
  styleUrls: ['./membership-cancellation.component.scss']
})
export class MembershipCancellationComponent implements OnInit {
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('triggerhide1') triggerhide1: ElementRef<HTMLElement>;
  @ViewChild('narrationhide') narrationhide: ElementRef<HTMLElement>;
  @Input() childMessage: string;
  @Output() reloadTablePassing = new EventEmitter<string>();



  angForm: FormGroup
  url = environment.base_url;
  newbtnShow: boolean = true;
  jointShowButton: boolean = true;
  jointUpdateShow: boolean = false;
  selectedBranch
  branchOption: any;
  scheme
  schemeCode
  schemeType: string = 'SH'
  obj: any;
  Scheme: any;
  maxDate: any;
  minDate: Date;
  type: any;
  ngIntroducer: any = null
  introducerACNo
  schemeACNo
  bankacno
  debitcredit
  selectedScheme: any = null
  particulars: any;
  multigrid = []
  values = [
    { id: 1, name: 'CREDIT' },
    { id: 2, name: 'DEBIT' },
  ];
  amount: any;
  ngFnarration: any = 'Member Cancelled'
  dtExportButtonOptions: any = {};
  isTransfer: boolean;
  intIndex: any;
  date: any;
  multigrid1 = new Array();
  totalCredit: any = 0;
  totalDebit: any = 0;
  transferTotalAmount: any = 0;
  narrationList: any;
  particularss
  logDate: any;
  setLang:any;

  constructor(
    private translate:TranslateService,
    private http: HttpClient,
    private fb: FormBuilder,
    public glMasterService: glMasterService,
    private config: NgSelectConfig,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter: SystemMasterParametersService,) {

    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.Issue_date = data.CURRENT_DATE
      this.logDate = data.CURRENT_DATE
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
    if (this.childMessage != undefined) {
      this.editClickHandler(this.childMessage);
    }

  }
  showButton: boolean = true;
  updateShow: boolean = false;
  isCash: boolean = true;

  submitShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  unapproveShow: boolean = false;
  closeShow: boolean = true;


  public visibleAnimate = false;
  public visible = false;

  ngOnInit(): void {
    this.shareBal = 0
    this.multigrid = []
    this.createForm()
    let user = JSON.parse(localStorage.getItem('user'));
    this.type = 'tranfer';
    //BranchCode Dropdown
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      this.selectedBranch = user.branchId;
    })

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.schemeCode = data[0].value
      this.getIntroducer()
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.Scheme = data
    });
    this.http.get(this.url + '/narration').subscribe(data => {
      this.narrationList = data
    });
  }


  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  getFormNarration(ele) {
    this.ngFnarration = ele;
    let el: HTMLElement = this.narrationhide.nativeElement;
    el.click();
  }

  onfocus(ele: NgSelectComponent) {
    ele.open()
    console.log(ele);
  }
  onopen(select: NgSelectComponent) {
    select.open()
  }
  onClose(select: NgSelectComponent) {
    select.close()
  }

  getIntroducer() {
    this.ngIntroducer = null
    this.introducerACNo = []
    this.obj = [this.schemeCode, this.selectedBranch]
    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })
  }
  createForm() {
    this.angForm = this.fb.group({
      branchOption: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_TYPE1: ['', [Validators.required]],
      ChequeDate: ['', [Validators.required]],
      MEMBER_CODE1: ['', [Validators.required]],
      MCDATE: ['', [Validators.required]],
      RDATE: ['', [Validators.required]],
      MDATE: ['', [Validators.required]],
      amt: ['', [Validators.required]],
      ATA: ['', [Validators.required]],
      particulars: ['', [Validators.required]],
      RESOLUTIONNO: ['', [Validators.required]],
      Tscheme: ['', [Validators.required]],
      TschemeAC: ['', [Validators.required]],
      particularss: ['', [Validators.required]],
      type: ['cash'],
      amount: ['', [Validators.pattern]],
      DEBIT_CREDIT: ['', [Validators.required]],
      T_DEBIT: ['', [Validators.required]],
      T_CREDIT: ['', [Validators.required]],
      Fnarration: ['Member Cancelled', [Validators.required]],
      T_NO_OF_SHARES: [0],
      T_SHARES_AMOUNT: [0],
      TRAN_NO: [0]
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['branchOption'].enable()
      this.selectedBranch = result.branch.id
    }
    else {
      this.angForm.controls['branchOption'].disable()
      this.angForm.patchValue({
        'branchOption': result.branch.id
      })
      this.selectedBranch = result.branch.id
    }
  }
  isFormA(value) {
    if (value == 1) {
      this.isTransfer = false
    }
    if (value == 2) {
      this.isTransfer = true
    }
  }
  transferSchemeDetails
  ngacno: any = null
  transferAccountDetails
  selectedTransScheme: any = null

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
  shareBal = 0
  Issue_date
  updateID
  getMemberDetail(event) {
    this.ngIntroducer = event.bankacno
    this.angForm.patchValue({
      MDATE: event.openDate,
      MCDATE: this.Issue_date
    })
    let obj = {
      schemeCode: this.schemeCode,
      bankacno: event.bankacno,
      issueDate: this.Issue_date
    }
    this.http.post(this.url + '/shares-transfer/getAccountSharesDetails', obj).subscribe(data => {
      if (data['isclosed'] == 1) {
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.acc_closed')}`, "error");
        this.ngIntroducer = null
      } else if (Number(data['shareBal']) == 0) {
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.acc_0_bal')}`, "error");
        this.ngIntroducer = null
      }
      else {
        this.shareBal = data['shareBal']
        this.angForm.patchValue({
          MDATE: event.openDate,
          T_NO_OF_SHARES: data['numberOfShares'],
          T_SHARES_AMOUNT: (data['shareBal']).toFixed(2),
          TRANS_AMOUNT: data['shareBal'],
        })
      }
    })
  }


  decimalAllContent($event) {
    var t = $event.target.value;
    $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    this.angForm.patchValue({
      amount: $event.target.value
    })
  }

  addTransferAccount() {
    const formVal = this.angForm.value;
    var object = {
      TRAN_ACTYPE: formVal.Tscheme,
      TRAN_ACNOTYPE: this.transferSchemeDetails.name,
      TRAN_ACNO: formVal.TschemeAC,
      TRAN_AMOUNT: formVal.amount,
      NARRATION: formVal.particularss,
      type: formVal.type
    }
    this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
    if (formVal.Tscheme == "" || formVal.Tscheme == null) {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Select_Scheme')}`, "error");
    }
    else if (formVal.TschemeAC == "" || formVal.TschemeAC == null) {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.Select_Account')}`,
        "info"
      );
    }
    else if ((formVal.amount == "" || formVal.amount == null)) {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.Pro_Trans_Am')}`,
        "info"
      );
    }
    else if (this.transferTotalAmount > this.shareBal) {
      this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.T_am_equal_less')} ${this.shareBal}`,
        "info"
      );
    }
    else if (Number(formVal.amount) > this.shareBal) {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.T_am_equal_less')} ${this.shareBal}`,
        "info"
      );
    }
    else {
      this.totalCredit = this.totalCredit + Number(formVal.amount)
      this.multigrid.push(object);
      this.resetForm();
    }
  }


  editTransferAccount(indexOfelement) {
    this.intIndex = indexOfelement;
    this.jointShowButton = false;
    this.jointUpdateShow = true;
    this.getTransferAccountList(event);
    this.angForm.patchValue({
      Tscheme: Number(this.multigrid[indexOfelement].TRAN_ACTYPE),
      TschemeAC: this.multigrid[indexOfelement].TRAN_ACNO,
      amount: this.multigrid[indexOfelement].TRAN_AMOUNT,
      TRANSFER_ACNO: this.multigrid[indexOfelement].TRANSFER_ACNO,
      particularss: this.multigrid[indexOfelement].NARRATION,
    })
  }

  updateTransferAcccount() {
    let index = this.intIndex;
    const formVal = this.angForm.value;
    var object = {
      TRAN_ACTYPE: formVal.Tscheme,
      TRAN_ACNO: formVal.TschemeAC,
      TRAN_ACNOTYPE: this.transferSchemeDetails.name,
      TRAN_AMOUNT: formVal.amount,
      TRANSFER_ACNO: formVal.TRANSFER_ACNO,
      NARRATION: formVal.particularss,
    }
    if ((formVal.amount == "" || formVal.amount == null)) {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.Pro_Trans_Am')}`,
        "info"
      );
    }
    else if (this.transferTotalAmount > this.shareBal) {
      this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.T_am_equal_less')} ${this.shareBal}`,
        "info"
      );
    }
    else if (Number(formVal.amount) > this.shareBal) {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.T_am_equal_less')} ${this.shareBal}`,
        "info"
      );
    }
    else {
      this.transferTotalAmount = this.transferTotalAmount - Number(this.multigrid[index].amount)
      this.multigrid[index] = object;
      this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
      this.jointShowButton = true;
      this.jointUpdateShow = false;
      this.resetForm();
    }
  }

  resetForm() {
    this.angForm.controls['particularss'].reset()
    this.angForm.controls['Tscheme'].reset()
    this.angForm.controls['TschemeAC'].reset()
    this.angForm.controls['amount'].reset()
    this.angForm.controls['DEBIT_CREDIT'].reset()
  }


  resetForm1() {
    this.angForm.controls['branchOption'].reset()
    this.angForm.controls['AC_TYPE'].reset()
    this.angForm.controls['AC_TYPE1'].reset()
    this.angForm.controls['ChequeDate'].reset()
    this.angForm.controls['MEMBER_CODE1'].reset()
    this.angForm.controls['MCDATE'].reset()
    this.angForm.controls['RDATE'].reset()
    this.angForm.controls['MDATE'].reset()
    this.angForm.controls['amt'].reset()
    this.angForm.controls['ATA'].reset()
    this.angForm.controls['particulars'].reset()
    this.angForm.controls['RESOLUTIONNO'].reset()
  }



  submit() {
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let toDate = moment(formVal.RDATE, 'DD/MM/YYYY')
    let resodate = moment(toDate).format('DD/MM/YYYY')
    let obj = {
      BRANCH_CODE: this.selectedBranch,
      TRAN_DATE: this.Issue_date,
      TRAN_ACTYPE: this.schemeCode,
      transactionmode: formVal.type,
      TRAN_ACNO: this.ngIntroducer,
      TRAN_AMOUNT: this.shareBal,
      USER_CODE: result.id,
      RESULATION_DATE: resodate,
      RESULATION_NO: formVal.RESOLUTIONNO,
      MembershipData: this.multigrid
    }
    if (formVal.branchOption == "" || formVal.branchOption == null) {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Select_Scheme')}`, "error");
    }
    else if (formVal.AC_TYPE == "" || formVal.AC_TYPE == null) {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.Select_Account')}`,
        "info"
      );
    }
    else if (formVal.MEMBER_CODE1 == "" || formVal.MEMBER_CODE1 == null) {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.Insert_Amount')}`,
        "info"
      );
    }
    else if (formVal.MCDATE == "" || formVal.MCDATE == null) {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.Select_Account')}`,
        "info"
      );
    }
    else if (formVal.RDATE == "" || formVal.RDATE == null) {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.Res_Date')}`,
        "info"
      );
    }
    else if (formVal.RESOLUTIONNO == "" || formVal.RESOLUTIONNO == null) {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.res_number')}`, "error"
      );
    }
    else if (this.transferTotalAmount != this.shareBal && formVal.type == 'transfer') {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.t_amount')}`, "error"
      );
    }
    else {
      this.http.post(this.url + '/dailyshrtran/insert', obj).subscribe(data => {
        Swal.fire(
          `${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Data_Sub_S')}`, 'success'
        );
        this.shareBal = 0
        this.transferTotalAmount = 0
        this.ngOnInit()
      })
    }
  }

  // function for edit button clicked
  editClickHandler(id): void {
    this.http.get(this.url + '/dailyshrtran/' + id).subscribe((data: any) => {
      this.angForm.disable()
      this.getTransferAccountDeatil(event)

      let dailyshrtran = data.dailyshrtran
      let dailytran = data.dailytran
      this.updateID = dailyshrtran.id
      if (dailyshrtran.TRAN_STATUS != '0') {
        this.approveShow = false;
        this.rejectShow = false;
        this.unapproveShow = true;
        this.closeShow = true;
        this.submitShow = false;
      }
      else if (dailyshrtran.TRAN_STATUS == '0') {
        this.approveShow = true;
        this.rejectShow = true;
        this.unapproveShow = false;
        this.closeShow = true;
        this.submitShow = false;
      }
      this.selectedBranch = dailyshrtran.BRANCH_CODE
      this.schemeCode = Number(dailyshrtran.TRAN_ACTYPE)
      this.Issue_date = dailyshrtran.TRAN_DATE
      this.shareBal = dailyshrtran.TRAN_AMOUNT
      this.getIntroducer()
      this.angForm.patchValue({
        type: dailytran[0].TRAN_TYPE == 'CS' ? 'cash' : 'transfer',
        RDATE: dailyshrtran.RESULATION_DATE,
        RESOLUTIONNO: dailyshrtran.RESULATION_NO,
        TRAN_NO: dailyshrtran.TRAN_NO,
        MCDATE: dailyshrtran.TRAN_DATE
      })
      dailytran[0].TRAN_TYPE == 'CS' ? this.isTransfer = false : this.isTransfer = true
      this.ngIntroducer = dailyshrtran.TRAN_ACNO
      this.multigrid = dailytran
    })
  }

  approve() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    var object =
    {
      id: this.updateID,
      USER_CODE: result.id,
      BRANCH_CODE: this.selectedBranch
    }
    this.http.post(this.url + '/dailyshrtran/approve', object).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Data_App')}`, 'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    })
  }
  reject() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    var object =
    {
      id: this.updateID,
      USER_CODE: result.id,
      BRANCH_CODE: this.selectedBranch
    }
    this.http.post(this.url + '/dailyshrtran/reject', object).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Data_Rej')}`, 'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    })
  }
  unapprove() {
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let toDate = moment(formVal.RDATE, 'DD/MM/YYYY')
    let resodate = moment(toDate).format('DD/MM/YYYY')
    var object =
    {
      LOG_DATE: this.logDate,
      id: this.updateID,
      user: result.id,
      BRANCH_CODE: this.selectedBranch
    }
    this.http.post(this.url + '/dailyshrtran/unapprove', object).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Data_Un_S')}`, 'success'
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
  closeModal() {
    var button = document.getElementById('trigger');
    button.click();
    this.reloadTablePassing.emit();
  }
}