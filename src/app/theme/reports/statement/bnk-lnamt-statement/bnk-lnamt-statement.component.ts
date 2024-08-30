
import { Component, OnInit } from "@angular/core";
import { NgSelectConfig } from '@ng-select/ng-select'
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { first } from 'rxjs/operators';
import Swal from "sweetalert2";
import * as moment from "moment";
import { environment } from "src/environments/environment";
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-bnk-lnamt-statement',
  templateUrl: './bnk-lnamt-statement.component.html',
  styleUrls: ['./bnk-lnamt-statement.component.scss'],
  providers: [SchemeCodeDropdownService, SchemeAccountNoService, OwnbranchMasterService]
})
export class BnkLNamtStatementComponent implements OnInit {
  //date
  maxDate: Date;
  minDate: Date;
  startingdate: any = null
  endingdate: any = null

  ngForm: FormGroup;
  iframe2url:any='';
  clicked:boolean=false;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  formSubmitted = false;
     //account
     memFrom
     memTo
     branch
     mem:any

  //dropdown
  scheme: any[];
  startingacc: any[];
  endingacc: any[];
  branchOption: any[];
  // for dropdown ng module
  ngbranch: any = null;
  schemeCode: any = null;
  obj: any;
  startingAccount: any = null;
  EndingAccount: any = null;

  showRepo:boolean=false;
  todate: any;
  fromdate: moment.Moment;
  bankacno: any;
  isOpen: boolean = false
  acCloseDate: null;


  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public router: Router,
    private http: HttpClient,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,
  ) {
    this.endingdate = moment().format('DD/MM/YYYY');
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
    })
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      });
      this.scheme = filtered;

    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.endingdate = data.CURRENT_DATE;
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`      
      this.endingdate = data.CURRENT_DATE
      
      this.startingdate = moment(`01/04/${year - 1}`, 'DD/MM/YYYY')
      this.startingdate = this.startingdate._d
    })
   
  }

  // validations for ngForm
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ['', [Validators.required]],
      Starting_Account: ['', [Validators.required]],
      // Ending_Account: ['', [Validators.required]],
      Starting_Date: ['', [Validators.required]],
      Ending_Date: ['', [Validators.required]],
      Print_Closed_Account: [''],
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
    this.acCloseDate = null
    this.isOpen = false
    this.getschemename = event.name
    this.getIntroducer()
  }


  getIntroducer() {

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.schemeCode, branchCode]
    switch (this.getschemename) {


      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;
      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

    }
  }

  
  getacdetails(event){
    this.bankacno = event.bankacno
    
    if (event.acClose != null) {
      this.acCloseDate = event.acClose
      this.isOpen = false
    }
    else {
      this.acCloseDate = null
      this.isOpen = true
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  src: any;
  View(event) {
     debugger
     event.preventDefault();
     this.formSubmitted = true;

     let userData = JSON.parse(localStorage.getItem('user'));
     let bankName = userData.branch.syspara.BANK_NAME;
     let branchName = userData.branch.NAME

     if(this.ngForm.valid){
 
      this.showRepo = true;
     let obj = this.ngForm.value
     let startDate = moment(obj.Starting_Date).format('DD/MM/YYYY');
    //  let endDate = moment(obj.Ending_Date).format('DD/MM/YYYY');

     let endDate:any;
      if (this.endingdate == obj.Ending_Date) {
        endDate = moment(this.endingdate,'DD/MM/YYYY').format('DD/MM/YYYY')
      }else{ 
        endDate = moment(this.endingdate,'DD/MM/YYYY').format('DD/MM/YYYY')
      };

     var sdate = moment(obj.Starting_Date).subtract(1, "day").format('DD/MM/YYYY'); 
     let branch = obj.BRANCH_CODE;
      let startingcode= obj.Starting_Account;
    //  let endingcode =obj.Ending_Account;
     let PrintEveryAccountonNewPage=obj.Print_Every_Account_on_New_Page;
     let PrintClosedAccount=obj.Print_Closed_Account;
     let PrintAddedPenalInterest=obj.Print_Added_Penal_Interest;
     let PrintConciseReporteme=obj.Print_Concise_Report;
     let scheme=obj.Scheme_code;
  
 
    this.iframe2url=this.report_url+"examples/LoanStatement.php?startDate='" + startDate +"'&endDate='"+endDate+ "'&branch='"+this.ngbranch+"'&sdate='"+sdate+"'&startingcode='"+this.bankacno +"'&endingcode='"+ this.bankacno +"'&scheme= "+scheme+
                    " &PrintEveryAccountonNewPage= '"+PrintEveryAccountonNewPage+"' &PrintClosedAccount= '"+PrintClosedAccount+"'&PrintAddedPenalInterest= '"+PrintAddedPenalInterest+"' &PrintConciseReporteme= '"+PrintConciseReporteme+"' &bankName=" + bankName + "";
    this.iframe2url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe2url);
    
   }
   else {
     Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
   }
   
 }
   //load acno according start and end acno
   loadAcno() {
    this.memFrom = this.ngForm.controls['Starting_Account'].value
    this.memTo = this.ngForm.controls['Ending_Account'].value
    this.branch = this.ngForm.controls['BRANCH_CODE'].value
    if (this.ngForm.controls['Starting_Account'].value < this.ngForm.controls['Ending_Account'].value) {
      this.mem = [this.memFrom, this.memTo, this.branch]
     
      if (this.getschemename == 'LN') {
        this.http.get(this.url + '/term-loan-master/scheme/' + this.mem).subscribe((data) => {
        });
      }
      else if (this.getschemename == 'CC') {
        this.http.get(this.url + '/cash-credit-master/scheme/' + this.mem).subscribe((data) => {
        });
      }
      else if (this.getschemename == 'DS') {
        this.http.get(this.url + '/dispute-loan-master/scheme/' + this.mem).subscribe((data) => {
        });
      }
     
    
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }
  }

  close(){
    this.resetForm()
    }
  
    resetForm() {
      // this.createForm()
      // this.ngForm.controls.BRANCH_CODE.reset();
      this.ngForm.controls.Scheme_code.reset();
      this.ngForm.controls.Starting_Account.reset();
      // this.ngForm.controls.Ending_Account.reset();
      this.showRepo = false;
      this.clicked=false;
    }
}
