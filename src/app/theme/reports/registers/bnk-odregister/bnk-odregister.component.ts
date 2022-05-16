import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bnk-odregister',
  templateUrl: './bnk-odregister.component.html',
  styleUrls: ['./bnk-odregister.component.scss']
})
export class BnkODRegisterComponent implements OnInit {
 // Created Form Group
 angForm: FormGroup;
 //  variable for validation
 formSubmitted = false;
 // branch name 
 selectedBranch: number;
 branch_codeList: any = null
 branch_code: any[]//from ownbranchmaster
 branchCode: any = null
 ngBranchCode
 ngscheme
 allScheme: any[];
  // Date variables
  todate: any = null;
  fromdate:any=null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  selectedCode: any;
  showRepo: boolean =false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private _schemeService: SchemeAccountNoService,
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
   }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      OD_TEMP:  new FormControl('TemporaryOverDraft'),
      START_AC_NO: [''],
      // START_AC_NO: ['', [Validators.required]],
      END_AC_NO: [''],
      // END_AC_NO: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
     
    })
  }
  ngOnInit(): void {
    this.createForm()
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }
    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.ngBranchCode = data[0].value
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS' || scheme.name == 'SB' || scheme.name == 'TD')
      });
      this.allScheme = allscheme;
    })
 
    // this.schemeCodeDropdownService.getTermDepositSchemePatD().pipe(first()).subscribe(data => {
    //   this.allScheme.push(data)
    // })
   
 
  }
  src: any;
  View(event){
    event.preventDefault();
    this.formSubmitted = true;
    if (this.angForm.valid) {
     this.showRepo = true;
    let obj = this.angForm.value
    let startDate = moment(obj.START_DATE).format('DD/MM/YYYY');
    let enddate = moment(obj.START_DATE).format('DD/MM/YYYY');
    let BRANCH_CODE = obj.BRANCH_CODE
    let OD_TEMP = obj.OD_TEMP
    let ACOPEN = obj.ACOPEN
    let GROUP_BY = obj.GROUP_BY
    const url = "http://localhost/NewReport/report-code/Report/examples/BnkODRegister.php?startDate='" + startDate + "' &enddate='" + enddate + "'  &BRANCH_CODE='" + BRANCH_CODE + "' &OD_TEMP='" + OD_TEMP + "'";
   //  const url = "http://localhost/NewReport/report-code/Report/examples/InsuranceRegister.php?startDate='" + startDate + "'&enddate='" + enddate + "'&BRANCH_CODE='" + BRANCH_CODE + "'&AC_TYPE='" + AC_TYPE + "'&ACOPEN='" + ACOPEN + "'&GROUP_BY='" + GROUP_BY + "'";
    console.log(url);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    // let ageCaldate
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }
 
  acno: any = null
  obj: any 
  account: any[]
  ngacno: any

  //get account no according scheme for introducer
  getIntroducer() {
    // let data1: any = localStorage.getItem('user');
    // let result = JSON.parse(data1);
    // let branchCode = result.branch.id;
    let scheme = this.ngscheme
    this.obj = [scheme, this.ngBranchCode]
    this.ngacno = null
    switch (this.selectedCode) {
      case 'SB':
        this._schemeService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.account = data;
          console.log(this.account)

        })
        break;

      case 'SH':
        this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'CA':
        this._schemeService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'LN':
        this._schemeService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'TD':
        this._schemeService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'DS':
        this._schemeService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'CC':
        this._schemeService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'GS':
        this._schemeService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'PG':
        this._schemeService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'AG':
        this._schemeService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'IV':
        this._schemeService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;
    }
  }

  //get introducer name according account no

  getAC_NO(value: any) {
    this.angForm.patchValue({
      'AC_NO': value.AC_NO
    })
  }

  getData() {
    // this.ngscheme = null
    this.ngacno = null
    // this.selectedCode = null
    this.getIntroducer()
  }
 }