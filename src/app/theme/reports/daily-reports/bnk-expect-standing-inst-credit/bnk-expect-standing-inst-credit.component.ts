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
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@Component({
  selector: 'app-bnk-expect-standing-inst-credit',
  templateUrl: './bnk-expect-standing-inst-credit.component.html',
  styleUrls: ['./bnk-expect-standing-inst-credit.component.scss']
})
export class BnkExpectStandingInstCreditComponent implements OnInit {
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
    { id: 1, name: "S", value: "Success" },
    { id: 2, name: "F", value: "Failure" },
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
    private systemParameter : SystemMasterParametersService,
  ) {
    this.fromdate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.fromdate = data.CURRENT_DATE;
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.angForm.controls['Branch'].enable()
    }
    else {
      this.angForm.controls['Branch'].disable()
      this.ngbranch = result.branch.id
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      STATUS: ["", [Validators.required]],
      START_DATE: ["", [Validators.required]],
      FREQUENCY: ["", [Validators.required]],
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
      let stdate = this.fromdate;
      let Branch = obj.BRANCH_CODE;
      let STATUS = obj.STATUS;
      // let END_DATE =  moment(obj.END_DATE).format('DD/MM/YYYY');
      let SORT_ON = obj.SORT_ON;
      let FREQUENCY = obj.FREQUENCY;
      let NEWPAGE = obj.NEWPAGE;

      this.iframeurl = this.report_url+"examples/StandingInstructionCredit.php?stdate='" + stdate + "'&Branch='" + Branch + "'&STATUS='" + STATUS + "'&SORT_ON='" + SORT_ON + "'&FREQUENCY='" + FREQUENCY + "'&NEWPAGE='" + NEWPAGE + "'&bankName='" + bankName + "'";
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
    // this.createForm()
    this.angForm.controls.STATUS.reset();
    this.angForm.controls.FREQUENCY.reset();
    this.showRepo = false;
    this.clicked=false;
  }


}

