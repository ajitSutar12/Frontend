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

//service file for fetching records from customer ID
// import { CustomerIdService } from "../customer-id/customer-id.service";
@Component({
  selector: 'app-bnk-cust-idbal-list',
  templateUrl: './bnk-cust-idbal-list.component.html',
  styleUrls: ['./bnk-cust-idbal-list.component.scss']
})
export class BnkCustIDBalListComponent implements OnInit {

  iframeurl : any = ' ';
  clicked:boolean=false;
  report_url = environment.report_url
  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  //Dropdown option variable
  ngbranch
  branchOption: any;
  id: any;
  Cust_ID: any[] //customer id from idmaster
  newcustid: any = null;

    // Date variables
    defaultDate: any;
    fromdate:any=null
    maxDate: Date;
    minDate: Date;
    bsValue = new Date();
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    // dropdown
    private _ownbranchmasterservice: OwnbranchMasterService,
    private customerID: CustomerIDMasterDropdownService,
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe((data) => {
      this.Cust_ID = data;
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["",[Validators.pattern]],
      AC_CUSTID: ["",[Validators.pattern]],
      PRINT_CUSTID: [""],
      OPENINGDATE: ["",[Validators.pattern]],
      
    });
  }
  view(event) {

    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;

     if(this.angForm.valid){
    this.showRepo = true;
    let obj = this.angForm.value
    let stdate = moment(obj.OPENINGDATE).format('DD/MM/YYYY');
    let custid = obj.AC_CUSTID;
    let branches = obj.BRANCH_CODE;
    let pritns = obj.PRINT_CUSTID;

    this.iframeurl = this.report_url + "/CustomerIdWiseList.php?stdate='" + stdate +"'&branches='"+branches+"'&custid='"+custid+"'&pritns='"+pritns+"'&bankName='" + bankName + "' ";
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
  this.createForm()
  this.showRepo = false;
  this.clicked=false;
}

}
