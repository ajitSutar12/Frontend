import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectComponent } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { cityMasterService } from 'src/app/shared/dropdownService/city-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { DepositLoanInterestRateEditChangeService } from 'src/app/theme/master/maintainance/deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citywise-loanoverdue',
  templateUrl: './citywise-loanoverdue.component.html',
  styleUrls: ['./citywise-loanoverdue.component.scss']
})
export class CitywiseLoanoverdueComponent implements OnInit {
  ngForm: any;
  // fb: any;
  dates: string;
  maxDate: Date;
  minDate: Date;
  branchName: any;
  // ngForm: any;
  fromdate: any;
  ngbranch: any;
  // systemParameter: any;
  // cityMaster: any;
  city: any;
  scheme: any;
  iframe5url: any = '';
  // url = environment.base_url;
  report_url = environment.report_url;


  // sanitizer: any;
  clicked: boolean;
  showRepo: boolean = false;
  formSubmitted = false;
  showLoading: boolean = false;
  isTdsForm: boolean;
  branchOption: any[];
  transferSchemeDetails: any;
  tScheme
  VScheme
  obj: any[];
  scode: any;
  ngfromac: null;
  ngtoac: null;
  arrTable: Object;
  fromAc: any;
  toAc: any;
  InterestArr: any[];
  // bankName: string;
  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private cityMaster: cityMasterService,
    private _interestRateChange: DepositLoanInterestRateEditChangeService,
    private sanitizer: DomSanitizer,

  ) {
    this.dates = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()
    // branchlist
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 1 && result.RoleDefine[0].Role.id == 1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' },

        )
      }

    })



    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      });
      this.scheme = filtered;
      console.log(this.scheme);



    })

    this.cityMaster.getcityList().pipe(first()).subscribe((data) => {
      this.city = data;
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      this.dates = data.CURRENT_DATE

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
  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name
    this.VScheme = event.value

    // this.selectedItems =null;
    console.log(this.tScheme);
    // this.getTable();
    this.getintroduce();


  }
  getintroduce() {

    this.obj = [this.scode, this.ngbranch]
    this.ngfromac = null
    this.ngtoac = null
    // this.selectedItems= null;
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

  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ["", [Validators.required]],
      START_DATE: ['', [Validators.required]],
      AC_CTCODE: [''],
      allCityCheckbox: [''],

    });

  }
  view(event) {
    this.showRepo = true;
    this.formSubmitted = true;
    event.preventDefault();



    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if (this.ngForm.valid) {

      // this.showRepo = true;
      let obj = this.ngForm.value


      let scheme = obj.Scheme_code

      let branch = obj.BRANCH_CODE;
      let flag = obj.allCityCheckbox;

      let schemeName = this.scheme
      let cityCode = obj.AC_CTCODE;
      // let Date = moment(obj.date).format('DD/MM/YYYY');
      // let toDate = moment(Date, 'DD/MM/YYYY')
      //for start date
      if (this.dates == userData.branch.syspara.CURRENT_DATE) {
        obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.dates).format('DD/MM/YYYY');
        let toDate = moment(date, 'DD/MM/YYYY')
        obj['START_DATE'] = date
      }
      let flagchecked
      if (flag == false) {
        flagchecked = 0;
      }
      else if (flag == true) {
        flagchecked = 1;
      }


      //  let startingcode= obj.Starting_Account;
      // let endingcode =obj.Ending_Account;
      if (branch == 0) {
        this.branchName = 'Consolidate';
      }
      this.iframe5url = this.report_url + "examples/Citywise_LoanOverdue.php?&edate='" + obj.START_DATE + "'&AC_TYPE='" + scheme + "'&branch_code='" + this.ngbranch + "'&CITY_CODE='" + cityCode + "'&flag=" + flagchecked + "&Branch='" + this.branchName + "'&BankName='" + bankName + "";

      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      this.formSubmitted = false;
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }
  onLoad() {
    this.showLoading = false;

  }
  isReceivedTds($event) {

    if ($event.target.checked) {
      this.isTdsForm = true;

    } else {
      this.isTdsForm = false;

    }
  }

  close() {
    this.resetForm()

  }

  
  resetForm() {
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.allCityCheckbox.reset();
    this.ngForm.controls.AC_CTCODE.reset();



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

  isHide: boolean = true
  getCheck(event) {
    if (this.ngForm.controls.allCityCheckbox.value) {
      this.isHide = false
    }
    else {
      this.isHide = true
    }
  }


}


