import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import * as moment from 'moment';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'

@Component({
  selector: 'app-acwise-loanoverdue-list',
  templateUrl: './acwise-loanoverdue-list.component.html',
  styleUrls: ['./acwise-loanoverdue-list.component.scss']
})
export class AcwiseLoanoverdueListComponent implements OnInit {
// Created Form Group
ngForm: FormGroup
// for dropdown ng module
  ngbranch: any = null;
  schemeCode: any = null
  startingAccount: any = null;
  EndingAccount: any = null;
//dropdown
branchOption: any[];
SchemeCodeDropdownDropdown: any[];
endingacc: any[];
startingacc: any[];
obj: any;
  //for date
  maxDate: Date;
  minDate: Date;
  defaultDate: any;
   //iframe
 formSubmitted = false;
 clicked:boolean=false;
 showRepo: boolean = false;

  //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = ' ';
  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,
    private _ownbranchmasterservice: OwnbranchMasterService,    
    public SchemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private _schemeService: SchemeAccountNoService) { }

  ngOnInit(): void {
    this.createForm();
    // display date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE;
    })
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
     this.branchOption = data;
   });
   
   //scheme code
   this.SchemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {       
    var filtered = data.filter(function (scheme) {
      return (  scheme.name == 'LN' || scheme.name == 'CC'  );
    });
    this.SchemeCodeDropdownDropdown = filtered;
  })
  
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
     this.obj = [this.schemeCode, branchCode]
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
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      FROM_DATE: ["", [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.pattern, Validators.required]],
      FAmount:  ['', [ Validators.required]],
      ToAmount:  ['', [ Validators.required]],
      FROM_AC_NO: ["", [Validators.pattern, Validators.required]],
      TO_AC_NO: ["", [Validators.pattern, Validators.required]],
      NEWPAGE:[''],
      NEWPAGEE:['']
    });
   
}
view(event) {

  event.preventDefault();
  this.formSubmitted = true;

  let userData = JSON.parse(localStorage.getItem('user'));
let bankName = userData.branch.syspara.BANK_NAME;
let branchName = userData.branch.NAME;

  if(this.ngForm.valid){
    let obj = this.ngForm.value
    this.showRepo = true;
// let date = moment(obj.FROM_DATE).format('DD/MM/YYYY');
var sdate = moment(obj.FROM_DATE).startOf('quarter').format('DD/MM/YYYY');

let date:any;
if (this.defaultDate == obj.FROM_DATE) {
date = moment(this.defaultDate,'DD/MM/YYYY').format('DD/MM/YYYY')
}
else
{ 
date = moment(this.defaultDate,'DD/MM/YYYY').format('DD/MM/YYYY')
};

let scheme = obj.Scheme_code
let Rstartingacc = obj.FROM_AC_NO
let EndingAccount = obj.TO_AC_NO
let branch = obj.BRANCH_CODE
let mininstall =  obj. FAmount
let maxinstall =   obj.ToAmount
this.iframe5url= this.report_url+ "examples/BalanceBook.php?&date='"+ date +"&scheme='" + scheme +"&mininstall='" + mininstall +"&maxinstall='" + maxinstall + +"'&sdate='" + sdate +  "'&branch='"+ branch +"'&Rstartingacc='" + Rstartingacc +"'&EndingAccount='" + EndingAccount  +"&bankName=" + bankName + "";
this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
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
  this.ngForm.controls.Scheme_code.reset();
  this.ngForm.controls.FROM_AC_NO.reset();
  this.ngForm.controls.TO_AC_NO.reset();
  this.ngForm.controls.FAmount.reset();
  this.ngForm.controls.ToAmount.reset();
  this.showRepo = false;
  this.clicked=false;
}
}
