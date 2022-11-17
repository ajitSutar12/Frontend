import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';



@Component({
  selector: 'app-bnk-reg-gold-silver-sub-return',
  templateUrl: './bnk-reg-gold-silver-sub-return.component.html',
  styleUrls: ['./bnk-reg-gold-silver-sub-return.component.scss']
})
export class BnkRegGoldSilverSubReturnComponent implements OnInit {
// Created Form Group
angForm: FormGroup;
//  variable for validation
formSubmitted = false;

clicked:boolean=false;

iframeurl : any = '';
report_url = environment.report_url;

// branch name 
selectedBranch: number;
branch_codeList: any = null
branch_code: any[]//from ownbranchmaster
branchCode: any = null
ngBranchCode
ngscheme
allScheme: any[];
 // Date variables
 todate: any = null;
 fromdate:any=null
 maxDate: Date;
 minDate: Date;
 bsValue = new Date();
  getschemename: any;
  fromAC: any;
  ToAC: any;
  ngfromac: any;
  ngtoac: any;
  showRepo: boolean = false;
constructor(
  private fb: FormBuilder,
  private http: HttpClient,
  private sanitizer: DomSanitizer,
  private ownbranchMasterService: OwnbranchMasterService,
  private schemeCodeDropdownService: SchemeCodeDropdownService,
  private systemParameter:SystemMasterParametersService,

) {
  this.todate=moment().format('DD/MM/YYYY');
  this.maxDate = new Date();
  this.minDate = new Date();
  this.minDate.setDate(this.minDate.getDate());
  this.maxDate.setDate(this.maxDate.getDate())
 }
// Method to handle validation of form
createForm() {
  this.angForm = this.fb.group({
    BRANCH_CODE: ['', [Validators.required]],
    AC_TYPE: ['', [Validators.required]],
    START_DATE: ['', [Validators.required]],
    END_DATE: ['', [Validators.required]],
    SUBMISSION:  new FormControl('SUBMISSION'),
  })
}
ngOnInit(): void {
  this.createForm()
  let data: any = localStorage.getItem('user');
  let result = JSON.parse(data);
  if (result.RoleDefine[0].Role.id == 1) {
    this.angForm.controls['BRANCH_CODE'].enable()
    this.ngBranchCode = result.branch.id
  }
  else {
    this.angForm.controls['BRANCH_CODE'].disable()
    this.ngBranchCode = result.branch.id
  }
  //branch List
  this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
    this.branch_code = data;
    // this.ngBranchCode = data[0].value
  })

  this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    var allscheme = data.filter(function (scheme) {
      return (scheme.name == 'LN' ||scheme.name == 'CC' ||scheme.name == 'DS' )
    });
    this.allScheme = allscheme;
  })

  // this.schemeCodeDropdownService.getTermDepositSchemePatD().pipe(first()).subscribe(data => {
  //   this.allScheme.push(data)
  // })
 
  this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.todate = data.CURRENT_DATE;
  });

  this.systemParameter.getFormData(1).subscribe(data => {
    let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
    // this.fromdate = `01/04/${year - 1}`      
    this.todate = data.CURRENT_DATE
    
    this.fromdate = moment(`01/04/${year - 1}`, 'DD/MM/YYYY')
    this.fromdate = this.fromdate._d
  })

}
src: any;
View(event){

  event.preventDefault();
  this.formSubmitted = true;

  let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME
  
  if (this.angForm.valid) {
  this.showRepo = true;
  let obj = this.angForm.value
  let startDate = moment(obj.START_DATE).format('DD/MM/YYYY');
  // let enddate = moment(obj.END_DATE).format('DD/MM/YYYY');

  let enddate:any;
  if (this.todate == obj.END_DATE) {
    enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
  }else{ 
    enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
  };

  let BRANCH_CODE = obj.BRANCH_CODE
  
  this.iframeurl = this.report_url+"examples/goldsilversubmreturn.php?startDate='"+startDate+"'&endDate='"+enddate+"'&BRANCH_CODE='"+BRANCH_CODE+"'&bankName='" + bankName + "' ";
  this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);

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
  this.angForm.controls.AC_TYPE.reset();
  // this.angForm.controls.SUBMISSION.reset();
  this.showRepo = false;
  this.clicked=false;
}

}
