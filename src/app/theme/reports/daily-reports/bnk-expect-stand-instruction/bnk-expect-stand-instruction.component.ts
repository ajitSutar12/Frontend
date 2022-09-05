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
  selector: 'app-bnk-expect-stand-instruction',
  templateUrl: './bnk-expect-stand-instruction.component.html',
  styleUrls: ['./bnk-expect-stand-instruction.component.scss']
})
export class BnkExpectStandInstructionComponent implements OnInit {
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
  report_url = environment.report_url;

  iframeurl: any = ' ';
  clicked:boolean=false;
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

    // let data: any = localStorage.getItem('user');
    // let result = JSON.parse(data);
    // if (result.RoleDefine[0].Role.id == 1) {
    //   this.angForm.controls['BRANCH_CODE'].enable()
    //   this.ngbranch = result.branch.id
    // }
    // else {
    //   this.angForm.controls['BRANCH_CODE'].disable()
    //   this.ngbranch = result.branch.id
    // }
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [ Validators.required]],
      STATUS: ["", [ Validators.required]],
      START_DATE: ["", [ Validators.required]],
      FREQUENCY: ["", [ Validators.required]],
      SORT_ON: [""],
      NEWPAGE: [""],
    });
  }
  src: any;
  View(event) {
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.angForm.valid) {

      // this.showRepo = true;
      let obj = this.angForm.value
      let stdate = moment(obj.START_DATE).format('DD/MM/YYYY');
      let Branch = obj.BRANCH_CODE;
      let STATUS = obj.STATUS;
      let SORT_ON = obj.SORT_ON;
      let FREQUENCY = obj.FREQUENCY;
      let NEWPAGE = obj.NEWPAGE;

      this.iframeurl = this.report_url+ "examples/StandingInstructionDebit.php?stdate='" + stdate + "'&branchName='" + branchName + "'&STATUS='" + STATUS + "'&SORT_ON='" + SORT_ON + "'&FREQUENCY='" + FREQUENCY + "'&NEWPAGE='" + NEWPAGE + "'&bankName='" + bankName + "'";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
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

