import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import {  SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import * as moment from 'moment';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pigmy-handbook',
  templateUrl: './pigmy-handbook.component.html',
  styleUrls: ['./pigmy-handbook.component.scss']
})
export class PigmyHandbookComponent implements OnInit {

 // Created Form Group
 ngForm: FormGroup;
 //for date
 maxDate: Date;
 minDate: Date;

 //dropdown
 scheme: any[];
 branchOption: any[];
 startingacc: any[];
//dropdown option with variable
defaultDate: any

 obj: any;
 formSubmitted = false;
  clicked:boolean=false;
  showRepo: boolean = false;

   // for dropdown ng module
   ngbranch: any = null;
   schemeCode: any = null;
   startingAccount: any = null;

   //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = ' ';
  constructor(   
    private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    public SchemeTypes: SchemeTypeDropdownService,
    private translate:TranslateService
    ) {
    this.translate.setDefaultLang(environment.setLang)
    this.defaultDate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate()) }

  ngOnInit(): void {
    this.createForm();
     //branch List
     this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
      // Scheme Code
  this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    var filtered = data.filter(function (scheme) {
      return (scheme.name == 'AG');
    });
    this.scheme = filtered;

  })
//display date
  this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.defaultDate = data.CURRENT_DATE;
  })
  }
   //For Starting account and Ending Account dropdown
   getschemename: any

   getBranch() {
     this.getIntroducer()
   }
   getIntro(event) {
     this.getschemename = event.name
     this.getIntroducer()
   }
 
 
   getIntroducer() {
 
     let data: any = localStorage.getItem('user');
     let result = JSON.parse(data);
     let branchCode = result.branch.id;
     this.obj = [this.schemeCode, branchCode]
     switch (this.getschemename) {
 
 
       case 'AG':
         this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
           this.startingacc = data;
           this.startingAccount = null
 
          
          
         })
         break;
 
     }
   }
  createForm() {
    this.ngForm = this.fb.group({
      FROM_DATE: ["", [Validators.pattern, Validators.required]],
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.pattern, Validators.required]],
      Scheme_acc: ["", [Validators.pattern, Validators.required]],
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
  src: any;
  view(event) {
    
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if(this.ngForm.valid){
    let obj = this.ngForm.value
    this.showRepo = true;
    let startdate=moment(obj.FROM_DATE,'DD/MM/YYYY')
    let enddate=moment(obj.FROM_DATE,'DD/MM/YYYY')

    let sdate =  moment(startdate).startOf('month').format('DD/MM/YYYY');
    let date =  moment(enddate).format('DD/MM/YYYY');

    // let date=obj.FROM_DATE
    
    
    let scheme = obj.Scheme_code
    let schemeAccountNo = obj.Scheme_acc
    let branch = obj.BRANCH_CODE
  
    this.iframe5url=this.report_url+"examples/PigmyHandbook.php?date='" + date + "'&sdate='" + sdate + "'&scheme=" + scheme + "&branch="+ branch +"&schemeAccountNo='" + schemeAccountNo +"'&bankName=" + bankName + "" ;
    this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    
   
  }
  else {
    Swal.fire(`${this.translate.instant('Swal_Msg.Citywise_Npa')}`, `${this.translate.instant('Swal_Msg.Citywise_Npa_Msg')}`, 'warning').then(()=>{ this.clicked=false});
  }
  
}

close(){
  this.resetForm()
}

// Reset Function
resetForm() {
  // this.createForm()
  this.ngForm.controls.Scheme_code.reset();
  this.ngForm.controls.Scheme_acc.reset();
  this.showRepo = false;
  this.clicked=false;
}
}
