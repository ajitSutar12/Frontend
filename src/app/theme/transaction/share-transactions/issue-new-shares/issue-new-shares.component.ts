import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-issue-new-shares',
  templateUrl: './issue-new-shares.component.html',
  styleUrls: ['./issue-new-shares.component.scss']
})
export class IssueNewSharesComponent implements OnInit {
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('triggerhide1') triggerhide1: ElementRef<HTMLElement>;
  // @ViewChild('triggerhide1') triggerhide1: ElementRef<HTMLElement>;

  //for Formgroup
  ngForm: FormGroup

  //for date
  maxDate: any;
  minDate: Date;
  bsValue = new Date();

  jointShowButton: boolean = true
  jointUpdateShow: boolean = false

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
  multigrid1: any = [];
  PERTICULARS: any;

  url = environment.base_url;
  Tparticulars




  constructor(private fb: FormBuilder,
    private _service: VoucherEntryService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private http: HttpClient,
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.Issue_date = data.CURRENT_DATE;
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
  }

  ngOnInit(): void {
    this.createForm()
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.selectedBranch = result.branch.id
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.selectedBranch = result.branch.id
    }
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
    this.obj = [this.selectedBranch, this.schemeCode]

    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })


  }
  //get account no according scheme for transfer

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

  //transfer and cash radio button effect
  isFormA(value) {
    if (value == 1) {
      this.isTransfer = false
    }
    if (value == 2) {
      this.isTransfer = true
    }
  }



  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      MEMBER_NO: ['', [Validators.required]],
      TRAN_NO: ['', []],
      MEMBERSHIP_DATE: ['', [Validators.required]],
      T_SHARES_AMOUNT: ['', []],
      T_NO_OF_SHARES: ['', []],
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
      T_TYPE: ['cash'],
      Tscheme: ['',],
      TschemeAC: ['',],
      amount: ['', [Validators.pattern]],
      DEBIT_CREDIT: ['',],
      T_DEBIT: ['',],
      T_CREDIT: ['',],
      particular: [''],

    });

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
        T_NO_OF_SHARES: obj['numberOfShares'],
        T_SHARES_AMOUNT: obj['shareBal'],
        FACE_VALUE: obj['SHARES_FACE_VALUE']
      })
    })
  }

  addTransferAccount() {

    const formVal = this.ngForm.value;
    var object =
    {
      Tscheme: formVal.Tscheme,
      TschemeAC: formVal.TschemeAC,
      amount: formVal.amount,
      DEBIT_CREDIT: formVal.DEBIT_CREDIT,
      TRANSFER_ACNO: formVal.TRANSFER_ACNO,
      T_TYPE: formVal.T_TYPE,
      PERTICULARS: formVal.PERTICULARS,
      T_SHARES_AMOUNT: formVal.T_SHARES_AMOUNT,

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

    // else if (formVal.PERTICULARS == "" || formVal.PERTICULARS == null) {
    //   Swal.fire(
    //     "Warning!",
    //     "Please Insert PERTICULARS!",
    //     "info"
    //   );
    // }
    else {

      if (formVal.DEBIT_CREDIT == 'CREDIT') {
        this.totalCredit = this.totalCredit + Number(formVal.amount)
      } else {
        this.totalDebit = this.totalDebit + Number(formVal.this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount));
      }

      this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)

      this.multigrid.push(object);
      this.resetForm();
    }
  }

  editTransferAccount(indexOfelement) {

    this.intIndex = indexOfelement;
    // this.intID = this.multiField[id].SR_NO;
    this.jointShowButton = false;
    this.jointUpdateShow = true;
    this.ngForm.patchValue({




      // SR_NO: this.multiField[id].SR_NO,
      Tscheme: this.multigrid[indexOfelement].Tscheme,
      TschemeAC: this.multigrid[indexOfelement].TschemeAC,
      amount: this.multigrid[indexOfelement].amount,
      DEBIT_CREDIT: this.multigrid[indexOfelement].DEBIT_CREDIT,
      TRANSFER_ACNO: this.multigrid[indexOfelement].TRANSFER_ACNO,
      T_TYPE: this.multigrid[indexOfelement].T_TYPE,
      particulars: this.multigrid[indexOfelement].particulars,
      T_SHARES_AMOUNT: this.multigrid[indexOfelement].T_SHARES_AMOUNT,




    })
  }

  updateTransferAcccount() {
    let index = this.intIndex;

    const formVal = this.ngForm.value;
    var object = {

      Tscheme: formVal.Tscheme,
      TschemeAC: formVal.TschemeAC,
      amount: formVal.amount,
      DEBIT_CREDIT: formVal.DEBIT_CREDIT,
      TRANSFER_ACNO: formVal.TRANSFER_ACNO,
      T_TYPE: formVal.T_TYPE,
      PERTICULARS: formVal.PERTICULARS,


    }
    this.multigrid[index] = object;
    this.jointShowButton = true;
    this.jointUpdateShow = false;
    this.resetForm();

  }
  resetForm() {

    // this.ngForm.controls['branchOption'].reset()
    // this.ngForm.controls['AC_TYPE'].reset()
    // this.ngForm.controls['MEMBER_NO'].reset()
    // this.ngForm.controls['TRAN_NO'].reset()
    // this.ngForm.controls['MEMBERSHIP_DATE'].reset()
    // this.ngForm.controls['T_SHARES_AMOUNT'].reset()
    // this.ngForm.controls['T_NO_OF_SHARES'].reset()
    // this.ngForm.controls['ISSUE_DATE'].reset()
    // this.ngForm.controls['CERTIFICATE_NO'].reset()
    // this.ngForm.controls['FROM'].reset()
    // this.ngForm.controls['TO'].reset()
    // this.ngForm.controls['NO_OF_SHARES'].reset()
    // this.ngForm.controls['FACE_VALUE'].reset()
    // this.ngForm.controls['RESOLUTION_DATE'].reset()
    // this.ngForm.controls['particular'].reset()
    // this.ngForm.controls['SHARES_AMOUNT'].reset()
    // this.ngForm.controls['RES_NO'].reset()
    // this.ngForm.controls['T_TYPE'].reset()
    this.ngForm.controls['PERTICULARS'].reset()
    this.ngForm.controls['Tscheme'].reset()
    this.ngForm.controls['TschemeAC'].reset()
    this.ngForm.controls['amount'].reset()
    this.ngForm.controls['DEBIT_CREDIT'].reset()
    this.ngForm.controls['FREE_PAID'].reset()
    this.ngForm.controls['T_DEBIT'].reset()
    this.ngForm.controls['T_CREDIT'].reset()

  }

  submit() {

    if (this.ngForm.valid) {

      const formVal = this.ngForm.value;
      var object =
      {
        BRANCH_CODE: formVal.BRANCH_CODE,
        AC_TYPE: formVal.AC_TYPE,
        MEMBER_NO: formVal.MEMBER_NO,
        TRAN_NO: formVal.TRAN_NO,
        MEMBERSHIP_DATE: formVal.MEMBERSHIP_DATE,
        T_SHARES_AMOUNT: formVal.T_SHARES_AMOUNT,
        T_NO_OF_SHARES: formVal.T_NO_OF_SHARES,
        ISSUE_DATE: formVal.ISSUE_DATE,
        CERTIFICATE_NO: formVal.CERTIFICATE_NO,
        FROM: formVal.FROM,
        TO: formVal.TO,
        NO_OF_SHARES: formVal.NO_OF_SHARES,
        FACE_VALUE: formVal.FACE_VALUE,
        RESOLUTION_DATE: formVal.RESOLUTION_DATE,
        SHARES_AMOUNT: formVal.SHARES_AMOUNT,
        RES_NO: formVal.RES_NO,
        particulars: formVal.particulars,
        // Tscheme: formVal.Tscheme,
        // TschemeAC: formVal.TschemeAC,
        // T_TYPE: formVal.T_TYPE,
        // DEBIT_CREDIT: formVal.DEBIT_CREDIT,
        // PERTICULARS: formVal.PERTICULARS,
        // amount: formVal.amount,


      }

      this.multigrid1.push(object);
      console.log(object);

      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      );
    }

    else {
      Swal.fire('Warning!', 'Please fill All Mandatory Fields!', 'warning')
    }

  }

  decimalAllContent($event) {
    // let value = Number($event.target.value);
    //   let data = value.toFixed(2);
    //   $event.target.value = data;
    var t = $event.target.value;
    $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }

  // getNarration(ele) {
  //   this.particulars = ele;
  //   let el: HTMLElement = this.triggerhide.nativeElement;
  //   el.click();
  // }

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
}
