import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { glMasterService } from '../../../../shared/elements/gl-master.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
@Component({
  selector: 'app-shares-transfer',
  templateUrl: './shares-transfer.component.html',
  styleUrls: ['./shares-transfer.component.scss']
})
export class SharesTransferComponent implements OnInit {
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('narrationhide') narrationhide: ElementRef<HTMLElement>;
  //for fromgroup
  angForm: FormGroup
  url = environment.base_url;
  selectedBranch
  branchOption: any;
  scheme
  schemeCode
  schemeCode1
  schemeType: string = 'SH'
  multigrid1 = []

  maxDate: any;
  resolutionDate: any;
  minDate: Date;
  introducerACNo
  obj: any;
  ngIntroducer: any = null
  ngIntroducers: any = null
  code: any = null
  acno: any = null
  particulars: any;
  narrationList: any;
  particularss: any;
  ngFnarration: any = 'Share Transfer'
  //title select variables
  simpleOption: Array<IOption> = this.glMasterService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  transferACNo
  private dataSub: Subscription = null;

  autocompleteItems = ['a', 'b', 'c', 'd'];
  autocompleteItemsAsObjects = [
    { value: 'a', id: 0 },
    { value: 'b', id: 1 },
    { value: 'c', id: 2 },
    { value: 'd', id: 3 },
  ];

  dtExportButtonOptions: any = {};
  constructor(private http: HttpClient, public glMasterService: glMasterService, private fb: FormBuilder, private schemeAccountNoService: SchemeAccountNoService, private _ownbranchmasterservice: OwnbranchMasterService, private schemeCodeDropdownService: SchemeCodeDropdownService, private systemParameter: SystemMasterParametersService,) { }
  showButton: boolean = true;
  updateShow: boolean = false;

  ngOnInit(): void {
    this.createForm();

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
    let user: any = localStorage.getItem('user');
    let result = JSON.parse(user);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['branch_code'].enable()
      this.selectedBranch = result.branch.id
    }
    else {
      this.angForm.controls['branch_code'].disable()
      this.selectedBranch = result.branch.id
    }

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.schemeCode = data[0].value
      this.schemeCode1 = data[0].value
      this.getIntroducer()
      this.getIntroducers()
    })
    this.http.get(this.url + '/narration').subscribe(data => {
      this.narrationList = data
    });
  }
  getFormNarration(ele) {
    this.ngFnarration = ele;
    let el: HTMLElement = this.narrationhide.nativeElement;
    el.click();
  }
  getBranch() {
    this.getIntroducer()
  }
  getIntroducer() {
    this.obj = [this.schemeCode, this.selectedBranch]
    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })
  }
  getIntroducers() {
    this.obj = [this.schemeCode1, this.selectedBranch]
    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      this.transferACNo = data;
    })
  }
  decimalAllContent($event) {
    var t = $event.target.value;
    $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  Issue_date

  createForm() {
    this.angForm = this.fb.group({
      branch_code: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_TYPE1: ['', [Validators.required]],
      ChequeDate: ['', [Validators.required]],
      MEMBER_CODE: ['', [Validators.required]],
      MEMBER_CODE1: ['', [Validators.required]],
      TDATE: ['', [Validators.required]],
      RDATE: ['', [Validators.required]],
      MDATE: ['', [Validators.required]],
      amt: ['', [Validators.required]],
      ATA: ['', [Validators.required]],
      particulars: ['', [Validators.required]],
      particularss: ['', [Validators.required]],
      RESOLUTIONNO: ['', [Validators.required]],
      Fnarration: ['', [Validators.required]],
      T_NO_OF_SHARES: [],
      T_SHARES_AMOUNT: [],
      TRANS_AMOUNT: [0, [Validators.required]],
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['branch_code'].enable()
      this.selectedBranch = result.branch.id
    }
    else {
      this.angForm.controls['branch_code'].disable()
      this.angForm.patchValue({
        'branch_code': result.branch.id
      })
      this.selectedBranch = result.branch.id
    }
    this.systemParameter.getFormData(1).subscribe(data => {
      this.Issue_date = data.CURRENT_DATE;
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.resolutionDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY').subtract(3, 'month');
      this.resolutionDate = this.resolutionDate._d
    })
  }
  submit() {
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let toDate = moment(formVal.RDATE, 'DD/MM/YYYY')
    let resodate = moment(toDate).format('DD/MM/YYYY')
    var object =
    {
      BRANCH_CODE: formVal.branch_code,
      TRAN_ACTYPE: formVal.AC_TYPE,
      TRAN_DATE: this.Issue_date,
      TRAN_ACNO: this.ngIntroducer,
      TRANSFER_ACTYPE_TO: this.schemeCode1,
      TRANSFER_MEMBER_NO_TO: this.ngIntroducers,
      TRAN_AMOUNT: formVal.TRANS_AMOUNT,
      NARRATION: formVal.Fnarration,
      USER_CODE: result.id,
      RESULATION_DATE: resodate,
      RESULATION_NO: formVal.RESOLUTIONNO,
    }
    if (formVal.branch_code == "" || formVal.branch_code == null) {
      Swal.fire("Warning!", "Please Select Branch Code!", "error");
    }
    else if (formVal.AC_TYPE == "" || formVal.AC_TYPE == null) {
      Swal.fire(
        "Warning!",
        "Please Select Scheme Code!",
        "info"
      );
    }
    else if (formVal.AC_TYPE1 == "" || formVal.AC_TYPE1 == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Member No!",
        "info"
      );
    }
    else if (formVal.MEMBER_CODE == "" || formVal.MEMBER_CODE == null) {
      Swal.fire(
        "Warning!",
        "Please Select  Member No!",
        "info"
      );
    }
    else if (formVal.AC_TYPE1 == "" || formVal.AC_TYPE1 == null) {
      Swal.fire(
        "Warning!", "Please Select Scheme!", "error"
      );
    }
    else if (formVal.RDATE == "" || formVal.RDATE == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Resolution Date!",
        "info"
      );
    }
    else if (formVal.RESOLUTIONNO == "" || formVal.RESOLUTIONNO == null) {
      Swal.fire(
        "Warning!",
        "Please Insert RESOLUTION NO!",
        "info"
      );
    }
    else if (formVal.TRANS_AMOUNT == "" || formVal.TRANS_AMOUNT == null) {
      Swal.fire(
        "Warning!", "Please Enter Actual Transfer Amount!", "error"
      );
    }

    else if (formVal.Fnarration == "" || formVal.Fnarration == null) {
      Swal.fire(
        "Warning!", "Please Enter Reason!", "error"
      );
    }
    else {
      this.http.post(this.url + '/shares-transfer/insert', object).subscribe(data => {
        Swal.fire(
          'success', "Data Submitted Successfully!!", 'success'
        );
      })
    }
  }
  shareBal = 0
  getMemeberDetails(event) {
    this.ngIntroducer = event.bankacno
    let obj = {
      schemeCode: this.schemeCode,
      bankacno: event.bankacno,
      issueDate: this.Issue_date
    }
    this.http.post(this.url + '/shares-transfer/getAccountSharesDetails', obj).subscribe(data => {
      this.shareBal = data['shareBal']
      this.angForm.patchValue({
        MDATE: event.openDate,
        T_NO_OF_SHARES: data['numberOfShares'],
        T_SHARES_AMOUNT: data['shareBal'],
        TRANS_AMOUNT: data['shareBal'],
      })
    })
  }
  checkActualAmt() {
    if (Number(this.angForm.controls['T_SHARES_AMOUNT'].value) < Number(this.angForm.controls['TRANS_AMOUNT'].value)) {
      Swal.fire('OOPS', `Actual transfer amount must be less or equal to ${this.shareBal}`)
      this.angForm.patchValue({
        TRANS_AMOUNT: this.shareBal
      })
    }
  }

  getTrnasferAccountNo(event) {
    this.ngIntroducers = event.bankacno
    if (this.ngIntroducers == this.ngIntroducer) {
      this.ngIntroducers = null
      this.angForm.patchValue({
        MEMBER_CODE1: null
      })
      Swal.fire('OOPS', 'Transfer account cannot be same', 'error')
    }
  }
  updateID
  //function for edit button clicked
  editClickHandler(id): void {
    this.http.get(this.url + '/shares-transfer/' + id).subscribe((data: any) => {
      this.updateID = data.id
      this.Issue_date = data.TRAN_DATE
      this.schemeCode = data.TRAN_ACTYPE
      this.selectedBranch = data.BRANCH_CODE
      this.getIntroducer()
      this.getIntroducers()
      this.angForm.patchValue({
        branch_code: data.BRANCH_CODE,
        AC_TYPE: data.TRAN_ACTYPE,
        TRANS_AMOUNT: data.TRAN_AMOUNT,
        Fnarration: data.NARRATION,
        RESOLUTIONNO: data.RESULATION_NO,
        RDATE: data.RESULATION_DATE
      })
      this.ngIntroducer = data.TRAN_ACNO
      this.schemeCode1 = data.TRANSFER_ACTYPE_TO
      this.ngIntroducers = data.TRANSFER_MEMBER_NO_TO
    })
  }

  updateData() {
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let toDate = moment(formVal.RDATE, 'DD/MM/YYYY')
    let resodate = moment(toDate).format('DD/MM/YYYY')
    var object =
    {
      id: this.updateID,
      BRANCH_CODE: formVal.branch_code,
      TRAN_ACTYPE: formVal.AC_TYPE,
      TRAN_DATE: this.Issue_date,
      TRAN_ACNO: this.ngIntroducer,
      TRANSFER_ACTYPE_TO: this.schemeCode1,
      TRANSFER_MEMBER_NO_TO: this.ngIntroducers,
      TRAN_AMOUNT: formVal.TRANS_AMOUNT,
      NARRATION: formVal.Fnarration,
      USER_CODE: result.id,
      RESULATION_DATE: resodate,
      RESULATION_NO: formVal.RESOLUTIONNO,
    }
    if (formVal.branch_code == "" || formVal.branch_code == null) {
      Swal.fire("Warning!", "Please Select Branch Code!", "error");
    }
    else if (formVal.AC_TYPE == "" || formVal.AC_TYPE == null) {
      Swal.fire(
        "Warning!",
        "Please Select Scheme Code!",
        "info"
      );
    }
    else if (formVal.AC_TYPE1 == "" || formVal.AC_TYPE1 == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Member No!",
        "info"
      );
    }
    else if (formVal.MEMBER_CODE == "" || formVal.MEMBER_CODE == null) {
      Swal.fire(
        "Warning!",
        "Please Select  Member No!",
        "info"
      );
    }
    else if (formVal.AC_TYPE1 == "" || formVal.AC_TYPE1 == null) {
      Swal.fire(
        "Warning!", "Please Select Scheme!", "error"
      );
    }
    else if (formVal.RDATE == "" || formVal.RDATE == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Resolution Date!",
        "info"
      );
    }
    else if (formVal.RESOLUTIONNO == "" || formVal.RESOLUTIONNO == null) {
      Swal.fire(
        "Warning!",
        "Please Insert RESOLUTION NO!",
        "info"
      );
    }
    else if (formVal.TRANS_AMOUNT == "" || formVal.TRANS_AMOUNT == null) {
      Swal.fire(
        "Warning!", "Please Enter Actual Transfer Amount!", "error"
      );
    }

    else if (formVal.Fnarration == "" || formVal.Fnarration == null) {
      Swal.fire(
        "Warning!", "Please Enter Reason!", "error"
      );
    }
    else {
      this.http.post(this.url + '/shares-transfer/update', object).subscribe(data => {
        Swal.fire(
          'success', "Data Updated Successfully!!", 'success'
        );
      })
    }
  }
  approve() {
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let toDate = moment(formVal.RDATE, 'DD/MM/YYYY')
    let resodate = moment(toDate).format('DD/MM/YYYY')
    var object =
    {
      id: this.updateID,
      BRANCH_CODE: formVal.branch_code,
      TRAN_ACTYPE: formVal.AC_TYPE,
      TRAN_DATE: this.Issue_date,
      TRAN_ACNO: this.ngIntroducer,
      TRANSFER_ACTYPE_TO: this.schemeCode1,
      TRANSFER_MEMBER_NO_TO: this.ngIntroducers,
      TRAN_AMOUNT: formVal.TRANS_AMOUNT,
      NARRATION: formVal.Fnarration,
      USER_CODE: result.id,
      RESULATION_DATE: resodate,
      RESULATION_NO: formVal.RESOLUTIONNO,
    }
    this.http.post(this.url + '/shares-transfer/approve', object).subscribe(data => {
      Swal.fire(
        'success', "Data Approved Successfully!!", 'success'
      );
    })
  }
  reject() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    var object =
    {
      id: this.updateID,
      USER_CODE: result.id,
    }
    this.http.post(this.url + '/shares-transfer/reject', object).subscribe(data => {
      Swal.fire(
        'success', "Data Rejected Successfully!!", 'success'
      );
    })
  }
}






