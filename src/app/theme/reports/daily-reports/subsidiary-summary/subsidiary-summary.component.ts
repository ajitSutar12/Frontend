import { Component, OnInit,ElementRef} from "@angular/core";
import { Subject, Subscription } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
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
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-subsidiary-summary',
  templateUrl: './subsidiary-summary.component.html',
  styleUrls: ['./subsidiary-summary.component.scss']
})
export class SubsidiarySummaryComponent implements OnInit {

  iframe1url: any = '';
  formSubmitted = false;
  //date
  maxDate: Date;
  minDate: Date;
  date: any = null

  showRepo: boolean = false;

  clicked = false;
  //Form Group 
  ngForm: FormGroup;
  bsValue = new Date();
  //ng model
  ngbranch: any = null
  report_url = environment.report_url;

  //Dropdown option variable

  branchOption: any[];

  constructor(
    private fb: FormBuilder, 
    private sanitizer: DomSanitizer, 
    private systemParameter: SystemMasterParametersService,
    private config: NgSelectConfig,
    public router: Router, 
    private _ownbranchmasterservice: OwnbranchMasterService,
  ) { 
    this.date = moment().format('DD/MM/YYYY');
   this.maxDate = new Date();
   this.minDate = new Date();
   this.minDate.setDate(this.minDate.getDate() - 1);
   this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {

    this.createForm()

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });

    //get date from syspara current_date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.date = data.CURRENT_DATE;
  });

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

  createForm() {
    this.ngForm = this.fb.group({
      Branch: ['', [Validators.required]],
      date: ["", [Validators.required]],
    });
  }

  src: any;

  view(event) {
    debugger
    event.preventDefault();
    this.formSubmitted = true;
 
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    
    if(this.ngForm.valid){
    let obj = this.ngForm.value
    let Date = moment(obj.DATE).format('DD/MM/YYYY');  
    let Branch = obj.BRANCH;
  
   this.iframe1url=this.report_url+"examples/SubsidaryReport.php?Date='"+Date+ "&branchName="+ branchName +"&bankName" +bankName + " &Branch="+ Branch +"" ;
   this.iframe1url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
   
   
  } 
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
  }
  
 }
 
 
 close(){
   this.resetForm()
 }
 
 // Reset Function
 resetForm() {
   // this.createForm();
  //  this.angForm.controls.scheme_code.reset();
   this.showRepo = false;
   this.clicked=false;
 }

}
