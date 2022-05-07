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
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    this.getSystemParaDate();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe((data) => {
      this.Cust_ID = data;
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      AC_CUSTID: ["", [Validators.required]],
      PRINT_CUSTID: [""],
      OPENINGDATE: [""],
      
    });
  }
   //set open date, appointed date and expiry date
   getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE
    })
  }
  src: any;
  view(event) {
    debugger
    
    event.preventDefault();
    this.formSubmitted = true;
    // if(this.angForm.valid){

    this.showRepo = true;
    let obj = this.angForm.value
    let date = moment(obj.FROM_DATE).format('DD/MM/YYYY');
    let scheme = obj.S_ACNOTYPE
    const url = "http://localhost/NewReport/report-code/Report/examples/GuaranterList.php";
    // const url = "http://localhost/NewReport/report-code/Report/examples/Nomineelist.php?startDate='" + date + "'&scheme='" + scheme + "'&";
    console.log(url);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
   
  // }
  // else {
    // Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
  // }
  
}
  close(){

  }
}
