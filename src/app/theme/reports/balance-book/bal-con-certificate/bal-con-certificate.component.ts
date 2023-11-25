import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators,FormControl} from "@angular/forms";
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import * as moment from 'moment';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { DomSanitizer} from '@angular/platform-browser';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { DeadstockmasterService } from 'src/app/theme/master/customer/dead-stock-master/dead-stock-master.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
@Component({
  selector: 'app-bal-con-certificate',
  templateUrl: './bal-con-certificate.component.html',
  styleUrls: ['./bal-con-certificate.component.scss'],
  providers:[OwnbranchMasterService,SchemeTypeDropdownService,SchemeAccountNoService,SchemeCodeDropdownService, DeadstockmasterService]
})
export class BalConCertificateComponent implements OnInit {
  // Created Form Group
  angForm:FormGroup

 //for date
 maxDate: Date;
 minDate: Date;
 obj: any;
 //iframe
 formSubmitted = false;
 showRepo: boolean = false;
 clicked:boolean=false;
 iframeurl: any = ' ';
 report_url = environment.report_url;
   // for dropdown ng model
   ngbranch:any = null;
   scode:any = null;
   EndingAccount:any = null;
   startingAccount:any = null;
   //for dropdown
   branchOption:any[];
   scheme:any[];
   endingacc:any[];
   startingacc:any[];
   defaultDate:any

  constructor(private fb: FormBuilder,
    private config: NgSelectConfig,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter:SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    public schemeTypeDropdown: SchemeTypeDropdownService,
    private _schemeService: SchemeAccountNoService,
    private deadstockmasterService: DeadstockmasterService,

    ) {
      this.defaultDate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate()) }

  ngOnInit(): void {
    this.createForm()
    //branch List
  this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
    this.branchOption = data;
  });
   // Scheme Code
   this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    var filtered = data.filter(function (scheme) {
      return (scheme.name == 'AG'|| scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA'  || scheme.name == 'LK' || scheme.name == 'AG'  || scheme.name == 'IV'  || scheme.name == 'GS'  );
    });
    this.scheme = filtered;

  })
  //display defalut date
  this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.defaultDate = data.CURRENT_DATE;
  })
  
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
  



  createForm() {
    this.angForm = this.fb.group({
   
     BRANCH_CODE: ['', [Validators.pattern, Validators.required]],
     Scheme_code: ['', [Validators.pattern, Validators.required]],
     FROM_AC_NO: ['', [Validators.pattern, Validators.required]],
     TO_AC_NO: ['', [Validators.pattern, Validators.required]],
     FROM_DATE: ['', [Validators.pattern, Validators.required]],
     PRINT_MAN_NO:[' ']
    });
    let data: any = localStorage.getItem("user");
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id;
      this.angForm.controls["BRANCH_CODE"].enable();
    } else {
      this.angForm.controls["BRANCH_CODE"].disable();
      this.ngbranch = result.branch.id;
    }
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
    let Rdio = obj.radio
    let Rdiosort  = obj.radio_sort
  

         
   this.iframeurl= this.report_url+"examples/BalanceList.php?startDate='"+startDate+"'&Rdio='"+Rdio+"'&scheme='" + scheme + "'&sdate='" + sdate + "'&branch='"+ this.ngbranch +"'&Rstartingacc='" + Rstartingacc +"'&Rendingacc='" + Rendingacc +"'&Rdiosort='" + Rdiosort +"'&checkbox1='" +"&bankName=" + bankName + "";
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
  
  this.showRepo = false;
  this.clicked=false;
}

   
 
 

}
