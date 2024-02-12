import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient, HttpParams } from "@angular/common/http";

import { Router } from "@angular/router";
import * as moment from 'moment'; 
import { environment } from "src/environments/environment";
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
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-npa-analysis-report',
  templateUrl: './npa-analysis-report.component.html',
  styleUrls: ['./npa-analysis-report.component.scss']
})
export class NpaAnalysisReportComponent implements OnInit {
    iframe5url:any='';
    @ViewChild(ReportFrameComponent ) child: ReportFrameComponent ; 
  formSubmitted = false;  
  Accschemeno:any =new Array(                           );

  
  //fromgroup
  ngForm:FormGroup
   // for dropdown ng module
   fromdate: any = null
   ngbranch: any = null; 
   scode: any = null;
   GL_CODE:any;
   AGL_CODE:any;
   //ngfor
   scheme: any[];
  branchOption: any[];
  clicked:boolean=false;
  showRepo: boolean = false;
  showLoading:boolean = false;
  transferSchemeDetails: any;
  tScheme
  
   //date
  todate: any = null
  bsValue = new Date();
  Anamat:any;
  
  maxDate: Date;
    minDate: Date;
    report_url = environment.report_url;
    branchName: any;
  Accnumber: any;
  obj1: any[];
  savingMasterService: any;
  introducerGL_CODE: any;
  ToAC: any[];
  fromAC: any[];
  
    constructor(
      private fb: FormBuilder,
      private _ownbranchmasterservice: OwnbranchMasterService,
      private systemParameter:SystemMasterParametersService,
      public schemeCodeDropdownService: SchemeCodeDropdownService,
      private sanitizer: DomSanitizer,
      private schemeAccountNoService: SchemeAccountNoService,
     
      private translate:TranslateService
      ) {
      this.translate.setDefaultLang(environment.setLang)
      
      this.todate = moment().format('DD/MM/YYYY');
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
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }    })
  
   // Scheme Code
   this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      console.log(data);
      
    var filtered = data.filter(function (scheme) {
      return ( scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS' || scheme.name == 'GL');
    });
    this.scheme = filtered;
   
    // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    //   this.todate = data.CURRENT_DATE;
    // });
  
  })

  this.systemParameter.getFormData(1).subscribe(data => {
    let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
    this.todate = data.CURRENT_DATE
    
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
  
    getTransferAccountList(event) {
      this.transferSchemeDetails = event
      this.tScheme = event.name
      this.getIntroducer()
    
    }
    getIntroducer() {

      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let branchCode = result.branch.id;
      let code = 10;
      this.obj1 = [code, branchCode]
      switch (this.tScheme) {
  
  
        case 'GL':
          this.schemeAccountNoService.getGeneralLedgerList1(this.obj1).subscribe(data => {
            this.ToAC = data
            this.fromAC = data
            console.log(data);
            
          })
          break;
          
        case 'LN':
          this.schemeAccountNoService.getGeneralLedgerList1(this.obj1).subscribe(data => {
            this.ToAC = data
            this.fromAC = data
            console.log(data);
            
          })
          break;
          
        case 'CC':
          this.schemeAccountNoService.getGeneralLedgerList1(this.obj1).subscribe(data => {
            this.ToAC = data
            this.fromAC = data
            console.log(data);
            
          })
          break;
          
        case 'DS':
          this.schemeAccountNoService.getGeneralLedgerList1(this.obj1).subscribe(data => {
            this.ToAC = data
            this.fromAC = data
            console.log(data);
            
          })
          break;
  
      }
    }
   
    createForm() {
      this.ngForm = this.fb.group({
        BRANCH_CODE: ['', [Validators.required]],
        Scheme_code: ["",[ Validators.required]],
        END_DATE: ['', [Validators.required]],
        GL_CODE: ['', [Validators.required]],
        AGL_CODE: ['', [Validators.required]],
       
      });
     
    }
    
    view(event) {
     
  
      event.preventDefault();
      this.formSubmitted = true;
  
      let userData = JSON.parse(localStorage.getItem('user'));
      let bankName = userData.branch.syspara.BANK_NAME;
      let branchName = userData.branch.NAME;
  
  
      if(this.ngForm.valid){
  
     this.showRepo = true;
      let obj = this.ngForm.value
  
      let Date = moment(obj.date).format('DD/MM/YYYY');
      let tDate = moment(Date, 'DD/MM/YYYY')
        //for start date
        if(this.fromdate == userData.branch.syspara.CURRENT_DATE)
        {
          obj['START_DATE'] =userData.branch.syspara.CURRENT_DATE
        }
        else{
        let date = moment(this.fromdate).format('DD/MM/YYYY');
        let toDate = moment(date, 'DD/MM/YYYY')
        obj['START_DATE']=date 
      }
     //for end date
      if(this.todate == userData.branch.syspara.CURRENT_DATE)
      {
        obj['END_DATE'] =userData.branch.syspara.CURRENT_DATE
      }
      else{
      let date = moment(this.todate).format('DD/MM/YYYY');
      let tDate = moment(date, 'DD/MM/YYYY')
      obj['END_DATE']=date 
     }
  
    let scheme = obj.Scheme_code
    let VAR1 = obj.GL_CODE;
    let VAR2 = obj.AGL_CODE;
    let TDate = obj.END_DATE;
    let SDate = moment(TDate, "DD/MM/YYYY").subtract(1, "year").format("DD/MM/YYYY");

  
      let branch = obj.BRANCH_CODE;
  
      let schemeName = this.tScheme
  
      //  let startingcode= obj.Starting_Account;
      // let endingcode =obj.Ending_Account;
      // this.iframe5url=this.report_url+ "examples/deposit.php/?&bankname='"+ bankName +"'&Branch='"+ this.branchName +"'&sdate='"+ obj.START_DATE +"'&edate='"+ obj.END_DATE +"'&AC_TYPE='"+ scheme +"'&GL_CODETYPE='"+ schemeName +"' &BRANCH_CODE='"+branch+"'";

      this.iframe5url=this.report_url+ "examples/NPA_Analysis_Report1.php?BRANCH_CODE="+branch

      +"&FLAG=0&DATE1='"+TDate+"'&DATE2='"+SDate+"'&VAR1='"+VAR1+"'&VAR2='"+VAR2+"'&BRANCH_NAME='"+this.branchName+"'&BANK_NAME='"+bankName+"'"
    console.log(this.iframe5url); 
     this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url); 
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
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
