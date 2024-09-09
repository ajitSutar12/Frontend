import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { DeadstockmasterService } from 'src/app/theme/master/customer/dead-stock-master/dead-stock-master.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bnk-debbal-report',
  templateUrl: './bnk-debbal-report.component.html',
  styleUrls: ['./bnk-debbal-report.component.scss'],
  providers: [OwnbranchMasterService, DeadstockmasterService]

})
export class BnkDebbalReportComponent implements OnInit {
clicked:boolean=false;
showRepo: boolean = false;
formSubmitted = false;
iframeurl : any = ' ';
report_url = environment.report_url;
showLoading:boolean = false;

//fromgroupname
ngForm:FormGroup;
//ngmodel
ngbranch: any = null;

startingAccount: any = null;
EndingAccount: any = null;
scode: any = null;

//ngfor
branchOption: any;
scheme: any[];
startingacc: any[];
endingacc: any[];

//date
dates: any = null
maxDate: Date;
  minDate: Date;
  obj: any;
  transferSchemeDetails: any;
  tScheme
  constructor(
    private fb: FormBuilder,
    private systemParameter:SystemMasterParametersService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private deadstockmasterService: DeadstockmasterService,
    private _schemeService: SchemeAccountNoService,
    private sanitizer: DomSanitizer,
    
  ) {
    this.dates = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
   }

  ngOnInit(): void {
    this.createForm();
     //branch list
     this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
  //date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.dates = data.CURRENT_DATE;
    })
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SB'|| scheme.name == 'AG'|| scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA'  || scheme.name == 'LK' || scheme.name == 'AG'  || scheme.name == 'IV'  || scheme.name == 'GS'  );
      });
      this.scheme = filtered;
  });
  // this.deadstockmasterService.getDeadstockList().pipe(first()).subscribe(data => {
  //   this.startingacc = data;
  //   this.endingacc = data;
   
  // });
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
      BRANCH_CODE:  ['', [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.pattern, Validators.required]],
      date: ['', [Validators.required]],
      FROM_AC_NO: ['', [Validators.pattern, Validators.required]],
      TO_AC_NO: ['', [Validators.pattern, Validators.required]],
      radio: new FormControl('none'),
      Print_Closed_Accounts: [''],
      Print_Open:[''],
      Print_Anamat:[''],

    });
  }
  getIntro(event){
    this.getschemename = event.name
    this.getIntroducer()
  }
    //For Starting account and Ending Account dropdown
    getschemename: any
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
   getBranch() {
    this.getIntroducer()
  }
  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name
  
  }
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  view(event){
 
      
    this.showLoading = true;
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME;


    if(this.ngForm.valid){
      let obj = this.ngForm.value
      this.showRepo = true;

      if(this.dates == userData.branch.syspara.CURRENT_DATE)
      {
        obj['date'] =userData.branch.syspara.CURRENT_DATE
      }
      else{
      let date = moment(this.dates).format('DD/MM/YYYY');
      let tDate = moment(date, 'DD/MM/YYYY')
      obj['date']=date 
    }
  // let date = moment(obj.FROM_DATE).format('DD/MM/YYYY');
  // var sdate = moment(obj.FROM_DATE).startOf('quarter').format('DD/MM/YYYY');

  let scheme = obj.Scheme_code
  let Rstartingacc = obj.FROM_AC_NO
  let EndingAccount = obj.TO_AC_NO
  let branch = obj.BRANCH_CODE
  let Rdio = obj.radio
  // let Rdiosort  = obj.radio_sort
  let schemeName = this.tScheme

          
 this.iframeurl= this.report_url+ "examples/Debit_Balance_Report.php?branchName="+ branchName +"&stdate='"+ obj.date +"'&etdate='"+ obj.date +"'&AC_TYPE='"+ scheme +"'&AC_ACNOTYPE='"+ schemeName +"'&branch='"+ this.ngbranch +"'";
//  this.iframeurl= this.report_url+ "examples/Debit_Balance_Report.php?branchName='KOTOLI'&stdate='01/04/2016'&etdate='12/08/2022'&AC_TYPE='9'&AC_ACNOTYPE='PG'";

 console.log(this.iframeurl); 
 this.iframeurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }
  }
  close(){
    this.resetForm()

  }
  onLoad() {
    this.showLoading = false;
  }
  resetForm() {
    // this.createForm()
    this.ngForm.controls.FROM_AC_NO.reset();
    this.ngForm.controls.TO_AC_NO.reset();
    this.showRepo = false;
    this.clicked=false;
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.radio.reset();
    this.ngForm.controls.Print_Closed_Accounts.reset();
   
  }
}
