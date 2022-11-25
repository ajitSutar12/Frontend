import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import * as moment from 'moment';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-duebal-summary',
  templateUrl: './duebal-summary.component.html',
  styleUrls: ['./duebal-summary.component.scss']
})
export class DuebalSummaryComponent implements OnInit {
 // Created Form Group
 ngForm: FormGroup
 // for dropdown ng module
   ngbranch: any = null;
 //dropdown
   branchOption: any[];
   //for date
   maxDate: Date;
   minDate: Date;
   defaultDate: any
   //iframe
 formSubmitted = false;
 clicked:boolean=false;
 showRepo: boolean = false;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = ' ';
  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,
    private _ownbranchmasterservice: OwnbranchMasterService) 
    { this.defaultDate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate()) }

  ngOnInit(): void {
    this.createForm();
    //display date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE;
    })
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
     this.branchOption = data;
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
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      FROM_DATE: ["", [Validators.pattern, Validators.required]],

    });
   
}
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
  let startdate =  moment(obj.FROM_DATE).format('DD/MM/YYYY');
  let branch = obj.BRANCH_CODE
  this.iframe5url=this.report_url+"examples/AgentwisePigmyBalList.php?startdate='" + startdate   + "&branch="+ branch +"'&bankName=" + bankName + ""  ;
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
this.showRepo = false;
this.clicked=false;
}
}
