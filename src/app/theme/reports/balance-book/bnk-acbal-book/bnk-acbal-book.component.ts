import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';

import Swal from 'sweetalert2';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SavingMasterService } from '../../../master/customer/saving-master/saving-master.service';



@Component({
  selector: 'app-bnk-acbal-book',
  templateUrl: './bnk-acbal-book.component.html',
  styleUrls: ['./bnk-acbal-book.component.scss']
})

export class BnkACBalBookComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  formSubmitted = false;
  defaultDate: any
  showRepo: boolean = false;
  clicked: boolean = false;
  // Created Form Group
  ngForm: FormGroup;
  //api
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

  url = environment.base_url;
  report_url = environment.report_url;

  iframeurl: any = ' ';
  ngscheme: any = null
  ngBranchCode
  branchCode
  branch_code
  ngacno: any;
  schemeList: any[];
  ngIntroducer: any = null
  showLoading: boolean = false;
  selectedCode: any;
  account: any[];
  master: any;

  schemeType
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public schemeTypeDropdown: SchemeTypeDropdownService,
    private _schemeService: SchemeAccountNoService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private savingMasterService: SavingMasterService,
    private _ACMasterDropdownService: ACMasterDropdownService,


    private sanitizer: DomSanitizer,
    private config: NgSelectConfig,
    public router: Router,) {
    this.defaultDate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.pattern, Validators.required]],
      FROM_DATE: ['', [Validators.pattern, Validators.required]],
      FROM_AC_NO: ['', [Validators.pattern, Validators.required]],
      TO_AC_NO: ['', [Validators.pattern, Validators.required]],
      radio: new FormControl('none'),
      radio_sort: new FormControl('account number'),

    });
  }

  ngOnInit(): void {
    this.createForm();
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA' || scheme.name == 'LK' || scheme.name == 'AG' || scheme.name == 'IV' || scheme.name == 'GS');
      });
      this.scheme = data;

      this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
        this.defaultDate = data.CURRENT_DATE;
      })

    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }

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
      case 'SB':
        this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

      case 'SH':
        this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

      case 'CA':
        this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

      case 'LN':
        this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

      case 'DS':
        this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

      case 'CC':
        this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

      case 'GS':
        this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

      case 'PG':
        this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

      case 'AG':
        this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

      case 'IV':
        this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

      case 'GL':
        this._ACMasterDropdownService.getACMasterList1().subscribe(data => {
          console.log('data', data)
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;
    }

  }
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 

  view(event) {

    this.showLoading = true;
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.ngForm.valid) {
      let obj = this.ngForm.value
      this.showRepo = true;
      // let date = moment(obj.FROM_DATE).format('DD/MM/YYYY');
      var sdate = moment(obj.FROM_DATE).startOf('quarter').format('DD/MM/YYYY');

      let date: any;
      if (this.defaultDate == obj.FROM_DATE) {
        date = moment(this.defaultDate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        date = moment(this.defaultDate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };
      let year: any;
      if (this.defaultDate == userData.branch.syspara.CURRENT_DATE) {
        year = moment(userData.branch.syspara.CURRENT_DATE, 'DD/MM/YYYY').format('YYYY-MM-DD')
      }
      else {
        year = moment(this.defaultDate, 'DD/MM/YYYY').format('YYYY-MM-DD')

      };
      let scheme = obj.Scheme_code
      let Rstartingacc = obj.FROM_AC_NO
      let EndingAccount = obj.TO_AC_NO
      let branch = this.ngbranch
      let Rdio = obj.radio
      let Rdiosort = obj.radio_sort

      this.iframeurl = this.report_url + "examples/BalanceBook.php?&date='" + date + "'&Rdio='" + Rdio + "'&scheme='" + scheme + "'&sdate='" + date + "'&branch='" + this.ngbranch + "'&Rstartingacc='" + Rstartingacc + "'&EndingAccount='" + EndingAccount + "'&Rdiosort='" + Rdiosort + "'&bankName='" + bankName + "'&year='" + year + "'";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  onLoad() {
    this.showLoading = false;
  }

  close() {
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    // this.createForm()
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.FROM_AC_NO.reset();
    this.ngForm.controls.TO_AC_NO.reset();
    this.ngForm.controls.radio.reset();
    this.ngForm.controls.radio_sort.reset();
    this.showRepo = false;
    this.clicked = false;
  }
}
