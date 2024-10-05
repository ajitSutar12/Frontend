import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { NgSelectConfig } from "@ng-select/ng-select";
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-matured-notpaid',
  templateUrl: './matured-notpaid.component.html',
  styleUrls: ['./matured-notpaid.component.scss']
})
export class MaturedNotpaidComponent implements OnInit {
// Created Form Group
ngForm: FormGroup;
 //dropdown
 schemeList:any[];
  branchOption: any[];

  // for dropdown ng module
  ngbranch: any = null;
  ngIntroducer:any=null  
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  equal: any
  startfrom
  startto
//iframe
  formSubmitted = false;
  clicked:boolean=false;
  showRepo: boolean = false;
   //api
   url = environment.base_url;
   report_url = environment.report_url;
   iframe5url: any = ' ';
  setLang: string;
  constructor(    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private config: NgSelectConfig,
    private translate:TranslateService
    ) { 

    this.systemParameter.getFormData(1).subscribe(data => {
    
        this.setLang = data.SET_LANGUAGE
        this.translate.setDefaultLang(this.setLang);
      })
      this.todate = moment().format('DD/MM/YYYY');
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
      return (scheme.name == 'TD');
    });
    this.schemeList = filtered;
    this.ngIntroducer = null;
  })
  //for starting and ending date
  this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.todate = data.CURRENT_DATE;
  });

  this.systemParameter.getFormData(1).subscribe(data => {
    let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
    this.todate = data.CURRENT_DATE
    
    this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
    this.fromdate = this.fromdate._d
  })
  }
  //validation
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.pattern, Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
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
  end() {}
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  src: any;
  view(event) {
    debugger
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if(this.ngForm.valid){
    let obj = this.ngForm.value
    this.showRepo = true;
    let startdate =  moment(obj.START_DATE).format('DD/MM/YYYY');

    let enddate:any;
    if (this.todate == obj.END_DATE) {
      enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
    }else{ 
      enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
    };
    
    let scheme = obj.Scheme_code
    let branch = obj.BRANCH_CODE
  
    this.iframe5url=this.report_url+"examples/MaturedButNotPaid.php?startdate='" + startdate + "'&enddate='" + enddate + "'&S_APPL=" + scheme + "&branch="+ branch +"&bankName=" + bankName + "&NAME="+branchName ;
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
  this.ngForm.controls.Scheme_code.reset();
  this.showRepo = false;
  this.clicked=false;
}
}


// var filtered = data.filter(function (scheme) {
//   return (scheme.name == 'TD' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA'  || scheme.name == 'LK' || scheme.name == 'AG'  || scheme.name == 'IV'  || scheme.name == 'GS'  );
// });
// this.schemeList = filtered;
// this.ngIntroducer = null;
// })