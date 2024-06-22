
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
    selector: 'app-average-monthly-position-debit-credit',
    templateUrl: './average-monthly-position-debit-credit.component.html',
    styleUrls: ['./average-monthly-position-debit-credit.component.scss']
  })
  export class AverageMonthlyPositionDebitCreditComponent implements OnInit {


// Date variables
ngbranch: any = null;
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
clicked=false;
//api
url = environment.base_url;
report_url = environment.report_url;
iframe1url: any = ' ';
Liability_code: any;
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
 })

 //get date from syspara current_date
 this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
   this.fromdate = data.CURRENT_DATE;
 })

  //  get Ststement values of dropdown 
    this.http.post('http://192.168.1.162:3000/gl-statement-code/headname' ,{}).subscribe((data) => {
        this.glDetails = data
    
          console.log(this.glDetails)
        })
  
}
createForm() {
  this.angForm = this.fb.group({
   // radio: new FormControl('none'),
   Branch:["", [ Validators.required]],
   Liability_code: ["", [ Validators.required]],
    DATE: [""],
    Print_Code: new FormControl('Debit'),
    cash_Code: new FormControl('thousand'),


  });

  let data: any = localStorage.getItem('user');
   let result = JSON.parse(data);
   if (result.RoleDefine[0].Role.id == 1) {
     this.ngbranch = result.branch.id
     this.angForm.controls['Branch'].enable()
   }
   else {
     this.angForm.controls['Branch'].disable()
     this.ngbranch = result.branch.id
   }
}


src: any;
view(event) {
  debugger
  event.preventDefault();
  this.formSubmitted = true;

  let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME;
  
  if(this.angForm.valid){
  let obj = this.angForm.value
  this.showRepo = true;
 //  let startDate = this.fromdate;  

  let startDate:any;
  if (this.fromdate == obj.DATE) {
    startDate = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY')
  }else{ 
    startDate = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY')
  };

  let Liability_code = this.ngIntroducer;
  let pcode = obj.Print_Code
    let ccode = obj.cash_Code


  let branch = obj.Branch;
 //  let scheme_code =  obj.Scheme_Code;
 let rdio  = obj.radio
 let radio  = obj.cash_radio

 
 this.iframe1url=this.report_url+"examples/AverageMonthlycrdr.php?startDate='"+startDate+"'&rdio='"+rdio+"'&Liability_code='" + Liability_code +"'&pcode='"+pcode+"'&radio='"+radio+"'&ccode='"+ccode+ "&bankName=" +bankName + " &branch="+ branch +"" ;
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
 this.angForm.controls.Liability_code.reset();
 this.showRepo = false;
 this.clicked=false;
}

}
