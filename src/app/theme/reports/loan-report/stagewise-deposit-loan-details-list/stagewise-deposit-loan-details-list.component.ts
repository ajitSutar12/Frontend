import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-stagewise-deposit-loan-details-list',
  templateUrl: './stagewise-deposit-loan-details-list.component.html',
  styleUrls: ['./stagewise-deposit-loan-details-list.component.scss']
})
export class StagewiseDepositLoanDetailsListComponent implements OnInit {

   //fromgroup
   ngForm: FormGroup
   // for dropdown ng module
 
   ngbranch: any = null;
   scode: any = null;
   //ngfor
   scheme: any[];
   branchOption: any[];
   clicked: boolean = false;
   showRepo: boolean = false;
   showLoading: boolean = false;
   formSubmitted = false;
   transferSchemeDetails: any;
   tScheme
 
   iframe5url: any = '';

   //date
   dates: any = null
   maxDate: Date;
   minDate: Date;
   reccode
   report_url = environment.report_url;
   branchName: any;
  getdatatable: any;
 
   constructor(
     private fb: FormBuilder,
     private _ownbranchmasterservice: OwnbranchMasterService,
     private systemParameter: SystemMasterParametersService,
     public schemeCodeDropdownService: SchemeCodeDropdownService,
     private sanitizer: DomSanitizer,
     private http: HttpClient,

 
   ) {
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
 
     // Scheme Code
     this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
 
       var filtered = data.filter(function (scheme) {
         return (scheme.name == 'LN' || scheme.name == 'CC');
       });
       this.scheme = filtered;
 
       this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
         this.dates = data.CURRENT_DATE;
       });
 
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

     this.http.post('http://192.168.1.157:4771/dispute-loan-master/loanstagemaster',{}).subscribe((data: any) => {
      this.getdatatable = data;
      console.log("Loan Data.....",data);
      console.log("Get Data getdatatable Table.....", this.getdatatable);
    });
 
   }

   getLoanStage(event) {
   }

 
   createForm() {
     this.ngForm = this.fb.group({
       BRANCH_CODE: ['', [Validators.required]],
       Scheme_code: ["", [Validators.required]],
       DATE: ['', [Validators.required]],
 
 
 
     });
 
   }
 
   view(event) {
 
     event.preventDefault();
     this.formSubmitted = true;
 
     let userData = JSON.parse(localStorage.getItem('user'));
     let bankName = userData.branch.syspara.BANK_NAME;
     let branchName = userData.branch.NAME;
 
     if (this.ngForm.valid) {
 
       this.showRepo = true;
       let obj = this.ngForm.value
 
       if (this.dates == userData.branch.syspara.CURRENT_DATE) {
         obj['date'] = userData.branch.syspara.CURRENT_DATE
       }
       else {
         let date = moment(this.dates).format('DD/MM/YYYY');
         let tDate = moment(date, 'DD/MM/YYYY')
         obj['date'] = date
       }
 
 
       let scheme = obj.Scheme_code
 
       let branch = obj.BRANCH_CODE;
 
       let schemeName = this.tScheme
 
       
 
       this.iframe5url = this.report_url + "examples/stagewiseDisuteLoanDetailsList.php/?&branchname='"+ this.branchName +"'&sdate='"+ obj.date +"'&bankName='"+ bankName +"'&AC_RECOVERY_CLERK='"+ bankName +"'&branch='"+ this.ngbranch +"'";
 
       console.log(this.iframe5url);
       this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
     }
     else {
       Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
     }
   }
   close() {
     this.resetForm()
 
   }
   onLoad() {
     this.showLoading = false;
 
   }
   resetForm() {
     this.ngForm.controls.Scheme_code.reset();
     this.ngForm.controls.DATE.reset();
     this.ngForm.controls.BRANCH_CODE.reset();
 
     this.showRepo = false;
     this.clicked = false;
   }
   
   getBranch(event) {
     this.ngbranch = event.value
     this.branchName = event.branchName
   }
 
 }
 
 