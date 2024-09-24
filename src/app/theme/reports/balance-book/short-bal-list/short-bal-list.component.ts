import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import Swal from 'sweetalert2';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-short-bal-list',
  templateUrl: './short-bal-list.component.html',
  styleUrls: ['./short-bal-list.component.scss']
})
export class ShortBalListComponent implements OnInit {
  // Created Form Group
  ngForm: FormGroup;
  //for date
  maxDate: Date;
  minDate: Date;
  bsValue: any;
  fromdate: any;

  defaultDate: any
  ///iframe 
  formSubmitted = false;
  report_url = environment.report_url;
  showRepo: boolean = false;
  clicked: boolean = false;
  iframeurl: any = ' ';


  // for dropdown ng module

  ngbranch: any = null
  scode: any = null
  //dropdown
  branchOption: any[];
  scheme: any[];
  setLang: any;

  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private translate: TranslateService,

  ) {
    this.defaultDate = moment().format('DD/MM/YYYY');
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
    });
    //display date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE;
      //Translation
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    });
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA' || scheme.name == 'LK' || scheme.name == 'AG' || scheme.name == 'IV' || scheme.name == 'GS');
      });
      this.scheme = filtered;

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
  //validation
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.required]],
    });
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
    let branchName = userData.branch.NAME;

    if (this.ngForm.valid) {
      let obj = this.ngForm.value
      this.showRepo = true;
      let startDate = moment(obj.FROM_DATE).format('DD/MM/YYYY');
      var sdate = moment(obj.FROM_DATE).startOf('quarter').format('DD/MM/YYYY');
      let scheme = obj.Scheme_code

      let branch = obj.BRANCH_CODE



      this.iframeurl = this.report_url + "examples/BalanceList.php?startDate='" + startDate + "'&scheme='" + scheme + "'&sdate='" + sdate + "'&branch='" + this.ngbranch + bankName + "";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);



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
    this.ngForm.controls.Scheme_code.reset();
    this.showRepo = false;
    this.clicked = false;
  }

}



