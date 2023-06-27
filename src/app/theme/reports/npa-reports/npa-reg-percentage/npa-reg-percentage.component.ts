
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonModule, formatDate } from '@angular/common';
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
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from "@angular/core";


@Component({
  selector: 'app-npa-reg-percentage',
  templateUrl: './npa-reg-percentage.component.html',
  styleUrls: ['./npa-reg-percentage.component.scss']
})
export class NpaRegPercentageComponent implements OnInit {

    iframe5url:any='';
    @ViewChild(ReportFrameComponent ) child: ReportFrameComponent ; 
  formSubmitted = false;
  ngCity: any = null
  radioValue: boolean = false;  
  Selection: boolean = false;  
  isChecked: boolean = true;
  url = environment.base_url;
  
  //fromgroup
  ngForm:FormGroup
  selectcity:any=new Array();
  Ecity:any;
  Scity:any;
  startcity:any;
  endcity:any;
   // for dropdown ng module
   fromdate: any = null
   ngbranch: any = null; 
   scode: any = null;
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
  nasf:any
  
  maxDate: Date;
    minDate: Date;
    report_url = environment.report_url;
    branchName: any;
  glDetails: any;
  fordate: Date;
  
    constructor(
      private fb: FormBuilder,
      private _ownbranchmasterservice: OwnbranchMasterService,
      private systemParameter:SystemMasterParametersService,
      public schemeCodeDropdownService: SchemeCodeDropdownService,
      private sanitizer: DomSanitizer,
      private http: HttpClient,
     
    ) {
      this.todate = moment().format('31/03/2024');
      this.fordate = new Date('31/03/2024');
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
      console.log(this.branchOption,"sjhjd");
      
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }    })
  
   // Scheme Code
   this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      
    var filtered = data.filter(function (scheme) {
      return ( scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
    });
    this.scheme = filtered;
   
    // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    //   this.todate = data.CURRENT_DATE;
    // });
  
  })
  this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data1 => {
      
   console.log(data1);
   
    // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    //   this.todate = data.CURRENT_DATE;
    // });
  

  })
  
  
  this.systemParameter.getFormData(1).subscribe(data => {
    let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
    this.todate = data.CURRENT_DATE
    
    this.fromdate = moment(`31/03/${year + 1}`, "DD/MM/YYYY")
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


      let obj1 = {
        date: this.fordate,
        // branch_code: this.ngbranch,

      }
      this.http.post<any>(this.url + '/npa-classification-master/dropdown ', obj1).subscribe((data) => {
        this.glDetails = data
   
            console.log(this.glDetails, "dasds")
        })
    
    }
  
    getTransferAccountList(event) {
      this.transferSchemeDetails = event
      this.tScheme = event.name
    
    }
   
    createForm() {
      this.ngForm = this.fb.group({
        BRANCH_CODE: ['', [Validators.required]],
        Scheme_code: ["",[ Validators.required]],
        END_DATE: ['', [Validators.required]],
        OD_TEMP: [''],
        Non_Standard: [''],
        Standard: [''],
        NPA_Date: [''],
       
      });
     
    }
    
    view(event){
     
  
      event.preventDefault();
      this.formSubmitted = true;
  
      let userData = JSON.parse(localStorage.getItem('user'));
      let bankName = userData.branch.syspara.BANK_NAME;
      let branchName = userData.branch.NAME;
  
  
      if(this.ngForm.valid){
  
     this.showRepo = true;
   
      let obj = this.ngForm.value
        let cityCode = obj.AC_CTCODE;
  
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
  
      let branch = obj.BRANCH_CODE;
  
      let schemeName = this.tScheme
  
      //  let startingcode= obj.Starting_Account;
      // let endingcode =obj.Ending_Account;
      this.iframe5url=this.report_url+ "examples/transactionless.php/?&bankname='"+ bankName +"'&Branch='"+ this.branchName +"'&sdate='"+ obj.START_DATE +"'&edate='"+ obj.END_DATE +"'&AC_TYPE='"+ scheme +"'&ACNOTYPE='"+ schemeName +"' &BRANCH_CODE='"+branch+"'"
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