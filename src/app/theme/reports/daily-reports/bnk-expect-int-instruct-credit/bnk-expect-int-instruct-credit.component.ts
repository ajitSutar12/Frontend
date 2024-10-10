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
  iframe5url: any = '';
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
  //for frequency
  selectedFrequency
  SortingFrequency = [
    { id: 1, name: "Monthly",value:"M" },
    { id: 2, name: "Querterly" ,value:"Q"},
    { id: 3, name: "Fixed Querterly",value:"F" },
    { id: 4, name: "Half Yearly" ,value:"H"},
    { id: 5, name: "Days" ,value:"H"},
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
      Date: ["", [Validators.required]],
      FREQUENCY: ["", [Validators.required]],
      NEWPAGE: [''],
      Scroll_Type:['']
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
      this.showRepo = true;
      let obj = this.angForm.value
      // let date: any;
      // if (this.date == obj.Date) {
      //   date = moment(this.date, 'DD/MM/YYYY').format('DD/MM/YYYY')
      // } else {
      //   date = moment(this.date, 'DD/MM/YYYY').format('DD/MM/YYYY')
      // };
      let branch = obj.BRANCH_CODE;
      let frequency = obj.FREQUENCY;
     let scrolltype=obj.Scroll_Type
      this.iframe5url = this.report_url + "examples/InterestExecutionListCredit.php?date='" + this.date +  "'&branch='" + branch + "'&frequency='" + frequency + "'&bankName='" + bankName + "'&scrolltype='" + scrolltype +"'&branchName='" + branchName +"' ";
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
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
    
    this.angForm.controls.FREQUENCY.reset();
    this.showRepo = false;
    this.clicked = false;
  }

}

