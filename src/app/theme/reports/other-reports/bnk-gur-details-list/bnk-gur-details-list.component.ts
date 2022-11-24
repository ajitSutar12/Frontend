import {AfterViewInit,Component,OnDestroy,OnInit,ViewChild,Input,Output,EventEmitter,ElementRef,}from "@angular/core";
import { Subject } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient, HttpParams } from "@angular/common/http";

import { Router } from "@angular/router";
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { DomSanitizer} from '@angular/platform-browser';
import { first } from "rxjs/operators";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { CustomerIDMasterDropdownService } from "src/app/shared/dropdownService/customer-id-master-dropdown.service";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";

@Component({
  selector: 'app-bnk-gur-details-list',
  templateUrl: './bnk-gur-details-list.component.html',
  styleUrls: ['./bnk-gur-details-list.component.scss']
})
export class BnkGurDetailsListComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  formSubmitted = false;

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  //Dropdown option variable
dates: any = null
showLoading:boolean = false;
iframe5url:any='';
report_url = environment.report_url;
clicked:boolean=false;

  ngbranch
  branchOption: any;
  id: any;
  Cust_ID: any[] //customer id from idmaster
  newcustid: any = null;
  defaultDate: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    // for dropdown
    private systemParameter: SystemMasterParametersService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private customerID: CustomerIDMasterDropdownService,
  ) {
    this.dates = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    //branchlist
  
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe((data) => {
      this.Cust_ID = data;
      this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
        this.dates = data.CURRENT_DATE;
      });
    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern]],
      AC_CUSTID:  ["", [Validators.pattern]],
      PRINT_CUSTID: [""],
      date: ['', [Validators.required]],
      
      
    });
  }
   //set open date, appointed date and expiry date
  
  src: any;
 
  view(event){
   
   

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if(this.angForm.valid){

   this.showRepo = true;
    let obj = this.angForm.value
    let Date = moment(obj.date).format('DD/MM/YYYY');
  let scheme = obj.AC_CUSTID
    
    let branch = obj.BRANCH_CODE;
  
    

   this.iframe5url=this.report_url+ "examples/DeadstockBalanceList.php?Date='" + Date + "'&branch="+branch+"&scheme='" + scheme+"&bankName=" + bankName + " ";
   this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
  }
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
  }

  }
  close(){
    this.resetForm()

  }
  resetForm() {
    this.angForm.controls.AC_CUSTID.reset();
  
      this.showRepo = false;
      this.clicked=false;
    }
}
