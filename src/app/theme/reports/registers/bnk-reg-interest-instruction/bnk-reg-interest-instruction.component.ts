import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bnk-reg-interest-instruction',
  templateUrl: './bnk-reg-interest-instruction.component.html',
  styleUrls: ['./bnk-reg-interest-instruction.component.scss']
})
export class BnkRegInterestInstructionComponent implements OnInit {
 // Created Form Group
 angForm: FormGroup;
 //  variable for validation
 formSubmitted = false;
 showRepo =false;
 // branch name 
 selectedBranch: number;
 branch_codeList: any = null
 branch_code: any[]//from ownbranchmaster
 branchCode: any = null
 ngBranchCode

  // Date variables
  todate: any = null;
  fromdate:any=null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
 constructor(
   private fb: FormBuilder,
   private http: HttpClient,
   private sanitizer: DomSanitizer,
   private ownbranchMasterService: OwnbranchMasterService,
 )  {
   this.maxDate = new Date();
   this.minDate = new Date();
   this.minDate.setDate(this.minDate.getDate());
   this.maxDate.setDate(this.maxDate.getDate())
  }
 // Method to handle validation of form
 createForm(
 ) {
   this.angForm = this.fb.group({
     BRANCH_CODE: ['', [Validators.required]],
     START_DATE: ['', [Validators.required]],
     END_DATE: ['', [Validators.required]],
     REVOKE_INST: [''],
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
 
  

 }
 src: any;
 View(event){
   event.preventDefault();
   this.formSubmitted = true;
   if (this.angForm.valid) {
    this.showRepo = true;
   let obj = this.angForm.value
   let startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
   let enddate = moment(obj.END_DATE).format('DD/MM/YYYY');
   let branch = obj.BRANCH_CODE;
   const url = "http://localhost/NewReport/report-code/Report/examples/InterestInstruction.php?startDate='" + startdate +"'&enddate='" + enddate + "'&branch='"+branch+"'";
   console.log(url);

   this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
   // let ageCaldate
   }
   else {
     Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
   }
 }

}

