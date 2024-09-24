
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, ChangeDetectorRef, } from "@angular/core";
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
import { DepositLoanInterestRateEditChangeService } from "src/app/theme/master/maintainance/deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.service";
import { data } from "jquery";
import { NgbTabChangeEvent } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-acwise-loanoverdue-list',
  templateUrl: './acwise-loanoverdue-list.component.html',
  styleUrls: ['./acwise-loanoverdue-list.component.scss']
})
export class AcwiseLoanoverdueListComponent implements OnInit {

  iframe5url: any = '';
  url = environment.base_url;
  @ViewChild(ReportFrameComponent) child: ReportFrameComponent;
  formSubmitted = false;
  selectedOption: string = 'Detail';
  //fromgroup
  ngForm: FormGroup
  minvalue: any;
  maxvalue: any;
  dtTrigger: Subject<any> = new Subject<any>();
  // for dropdown ng module
  fromdate: any = null
  ngbranch: any = null;

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



  Accode: any;
  memFrom: any;
  memTo: any;
  branchs: any;
  mem: any[];
  tscheme: string;
  tableArr: any;
  gridData: any;
  showTable: boolean = false
  InterestArr: any[];
  arrTable: Object;
  fromAc: any;
  toAc: any;
  scode: any;
  ngtoac: null;
  ngfromac: null;
  items: { label: string, checked: boolean }[] = [];
  selectedItems = []
  acno: any;
  acno2: any;
  tab1: string;
  tab2: string;
  VScheme: any;
  // selectedItemsString: any;
  isShow: boolean = true
  @ViewChild('ctdTabset') ctdTabset;
  id: any;

  // selectedItemsString: any;
  // isShow: boolean = true
  // @ViewChild('ctdTabset') ctdTabset;
  // id: any;


  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private schemeAccountNoService: SchemeAccountNoService,
    private _interestRateChange: DepositLoanInterestRateEditChangeService,

  ) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()
    //branchlist
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 100 && result.RoleDefine[0].Role.id == 1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' },
          this.isShow = false
        )
      }

      // let data1: any = localStorage.getItem('user');
      // let result = JSON.parse(data1);
      // if (result.branchId == 1 && result.RoleDefine[0].Role.id == 1) {
      //   this.branchOption.push({ value: '0', label: 'Consolidate' },
      //     this.isShow = false
      //   )
      // }

    })
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      });
      this.scheme = filtered;
      console.log(this.scheme);



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
      this.switchNgBTab('Basic')
      this.switchNgBTab('Basic')

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
  switchNgBTab(id: string) {
    this.ctdTabset.select(id);
  }

  getAccountList(event) {
    this.acno = event.bankacno
    console.log(this.Accode);

  }
  getAccountList1(event) {
    this.acno2 = event.bankacno
    console.log(this.Accode);

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
      END_DATE: ['', [Validators.required]],
      Min_save: ['', [Validators.required]],
      Max_save: ['', [Validators.required]],
      FROM_AC: [''],
      TO_AC: [''],
      npa_per: [''],
      checkboxValue: [''],



    });

  }

  accArray: string[]
  // accArray: string[]
  checkInterestFlag(id: any, bankacno: any, flag: any) {
    let isIntUpdate: boolean = false
    if (flag.target.checked) {
      this.selectedItems.push({"id" : bankacno});
      console.log(this.selectedItems);
    }
    else {
      const index = this.selectedItems.indexOf(bankacno);
      if (index > -1) {
        this.selectedItems.splice(index, 1);
      }

    }
  }

  //checks all checkbox
  onTabChange(event: NgbTabChangeEvent) {
    this.tab1 = event.nextId;
    this.tab2 = event.activeId
    console.log(event.nextId); // Output: The id of the next selected tab
    // Use the selected tab value as needed
  }

  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  selectedArrayItem: any[]
  // selectedArrayItem: any[]
  view(event) {

   
    let bankacno = this.selectedItems.map(item => `'${item.id}'`).join(', ');
    console.log(this.selectedItems);
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.ngForm.valid) {
      // let bankacno = this.selectedItems.map(item => `'${item.id}'`).join(', ');
      let bankacno;
      // if (this.selectedItems) {
      bankacno = this.selectedItems.map(item => `'${item.id}'`).join(', ');
      // } else {

      // }

      this.showRepo = true;
      let obj = this.ngForm.value
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
     
      let halfCircleBracketArray = this.selectedItems
        .toString()
        .replace(/\[/g, '(')
        .replace(/\]/g, ')');

      let list = halfCircleBracketArray;
      console.log(halfCircleBracketArray);



      let minvalue = obj.Min_save;
      let maxvalue = obj.Max_save;
      let scheme = obj.Scheme_code;
      let branch = obj.BRANCH_CODE;
      let schemeName = this.VScheme;
      let Acno1 = this.acno;
      let Acno2 = this.acno2;
      let Dates = obj.END_DATE;

      let flag = obj.npa_per;
      if (flag == true) {
        flag = 1;
      }
      else {
        flag = 0;
      }


      let flags = this.tab1;
      let tabValue
      if (flags == 'Selective') {
        tabValue = 1;
      } else {
        tabValue = 0;
      }



      // if (value == 'Detail') {
      //   flag1 = 1;
      // } else if (value == 'Summary') {
      //   flag1 = 0;
      // }

      if (branch == 0) {
        this.branchName = 'Consolidate';
      }


      this.iframe5url = this.report_url + "examples/AccountWiseLoanOverdue.php?AC_TYPE='" + schemeName + "'&BRANCH_CODE=" + this.ngbranch + "&FIRST_NO='" + Acno1 + "'&SECOND_NO='" + Acno2 + "'&FLAG=" + tabValue + "&flag=" + flag + "&LIST=" + list + "&DUEINSTALLMENTFROM=" + minvalue + "&DUEINSTALLMENTO=" + maxvalue + "&BranchName='" + this.branchName + "'&schemeCode='" + scheme + "'&id=" + bankacno + "&date1='" + Dates + "'&bankName='" + bankName + "'";

      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

      // if (this.ngForm.controls['Print_Code'].value == "Detail") {

      //   let bankacno;

      //   bankacno = this.selectedItems.map(item => `'${item.id}'`).join(', ');

      //   this.showRepo = true;
      //   let obj = this.ngForm.value
      //   if (this.fromdate == userData.branch.syspara.CURRENT_DATE) {
      //     obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE
      //   }
      //   else {
      //     let date = moment(this.fromdate).format('DD/MM/YYYY');
      //     let tDate = moment(date, 'DD/MM/YYYY')
      //     obj['START_DATE'] = date
      //   }

      //   //for end date
      //   if (this.todate == userData.branch.syspara.CURRENT_DATE) {
      //     obj['END_DATE'] = userData.branch.syspara.CURRENT_DATE
      //   }
      //   else {
      //     let date = moment(this.todate).format('DD/MM/YYYY');
      //     let tDate = moment(date, 'DD/MM/YYYY')
      //     obj['END_DATE'] = date
      //   }

      //   let halfCircleBracketArray = this.selectedItems
      //     .toString()
      //     .replace(/\[/g, '(')
      //     .replace(/\]/g, ')');

      //   let list = halfCircleBracketArray;
      //   console.log(halfCircleBracketArray);


      //   let scheme = obj.Scheme_code;
      //   let branch = obj.BRANCH_CODE;
      //   let schemeName = this.VScheme;
      //   let Acno1 = this.acno;
      //   let Acno2 = this.acno2;
      //   let Dates = obj.END_DATE;



      //   let value = this.ngForm.value.Print_Code
      //   let flag1

      //   if (value == 'Detail') {
      //     flag1 = 1;
      //   } else if (value == 'Summary') {
      //     flag1 = 0;
      //   }

      //   if (branch == 0) {
      //     this.branchName = 'Consolidate';
      //   }

      //   this.iframe5url = this.report_url + "examples/duebalancesummary.php?AC_TYPE='" + schemeName + "'&BRANCH_CODE=" + this.ngbranch + "&FIRST_NO='" + Acno1 + "'&SECOND_NO='" + Acno2 + "&value=" + flag1 + "&LIST=" + list + "&BranchName='" + this.branchName + "'&schemeCode='" + scheme + "'&id=" + bankacno + "&date1='" + Dates + "'&bankName='" + bankName + "'";


      //   console.log(this.iframe5url);
      //   this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
      // }
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
    this.selectedItems = [];

  }

  resetForm() {
    this.ngForm.controls.Scheme_code.reset();
    // this.ngForm.controls.BRANCH_CODE.reset();
    this.ngForm.controls.Max_save.reset();
    this.ngForm.controls.Min_save.reset();
    this.ngForm.controls.END_DATE.reset();
    this.ngForm.controls.FROM_AC.reset();
    this.ngForm.controls.TO_AC.reset();

    this.fromAc = null;
    this.toAc = null;
    this.selectedItems = null;

    this.showRepo = false;
    this.clicked = false;
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
    this.scode = null
    this.ngfromac = null
    this.ngtoac = null
    this.arrTable = []
    this.InterestArr = []
  }
}
