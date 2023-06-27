import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, } from "@angular/core";
import { Subject, Subscription } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient, HttpParams } from "@angular/common/http";

import { Router } from "@angular/router";
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { DomSanitizer } from '@angular/platform-browser';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import { SchemeAccountNoService } from "src/app/shared/dropdownService/schemeAccountNo.service";
import { first } from "rxjs/operators";
import { SchemeTypeDropdownService } from "src/app/shared/dropdownService/scheme-type-dropdown.service";
import { IOption } from "ng-select";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { ReportFrameComponent } from "../../report-frame/report-frame.component";
import { NgSelectComponent } from "@ng-select/ng-select";
import { DirectorMasterDropdownService } from "src/app/shared/dropdownService/director-master-dropdown.service";


@Component({
  selector: 'app-lcd-overdraft-report',
  templateUrl: './lcd-overdraft-report.component.html',
  styleUrls: ['./lcd-overdraft-report.component.scss']
})
export class LcdOverdraftReportComponent implements OnInit {

  iframe5url: any = '';
  @ViewChild(ReportFrameComponent) child: ReportFrameComponent;
  formSubmitted = false;

  //fromgroup
  ngForm: FormGroup
  // for dropdown ng module
  fromdate: any = null
  ngbranch: any = null;
  scode: any = null;
  //ngfor
  scheme: any[];
  branchOption: any[];
  clicked: boolean = false;
  showRepo: boolean = false;
  showLoading: boolean = false;
  transferSchemeDetails: any;
  tScheme
  isTdsForm: boolean = false;
  ngdirectorFrom
  ngdirectorTo
  director: any[]



  //date
  dates: any = null
  bsValue = new Date();

  maxDate: Date;
  minDate: Date;
  report_url = environment.report_url;
  branchName: any;

  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer,    private directorMasterDropdown: DirectorMasterDropdownService,


  ) {
    this.dates = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()
    //branchlist
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })

    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN'|| scheme.name == 'CC');
      });
      this.scheme = filtered;
  //director
  this.directorMasterDropdown.getDirectorMastertrueList().pipe(first()).subscribe(data => {
    this.director = data;
  })
      // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      //   this.dates = data.CURRENT_DATE;
      // });

    })
    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      this.dates = data.CURRENT_DATE

      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
      this.fromdate = this.fromdate._d
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

  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name

  }

  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ["", [Validators.required]],
      date: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      F_DIRECTOR: [''],
      T_DIRECTOR: [''],
      TDSDOCUMNET: ['']
    });

  }

  view(event) {


    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value

      let scheme = obj.Scheme_code

      let branch = obj.BRANCH_CODE;

      let schemeName = this.tScheme


      // let Date = moment(obj.date).format('DD/MM/YYYY');
      // let toDate = moment(Date, 'DD/MM/YYYY')
      //for start date
      if (this.fromdate == userData.branch.syspara.CURRENT_DATE) {
        obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.fromdate).format('DD/MM/YYYY');
        let toDate = moment(date, 'DD/MM/YYYY')
        obj['START_DATE'] = date
      }

      //for end date
      if (this.dates == userData.branch.syspara.CURRENT_DATE) {
        obj['END_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.dates).format('DD/MM/YYYY');
        let tDate = moment(date, 'DD/MM/YYYY')
        obj['END_DATE'] = date
      }

      //  let startingcode= obj.Starting_Account;
      // let endingcode =obj.Ending_Account;

      this.iframe5url = this.report_url + "examples/cash_creadit_overdraft_report.php?&BRANCH='" + this.branchName + "'&BANK_NAME='" + bankName + "'&START_DATE='" + obj.START_DATE + "'&END_DATE='" + obj.END_DATE + "'&BRANCH_CODE='"+ branch +"'&AC_TYPE='" + scheme + "'&AC_ACNOTYPE='" + schemeName + "'";
      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }
  close() {
    this.resetForm() 

  }

  isReceivedTds($event) {

    if ($event.target.checked) {
      this.isTdsForm = true;

    } else {
      this.isTdsForm = false;

    }
  }


  onLoad() {
    this.showLoading = false;

  }
  resetForm() {
    this.ngForm.controls.Scheme_code.reset();

    this.showRepo = false;
    this.clicked = false;
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
}




