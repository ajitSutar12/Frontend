import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, } from "@angular/core";
import { Subject, Subscription } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient, HttpParams } from "@angular/common/http";

import { Router } from "@angular/router";
import * as moment from 'moment';
import { environment } from "../../../../../environments/environment";
import { DomSanitizer } from '@angular/platform-browser';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import { SchemeAccountNoService } from "src/app/shared/dropdownService/schemeAccountNo.service";
import { first } from "rxjs/operators";
import { SchemeTypeDropdownService } from "src/app/shared/dropdownService/scheme-type-dropdown.service";
import { IOption } from "ng-select";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { ReportFrameComponent } from "../../report-frame/report-frame.component";
import { NgSelectComponent } from "@ng-select/ng-select";
import { CustomerIDMasterDropdownService } from "src/app/shared/dropdownService/customer-id-master-dropdown.service";
import { TranslateService } from "@ngx-translate/core";


@Component({
    selector: 'app-custidwise-introducer-list',
    templateUrl: './custidwise-introducer-list.component.html',
    styleUrls: ['./custidwise-introducer-list.component.scss']
  })
  export class CustidwiseIntroducerListComponent implements OnInit {
  iframe5url:any='';
  @ViewChild(ReportFrameComponent ) child: ReportFrameComponent ; 
formSubmitted = false;

//fromgroup
ngForm:FormGroup
 // for dropdown ng module
 fromdate: any = null
 ngbranch: any = null; 
 scode: any = null;
 //ngfor
 scheme: any[];
 getschemename: any; 
 startAcNo: any
 endAcNo: any
branchOption: any[];
clicked:boolean=false;
showRepo: boolean = false;
showLoading:boolean = false;
transferSchemeDetails: any;
tScheme
isTdsForm: boolean = false;
Cust_ID
// scust
// ecust
ngcust
ngcust2
 //date
dates: any = null
bsValue = new Date();
obj: any

maxDate: Date;
  minDate: Date;
  report_url = environment.report_url;
  branchName: any;
  setLang: string;

  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter:SystemMasterParametersService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer,
    private customerID: CustomerIDMasterDropdownService,   
     private schemeAccountNoService: SchemeAccountNoService,
     private translate:TranslateService

  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
    this.dates = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1); 
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()
   //branchlist
   this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
    this.branchOption = data;
  })
   //for customer Id
   this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
    this.Cust_ID = data; 
  })
 // Scheme Code
 this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    
  var filtered = data.filter(function (scheme) {
    return (scheme.name == 'AG'|| scheme.name == 'SB' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA'  || scheme.name == 'LK' || scheme.name == 'AG'  || scheme.name == 'IV'  || scheme.name == 'GS'  );
  });
  this.scheme = filtered;
 
  // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
  //   this.dates = data.CURRENT_DATE;
  // });

})
this.systemParameter.getFormData(1).subscribe(data => {
  let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
  this.dates = data.CURRENT_DATE
  
  this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
  this.fromdate = this.fromdate._d
})
  
  let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME 

    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }
  }
  getIntTrans(event) {
    this.getschemename = event.name
    this.getInterestTransfer()  
  }

  getInterestTransfer() {
    // this.ngAcnoFrom = null
    // this.ngAcnoTo = null
    // this.startAcNo = [];
    // this.endAcNo = [];
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.scode, branchCode]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

    }
  }

  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name
  
  }
 
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ["",[ Validators.required]],
      // date: ['', [Validators.required]],
      START_CUST:['', [Validators.required]],
      END_CUST:['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
    });
   
  }
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  view(event) {
  //  debugger

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if(this.ngForm.valid){

   this.showRepo = true;
    let obj = this.ngForm.value

 let Date = moment(obj.date).format('DD/MM/YYYY');
 let toDate = moment(Date, 'DD/MM/YYYY')

  //for start date
  if (this.fromdate == userData.branch.syspara.CURRENT_DATE) {
    obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE
  }
  else {
    let date = moment(this.fromdate).format('DD/MM/YYYY');
    let toDate = moment(date, 'DD/MM/YYYY')
    obj['START_DATE'] = date
  }

  //for end date
  if (this.dates == userData.branch.syspara.CURRENT_DATE) {
    obj['END_DATE'] = userData.branch.syspara.CURRENT_DATE
  }
  else {
    let date = moment(this.dates).format('DD/MM/YYYY');
    let tDate = moment(date, 'DD/MM/YYYY')
    obj['END_DATE'] = date
  }

  let scheme = obj.Scheme_code
    let branch = obj.BRANCH_CODE;
    let schemeName = this.tScheme

    let MemFrom = obj.START_CUST
    let MemTo= obj.END_CUST

    //  let startingcode= obj.Starting_Account;
    // let endingcode =obj.Ending_Account;
    
this.iframe5url=this.report_url+ "examples/custidwise_introducer_list.php?branchName='"+ this.branchName +"'&bankName='"+ bankName +"'&stdate='"+ obj.START_DATE +"'&etdate='"+ obj.END_DATE +"'&S_APPL='"+scheme+"'&MEMFROM='"+MemFrom+"'&MEMTO='"+MemTo+"'&date='"+ obj.END_DATE +"'&branch_code='"+branch+"'";
  console.log(this.iframe5url); 
   this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url); 
  }
  else {
    Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Mandatory_Field')}`, 'warning').then(()=>{ this.clicked=false});
  }
  }
  close(){
    this.resetForm()

  }




  onLoad(){
    this.showLoading = false;

  }
  resetForm() {
  this.ngForm.controls.Scheme_code.reset();
  this.ngForm.controls.START_CUST.reset();
  this.ngForm.controls.END_CUST.reset();

    this.showRepo = false;
    this.clicked=false;
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
}





