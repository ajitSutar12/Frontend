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
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-bnk-instructions-standing-debit',
  templateUrl: './bnk-instructions-standing-debit.component.html',
  styleUrls: ['./bnk-instructions-standing-debit.component.scss']
})
export class BnkInstructionsStandingDebitComponent implements OnInit {
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();

  clicked:boolean=false;

  iframeurl: any = ' ';
  equal: any
  startfrom
  startto
  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  //Dropdown option variable
  ngbranch
  branchOption: any;

  selectedType
  Types = [
    { id: 1, name: "S", value: "Success" },
    { id: 2, name: "F", value: "Failure" },
  ];

  selectedSorting
  SortingOn = [
    { id: 1, name: "Debit Scheme" },
    { id: 2, name: "Credit Scheme" },
  ];

  sorton
  sort = [
    { id: 1, value: "Debit" },
    { id: 2, value: "Credit" },
  ]

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
      RADIO: [""],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      SORT: ["", [Validators.required]],
      NEWPAGE: ["", [Validators.required]],
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
    let branchName = userData.branch.NAME;

    debugger
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
      this.iframeurl = this.report_url+"examples/standinstructlogSucess.php?stadate='" + stadate + "'&edate='" + edate + "'&branchName='" + branchName + "'&success='" + success + "'&frequency='" + frequency + "'&startscheme='" + startscheme + "'&sort='" + sort + "'&bankName='" + bankName + "'";
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

      this.iframeurl = this.report_url+"examples/standinstructlogFailure.php?stadate='" + stadate + "'&edate='" + edate + "'&branchName='" + branchName + "'&failure='" + failure + "'&frequency='" + frequency + "'&startscheme='" + startscheme + "'&sort='" + sort + "'&bankName='" + bankName + "'";
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

