

import { Component, OnInit, ElementRef } from "@angular/core";
import { Subject, Subscription } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ViewChild } from "@angular/core";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient } from "@angular/common/http";

import { Router } from "@angular/router";
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { NgSelectConfig } from "@ng-select/ng-select";

import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";

import { IOption } from "ng-select";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-director-and-directors-relatives-overdue-perform',
  templateUrl: './director-and-directors-relatives-overdue-perform.component.html',
  styleUrls: ['./director-and-directors-relatives-overdue-perform.component.scss']
})
export class DirectorAndDirectorsRelativesOverduePerformComponent implements OnInit {


  // Date variables
  ngbranch: any = null;
  branchName: any;

  todate: any = null;
  fromdate: any = null;

  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  formSubmitted = false;
  ngIntroducer: any = null
  //Dropdown option variable


  private dataSub: Subscription = null;
  //Scheme type variable
  // schemeList:any[];
  branchOption: any[];
  // Created Form Group
  angForm: FormGroup;
  showRepo: boolean = false;
  clicked = false;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = '';
  Scheme_code: any;
  glDetails: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private config: NgSelectConfig,
    // for dropdown
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,

  ) {
    this.fromdate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {

    this.createForm();
    //branch List
    //  debugger
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 1 && result.RoleDefine[0].Role.id == 1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }
    });

    //get date from syspara current_date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.fromdate = data.CURRENT_DATE;
    })

    //  get Ststement values of dropdown 
    // this.http.get('http://192.168.1.113:7276/ledger-view/cschem', {}).subscribe((data) => {
    this.http.get(this.url + '/ledger-view/cschem', {}).subscribe((data) => {

      this.glDetails = data

      console.log(this.glDetails)
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      // radio: new FormControl('none'),
      Branch: ["", [Validators.required]],
      Scheme_code: ["", [Validators.required]],
      DATE: [""],



    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.angForm.controls['Branch'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.angForm.controls['Branch'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }
  }

  showLoading: boolean = false;
  src: any;
  view(event) {
    debugger
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.angForm.valid) {
      let obj = this.angForm.value
      this.showRepo = true;
      //  let startDate = this.fromdate;  

      let startDate: any;
      if (this.fromdate == obj.DATE) {
        startDate = moment(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        startDate = moment(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let Scheme_code = this.ngIntroducer;
      let branched = obj.BRANCH_CODE;

      if (this.ngbranch == 0) {
        this.branchName = 'consolidate';
      }

      // this.iframe5url = this.report_url + "examples/directorAndDirectorsRelatives.php?startDate='" + startDate + "'&branched='" + this.ngbranch + "'&actype='" + this.acType + "'&bankName=" + bankName + "'&branchName=" + this.branchName +  "'&Scheme_code='" + Scheme_code + "'";
      this.iframe5url = this.report_url + "examples/directorAndDirectorsRelatives.php?startDate='" + startDate + "'&branched='" + this.ngbranch + "'&actype='" + this.acType + "'&bankName=" + bankName + "&branchName=" + this.branchName + "&Scheme_code='" + Scheme_code + "'";

      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

    }
    else {
      this.formSubmitted = false;

      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }


  close() {
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    // this.createForm();
    this.angForm.controls.Scheme_code.reset();
    this.angForm.controls.DATE.reset();
    // this.angForm.controls.checked.reset();
    this.showRepo = false;
    this.clicked = false;
  }
  onLoad() {
    this.showLoading = false;

  }
  acType
  getActype(event) {
    this.acType = event.id
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }


}
