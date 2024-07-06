import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, } from "@angular/core";
import { Subject, Subscription } from "rxjs";
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
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import { SchemeAccountNoService } from "src/app/shared/dropdownService/schemeAccountNo.service";
import { first } from "rxjs/operators";
import { SchemeTypeDropdownService } from "src/app/shared/dropdownService/scheme-type-dropdown.service";
import { IOption } from "ng-select";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { ReportFrameComponent } from "../../../report-frame/report-frame.component";
import { NgSelectComponent } from "@ng-select/ng-select";
import { date } from "ngx-custom-validators/src/app/date/validator";
import { DepositLoanInterestRateEditChangeService } from "src/app/theme/master/maintainance/deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.service";
import { DirectorMasterDropdownService } from "src/app/shared/dropdownService/director-master-dropdown.service";

@Component({
  selector: 'app-recommended-directorwise',
  templateUrl: './recommended-directorwise.component.html',
  styleUrls: ['./recommended-directorwise.component.scss']
})
export class RecommendedDirectorwiseComponent implements OnInit {

  iframe5url: any = '';
  @ViewChild(ReportFrameComponent) child: ReportFrameComponent;
  formSubmitted = false;

  //fromgroup
  ngForm: FormGroup
  minvalue: any;
  maxvalue: any;
  start: any;
  end: any;
  dtTrigger: Subject<any> = new Subject<any>();
  // for dropdown ng module
  fromdate: any = null
  ngbranch: any = null;
  scode: any = null;
  //ngfor
  scheme: any[];
  branchOption: any[];
  clicked: boolean = false;
  showRepo: boolean = false;
  showLoading: boolean = false;
  transferSchemeDetails: any;
  tScheme

  //date
  todate: any = null
  bsValue = new Date();

  maxDate: Date;
  minDate: Date;
  report_url = environment.report_url;
  branchName: any;
  obj: any[];
  startAcNo: any;
  endAcNo: any;
  getschemename: any;
  memTo: any;
  memFrom: any;
  branch: any;
  mem: any[];
  acno: any;
  acno2: any;
  director: any[];
  enddate: any;
  http: any;

  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer,
    private _interestRateChange: DepositLoanInterestRateEditChangeService,
    private directorMasterDropdown: DirectorMasterDropdownService,

  ) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {

    this.createForm()
    // this.getDate()
    //branchlist
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;   
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 100 && result.RoleDefine[0].Role.id==1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }    

    })

   

    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      });
      this.scheme = filtered;

      // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      //   this.todate = data.CURRENT_DATE;
      // });

    })
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

    this.directorMasterDropdown.getDirectorMastertrueList().pipe(first()).subscribe(data => {
      this.director = data;
      console.log(this.director);

    })


  }


  schemeId
  getTransferAccountList(event) {
    console.log(event);

    this.transferSchemeDetails = event
    this.tScheme = event.name
    this.schemeId = event.id

    this.getAccount()

  }

  getAccountList(event) {
    this.acno = event.bankacno


  }
  getAccountList1(event) {
    this.acno2 = event.bankacno


  }
  getAccount() {
    // this.ngAcnoFrom = null
    // this.ngAcnoTo = null
    // this.startAcNo = [];
    // this.endAcNo = [];
    // this.tableArr = []
    this.obj = [this.scode, this.ngbranch]
    switch (this.tScheme) {
      case 'LN':
        this._interestRateChange.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;
        break;
      case 'CC':
        this._interestRateChange.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.startAcNo = data
          this.endAcNo = data
          console.log(data);
        })
        break;
      case 'DS':
        this._interestRateChange.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.startAcNo = data
          this.endAcNo = data
          console.log(data);
        })
        break;


    }
  }

  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ["", [Validators.required]],
      END_DATE: ['', [Validators.required]],
      // Min_save: ['', [Validators.required]],
      // Max_save: ['', [Validators.required]],
      radio: ['0', [Validators.required]],
      Start_code: [''],
      End_code: [''],
      checkboxValue: [''],
      checkboxValue1: [''],
      checkboxValue2: [''],

    });

  }

  loadAcno() {
    this.memFrom = this.ngForm.controls['Start_code'].value
    this.memTo = this.ngForm.controls['End_code'].value
    this.branch = this.ngForm.controls['BRANCH_Code'].value
    if (this.ngForm.controls['Start_code'].value <= this.ngForm.controls['End_code'].value) {
      this.dtTrigger.unsubscribe();
      this.mem = [this.memFrom, this.memTo, this.branch, this.scheme]

      // if (this.getschemename == 'LN') {
      //   this.http.get(this.url + '/term-loan-master/interest/' + this.mem).subscribe((data) => {
      //     this.tableArr = data;
      //     this.gridData = data;
      //   });
      // }
      this.dtTrigger.next();
    }
    else {
      Swal.fire('Info', 'Ending Account Number Must Greater Than Starting  Account Number', 'info')
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  view(event) {
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value

      // let Date = moment(obj.date).format('DD/MM/YYYY');
      // let tDate = moment(Date, 'DD/MM/YYYY')
      //for start date
      if (this.fromdate == userData.branch.syspara.CURRENT_DATE) {
        obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.fromdate).format('DD/MM/YYYY');
        let tDate = moment(date, 'DD/MM/YYYY')
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
      let date2 = obj.END_DATE;
      let scheme = obj.Scheme_code
      let branch = obj.BRANCH_CODE;
      let schemeName = this.schemeId + this.tScheme
      let flag = obj.radio;
      // let frominstallment = obj.Min_save;
      let toinstallment = obj.Max_save;
      let Acno1 = obj.Start_code;
      let Acno2 = obj.End_code;

      //  let startingcode= obj.Starting_Account;
      // let endingcode =obj.Ending_Account;

      // this.iframe5url = this.report_url + "examples/GoldSilverSecurity.php?START_DATE='" + obj.START_DATE+ "'&END_DATE='" + obj.END_DATE+ "'&BRANCH='"+this.branchName+"'&BANK_NAME='"+bankName+"'&AC_TYPE='" +scheme+ "'&AC_ACNOTYPE='" + schemeName+ "'";



      // this.iframe5url = this.report_url + "examples/DirectorWiseLoanOverDue.php?AC_TYPE="+schemeName+"&BRANCH_CODE="+branch+"&FLAG="+flag+"&date1='"+date2+"'&BranchName='"+this.branchName+"'&schemeCode='"+scheme+"'&bankName='"+bankName+"'"


      if(branch == 0){
        this.branchName='Consolidate';
     }

      // this.iframe5url = this.report_url + "examples/DirectorWiseRecLoanOverDue.php?AC_TYPE=" + schemeName + "&BRANCH_CODE=" + branch + "&FLAG=" + flag + "&date1='" + date2 + "'&BranchName='" + this.branchName + "'&schemeCode='" + scheme + "'&DIRECTORMASTERFROM=" + Acno1 + "&DIRETORMASTERTO=" + Acno2 + "&DUEINSTALLMENTFROM=" + frominstallment + "&DUEINSTALLMENTO=" + toinstallment + "&bankName='" + bankName + "'"
      this.iframe5url = this.report_url + "examples/DirectorWiseRecLoanOverDue.php?AC_TYPE=" + schemeName + "&BRANCH_CODE=" + branch + "&FLAG=" + flag + "&date1='" + date2 + "'&BranchName='" + this.branchName + "'&schemeCode='" + scheme + "'&DIRECTORMASTERFROM=" + Acno1 + "&DIRETORMASTERTO=" + Acno2 + "&bankName='" + bankName + "'"

      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }


  }
  dateDetails
  getDate() {
    let userData = JSON.parse(localStorage.getItem('user'));
    let myDate = userData.branch.syspara.CURRENT_DATE
    const obj = {
      "date": myDate

    }
    this.http.post('http://localhost:4000/interest-rate-for-loan-and-cc/intrate', obj).subscribe((data) => {
      this.dateDetails = data

      console.log(this.dateDetails)
    })
  }


  close() {
    this.resetForm()

  }
  onLoad() {
    this.showLoading = false;

  }

  resetForm() {
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.Start_code.reset();
    this.ngForm.controls.End_code.reset();
    this.ngForm.controls.Max_save.reset();
    // this.ngForm.controls.Min_save.reset();



    this.showRepo = false;
    this.clicked = false;
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
}
