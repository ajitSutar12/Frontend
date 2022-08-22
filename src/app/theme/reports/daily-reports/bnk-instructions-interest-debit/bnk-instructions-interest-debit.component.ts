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
import { first, reduce } from "rxjs/operators";
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
  equal: any
  startfrom
  startto
  report_url = environment.report_url
  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  //Dropdown option variable
  ngbranch
  branchOption: any;
  iframeurl: any = ' ';
  clicked:boolean=false;
  // selectedType
  // Types = [
  //   { id: 1, name: "S", value: "Success" },
  //   { id: 2, name: "F", value: "Failure" },
  // ];
  sorton
  sort = [
    { id: 1, value: "Debit" },
    { id: 2, value: "Credit" },
  ]
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
  RADIO: any;
  // SUCCESS: any;
  // FAILURE: any;
  // value: string;
  success:any;
  failure:any;

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
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      SORT: ["", [Validators.required]],
      FREQUENCY: ["", [Validators.required]],
      NEWPAGE: [""],
      RADIO: [""],
      // FAILURE: [""],
    });
  }
  end() {
    this.startfrom = this.angForm.controls['START_DATE'].value
    this.startto = this.angForm.controls['END_DATE'].value
    if (this.angForm.controls['START_DATE'].value <= this.angForm.controls['END_DATE'].value) {
      this.equal = [this.startfrom, this.startto]
    }
    else {
      Swal.fire('Info', 'Ending Date Must Greater Than/Equal To Starting  Date', 'info')
    }
  }
  view(event) {

    event.preventDefault();
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
  
   if (this.angForm.controls['RADIO'].value=="success" && this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let stadate = moment(obj.START_DATE).format('DD/MM/YYYY');
      let edate = moment(obj.END_DATE).format('DD/MM/YYYY');
      let branched = obj.BRANCH_CODE;
      let success = obj.RADIO;
      let frequency = obj.FREQUENCY;
      let startscheme = obj.NEWPAGE;
      let sort = obj.SORT;
      this.iframeurl = this.report_url + "/intinstructionslogSuccess.php?stadate='" + stadate + "'&edate='" + edate + "'&branched='" + branched + "'&success='" + success + "'&frequency='" + frequency + "'&startscheme='" + startscheme + "'&sort='" + sort + "'&bankName='" + bankName + "'";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
    }
    else if (this.angForm.controls['RADIO'].value=="failure" && this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let stadate = moment(obj.START_DATE).format('DD/MM/YYYY');
      let edate = moment(obj.END_DATE).format('DD/MM/YYYY');
      let branched = obj.BRANCH_CODE;
      let failure = obj.RADIO;
      let frequency = obj.FREQUENCY;
      let startscheme = obj.NEWPAGE;
      let sort = obj.SORT;

      this.iframeurl = this.report_url + "/intinstructionslogFailure.php?stadate='" + stadate + "'&edate='" + edate + "'&branched='" + branched + "'&failure='" + failure + "'&frequency='" + frequency + "'&startscheme='" + startscheme + "'&sort='" + sort + "'&bankName='" + bankName + "'";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }

  }

  close() {
    this.resetForm()
  }
 resetForm() {
    this.createForm()
    this.showRepo = false;
    this.clicked=false;
  }




}

