
import { Component, OnInit } from "@angular/core";
import { NgSelectConfig } from '@ng-select/ng-select'
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { first } from 'rxjs/operators';
import Swal from "sweetalert2";
import * as moment from "moment";
import { environment } from "src/environments/environment";
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-bnk-lnamt-statement',
  templateUrl: './bnk-lnamt-statement.component.html',
  styleUrls: ['./bnk-lnamt-statement.component.scss'],
  providers: [SchemeCodeDropdownService, SchemeAccountNoService, OwnbranchMasterService]
})
export class BnkLNamtStatementComponent implements OnInit {
  //date
  maxDate: Date;
  minDate: Date;
  startingdate: any = null
  endingdate: any = null

  ngForm: FormGroup;
  iframe2url: any = '';
  clicked: boolean = false;
  //api
  url = environment.base_url;
  formSubmitted = false;
  //account
  memFrom
  memTo
  branch
  mem: any
  report_url = environment.report_url
  //dropdown
  scheme: any[];
  startingacc: any[];
  endingacc: any[];
  branchOption: any[];
  // for dropdown ng module
  ngbranch: any = null;
  schemeCode: any = null;
  obj: any;
  startingAccount: any = null;
  EndingAccount: any = null;

  showRepo: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public router: Router,
    private http: HttpClient,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private sanitizer: DomSanitizer,

  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()

    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      });
      this.scheme = filtered;

    })
  }

  // validations for ngForm
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ['', [Validators.required]],
      Starting_Account: ['', [Validators.required]],
      Ending_Account: ['', [Validators.required]],
      Starting_Date: ['', [Validators.required]],
      Ending_Date: ['', [Validators.required]],
      Print_Every_Account_on_New_Page: [''],
      Print_Closed_Account: [''],
      Print_Added_Penal_Interest: [''],
      Print_Concise_Report: [''],
    });
  }


  //For Starting account and Ending Account dropdown
  getschemename: any

  getBranch() {
    this.getIntroducer()
  }
  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }


  getIntroducer() {

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.schemeCode, branchCode]
    switch (this.getschemename) {


      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;
      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

    }
  }

  src: any;
  View(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;

    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value
      let startDate = moment(obj.Starting_Date).format('DD/MM/YYYY');
      let endDate = moment(obj.Ending_Date).format('DD/MM/YYYY');
      let branch = obj.BRANCH_CODE;
      let startingcode = obj.Starting_Account;
      let endingcode = obj.Ending_Account;
      let PrintEveryAccountonNewPage = obj.Print_Every_Account_on_New_Page;
      let PrintClosedAccount = obj.Print_Closed_Account;
      let PrintAddedPenalInterest = obj.Print_Added_Penal_Interest;
      let PrintConciseReporteme = obj.Print_Concise_Report;
      let scheme = obj.Scheme_code;


      this.iframe2url = this.report_url + "/LoanStatement.php?startDate='" + startDate + "'&endDate='" + endDate + "'&branch='" + branch + "'&startingcode='" + startingcode + "'&endingcode='" + endingcode + "'&scheme= '" + scheme +
        "' &PrintEveryAccountonNewPage= '" + PrintEveryAccountonNewPage + "' &PrintClosedAccount= '" + PrintClosedAccount + "'&PrintAddedPenalInterest= '" + PrintAddedPenalInterest + "' &PrintConciseReporteme= '" + PrintConciseReporteme + "' &bankName='" + bankName + "'";
      this.iframe2url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe2url);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }

  }
  //load acno according start and end acno
  loadAcno() {
    this.memFrom = this.ngForm.controls['Starting_Account'].value
    this.memTo = this.ngForm.controls['Ending_Account'].value
    this.branch = this.ngForm.controls['BRANCH_CODE'].value
    if (this.ngForm.controls['Starting_Account'].value < this.ngForm.controls['Ending_Account'].value) {
      this.mem = [this.memFrom, this.memTo, this.branch]

      if (this.getschemename == 'LN') {
        this.http.get(this.url + '/term-loan-master/scheme/' + this.mem).subscribe((data) => {
        });
      }
      else if (this.getschemename == 'CC') {
        this.http.get(this.url + '/cash-credit-master/scheme/' + this.mem).subscribe((data) => {
        });
      }
      else if (this.getschemename == 'DS') {
        this.http.get(this.url + '/dispute-loan-master/scheme/' + this.mem).subscribe((data) => {
        });
      }


    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  close() {
    this.resetForm()
  }

  resetForm() {
    this.createForm()
    this.showRepo = false;
    this.clicked = false;
  }
}
