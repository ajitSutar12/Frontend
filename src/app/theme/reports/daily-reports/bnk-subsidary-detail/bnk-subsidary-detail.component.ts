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
  selector: 'app-bnk-subsidary-detail',
  templateUrl: './bnk-subsidary-detail.component.html',
  styleUrls: ['./bnk-subsidary-detail.component.scss']
})
export class BnkSubsidaryDetailComponent implements OnInit {
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
 schemeList:any[];
 branchOption: any[];
 // Created Form Group
 angForm: FormGroup;
 showRepo: boolean = false;
 clicked=false;
 //api
 url = environment.base_url;
 report_url = environment.report_url;
 iframe1url: any = ' ';
  scheme_code: any;

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

    // this.systemParameter.getFormData(1).subscribe(data => {
    //   let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
    //   // this.fromdate = `01/04/${year - 1}`      
    //   this.todate = data.CURRENT_DATE
      
    //   this.fromdate = moment(`01/04/${year - 1}`, 'DD/MM/YYYY')
    //   this.fromdate = this.fromdate._d
    // })


   this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
     
     var filtered = data.filter(function (scheme) {
       return (scheme.name == 'TD' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA'  || scheme.name == 'LK' || scheme.name == 'AG'  || scheme.name == 'IV'  || scheme.name == 'GS' || scheme.name == 'SB'  );
     });
     this.schemeList = filtered;
     this.ngIntroducer = null;
   })
   
 }
 createForm() {
   this.angForm = this.fb.group({
    // radio: new FormControl('none'),
    Branch:["", [ Validators.required]],
     scheme_code: ["", [ Validators.required]],
     DATE: [""],
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


// getSystemParaDate() {
//   this.systemParameter.getFormData(1).subscribe(data => {
//     this.angForm.patchValue({
//       'DATE': data.CURRENT_DATE,
//     })
//   })
// }
 
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

   let scheme_code = this.ngIntroducer;
   let branch = obj.Branch;
  //  let scheme_code =  obj.Scheme_Code;
  let Rdio = obj.radio
  
  this.iframe1url=this.report_url+"examples/SubsidaryReport.php?startDate='"+startDate+"'&Rdio='"+Rdio+"'&scheme_code='" + scheme_code + "&bankName=" +bankName + " &branch="+ branch +"" ;
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
  this.angForm.controls.scheme_code.reset();
  this.showRepo = false;
  this.clicked=false;
}

}



 


 

    

    



 


 



