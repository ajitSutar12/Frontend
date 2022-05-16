import {AfterViewInit,Component,OnDestroy,OnInit,ViewChild,Input,Output,EventEmitter,ElementRef,}from "@angular/core";
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
import { DomSanitizer} from '@angular/platform-browser';
import { first } from "rxjs/operators";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { SchemeTypeDropdownService } from "src/app/shared/dropdownService/scheme-type-dropdown.service";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import { SchemeAccountNoService } from "src/app/shared/dropdownService/schemeAccountNo.service";
import { IOption } from "ng-select";


@Component({
  selector: 'app-bnk-dormant-ac-list',
  templateUrl: './bnk-dormant-ac-list.component.html',
  styleUrls: ['./bnk-dormant-ac-list.component.scss']
})
export class BnkDormantAcListComponent implements OnInit {
   // Date variables
   todate: any = null;
   fromdate: any = null
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
   schemetype: Array<IOption> = this.SchemeTypes.get_IVGLAG_Characters();
 
   selectedOption = "3";
   isDisabled = true;
   characters: Array<IOption>;
   selectedCharacter = "3";
   timeLeft = 5;
 
   private dataSub: Subscription = null;
   //Scheme type variable
   schemeList
   showRepo: boolean = false;
   // Created Form Group
   angForm: FormGroup;
   //api
   url = environment.base_url;
   constructor(
     private fb: FormBuilder,
     private http: HttpClient,
     public router: Router,
     private sanitizer: DomSanitizer,
     // for dropdown
     private systemParameter: SystemMasterParametersService,
     public SchemeTypes: SchemeTypeDropdownService,
     private _ownbranchmasterservice: OwnbranchMasterService,
     public schemeCodeDropdownService: SchemeCodeDropdownService,
     private schemeAccountNoService: SchemeAccountNoService,
   ) {
     this.maxDate = new Date();
     this.minDate = new Date();
     this.minDate.setDate(this.minDate.getDate() - 1);
     this.maxDate.setDate(this.maxDate.getDate())
   }
 
   ngOnInit(): void {
     this.createForm();
     this.getSystemParaDate();
 
     this.dataSub = this.SchemeTypes.load_IVGLAG_Characters().subscribe((options) => {
       this.characters = options;
     });
     this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
       var filtered = data.filter(function (scheme) {
         return (scheme.name == 'TD' || scheme.name == 'PG');
       });
       this.schemeList = filtered;
 
     })
 
     let data: any = localStorage.getItem('user');
     let result = JSON.parse(data);
     if (result.RoleDefine[0].Role.id == 1) {
       this.angForm.controls['BRANCH_CODE'].enable()
       this.ngbranch = result.branch.id
     }
     else {
       this.angForm.controls['BRANCH_CODE'].disable()
       this.ngbranch = result.branch.id
     }
     //branch List
     this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
       this.branchOption = data;
     })
 
   }
   createForm() {
     this.angForm = this.fb.group({
       START_DATE: ["", [Validators.pattern, Validators.required]],
       END_DATE: ["", [Validators.pattern, Validators.required]],
       BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
       S_ACNOTYPE: ["", [Validators.pattern, Validators.required]],
     });
   }
 
 
   src: any;
   submit(event) {
     debugger
 
     event.preventDefault();
     this.formSubmitted = true;
     if (this.angForm.valid) {
 
      //  this.showRepo = true;
       let obj = this.angForm.value
       let startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
       let enddate = moment(obj.END_DATE).format('DD/MM/YYYY');
       let scheme = obj.S_ACNOTYPE;
       let branch = obj.BRANCH_CODE;
 
       const url = "http://localhost/NewReport/report-code/Report/examples/DormantAccountList.php?startDate='"+startdate+"' &enddate='"+enddate+"' &scheme='"+scheme+"' &branch='"+branch+"' &";
       console.log(url);
      //  this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      window.open(url, '_blank');
     }
     else {
       Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
     }
 
 
 
     //To clear form
     // this.resetForm();
     this.formSubmitted = false;
     // }
   }
   //set open date, appointed date and expiry date
   getSystemParaDate() {
     this.systemParameter.getFormData(1).subscribe(data => {
       this.defaultDate = data.CURRENT_DATE
     })
   }
   getBranch() {
     this.getIntroducer()
   }
   obj1: any
   getschemename: any
   getIntro(event) {
     this.getschemename = event.name
     this.getIntroducer()
   }
   //get account no according scheme for introducer
   getIntroducer() {
     this.obj1 = [this.ngscheme, this.ngbranch]
     switch (this.getschemename) {
       case 'TD':
         this.schemeAccountNoService.getTermDepositSchemeList1(this.obj1).pipe(first()).subscribe(data => {
           this.ACNo = data;
           console.log()
         })
         break;
       case 'PG':
         this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj1).pipe(first()).subscribe(data => {
           this.ACNo = data;
         })
         break;
     }
   }
 
 
   close() {
     this.resetForm()
   }
 
   // Reset Function
   resetForm() {
     this.createForm();
     this.showRepo = false;
   }
 }
 
 