import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { first } from "rxjs/operators";
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { HttpClient } from '@angular/common/http';
import { DeadstockmasterService } from 'src/app/theme/master/customer/dead-stock-master/dead-stock-master.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bnk-dptambal-list',
  templateUrl: './bnk-dptambal-list.component.html',
  styleUrls: ['./bnk-dptambal-list.component.scss'],
  providers: [OwnbranchMasterService, DeadstockmasterService]
})
export class BnkDptambalListComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  showRepo: boolean = false;
  clicked:boolean=false;
  iframeurl: any = ' ';
  report_url = environment.report_url;
 // Created Form Group
 angForm: FormGroup;
  // for dropdown ng module
  scode: any = null;
  defaultDate:any
  ngbranch:any = null;
  startingAccount:any = null;
  EndingAccount:any = null;
  //for dropdown
  branchOption:any[];
  scheme: any[];
  obj: any;
  endingacc: any[];
  startingacc: any[];
  formSubmitted = false;

  constructor( private fb: FormBuilder,
    private translate:TranslateService,
     private config: NgSelectConfig,
     private systemParameter:SystemMasterParametersService,
     private _ownbranchmasterservice: OwnbranchMasterService,
     public schemeCodeDropdownService: SchemeCodeDropdownService,
     public schemeTypeDropdown: SchemeTypeDropdownService,
     private _schemeService: SchemeAccountNoService,
     private deadstockmasterService: DeadstockmasterService,

     private sanitizer: DomSanitizer,
     ) {
      this.translate.setDefaultLang(environment.setLang);
      this.defaultDate = moment().format('DD/MM/YYYY');
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
     }

  ngOnInit(): void {
    this.createForm()
    
  //branch List
  this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
    this.branchOption = data;
  });
  //display defalut date
  this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.defaultDate = data.CURRENT_DATE;
  })
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (  scheme.name == 'TD' || scheme.name == 'SB'  || scheme.name == 'IV'  || scheme.name == 'GS' || scheme.name == 'CA'   );
      });
      this.scheme = filtered;
  
    })
    this.deadstockmasterService.getDeadstockList().pipe(first()).subscribe(data => {
      this.startingacc = data;
      this.endingacc = data;
      // console.log(data)
    });
  let data: any = localStorage.getItem('user');
  let result = JSON.parse(data);
  if (result.RoleDefine[0].Role.id == 1) {
    this.ngbranch = result.branch.id
    this.angForm.controls['BRANCH_CODE'].enable()
  }
  else {
    this.angForm.controls['BRANCH_CODE'].disable()
    this.ngbranch = result.branch.id
  }

  }
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
    this.obj = [this.scode, branchCode]
    switch (this.getschemename) {


     case 'SB':
         this._schemeService.getSavingSchemeList1(this.obj).subscribe(data => {
           this.startingacc = data;
         this.startingAccount = null
         this.endingacc = data;
         this.EndingAccount = null


 
         })
         break;
 
       case 'SH':
         this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
           this.startingacc = data;
         this.startingAccount = null
         this.endingacc = data;
         this.EndingAccount = null

 
         })
         break;
 
       case 'CA':
         this._schemeService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
           this.startingacc = data;
         this.startingAccount = null
         this.endingacc = data;
         this.EndingAccount = null

         })
         break;
 
       case 'LN':
         this._schemeService.getTermLoanSchemeList1(this.obj).subscribe(data => {
           this.startingacc = data;
         this.startingAccount = null
         this.endingacc = data;
         this.EndingAccount = null

         })
         break;
 
       case 'TD':
         this._schemeService.getTermDepositSchemeList1(this.obj).subscribe(data => {
           this.startingacc = data;
         this.startingAccount = null
         this.endingacc = data;
         this.EndingAccount = null

         })
         break;
 
       case 'DS':
         this._schemeService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
           this.startingacc = data;
           this.startingAccount = null
           this.endingacc = data;
         this.EndingAccount = null

 
         })
         break;
 
       case 'CC':
         this._schemeService.getCashCreditSchemeList1(this.obj).subscribe(data => {
           this.startingacc = data;
           this.startingAccount = null
           this.endingacc = data;
         this.EndingAccount = null

         })
         break;
 
       case 'GS':
         this._schemeService.getAnamatSchemeList1(this.obj).subscribe(data => {
           this.startingacc = data;
           this.startingAccount = null
           this.endingacc = data;
         this.EndingAccount = null

 
         })
         break;
 
       case 'PG':
         this._schemeService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
           this.startingacc = data;
           this.startingAccount = null
           this.endingacc = data;
           this.EndingAccount = null
  
 
         })
         break;
 
       case 'AG':
         this._schemeService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
           this.startingacc = data;
         this.startingAccount = null
         this.endingacc = data;
         this.EndingAccount = null

 
         })
         break;
 
       case 'IV':
         this._schemeService.getInvestmentSchemeList1(this.obj).subscribe(data => {
           this.startingacc = data;
         this.startingAccount = null
         this.endingacc = data;
         this.EndingAccount = null

 
         })
         break;
    }
  }
  //validation
  createForm() {
    this.angForm = this.fb.group({
     Scheme_code: ["", [Validators.pattern, Validators.required]],
     radio: new FormControl('none'),
     FROM_AC_NO: ['', [Validators.pattern, Validators.required]],
     FROM_DATE: ['', [Validators.pattern, Validators.required]],
     BRANCH_CODE: ['', [Validators.pattern, Validators.required]],
     TO_AC_NO: ['', [Validators.pattern, Validators.required]],
     Print_Closed_Accounts: [''],
    });
  }

  src: any;
  view(event) {
  
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    
    if(this.angForm.valid){
    let obj = this.angForm.value
    this.showRepo = true;
    let startDate = moment(obj.FROM_DATE).format('DD/MM/YYYY');
    var sdate = moment(obj.FROM_DATE).startOf('quarter').format('DD/MM/YYYY');
    let scheme = obj.Scheme_code
    let Rstartingacc = obj.FROM_AC_NO
    let Rendingacc = obj.TO_AC_NO
    let branch = obj.BRANCH_CODE
  

         
   this.iframeurl= this.report_url+"examples/BalanceList.php?startDate='"+startDate+"'&scheme='" + scheme + "'&sdate='" + sdate + "'&branch='"+  this.ngbranch +"'&Rstartingacc='" + Rstartingacc +"'&Rendingacc='" + Rendingacc +"'&Rdiosort='"  +"'&checkbox1='" +"&bankName=" + bankName + "";
   this.iframeurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
   

   
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
  // this.createForm()
  this.angForm.controls.Scheme_code.reset();
  this.angForm.controls.FROM_AC_NO.reset();
  this.angForm.controls.TO_AC_NO.reset();
  this.angForm.controls.radio.reset();
  this.showRepo = false;
  this.clicked=false;
}

   
 
 
 

}
