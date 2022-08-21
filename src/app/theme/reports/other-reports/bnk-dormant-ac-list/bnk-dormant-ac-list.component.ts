import {Component,OnInit}from "@angular/core";

// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { SchemeTypeDropdownService } from "src/app/shared/dropdownService/scheme-type-dropdown.service";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import { IOption } from "ng-select";


@Component({
  selector: 'app-bnk-dormant-ac-list',
  templateUrl: './bnk-dormant-ac-list.component.html',
  styleUrls: ['./bnk-dormant-ac-list.component.scss']
})
export class BnkDormantAcListComponent implements OnInit {
   // Date variables
   endingdate: any = null;
   startingdate: any = null
   maxDate: Date;
   minDate: Date;
   bsValue = new Date();
   formSubmitted = false;
   //Dropdown option variable
   branchOption: any;
   ngbranch: any = null;
   ngscheme: any = null;
   ngacno: any = null;
   ACNo: any;
   defaultDate: any
   //title select variables
   schemetype:any[];

   // Created Form Group
   angForm: FormGroup;
  
   constructor(
     private fb: FormBuilder,
     public router: Router,
  
     // for dropdown
 
     public SchemeTypes: SchemeTypeDropdownService,
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
   // Scheme Code
   this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    var filtered = data.filter(function (scheme) {
      return (scheme.name == 'IV' || scheme.name == 'GL' || scheme.name == 'AG' );
    });
    this.schemetype = filtered;
   
  })
  //branch List
     this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
       this.branchOption = data;
     })
 
   }
   createForm() {
     this.angForm = this.fb.group({
       START_DATE: ["", [ Validators.required]],
       END_DATE: ["", [Validators.required]],
       BRANCH_CODE: ["", [Validators.required]],
       SchemeType: ["", [Validators.required]],
     });
   }
 
 
  
  
  
  
 
 
  
 
 
 }
 
 