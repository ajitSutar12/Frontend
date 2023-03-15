import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import {Scheme10Service} from '../../../../shared/elements/scheme10.service';
import {Scheme11Service} from '../../../../shared/elements/scheme11.service';

import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { CustomerIdService } from 'src/app/theme/master/customer/customer-id/customer-id.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-passbook-issue',
  templateUrl: './passbook-issue.component.html',
  styleUrls: ['./passbook-issue.component.scss']
})
export class PassbookIssueComponent implements OnInit {

 
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
scode
transferSchemeDetails
//iframe
formSubmitted = false;
clicked:boolean=false;
showRepo: boolean = false;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = ' ';
 //dropdown
 branchOption: any[];
 Cust_ID
 // for dropdown ng module
 ngbranch: any = null;
 ngcust: any = null;
  branchName: any;
  scheme: any[];
  tScheme: any;
  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private customerID: CustomerIDMasterDropdownService,
    public customerIdService: CustomerIdService,private schemeCodeDropdownService: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer) { this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())}

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
  this.scheme = filtered;
 
 })
   //for customer Id
   this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
    this.Cust_ID = data;
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
  //validation
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      CUST_ID: ["", [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.required]],
      
      
    });
}
getTransferAccountList(event) {
  this.transferSchemeDetails = event
  this.tScheme = event.name
}
end() {}
src: any;
view(event) {
  
  event.preventDefault();
  this.formSubmitted = true;

  let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME

  if(this.ngForm.valid){
  let obj = this.ngForm.value
  this.showRepo = true;
  let custid = obj.CUST_ID
  let branch = obj.BRANCH_CODE
  let schemeName = this.tScheme

  let date =  moment(obj.START_DATE).format('DD/MM/YYYY');
  let tdate =  moment(obj.END_DATE).format('DD/MM/YYYY');
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


  this.iframe5url=this.report_url+"examples/custidinterestlist.php?stdate='" + obj.START_DATE + "'&etdate='" + obj.END_DATE + "'&bankName='" + bankName + "'&branchName='" + this.branchName + "'&AC_CUSTID=" + custid + "&branch=" + branch + "" ;
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

// Reset Function
resetForm() {
this.ngForm.controls.CUST_ID.reset();
this.showRepo = false;
this.clicked=false;
}
getBranch(event) {
  this.ngbranch = event.value
  this.branchName = event.branchName
}


}
