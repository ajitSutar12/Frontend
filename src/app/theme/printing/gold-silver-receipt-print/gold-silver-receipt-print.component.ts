
import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import *  as moment from 'moment';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-gold-silver-receipt-print',
  templateUrl: './gold-silver-receipt-print.component.html',
  styleUrls: ['./gold-silver-receipt-print.component.scss']
})
export class GoldSilverReceiptPrintComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @Output() reloadTablePassing = new EventEmitter<string>();

  formSubmitted = false;
  //api
  url = environment.base_url;
  iframe5url: any = '';
  report_url = environment.report_url;

  // Formgroup variable
  angForm: FormGroup;
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  // dropdown variables
  ngscheme: any = null
  ngBranchCode: any = null
  branch_code: any;
  accountedit: any = null;
  getschemename: any;
  scheme: any[];
  schemeACNo: any[];

  // Date variables
  ngreturndate: any = null;
  maxDate: any;
  minDate: Date;
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  DatatableHideShow: boolean;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  unapproveShow: boolean = false;
  logDate
  showRepo: boolean;
  getbankAcNo1: any;
  clicked: boolean = false;
  setLang: any;

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private translate:TranslateService,
    private systemParameter: SystemMasterParametersService, private sanitizer: DomSanitizer,

  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate
      this.ngreturndate = data.CURRENT_DATE
      this.logDate = data.CURRENT_DATE

      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })

  }


  ngOnInit(): void {
    this.createForm();
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'LN' && scheme.IS_DEPO_LOAN == '0' && scheme.IS_GOLD_LOAN == '1');
      });
      this.scheme = allscheme;
    })
    let data: any = localStorage.getItem('user');
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      RETURN_DATE: ['', [Validators.required]],

    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
    }
  }

  getBranch(event) {
    this.getschemename = event.name
    this.ngscheme = event.value
    this.getAccountList()

  }
  getAcno1(event) {
    this.getbankAcNo1 = event.bankacno
  }
  //get account no according scheme
  getAccountList() {
    if (this.ngscheme != null && this.ngBranchCode != null) {
      this.accountedit = null
      this.tableData = []
      let object = {
        AC_TYPE: this.ngscheme,
        BRANCH_CODE: this.ngBranchCode,
        TYPE: 1,
        RETURN_DATE: null
      }
      this.schemeACNo = []
      this.http.post(this.url + '/gold-silver-return-entry/receiptAccountList', object).subscribe((data: any) => {
        this.schemeACNo = data
      })
    }
  }
  tableData = []
  getGoldSilverData() {
    let object = {
      AC_NO: this.accountedit,
      AC_TYPE: this.ngscheme,
      BRANCH_CODE: this.ngBranchCode
    }
    this.http.post(this.url + '/gold-silver-return-entry/GoldSilverData', object).subscribe((data: any) => {
      this.tableData = data
      this.angForm.patchValue({
        ARTICLE_NAME: data[0].ARTICLE_NAME,
        ARTICLE_DETAILS: data[0].REMARK
      })
    })
  }
  //update checkbox status in array
  checkReturnFlag(index, flag) {
    let isIntUpdate: boolean = false
    if (flag.target.checked) {
      isIntUpdate = true
    }
    else {
      isIntUpdate = false
    }
    if (this.tableData.length != 0) {
      this.tableData[index]['IS_RETURN'] = isIntUpdate
    }
  }
  src: any;
  View(event) {
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if (this.angForm.valid) {

      this.showRepo = true;
      let obj = this.angForm.value
      let startDate = obj.RETURN_DATE;
      //  let endDate = moment(obj.Ending_Date).format('DD/MM/YYYY');



      //  var sdate = (obj.RETURN_DATE).subtract(1, "day"); 
      let branch = obj.BRANCH;
      let scheme = this.getschemename;

      let accountno = obj.AC_NO;
      let schemeCode = obj.AC_TYPE;


      this.iframe5url = this.report_url + "examples/goldsilverreceiptprint.php?startDate='" + startDate + "'&branchName='" + branchName + "'&branch='" + this.ngBranchCode + "'&accountno='" + accountno + "'&scheme= '" + scheme + "'&schemeCode= " + schemeCode +
        " &bankName=" + bankName + "";
      console.log(this.iframe5url);


      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }

  }

  close() {
    this.resetForm()
  }

  resetForm() {
    // this.createForm()
    // this.ngForm.controls.BRANCH_CODE.reset();
    this.angForm.controls.AC_TYPE.reset();
    this.angForm.controls.AC_NO.reset();
    // this.ngForm.controls.Ending_Account.reset();
    this.showRepo = false;
    this.clicked = false;
  }
}


