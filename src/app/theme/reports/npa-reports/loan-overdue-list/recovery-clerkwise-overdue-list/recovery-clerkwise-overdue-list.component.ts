import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recovery-clerkwise-overdue-list',
  templateUrl: './recovery-clerkwise-overdue-list.component.html',
  styleUrls: ['./recovery-clerkwise-overdue-list.component.scss']
})
export class RecoveryClerkwiseOverdueListComponent implements OnInit {

  url = environment.base_url;
  bsValue = new Date();
  iframe5url: any = '';
  // @ViewChild(ReportFrameComponent ) child: ReportFrameComponent ; 
  formSubmitted = false;
  //fromgroup
  ngForm: FormGroup
  // for dropdown ng module
  ngbranch: any = null;
  scode: any = null;
  ngCode: any = null;
  //ngfor
  scheme: any[];
  branchOption: any[];
  clicked: boolean = false;
  showRepo: boolean = false;
  showLoading: boolean = false;
  transferSchemeDetails
  tScheme
  //date
  dates: any = null
  maxDate: Date;
  minDate: Date;
  report_url = environment.report_url;
  branchName: any;

  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    // public schemeCodeDropdownService: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {
    this.dates = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {

    this.createForm();
    this.getCodeDropDown();
    //branchlist
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 1 && result.RoleDefine[0].Role.id == 1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }
    })

    // Scheme Code

    this.http.get(this.url + '/ledger-view/cschem').subscribe((data: any[]) => {
      this.scheme = data
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }
  }
  // getTransferAccountList(event) {
  //   this.transferSchemeDetails = event
  //   this.tScheme = event.name

  // }

  codeDetails: any[]

  getCodeDropDown() {
    // this.http.get(this.url + '/recovery-cleark-master').subscribe((data: any[]) => {
    this.http.get(this.url + '/recovery-cleark-master').subscribe((data: any[]) => {
      this.codeDetails = data
      console.log(data)

    });
  }

  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['',Validators.required],
      Scheme_code: [''],
      START_CODE: [''],
      END_CODE: [''],
      date: ['',Validators.required],
    });

  }

  checkCode(event) {
    let formValue = this.ngForm.value
    if (formValue.START_CODE > formValue.END_CODE) {
      Swal.fire('Invalid Selection', 'Ending Code must be greater than Starting Code.', 'error');
    }
  }

  inputDate
  dateGet(event) {
    this.inputDate = event.value
  }

  view(event) {
    this.inputDate
    this.showLoading = true;

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.ngForm.valid) {

      let obj = this.ngForm.value

      let Date: any;
      if (this.dates == obj.date) {
        Date = moment(this.dates, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        Date = moment(this.dates, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      this.showRepo = true;
     

      // let Date = moment(obj.date).format('DD/MM/YYYY');

      let scheme = obj.Scheme_code

      let branch = obj.BRANCH_CODE;
      let schemeName = this.tScheme

      if (this.ngbranch == 0) {
        this.branchName = 'Consolidate'
      }

      this.iframe5url = this.report_url + "examples/clerkWiseRecoveryList.php?&BRANCH_CODE=" + this.ngbranch + "&BANK_NAME=" + bankName + "  &branch_name=" + this.branchName + "&ac_type='" + this.acType + "'&startCode='" + this.startCode + "'&date='" + Date + "'&endCode='" + this.endCode + "'"
      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  close() {
    // this.createForm()
    this.resetForm();

  }
  onLoad() {
    this.showLoading = false;

  }
  resetForm() {
    // this.ngForm.controls.BRANCH_CODE.reset();
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.date.reset();
    this.ngForm.controls.START_CODE.reset();
    this.ngForm.controls.END_CODE.reset();

    this.showRepo = false;
    this.clicked = false;
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }

  acType
  getActype(event) {
    this.acType = event.id
  }

  startCode
  getStartCode(event) {
    this.startCode = event.CODE
  }

  endCode
  getEndCode(event) {
    this.endCode = event.CODE
  }

}
