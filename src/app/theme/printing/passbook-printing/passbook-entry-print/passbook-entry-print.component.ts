import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Scheme12Service } from '../../../../shared/elements/scheme12.service';
import { Scheme13Service } from '../../../../shared/elements/scheme13.service';

import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { CustomerIdService } from 'src/app/theme/master/customer/customer-id/customer-id.service';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SavingMasterService } from 'src/app/theme/master/customer/saving-master/saving-master.service';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-passbook-entry-print',
  templateUrl: './passbook-entry-print.component.html',
  styleUrls: ['./passbook-entry-print.component.scss']
})
export class PassbookEntryPrintComponent implements OnInit {

  // Created Form Group
  ngForm: FormGroup;
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  equal: any
  startfrom
  startto
  scode
  //iframe
  formSubmitted = false;
  clicked: boolean = false;
  showRepo: boolean = false;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = ' ';
  //dropdown
  branchOption: any[];
  getschemename: any
  obj: any;
  introducerACNo: any;
  firstno
  bankAcno
  // for dropdown ng module
  ngbranch: any = null;
  ngcust: any = null;
  branchName: any;
  scheme: any[];
  transferSchemeDetails: any;
  tScheme: any;
  constructor(private fb: FormBuilder,
    private translate:TranslateService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private customerID: CustomerIDMasterDropdownService,
    public customerIdService: CustomerIdService, private schemeCodeDropdownService: SchemeCodeDropdownService,
    private savingMasterService: SavingMasterService,
    private http: HttpClient,
    private sanitizer: DomSanitizer) {
      this.translate.setDefaultLang(environment.setLang);
    this.todate = moment().format('DD/MM/YYYY');
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
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'TD' || scheme.name == 'SB' || scheme.name == 'LN');
      });
      this.scheme = filtered;

    })

    //for starting and ending date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
      this.ngForm.patchValue({
        LINES_PER_PASSBOOKPAGE: data.LINES_PER_PASSBOOKPAGE
      })
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      this.todate = data.CURRENT_DATE

      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
      this.fromdate = this.fromdate._d
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }
  }
  //validation
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      FIRST_NO: ["", [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.required]],
      START_DATE: ["",],
      PS_LINES_PRINTED: [0, [Validators.required]],
      LINES_PER_PASSBOOKPAGE: [0, [Validators.required]],
    });
  }
  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name
  }
  getIntro(event) {
    this.getschemename = event.name
    this.introducerACNo = []
    this.firstno = null
    this.getIntroducer()
  }

  //get account no according scheme for introducer
  getIntroducer() {
    this.obj = [this.scode, this.ngbranch,]
    switch (this.getschemename) {
      case 'SB':
        this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
        })
        break;


      case 'LN':
        this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
        })
        break;

      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
        })
        break;

      case 'CC':
        this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
        })
        break;


    }
  }
  end() { }
  src: any;
  view(event) {
    

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if (this.ngForm.valid) {
      let obj = this.ngForm.value
      this.showRepo = true;
      let custid = obj.FIRST_NO
      let branch = obj.BRANCH_CODE
      let scheme = obj.Scheme_code
      let schemeName = this.tScheme

      let date = moment(obj.START_DATE).format('DD/MM/YYYY');
      let tdate = moment(obj.END_DATE).format('DD/MM/YYYY');
      //for start date
      if (this.fromdate == userData.branch.syspara.CURRENT_DATE) {
        obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.fromdate).format('DD/MM/YYYY');
        let toDate = moment(date, 'DD/MM/YYYY')
        obj['START_DATE'] = date
      }
      //for end date
      if (this.todate == userData.branch.syspara.CURRENT_DATE) {
        obj['END_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.todate).format('DD/MM/YYYY');
        let tDate = moment(date, 'DD/MM/YYYY')
        obj['END_DATE'] = date
      }

      // $AC_NO = '101102502100015';
      // $AC_ACNOTYPE = 'LN';
      // AC_TYPE
      // this.iframe5url=this.report_url+"examples/passbookprint.php?stdate='" + obj.START_DATE + "'&etdate='" + obj.END_DATE + "'&bankName='" + bankName + "'&branchName='" + this.branchName + "'&AC_CUSTID=" + custid + "&branch=" + branch + "&branch_code='"+branch+"'" ;
      let flag = null
      if (this.getschemename == 'LN' || this.getschemename == 'CC' || this.getschemename == 'DS') {
        flag = 2
      }
      else if (this.getschemename == 'SB' || this.getschemename == 'CA' || this.getschemename == 'TD') {
        flag = 1
      }
      this.iframe5url = this.report_url + "examples/passbookprintnew.php?AC_NO='" + this.bankAcno + "'&flag=" + flag + "&AC_ACNOTYPE='" + this.getschemename + "'&AC_TYPE='" + this.scode + "'";
      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Mandatory_Field')}`, 'warning').then(() => { this.clicked = false });
    }

  }

  close() {
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.ngForm.controls.FIRST_NO.reset();
    this.showRepo = false;
    this.clicked = false;
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
    this.scode = null
    this.firstno = null
    this.introducerACNo = []
    // this.bankAcno = event.BankAcNo

  }
  getAcno(event) {
    this.bankAcno = event.BANKACNO
    let obj = {
      AC_NO: event.BANKACNO
    }
    this.http.post(this.url + '/voucher/getpassbookHistory', obj).subscribe((data: any) => {
      this.ngForm.patchValue({
        PS_LINES_PRINTED: data != null ? data.PS_LINES_PRINTED : 0,
        START_DATE: data != null ? data.LAST_PRINT_DATE : null
      })
    })
  }
}
