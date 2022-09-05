import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";
import { DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bnk-acbal-list',
  templateUrl: './bnk-acbal-list.component.html',
  styleUrls: ['./bnk-acbal-list.component.scss'],
  providers:[OwnbranchMasterService,SchemeTypeDropdownService,SchemeAccountNoService,SchemeCodeDropdownService]
})

export class BnkAcbalListComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  formSubmitted = false;
  defaultDate: any
  showRepo: boolean = false;
  report_url = environment.report_url;
  // Created Form Group
  ngForm: FormGroup;
  iframeurl: any = ' ';
  clicked:boolean=false;
  //api
    //dropdown
    scheme: any[];
    startingacc: any[];
    endingacc: any[];
    branchOption: any[];
    // for dropdown ng module
  
    ngbranch: any = null;
    scode: any = null;
    obj: any;
    startingAccount: any = null;
    EndingAccount: any = null;
  url = environment.base_url;
  
  ngscheme: any = null
  ngBranchCode
  branchCode
  branch_code
  ngacno: any;
  schemeList:any[];
  ngIntroducer: any = null
  
  selectedCode: any;
  account: any[];
  master: any;
 
  constructor( private http: HttpClient,
    private fb: FormBuilder,
    public schemeTypeDropdown: SchemeTypeDropdownService,
    private _schemeService: SchemeAccountNoService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private config: NgSelectConfig,
    private sanitizer: DomSanitizer,
    public router: Router,) { 
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
    }
    createForm() {
      this.ngForm = this.fb.group({
        BRANCH_CODE:  ['', [ Validators.required]],
        Scheme_code: ["",[ Validators.required]],
       
        FROM_AC_NO: ['', [Validators.required]],
        TO_AC_NO: ['', [ Validators.required]],
        radio: new FormControl('none'),
        radio_sort:new FormControl('account number'),
        FROM_DATE:  ['', [ Validators.required]],
        PRINT_MAN_NO:[''],
        PRINT_OP_DATE:[''],
        PRINT_ANA_REASON:[''],
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

  })

  }

  

  // For Starting account and Ending Account dropdown
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
    let startDate = moment(obj.FROM_DATE).format('DD/MM/YYYY');
    let scheme = obj.Scheme_code
    let Rstartingacc = obj.FROM_AC_NO
    let Rendingacc = obj.TO_AC_NO
    let branch = obj.BRANCH_CODE
    let Rdio = obj.radio
    let Rdiosort  = obj.radio_sort
    let checkbox1 = obj.PRINT_MAN_NO
    let checkbox2 = obj.PRINT_OP_DATE
    let checkbox3 = obj.PRINT_ANA_REASON

         
   this.iframeurl= this.report_url+"examples/DormantAccountList.php?startDate='"+startDate+"'&Rdio='"+Rdio+"'&scheme='" + scheme + "'&branchName='"+ branchName +"'&Rstartingacc='" + Rstartingacc +"'&Rendingacc='" + Rendingacc +"'&Rdiosort='" + Rdiosort +"'&checkbox1='" + checkbox1 +"'&checkbox2='" + checkbox2 +"'&checkbox3='" + checkbox3 +"'&bankName='" + bankName + "'";
   this.iframeurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
   
    // const url = "http://localhost/NewReport/phpjasperxml-master/examples/BalanceBook.php?startDate='"+startDate+"'&endDate='"+endDate+ "'&scheme='" + scheme + "'&schemeAccountNo" + schemeAccountNo +"'&";
    // console.log(url);
    // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
   
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
  this.createForm()
  this.showRepo = false;
  this.clicked=false;
}

}
