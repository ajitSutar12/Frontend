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
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-bnk-expect-int-instruct-credit',
  templateUrl: './bnk-expect-int-instruct-credit.component.html',
  styleUrls: ['./bnk-expect-int-instruct-credit.component.scss']
})
export class BnkExpectIntInstructCreditComponent implements OnInit {
  iframe1url: any = '';
  clicked: boolean = false;
  // Date variables

  date: any = null
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
  //Dropdown option variable
  ngbranch
  branchOption: any;

  //for Status
  selectedType
  Types = [
    { id: 1, name: "S", value: "Success" },
    { id: 2, name: "F", value: "Failure" },
  ];


  //for frequency
  selectedFrequency
  SortingFrequency = [
    { id: 1, name: "Monthly" },
    { id: 2, name: "Querterly" },
    { id: 3, name: "Fixed Querterly" },
    { id: 4, name: "Half Yearly" },
    { id: 5, name: "None" },
  ];
  setLang: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    // dropdown
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private translate: TranslateService,
  ) {
    this.date = moment().format('DD/MM/YYYY');
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
      this.date = data.CURRENT_DATE;
      //Translation
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
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
      BRANCH_CODE: ["", [Validators.required]],
      STATUS: ["", [Validators.required]],
      Date: ["", [Validators.required]],
      FREQUENCY: ["", [Validators.required]],
      NEWPAGE: [""],
    });
  }
  src: any;
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }
  view(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.angForm.valid) {

      // this.showRepo = true;
      let obj = this.angForm.value
      // let date = this.date;

      let date: any;
      if (this.date == obj.Date) {
        date = moment(this.date, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        date = moment(this.date, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let status = obj.STATUS;
      let branch = obj.BRANCH_CODE;
      let frequency = obj.FREQUENCY;
      let PrintClosedAccounts = obj.Print_Closed_Accounts;


      this.iframe1url = this.report_url + "examples/InterestExecutionListCredit.php?date='" + date + "'&status='" + status + "'&branch='" + branch + "'&PrintClosedAccounts='" + PrintClosedAccounts + "'&frequency='" + frequency + "'&bankName='" + bankName + "' ";
      this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
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
    this.clicked = false;
  }

}

