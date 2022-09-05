import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bnk-reg-account',
  templateUrl: './bnk-reg-account.component.html',
  styleUrls: ['./bnk-reg-account.component.scss'],
  providers:[OwnbranchMasterService]
})
export class BnkRegAccountComponent implements OnInit {
  // Created Form Group
  angForm: FormGroup;
  //  variable for validation
  formSubmitted = false;

  report_url = environment.report_url;
  clicked:boolean=false;
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
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  iframeurl: any = ' ';
  showRepo: boolean = false;
  

  selectedType
  Types = [
    { id: 1, name: "None" },
    { id: 2, name: "City" },
    { id: 2, name: "Cast" },
    { id: 2, name: "Occupation" },
    { id: 2, name: "Category" },
    { id: 2, name: "Operation" },
    { id: 2, name: "Interest Category" },
  ];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
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
      // ACOPEN: new FormControl('ACOPEN'),
      // ACCLOSE: new FormControl('ACCLOSE'),
      ACOPEN: [],
      ACCLOSE: [],

      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      GROUP_BY: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {
    this.createForm()
    // let data: any = localStorage.getItem('user');
    // let result = JSON.parse(data);
    // if (result.RoleDefine[0].Role.id == 1) {
    //   this.angForm.controls['BRANCH_CODE'].enable()
    //   this.ngBranchCode = result.branch.id
    // }
    // else {
    //   this.angForm.controls['BRANCH_CODE'].disable()
    //   this.ngBranchCode = result.branch.id
    // }
    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.ngBranchCode = data[0].value
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'AG' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL')
      });
      this.allScheme = allscheme;
    })

    // this.schemeCodeDropdownService.getTermDepositSchemePatD().pipe(first()).subscribe(data => {
    //   this.allScheme.push(data)
    // })


  }
  View(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if (this.angForm.valid) {

      this.showRepo = true;
      let obj = this.angForm.value
      let stdate = moment(obj.START_DATE).format('DD/MM/YYYY');
      let etdate = moment(obj.END_DATE).format('DD/MM/YYYY');
      let AC_TYPE = obj.AC_TYPE;
      let BRANCH_CODE = obj.BRANCH_CODE;
      let ACOPEN = obj.ACOPEN;
      let ACCLOSE = obj.ACCLOSE;
      let GROUP_BY = obj.GROUP_BY;
      
      this.iframeurl = this.report_url+"examples/OpenDepositReport.php?stdate='" + stdate+ "'etdate='" +etdate+ "'AC_TYPE='" +AC_TYPE+ "'branchName='" +branchName+  "'ACOPEN='" +ACOPEN+ "'ACCLOSE='" +ACCLOSE+ "'GROUP_BY='" +GROUP_BY+ "'&bankName='" + bankName + "' ";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }

  }

  close() {
    this.resetForm()
  }

  resetForm() {
    this.createForm()
    this.showRepo = false;
    this.clicked=false;
  }
}
