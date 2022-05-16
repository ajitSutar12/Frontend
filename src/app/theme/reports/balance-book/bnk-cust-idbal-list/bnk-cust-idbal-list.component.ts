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

  formSubmitted = false;

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
    todate: any = null;
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
      BRANCH_CODE: [""],
      AC_CUSTID: [""],
      PRINT_CUSTID: [""],
      START_DATE: [""],
      END_DATE: [""],
      
    });
  }
 
  src: any;
  view(event) {
    debugger
    
    event.preventDefault();
    this.formSubmitted = true;
     if(this.angForm.valid){

    // this.showRepo = true;
    let obj = this.angForm.value
    let startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
    let enddate = moment(obj.END_DATE).format('DD/MM/YYYY');
    let branch = obj.BRANCH_CODE;
    // const url = "http://localhost/NewReport/report-code/Report/examples/CustomerIdWiseList.php";
    const url = "http://localhost/NewReport/report-code/Report/examples/CustomerIdWiseList.php?startDate='" + startdate +"'&endDate='" + enddate + "'";
    console.log(url);

    window.open(url, '_blank');
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
   
   }
  else {
     Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
   }
  
}
  close(){

  }
}
