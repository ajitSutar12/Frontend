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

 report_url = environment.report_url
 
 



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
 iframe1url: any = ' ';

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
   this.maxDate = new Date();
   this.minDate = new Date();
   this.minDate.setDate(this.minDate.getDate() - 1);
   this.maxDate.setDate(this.maxDate.getDate())
 }

 ngOnInit(): void {
   this.createForm();
  //branch List
  this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
    this.branchOption = data;
  })

 
   this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
     var filtered = data.filter(function (scheme) {
       return (scheme.name == 'TD' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA'  || scheme.name == 'LK' || scheme.name == 'AG'  || scheme.name == 'IV'  || scheme.name == 'GS'  );
     });
     this.schemeList = filtered;
     this.ngIntroducer = null;
   })

  
 
   
 }
 createForm() {
   this.angForm = this.fb.group({
    radio: new FormControl('none'),
    Branch:["", [ Validators.required]],
     scheme_code: ["", [ Validators.required]],
     DATE: [""],
   });
 }

 
 src: any;
 view(event) {
   
   
   event.preventDefault();
   this.formSubmitted = true;
   if(this.angForm.valid){
   let obj = this.angForm.value
   this.showRepo = true;
   let startDate = moment(obj.DATE).format('DD/MM/YYYY');
  //  let endDate = moment(obj.END_DATE).format('DD/MM/YYYY');
   
   let scheme = obj.Scheme_code
  
   let branchcode = obj.Branch
   let Rdio = obj.radio
    


        
  this.iframe1url=this.report_url + "/SubsidaryReport.php?startDate='"+startDate+"'&Rdio='"+Rdio+"'&scheme='" + scheme + "'&branchcode='"+ branchcode +"''"  ;
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
  this.createForm();
  this.showRepo = false;
  this.clicked=false;
}

}



 


 

    

    



 


 



