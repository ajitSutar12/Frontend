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

@Component({
  selector: 'app-bnk-dptambal-list',
  templateUrl: './bnk-dptambal-list.component.html',
  styleUrls: ['./bnk-dptambal-list.component.scss'],
  providers: [OwnbranchMasterService, DeadstockmasterService]
})
export class BnkDptambalListComponent implements OnInit {
  showRepo: boolean = false;
  iframeurl : any = ' ';
  clicked:boolean=false;
   
  //fromgroup name
  ngForm: FormGroup;
  //dropdown option variable
 ngscheme: any = null;
 
 startingAmount: any = null;
 EndingAmount: any = null;
 ngbranch: any = null;
 branch_code
 branchOption: any[];
 showLoading:boolean = false;
 obj: any;
 schemeCode: any = null;
 startingAccount: any = null;
 startingacc: any[];
 EndingAccount: any = null;
 endingacc: any[];
 
 scode: any = null;
 scheme: any[];
 startingamm: any[];
 endingamm: any[];
 maxDate: Date;
 minDate: Date;
 formSubmitted = false;

 bsValue = new Date();
 defaultDate: any;
 report_url = environment.report_url;
 

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public schemeTypeDropdown: SchemeTypeDropdownService,

    private systemParameter:SystemMasterParametersService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private sanitizer: DomSanitizer,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _schemeService: SchemeAccountNoService,
    private deadstockmasterService: DeadstockmasterService
    
  ) {
    this.defaultDate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
   }


  createForm() {
    //validation
    this.ngForm = this.fb.group({
     
      Scheme_code: ["",[ Validators.required]],
    
      radio: new FormControl('none'),
      FROM_AC_NO: ['', [Validators.pattern, Validators.required]],
      TO_AC_NO: ['', [Validators.pattern, Validators.required]],
      Starting_Account: ['', [Validators.required]],
      Ending_Account: ['', [Validators.required]],
   
    
      OPENINGDATE:["",[Validators.pattern, Validators.required]],
      Print_Closed_Accounts: [''],
      BRANCH_CODE:  ['', [Validators.pattern, Validators.required]],
      
    });

  }
  ngOnInit(): void {
    this.createForm();
      //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
     // Scheme Code
     this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'AG'|| scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA'  || scheme.name == 'LK' || scheme.name == 'AG'  || scheme.name == 'IV'  || scheme.name == 'GS'  );
      });
      this.scheme = filtered;
  
      this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
        this.defaultDate = data.CURRENT_DATE;
      })
  
    })
  this.deadstockmasterService.getDeadstockList().pipe(first()).subscribe(data => {
    this.startingacc = data;
    this.endingacc = data;
    
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
  src: any;

  view(event) {
 
      
  
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME;

    if(this.ngForm.valid){
      let obj = this.ngForm.value
      this.showRepo = true;
  let date = moment(obj.FROM_DATE).format('DD/MM/YYYY');
  var sdate = moment(obj.FROM_DATE).startOf('quarter').format('DD/MM/YYYY');
  let scheme = obj.Scheme_code
  let Rstartingacc = obj.FROM_AC_NO
  let EndingAccount = obj.TO_AC_NO
  let branch = obj.BRANCH_CODE
  let Rdio = obj.radio

          
 this.iframeurl= this.report_url+ "examples/BalanceBook.php?&date='"+date+"'&Rdio='"+Rdio+"&scheme='" + scheme +"'&sdate='" + sdate +  "'&branch='"+ branch +"'&Rstartingacc='" + Rstartingacc +"'&EndingAccount='" + EndingAccount  +"&bankName=" + bankName + "";
 this.iframeurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }
    

  
}
close(){
  this.resetForm
}

resetForm() {
  // this.createForm()
  this.ngForm.controls.FROM_AC_NO.reset();
  this.ngForm.controls.TO_AC_NO.reset();
  this.showRepo = false;
  this.clicked=false;
  this.ngForm.controls.Scheme_code.reset();
  this.ngForm.controls.radio.reset();
 
}
onLoad(){
  this.showLoading = false;

}
}
