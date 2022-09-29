import { Component, OnInit } from "@angular/core";
import { NgSelectConfig } from '@ng-select/ng-select'
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";

import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { first } from 'rxjs/operators'
import * as moment from "moment";
import Swal from "sweetalert2";
import { DomSanitizer } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@Component({
  selector: 'app-bnk-pay-int-list',
  templateUrl: './bnk-pay-int-list.component.html',
  styleUrls: ['./bnk-pay-int-list.component.scss'],
  providers: [SchemeCodeDropdownService, OwnbranchMasterService]
})
export class BnkPayIntListComponent implements OnInit {
  iframeurl:any='';
  clicked:boolean=false;
  //date
  maxDate: Date;
  minDate: Date;
  date: any = null
  

  ngForm: FormGroup;
  //dropdown
  scheme: any[];
  
  branchOption: any[];
  // for dropdown ng module
  ngbranch: any = null;
  schemeCode: any = null;

  formSubmitted = false;
    //api
    url = environment.base_url;
    report_url = environment.report_url;
    
    showRepo: boolean = false;

  constructor(    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public router: Router,
    private sanitizer: DomSanitizer,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter:SystemMasterParametersService,
    ) { 
      this.date = moment().format('DD/MM/YYYY');
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
        return (scheme.name == 'TD');
      });
      this.scheme = filtered;

    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.date = data.CURRENT_DATE;
    })
  }
// validations for ngForm
createForm() {
  this.ngForm = this.fb.group({
    BRANCH_CODE: ['', [Validators.required]],
    Scheme_code: ['', [Validators.required]],
    Date: ['', [Validators.required]],   
    Print_Closed_Accounts: [''],
   
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

view(event) {
  debugger
  event.preventDefault();
  this.formSubmitted = true;

  let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME


  if(this.ngForm.valid){

  this.showRepo = true;
  let obj = this.ngForm.value
  let Date = moment(obj.Date).format('DD/MM/YYYY');
  let scheme = obj.Scheme_code;
  let branch = obj.BRANCH_CODE;

let PrintClosedAccounts =obj.Print_Closed_Accounts;


 this.iframeurl=this.report_url+ "examples/PayableIntBal.php?Date='" + Date + "'&scheme=" + scheme + "&branch="+branch+"&PrintClosedAccounts='"+PrintClosedAccounts +"&bankName=" + bankName + " ";
 this.iframeurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
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
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.Print_Closed_Accounts.reset();
    this.showRepo = false;
    this.clicked=false;
  }

}
