import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service'
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { VoucherEntryService } from '../../voucher-entry/voucher-entry.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import * as moment from 'moment';
import { NgSelectComponent } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { data } from 'jquery';

@Component({
  selector: 'app-issue-new-shares',
  templateUrl: './issue-new-shares.component.html',
  styleUrls: ['./issue-new-shares.component.scss']
})
export class IssueNewSharesComponent implements OnInit {
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('triggerhide1') triggerhide1: ElementRef<HTMLElement>;
  // @ViewChild('triggerhide1') triggerhide1: ElementRef<HTMLElement>;
  @Input() childMessage: string;
  @Output() reloadTablePassing = new EventEmitter<string>();


  //for Formgroup
  ngForm: FormGroup

  //for date
  maxDate: any;
  minDate: Date;
  bsValue = new Date();

  jointShowButton: boolean = true
  jointUpdateShow: boolean = false


  public visibleAnimate = false;
  public visible = false;

  //ngmodel
  schemeCode
  memberno
  selectedBranch
  Membershipdate
  Issue_date
  particulars
  particular
  debitcredit
  from
  to
  Resolution_date

  //dropdown
  scheme
  schemeType: string = 'SH'
  introducerACNo
  branchOption
  obj: any;
  isTransfer: boolean;
  transferTotalAmount: any = 0;
  totalCredit = 0;
  totalDebit = 0;
  multigrid = [];
  narrationList: any;
  values = [
    { id: 1, name: 'DEBIT' },
    { id: 2, name: 'CREDIT' },];
  intIndex: any;
  schemeACNo: any;
  selectedTransScheme: any;
  transferSchemeDetails: any;
  ngacno: any;
  transferAccountDetails: any;
  Scheme
  PERTICULARS: any;

  url = environment.base_url;
  Tparticulars

  submitShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  unapproveShow: boolean = false;
  resolutionDate: any
  closeShow: boolean = false;
  logDate
  constructor(private fb: FormBuilder,
    private _service: VoucherEntryService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private http: HttpClient,
  ) {
    if (this.childMessage != undefined) {
      this.editClickHandler(this.childMessage);
    }
  }

  ngOnInit(): void {
    this.createForm()
    //branchOption
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
    //Scheme Code
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.schemeCode = data[0].value
      this.getIntroducer()
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.Scheme = data;
    });

    //Narration List
    this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })
  }

  getIntroducer() {
    // debugger
    this.obj = [this.schemeCode, this.selectedBranch]


    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })
  }

  //get account no according scheme for transfer

  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name
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

  //transfer and cash radio button effect
  isFormA(value) {
    if (value == 1) {
      this.isTransfer = false
    }
    else if (value == 2) {
      this.isTransfer = true
    }
  }

  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      MEMBER_NO: ['', [Validators.required]],
      TRAN_NO: [],
      MEMBERSHIP_DATE: ['', [Validators.required]],
      T_SHARES_AMOUNT: [],
      T_NO_OF_SHARES: [],
      ISSUE_DATE: ['', [Validators.required]],
      CERTIFICATE_NO: ['', [Validators.required]],
      FROM: ['', [Validators.required]],
      TO: ['', [Validators.required]],
      NO_OF_SHARES: ['', [Validators.required]],
      FACE_VALUE: ['', [Validators.required]],
      RESOLUTION_DATE: ['', [Validators.required]],
      SHARES_AMOUNT: ['', [Validators.pattern]],
      RES_NO: ['', [Validators.required]],
      PERTICULARS: [''],
      TPERTICULARS: [''],
      T_TYPE: ['CS'],
      Tscheme: ['',],
      TschemeAC: ['',],
      amount: ['', [Validators.pattern]],
      DEBIT_CREDIT: ['',],
      T_DEBIT: ['',],
      T_CREDIT: ['',],
      particular: [''],
    });
    this.systemParameter.getFormData(1).subscribe(data => {
      this.Issue_date = data.CURRENT_DATE;
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.resolutionDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY').subtract(3, 'month');
      this.resolutionDate = this.resolutionDate._d
      this.logDate = data.CURRENT_DATE
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.selectedBranch = result.branch.id
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngForm.patchValue({
        'BRANCH_CODE': result.branch.id
      })
      this.selectedBranch = result.branch.id
    }
  }

  getMemberDetail(event) {
    let obj = {
      schemeCode: this.schemeCode,
      customer: event,
      issueDate: this.Issue_date
    }
    this.http.post(this.url + '/issue-new-share/getAccountSharesDetails', obj).subscribe(data => {
      this.ngForm.patchValue({
        MEMBERSHIP_DATE: event.openDate,
        FROM: data['SHARE_TO_NO'],
        CERTIFICATE_NO: data['CERTIFICATE_NO'],
        T_NO_OF_SHARES: data['numberOfShares'],
        T_SHARES_AMOUNT: data['shareBal'],
        FACE_VALUE: data['SHARES_FACE_VALUE']
      })
    })
  }

  getNumberOfShares() {
    let toNoShares = Number(this.ngForm.controls['FROM'].value) + Number(this.ngForm.controls['NO_OF_SHARES'].value) - 1
    this.ngForm.patchValue({
      TO: toNoShares
    })
    this.getSharesAmount()
  }

  getSharesAmount() {
    let sharesAmount = Number(this.ngForm.controls['NO_OF_SHARES'].value) * Number(this.ngForm.controls['FACE_VALUE'].value)
    this.ngForm.patchValue({
      SHARES_AMOUNT: sharesAmount.toFixed(2)
    })
  }

  selectAllContent($event) {
    $event.target.select();
  }
  tScheme

  addTransferAccount() {
    const formVal = this.ngForm.value;
    var object = {
      TRAN_ACNOTYPE: this.tScheme,
      Tscheme: formVal.Tscheme,
      amount: formVal.amount,
      DEBIT_CREDIT: formVal.DEBIT_CREDIT,
      TRANSFER_ACNO: formVal.TschemeAC,
      PERTICULARS: formVal.TPERTICULARS,
    }
    if (formVal.Tscheme == "" || formVal.Tscheme == null) {
      Swal.fire("Warning!", "Please Select Scheme!", "error");
    }
    else if (formVal.TschemeAC == "" || formVal.TschemeAC == null) {
      Swal.fire(
        "Warning!",
        "Please Select Account!",
        "info"
      );
    }
    else if (this.multigrid.find(ob => ob['TRANSFER_ACNO'] === object.TRANSFER_ACNO)) {
      Swal.fire('Info', 'This Account is Already Exists!', 'error');
    }
    else if (formVal.amount == "" || formVal.amount == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Amount!",
        "info"
      );
    }
    else if (formVal.DEBIT_CREDIT == "" || formVal.DEBIT_CREDIT == null) {
      Swal.fire(
        "Warning!", "Please Select Debit or Credit!", "error"
      );
    }
    else {
      if (formVal.DEBIT_CREDIT == 'CREDIT') {
        this.totalCredit = this.totalCredit + Number(formVal.amount)
      } else {
        this.totalDebit = this.totalDebit + Number(formVal.amount);
      }
      this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
      this.multigrid.push(object);
      this.resetForm();
    }
  }

  editTransferAccount(indexOfelement) {
    this.intIndex = indexOfelement;
    this.jointShowButton = false;
    this.jointUpdateShow = true;

    this.ngForm.patchValue({
      // SR_NO: this.multiField[id].SR_NO,
      Tscheme: this.multigrid[indexOfelement].Tscheme,
      amount: this.multigrid[indexOfelement].amount,
      DEBIT_CREDIT: this.multigrid[indexOfelement].DEBIT_CREDIT,
      TschemeAC: this.multigrid[indexOfelement].TRANSFER_ACNO,
      TPERTICULARS: this.multigrid[indexOfelement].PERTICULARS,
    })
  }

  updateTransferAcccount() {
    let index = this.intIndex;
    const formVal = this.ngForm.value;
    if (this.multigrid[index].DEBIT_CREDIT == 'CREDIT') {
      this.totalCredit = this.totalCredit - Number(this.multigrid[index].amount)
      this.totalCredit = this.totalCredit + Number(formVal.amount)
    } else {
      this.totalDebit = this.totalDebit - Number(this.multigrid[index].amount)
      this.totalDebit = this.totalDebit + Number(formVal.amount);
    }
    this.transferTotalAmount = this.transferTotalAmount - Number(this.multigrid[index].amount)
    this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
    var object = {
      TRAN_ACNOTYPE: this.tScheme,
      Tscheme: formVal.Tscheme,
      amount: formVal.amount,
      DEBIT_CREDIT: formVal.DEBIT_CREDIT,
      TRANSFER_ACNO: formVal.TschemeAC,
      PERTICULARS: formVal.TPERTICULARS,
    }

    this.multigrid[index] = object;
    this.jointShowButton = true;
    this.jointUpdateShow = false;
    this.resetForm();

  }
  resetForm() {
    this.ngForm.controls['TPERTICULARS'].reset()
    this.ngForm.controls['Tscheme'].reset()
    this.ngForm.controls['TschemeAC'].reset()
    this.ngForm.controls['amount'].reset()
    this.ngForm.controls['DEBIT_CREDIT'].reset()
    this.ngForm.controls['FREE_PAID'].reset()
  }

  submit() {

    if (this.ngForm.valid) {
      if ((this.totalCredit + Number(this.ngForm.controls['SHARES_AMOUNT'].value)) != this.totalDebit && this.ngForm.controls['T_TYPE'].value == 'TR') {
        Swal.fire(
          'Oops', 'Total debit amount does not match with total credit amount', 'error'
        );
      }
      // else if (this.transferTotalAmount != Number(this.ngForm.controls['SHARES_AMOUNT'].value) && this.ngForm.controls['T_TYPE'].value == 'TR') {
      //   Swal.fire(
      //     'Oops', 'Shares amount does not match with total transfer amount', 'error'
      //   );
      // }
      else if (((this.totalCredit + Number(this.ngForm.controls['SHARES_AMOUNT'].value)) == this.totalDebit && this.ngForm.controls['T_TYPE'].value == 'TR') || this.ngForm.controls['T_TYPE'].value == 'CS') {
        const formVal = this.ngForm.value;
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        var object =
        {
          BRANCH_CODE: formVal.BRANCH_CODE,
          TRANSACTIONMODE: formVal.T_TYPE,
          TRAN_ACTYPE: formVal.AC_TYPE,
          TRAN_ACNO: formVal.MEMBER_NO,
          TRAN_DATE: formVal.ISSUE_DATE,
          CERTIFICATE_NO: formVal.CERTIFICATE_NO,
          NO_OF_SHARE: formVal.NO_OF_SHARES,
          FACE_VALUE: formVal.FACE_VALUE,
          TRAN_AMOUNT: this.totalCredit + Number(this.ngForm.controls['SHARES_AMOUNT'].value),
          NARRATION: formVal.particular,
          SHARE_FROM_NO: formVal.FROM,
          SHARE_TO_NO: formVal.TO,
          RESOLUTION_NO: formVal.RES_NO,
          RESOLUTION_DATE: moment(formVal.RESOLUTION_DATE).format('DD/MM/YYYY'),
          USER_CODE: result.id,
          MembershipData: this.multigrid
        }
        console.log(object);
        this.http.post(this.url + "/issue-new-share/insert", object).subscribe(data => {
          Swal.fire(
            'Success',
            'Data Successfully Added!',
            'success'
          );
          this.isTransfer = false
          this.multigrid = []
          this.totalCredit = 0
          this.totalDebit = 0
          this.createForm()

        })
      }
    }
    else {
      Swal.fire('Warning!', 'Please fill All Mandatory Fields!', 'warning')
    }
  }

  decimalAllContent($event) {
    var t = $event.target.value;
    $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }

  getNarration(ele) {
    this.particular = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }
  getNarration1(ele) {
    this.Tparticulars = ele;
    let el: HTMLElement = this.triggerhide1.nativeElement;
    el.click();
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
  updateID

  // function for edit button clicked
  editClickHandler(id): void {
    //  debugger
    this.http.get(this.url + '/issue-new-share/' + id).subscribe((data: any) => {
      let dailyshrtran = data.dailyshrtran
      let dailytran = data.dailytran
      this.updateID = dailyshrtran.id
      if (dailyshrtran.TRAN_STATUS != '0') {
        this.approveShow = false;
        this.rejectShow = false
        this.unapproveShow = true
        this.closeShow = true
      }
      else if (dailyshrtran.TRAN_STATUS == '0') {
        this.approveShow = true;
        this.rejectShow = true
        this.unapproveShow = false
        this.closeShow = true
      }
      this.submitShow = false;
      this.selectedBranch = dailyshrtran.BRANCH_CODE
      this.schemeCode = Number(dailyshrtran.TRAN_ACTYPE)
      this.Issue_date = dailyshrtran.TRAN_DATE
      this.getIntroducer()
      let obj = {
        schemeCode: this.schemeCode,
        customer: { bankacno: dailyshrtran.TRAN_ACNO },
        issueDate: this.Issue_date
      }
      this.http.post(this.url + '/issue-new-share/getAccountSharesDetails', obj).subscribe(data => {
        this.ngForm.patchValue({
          MEMBERSHIP_DATE: data['MEMBERSHIP_DATE'],
          FROM: data['SHARE_TO_NO'],
          CERTIFICATE_NO: data['CERTIFICATE_NO'],
          T_NO_OF_SHARES: data['numberOfShares'],
          T_SHARES_AMOUNT: data['shareBal'],
          FACE_VALUE: data['SHARES_FACE_VALUE']
        })
      })
      this.memberno = dailyshrtran.TRAN_ACNO
      this.ngForm.patchValue({
        T_TYPE: dailyshrtran.TRAN_TYPE == 'CS' ? 'CS' : 'TR',
        TRAN_NO: dailyshrtran.TRAN_NO,
        FROM: dailyshrtran.SHARES_FROM_NO,
        TO: dailyshrtran.SHARES_TO_NO,
        RES_NO: dailyshrtran.RESULATION_NO,
        RESOLUTION_DATE: dailyshrtran.RESULATION_DATE,
        FACE_VALUE: dailyshrtran.FACE_VALUE,
        NO_OF_SHARES: dailyshrtran.NO_OF_SHARES,
        SHARES_AMOUNT: dailyshrtran.TRAN_AMOUNT,
        particular: dailyshrtran.NARRATION,
        CERTIFICATE_NO: dailyshrtran.CERTIFICATE_NO
      })
      dailyshrtran.TRAN_TYPE == 'CS' ? this.isTransfer = false : this.isTransfer = true
      this.multigrid = dailytran
    })
  }

  approve() {
    const formVal = this.ngForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let toDate = moment(formVal.RDATE, 'DD/MM/YYYY')
    let resodate = moment(toDate).format('DD/MM/YYYY')
    var object =
    {
      id: this.updateID,
      userid: result.id,
      BRANCH_CODE: this.selectedBranch
    }
    this.http.post(this.url + '/issue-new-share/approve', object).subscribe(data => {
      Swal.fire(
        'success', "Data Approved Successfully!!", 'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }
  reject() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    var object =
    {
      id: this.updateID,
      userid: result.id,
      BRANCH_CODE: this.selectedBranch
    }
    this.http.post(this.url + '/issue-new-share/reject', object).subscribe(data => {
      Swal.fire(
        'success', "Data Rejected Successfully!!", 'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  unapprove() {
    const formVal = this.ngForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let toDate = moment(formVal.RDATE, 'DD/MM/YYYY')
    let resodate = moment(toDate).format('DD/MM/YYYY')
    var object =
    {
      id: this.updateID,
      user: result.id,
      BRANCH_CODE: this.selectedBranch,
      LOG_DATE: this.logDate
    }
    this.http.post(this.url + '/issue-new-share/unapprove', object).subscribe(data => {
      Swal.fire(
        'success', "Data Unapproved Successfully!!", 'success'
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
