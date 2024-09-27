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
  selector: 'app-loan-receivableinst-intrest',
  templateUrl: './loan-receivableinst-intrest.component.html',
  styleUrls: ['./loan-receivableinst-intrest.component.scss']
})
export class LoanReceivableinstIntrestComponent implements OnInit {
  iframe5url:any='';
  @ViewChild(ReportFrameComponent ) child: ReportFrameComponent ; 
formSubmitted = false;

//fromgroup
ngForm:FormGroup
 // for dropdown ng module

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

 //date
dates: any = null
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
    return (scheme.name == 'LN'|| scheme.name == 'CC');
  });
  this.scheme = filtered;
 
  this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.dates = data.CURRENT_DATE;
  });

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
      Show_Ac: [""],

     
    });
   
  }
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
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

    if(this.dates == userData.branch.syspara.CURRENT_DATE)
    {
      obj['date'] =userData.branch.syspara.CURRENT_DATE
    }
    else{
    let date = moment(this.dates).format('DD/MM/YYYY');
    let tDate = moment(date, 'DD/MM/YYYY')
    obj['date']=date 
  }


  let scheme = obj.Scheme_code

    let branch = obj.BRANCH_CODE;

    let schemeName = this.tScheme

    //  let startingcode= obj.Starting_Account;
    // let endingcode =obj.Ending_Account; 
    
 this.iframe5url=this.report_url+ "examples/receivable_installmentandinterest.php?date='"+ obj.date +"'&branchName='"+ branchName +"'&FLAG=1&scheme_name='"+schemeName+"'&branch='"+  this.ngbranch +"'&bankName='"+bankName +"'&scheme='"+scheme +"'";
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


