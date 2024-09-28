import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { SavingMasterService } from '../../../master/customer/saving-master/saving-master.service';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-bnk-acbal-list',
  templateUrl: './bnk-acbal-list.component.html',
  styleUrls: ['./bnk-acbal-list.component.scss'],
  providers: [OwnbranchMasterService, SchemeTypeDropdownService, SchemeAccountNoService, SchemeCodeDropdownService]
})

export class BnkAcbalListComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  formSubmitted = false;
  defaultDate: any
  showRepo: boolean = false;
  report_url = environment.report_url;
  // Created Form Group
  ngForm: FormGroup;
  iframeurl: any = ' ';
  clicked: boolean = false;
  //api
  //dropdown
  scheme: any[];
  startingacc: any[];
  endingacc: any[];
  branchOption: any[];
  // for dropdown ng module

  ngbranch: any = null;
  scode: any = null;
  obj: any;
  startingAccount: any = null;
  EndingAccount: any = null;
  url = environment.base_url;

  ngscheme: any = null
  ngBranchCode
  branchCode
  branch_code
  ngacno: any;
  schemeList: any[];
  ngIntroducer: any = null

  selectedCode: any;
  account: any[];
  master: any;
  bsValue: any;
  fromdate: any;
  setLang: any;

  constructor(private http: HttpClient,
    private fb: FormBuilder,
    public schemeTypeDropdown: SchemeTypeDropdownService,
    private _schemeService: SchemeAccountNoService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private savingMasterService: SavingMasterService,
    private _ACMasterDropdownService: ACMasterDropdownService,
    private config: NgSelectConfig,
    private sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,
    private translate: TranslateService,
    public router: Router) {
    this.defaultDate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ["", [Validators.required]],
      FROM_AC_NO: ['', [Validators.required]],
      TO_AC_NO: ['', [Validators.required]],
      radio: new FormControl('none'),
      radio_sort: new FormControl('account number'),
      FROM_DATE: ['', [Validators.required]],
      PRINT_MAN_NO: [''],
      PRINT_OP_DATE: [''],
      PRINT_ANA_REASON: [''],
    });
  }

  ngOnInit(): void {
    this.createForm();
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE;

      //Translation
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })

    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA' || scheme.name == 'LK' || scheme.name == 'AG' || scheme.name == 'IV' || scheme.name == 'GS');
      });
      this.scheme = data;

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



  // For Starting account and Ending Account dropdown
  getschemename: any
  getbranchName
  getcode
  getBranch() {
    this.getIntroducer()
  }
  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }
  getBranchName(event) {
    this.getbranchName = event.branchName
    this.getcode = event.value
  }

  getIntroducer() {

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = this.ngForm.value.BRANCH_CODE;
    this.obj = [this.scode, this.ngbranch]

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
  src: any;
  view(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = this.getbranchName;
    let code = this.getcode
    if (this.ngForm.valid) {
      let obj = this.ngForm.value
      this.showRepo = true;
      // let startDate = moment(obj.FROM_DATE).format('DD/MM/YYYY');
      var sdate = moment(obj.FROM_DATE).startOf('quarter').format('DD/MM/YYYY');

      let startDate: any;
      if (this.defaultDate == obj.FROM_DATE) {
        startDate = moment(this.defaultDate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        startDate = moment(this.defaultDate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let scheme = obj.Scheme_code
      let Rstartingacc = obj.FROM_AC_NO
      let Rendingacc = obj.TO_AC_NO
      let branch = obj.BRANCH_CODE
      let Rdio = obj.radio
      let Rdiosort = obj.radio_sort
      let checkbox1 = obj.PRINT_MAN_NO
      let checkbox2 = obj.PRINT_OP_DATE
      let checkbox3 = obj.PRINT_ANA_REASON


      this.iframeurl = this.report_url + "examples/BalanceList.php?startDate='" + startDate + "'&Rdio='" + Rdio + "'&scheme='" + scheme + "'&branch='" + this.ngbranch + "'&Rstartingacc='" + Rstartingacc + "'&Rendingacc='" + Rendingacc + "'&Rdiosort='" + Rdiosort + "'&checkbox1='" + checkbox1 + "'&checkbox2='" + checkbox2 + "'&checkbox3='" + checkbox3 + "&bankName=" + bankName + "&branchName='" + branchName + "'&code='" + code + "'";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);

      console.log(this.iframeurl);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

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
    this.showRepo = false;
    this.clicked = false;
  }

}
