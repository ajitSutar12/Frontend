// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-lcd-turnover-list',
//   templateUrl: './lcd-turnover-list.component.html',
//   styleUrls: ['./lcd-turnover-list.component.scss']
// })
// export class LcdTurnoverListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


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


@Component({
    selector: 'app-lcd-turnover-list',
    templateUrl: './lcd-turnover-list.component.html',
    styleUrls: ['./lcd-turnover-list.component.scss']
  })
  export class LcdTurnoverListComponent implements OnInit {

  iframe5url:any='';
  @ViewChild(ReportFrameComponent ) child: ReportFrameComponent ; 
formSubmitted = false;

//fromgroup
ngForm:FormGroup
 // for dropdown ng module
 fromdate: any = null
 ngbranch: any = null; 
 scode: any = null;
 //ngfor
 scheme: any[];
branchOption: any[];
clicked:boolean=false;
showRepo: boolean = false;
showLoading:boolean = false;
transferSchemeDetails: any;
tScheme
isTdsForm: boolean = false;

 //date
dates: any = null
bsValue = new Date();

maxDate: Date;
  minDate: Date;
  report_url = environment.report_url;

  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter:SystemMasterParametersService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer,
   
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
    return (scheme.name == 'AG'|| scheme.name == 'SB' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA'  || scheme.name == 'LK' || scheme.name == 'AG'  || scheme.name == 'IV'  || scheme.name == 'GS'  );
  });
  this.scheme = filtered;
 
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
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
  }

  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name
  
  }
 
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ["",[ Validators.required]],
      date: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      TDSDOCUMNET:['']
    });
   
  }
  
  view(event) {
   

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if(this.ngForm.valid){

   this.showRepo = true;
    let obj = this.ngForm.value

 let Date = moment(obj.date).format('DD/MM/YYYY');
 let toDate = moment(Date, 'DD/MM/YYYY')
  let scheme = obj.Scheme_code

    let branch = obj.BRANCH_CODE;

    let schemeName = this.tScheme

    //  let startingcode= obj.Starting_Account;
    // let endingcode =obj.Ending_Account;
    
//  this.iframe5url=this.report_url+ "examples/GuaranterList.php?&NAME= "+ bankName +" &AC_TYPE= "+ scheme +" &AC_ACNOTYPE=  '"+ schemeName +"' &BRANCH_CODE= "+branch+" &PRINT_DATE='" + obj.date + "' ";  

  console.log(this.iframe5url); 
   this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url); 
  }
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
  }
  }
  close(){
    this.resetForm()

  }

isReceivedTds($event) {

if ($event.target.checked) {
  this.isTdsForm = true;
  
} else {
  this.isTdsForm = false;
  
}
}


  onLoad(){
    this.showLoading = false;

  }
  resetForm() {
  this.ngForm.controls.Scheme_code.reset();

    this.showRepo = false;
    this.clicked=false;
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
}


