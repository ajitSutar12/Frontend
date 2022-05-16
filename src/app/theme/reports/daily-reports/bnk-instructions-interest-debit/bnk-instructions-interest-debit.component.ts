import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, } from "@angular/core";
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
import { DomSanitizer } from '@angular/platform-browser';
// dropdown
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
@Component({
  selector: 'app-bnk-instructions-interest-debit',
  templateUrl: './bnk-instructions-interest-debit.component.html',
  styleUrls: ['./bnk-instructions-interest-debit.component.scss']
})
export class BnkInstructionsInterestDebitComponent implements OnInit {
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  formSubmitted = false;

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  //Dropdown option variable
  ngbranch
  branchOption: any;

  selectedType
  Types = [
    { id: 1, name: "S" , value:"Success" },
    { id: 2, name: "F", value:"Failure"},
  ];

  selectedSorting
  SortingOn = [
    { id: 1, name: "Debit Scheme" },
    { id: 2, name: "Credit Scheme" },
  ];

  selectedFrequency
  SortingFrequency = [
    { id: 1, name: "Monthly" },
    { id: 2, name: "Querterly" },
    { id: 3, name: "Fixed Querterly" },
    { id: 4, name: "Half Yearly" },
    { id: 5, name: "None" },
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    // dropdown
    private _ownbranchmasterservice: OwnbranchMasterService,
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

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngbranch = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [ Validators.required]],
      STATUS: ["", [ Validators.required]],
      START_DATE: ["", [ Validators.required]],
      END_DATE: ["", [ Validators.required]],
      SORT_ON: [""],
      FREQUENCY: [""],
      NEWPAGE: [""],
    });
  }
  src: any;
  submit(event) {
    debugger
    // this.showRepo = true;
    event.preventDefault(); 
    this.formSubmitted = true;
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    let obj = this.angForm.value
    let Startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
    let Enddate = moment(obj.END_DATE).format('DD/MM/YYYY');
    let branch = obj.BRANCH_CODE;
    let status = obj.STATUS;
    console.log(status)
    const url="http://localhost/NewReport/report-code/Report/examples/BnkInstructionsInterest_debit.php?startDate='"+Startdate+"'&endDate='"+Enddate+"'&branch='"+branch+"'&status="+status+" ";
    // const url="http://localhost/NewReport/report-code/Report/examples/BnkInstructionsInterest_debit.php?startDate='"+Startdate+"'&endDate='"+Enddate+"'";
    console.log(url);
    window.open(url, '_blank');
     this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  else {
   Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
 }


    //To clear form
    // this.resetForm();
    this.formSubmitted = false;
    // }

  }
  obj1: any
  getBranch() {
    this.obj1 = [this.ngbranch]
  }
  close() {
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.showRepo = false;
  }

  

}

