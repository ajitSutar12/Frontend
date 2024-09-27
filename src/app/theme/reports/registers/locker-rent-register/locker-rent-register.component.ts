import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import {  SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import * as moment from 'moment';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-locker-rent-register',
  templateUrl: './locker-rent-register.component.html',
  styleUrls: ['./locker-rent-register.component.scss']
})
export class LockerRentRegisterComponent implements OnInit {

 // Created Form Group
 ngForm: FormGroup;
   // Date variables
   todate: any = null;
   fromdate: any = null
   maxDate: Date;
   minDate: Date;
   bsValue = new Date();
   equal: any
   startfrom
   startto
   // for dropdown ng module
   ngbranch: any = null;
   schemeCode: any = null;
   transferSchemeDetails: any;
   tScheme
 //dropdown
 scheme: any[];
 branchOption: any[];
 //iframe
 formSubmitted = false;
  clicked:boolean=false;
  showRepo: boolean = false;
   //api
   url = environment.base_url;
   report_url = environment.report_url;
   iframe5url: any = ' ';
  branchName: any;
  setLang:any;
  constructor(    private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    public SchemeTypes: SchemeTypeDropdownService,private translate:TranslateService)
     {  this.todate = moment().format('DD/MM/YYYY');
     this.maxDate = new Date();
     this.minDate = new Date();
     this.minDate.setDate(this.minDate.getDate() - 1);
     this.maxDate.setDate(this.maxDate.getDate())
     this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    });
    }

  ngOnInit(): void {
    this.createForm();

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

    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
     this.branchOption = data;
   });
      // Scheme Code
      this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe((data) => {
        var filtered = data.filter(function (scheme) {
          return (scheme.name == "LK" );
        });
        this.scheme= filtered;
        this.schemeCode = null;
      });
      //display date
  this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.todate = data.CURRENT_DATE;
  });
//for starting and ending date
  this.systemParameter.getFormData(1).subscribe(data => {
    let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
    this.todate = data.CURRENT_DATE
    this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
    this.fromdate = this.fromdate._d
  })
  }
  end(){}
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.pattern, Validators.required]],
      radio_sort:new FormControl('rentreceipt'),
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
    });
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
  
  }
  src: any;
  view(event) {
    
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    let schemeName = this.tScheme

    if(this.ngForm.valid){
    let obj = this.ngForm.value
    this.showRepo = true;

    let flag = obj.radio_sort;

    if(flag == 'rentreceipt'){
      flag = '1';
    }else{
      flag = '0';
    }

    //for start Date
    if(this.fromdate == userData.branch.syspara.CURRENT_DATE)
    {
      obj['START_DATE'] =userData.branch.syspara.CURRENT_DATE
    }
    else{
    let date = moment(this.fromdate).format('DD/MM/YYYY');
    let tDate = moment(date, 'DD/MM/YYYY')
    obj['START_DATE']=date 
  }
//for End Date
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
    let branch = obj.BRANCH_CODE
  
    this.iframe5url=this.report_url+"examples/LockerRentRegister.php?sdate='" + obj.START_DATE + "'&edate='" + obj.END_DATE + "'&bank_name='" + bankName + "'&ac_type='" + scheme + "'&ac_acnotype='" + schemeName + "'&branch_name='" + this.branchName + "'&branch_code='"+this.ngbranch+"'&FLAG='"+ flag +"'";
    console.log(this.iframe5url) 
    this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    
   
  }
  else {
    Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Re1')}`, 'warning').then(()=>{ this.clicked=false});
    // Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
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
getBranch(event) {
  this.ngbranch = event.value
  this.branchName = event.branchName
}
}

