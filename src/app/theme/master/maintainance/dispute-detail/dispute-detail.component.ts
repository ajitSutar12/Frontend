import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first, map } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { DepositLoanInterestRateEditChangeService } from '../deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-dispute-detail',
  templateUrl: './dispute-detail.component.html',
  styleUrls: ['./dispute-detail.component.scss']
})
export class DisputeDetailComponent implements OnInit {
  [x: string]: unknown;

  formSubmitted = false;
  scheme: any;
  Accountno: any;
  tscheme: string;
  angForm!: FormGroup;
  Branch_Code
  bsValue = new Date();
  clicked = false;
  ngbranch!: any;
  branchOption: any[];
  selectedScheme: any;
  start: any;
  court: any;
  loanstage: any;
  advocates: any;
  ngAccountno: any;
  selectedAccountNumber: any;
  Suite_Date: string;
  maxDate: Date;
  minDate: Date;
  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer,
    private config: NgSelectConfig,
    private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private _interestRateChange: DepositLoanInterestRateEditChangeService,
    private schemeAccountNoService: SchemeAccountNoService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    public router: Router,) {
    this.CASE_SUITE_DATE = moment().format('DD/MM/YYYY');
    this.COURT_ORDER_DATE = moment().format('DD/MM/YYYY');
    this.COURT_RESULT_DATE = moment().format('DD/MM/YYYY');
    this.INT_CALC_DATE = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }
  url = environment.base_url;
  tableData: any[] = [];
  showData = []
  // tableData = [
  //   { accountNumber: 1, AccountName: 'abc', LedgerBalance: 1200,Amount:100, },
  //   { accountNumber: 2, AccountName: 'xyz', LedgerBalance: 1200,Amount:100,}

  // ];
  ngOnInit(): void {
    this.createForm()
    this.showtable();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.AC_NAME == 'LN' || scheme.AC_NAME == 'CC' || scheme.AC_NAME == 'DS');
      });
      this.scheme = filtered;
      console.log(this.scheme);
    });
    this.http.get<any[]>(this.url + '/ledger-view/cschem')
      .subscribe(
        response => {
          this.schemes = response;
        },
        error => {
          console.error('Error fetching Scheme name:', error);
        }
      );
    this.http.get<any[]>(this.url + '/advocate-master')
      .subscribe(
        response => {
          this.advocates = response;
          console.log(response)
        },

      );

    this.http.get<any[]>(this.url + '/court-master')
      .subscribe(
        response => {
          this.court = response;
          console.log(response)
        },

      );

    this.http.get<any[]>(this.url + '/loan-stage-master')
      .subscribe(
        response => {
          this.loanstage = response;
          console.log(response)
        },

      );
  }

  showtable() {
    // this.http.get('http://192.168.1.157:4771/dispute-loan-master/2').subscribe((data: any) => {
    this.http.get(this.url+'/dispute-loan-master/2').subscribe((data: any) => {

      // console.log(data);

      this.tableData = data
      this.showData.push(this.tableData)

      console.log(this.tableData)
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      CASE_SUITE_DATE: ["", [Validators.required]],
      COURT_INT_RATE: ['', [Validators.pattern, Validators.required]],
      COURT_INSTALLMENT: ['', [Validators.pattern, Validators.required]],
      COURT_ORDER_DATE: ["", [Validators.required]],
      COURT_RESULT_DATE: ["", [Validators.required]],
      INT_CALC_DATE: ["", [Validators.required]],
      SUITE_AMT: ['', [Validators.pattern, Validators.required]],
      // BRANCH_CODE: ['', [Validators.pattern, Validators.required]],
      RECOVERABLE_AMT: ['', [Validators.pattern, Validators.required]],
      RECOVERABLE_INT: ['', [Validators.pattern, Validators.required]],
      COURT_CASE_NO: ['', [Validators.required]],
      AC_REMARK: ['', [Validators.required]],
      // CAL_VALUE: ['', [Validators.required]],
      AC_ACNOTYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      ADVOCATE: ['', [Validators.required]],
      LOAN_STAGE: ['', [Validators.required]],
      COURT: ['', [Validators.required]],
      OLD_SCHEME: ['', [Validators.required]],
      REF_OLD_AC_NO: ['', [Validators.pattern, Validators.required]],
    });
  }


  submit(): void {
    this.formSubmitted = true;
    let formVal = this.angForm.value;
    if (this.angForm.valid) {
      let obj = {
        AC_ACNOTYPE: this.tScheme,
        AC_TYPE: this.scode,
        AC_NAME: this.getschemename,
        REF_AC_ACNOTYPE: this.tScheme,
        COURT: this.courtcode,
        CASE_SUITE_DATE: this.suitedate,
        COURT_ORDER_DATE: this.courtdate,
        COURT_RESULT_DATE: this.resultdate,
        COURT_CASE_NO: formVal.Case_No,
        INT_CALC_DATE: this.calculationdate,
        LOAN_STAGE: this.code,
        ADVOCATE: this.code,
        REF_OLD_AC_TYPE: this.scode,
        AC_NO: this.bank,
        REF_AC_TYPE: this.scode,
        REF_AC_NO: this.bank,
        REF_OLD_AC_NO: this.bank,
        COURT_INT_RATE: formVal.Court_int_Rate,
        SUITE_AMT: formVal.Suite_Amount,
        COURT_INSTALLMENT: formVal.Court_Installment,
        RECOVERABLE_AMT: formVal.Recoverable_Amount,
        RECOVERABLE_INT: formVal.Recoverable_Interest,
        lnmasterID: this.accountid
      };
      console.log(obj)
      // this.http.post<any>('http://192.168.1.157:4771/dispute-loan-master/insert', obj)
      this.http.post<any>(this.url+'/dispute-loan-master/insert', obj)

        .subscribe(
          (response) => {
            Swal.fire('Success!', 'Form Submitted Successfully!', 'success');
            //to reset form
            this.angForm.reset();
          });
    } else {
      Swal.fire('Error!', 'Please Fill All Mandatory Fields!', 'error');
    }
  }
  updateData(data): Observable<any> {
    // return this.http.put('http://192.168.1.157:4771/dispute-loan-master/update', data);
    return this.http.put(this.url+'/dispute-loan-master/update', data);

  }

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  hidecancel=false;
  updateID;
  model: any = {};
  myvalue: any;
  editvalue(i: number) {
    console.log('hii', this.showData);
    this.showButton = false;
    this.updateShow = true;
    this.updateID = this.showData[i].id;
    this.angForm.patchValue({
      SUITE_AMT: this.showData[i].SUITE_AMT,
      AC_ACNOTYPE: this.showData[i].AC_ACNOTYPE,
      AC_TYPE: this.showData[i].AC_TYPE,
      AC_NO: this.showData[i].AC_NO,
      REF_OLD_AC_NO: this.showData[i].REF_OLD_AC_NO,
      COURT: this.showData[i].COURT,
      CASE_SUITE_DATE: this.showData[i].CASE_SUITE_DATE,
      COURT_ORDER_DATE: this.showData[i].COURT_ORDER_DATE,
      COURT_RESULT_DATE: this.showData[i].COURT_RESULT_DATE,
      COURT_CASE_NO: this.showData[i].COURT_CASE_NO,
      COURT_INT_RATE: this.showData[i].COURT_INT_RATE,
      COURT_INSTALLMENT: this.showData[i].COURT_INSTALLMENT,
      RECOVERABLE_AMT: this.showData[i].RECOVERABLE_AMT,
      RECOVERABLE_INT: this.showData[i].RECOVERABLE_INT,
      INT_CALC_DATE: this.showData[i].INT_CALC_DATE,
      LOAN_STAGE: this.showData[i].LOAN_STAGE,
      ADVOCATE: this.showData[i].ADVOCATE,
      REF_OLD_AC_TYPE: this.showData[i].REF_OLD_AC_TYPE,
      AC_REMARK: this.showData[i].AC_REMARK,
      AC_NAME: this.showData[i].AC_NAME,
      REF_AC_NO: this.showData[i].REF_AC_NO,
      REF_AC_TYPE: this.showData[i].REF_AC_TYPE,
      REF_AC_ACNOTYPE: this.showData[i].REF_AC_ACNOTYPE,
      lnmasterID: this.showData[i].lnmasterID,
    })
    this.myvalue = i;
  }

  update() {
    this.showButton = true;
    this.updateShow = false;
    let data = {
      id: this.updateID,
      SUITE_AMT: this.angForm.value.SUITE_AMT,
      AC_ACNOTYPE: this.tScheme,
      COURT: this.courtcode,
      AC_NO: this.bank,
      CASE_SUITE_DATE:  this.suitedate,
      COURT_ORDER_DATE: this.courtdate,
      COURT_RESULT_DATE: this.resultdate,
      COURT_CASE_NO: this.angForm.value.COURT_CASE_NO,
      COURT_INT_RATE: this.angForm.value.COURT_INT_RATE,
      COURT_INSTALLMENT: this.angForm.value.COURT_INSTALLMENT,
      RECOVERABLE_AMT: this.angForm.value.RECOVERABLE_AMT,
      RECOVERABLE_INT: this.angForm.value.RECOVERABLE_INT,
      INT_CALC_DATE: this.calculationdate,
      LOAN_STAGE:  this.code,
      ADVOCATE:  this.code,
      AC_NAME:this.getschemename,
      REF_AC_NO: this.bank,
      AC_TYPE: this.scode,
      REF_OLD_AC_NO: this.bank,
      REF_OLD_AC_TYPE: this.scode,
      REF_AC_TYPE: this.scode,
      REF_AC_ACNOTYPE: this.tScheme,
      lnmasterID: this.accountid
    };
    this.updateData(data).subscribe(
      (_response) => {
        Swal.fire('Success!', 'Form Updated Successfully!', 'success');
        this.resetForm();
      });
  }

  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  name
  getname(event) {
    this.name = event.$ngOptionLabel
  }
  code
  getname1(event) {
    this.code = event.CODE
  }
  courtcode
  getname2(event) {
    this.courtcode = event.CODE
  }
  VScheme: any;
  tScheme:any;
  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.S_ACNOTYPE
    this.VScheme = event.value
    this.scode = event.id
    console.log(this.tScheme);
    this.getintroduce();



  }
  getschemename: any;
  accountid: any;
  bank: any;
  bankvalue: any
  getAccountList(event) {
    this.getschemename = event.name
    this.accountid = event.id
    this.bank = event.bankacno
    this.bankvalue = event.value
    console.log(this.Accode);

  }


  scode
  getintroduce() {

    this.obj = [this.scode, this.ngbranch]
    this.ngfromac = null
    this.ngtoac = null
    this.arrTable = []
    this.InterestArr = []
    switch (this.tScheme) {
      case 'LN':
        this._interestRateChange.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data;
          console.log(data);
        })
        break;
      case 'CC':
        this._interestRateChange.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          console.log(data);
        })
        break;
      case 'DS':
        this._interestRateChange.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          console.log(data);
        })
        break;
    }

  }

  resetscheme() {
    if (this.tempschmetype != this.selectedCode) {
      this.selectedScheme = null
      this.customer = null
      this.introducerACNo = []
    }
  }

  reset() {
    this.angForm.controls['AC_ACNOTYPE'].reset()
    this.angForm.controls['AC_NO'].reset()
    this.angForm.controls['CASE_SUITE_DATE'].reset()
    this.angForm.controls['COURT_INT_RATE'].reset()
    this.angForm.controls['COURT_INSTALLMENT'].reset()
    this.angForm.controls['COURT_ORDER_DATE'].reset()
    this.angForm.controls['SUITE_AMT'].reset()
    this.angForm.controls['COURT_RESULT_DATE'].reset()
    this.angForm.controls['RECOVERABLE_AMT'].reset()
    this.angForm.controls['INT_CALC_DATE'].reset()
    this.angForm.controls['RECOVERABLE_INT'].reset()
    this.angForm.controls['COURT_CASE_NO'].reset()
    this.angForm.controls['OLD_SCHEME'].reset()
    this.angForm.controls['REF_OLD_AC_NO'].reset()
    this.angForm.controls['ADVOCATE'].reset()
    this.angForm.controls['LOAN_STAGE'].reset()
    this.angForm.controls['COURT'].reset()
    this.angForm.controls['AC_REMARK'].reset()


  }
resetForm() {
    this.clicked = false;
    this.reset();
  }
  suitedate
  getsuitedate(event: any) {
    this.suitedate = event.target.value
  }
  courtdate
  getcourtdate(event: any) {
    this.courtdate = event.target.value
  }
  resultdate
  getresultdate(event: any) {
    this.resultdate = event.target.value
  }
  calculationdate
  getcalculationdate(event: any) {
    this.calculationdate = event.target.value
  }
}

