import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { LedgerViewComponent } from '../ledger-view/ledger-view.component';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { MemberLiablityViewComponent } from '../member-liablity-view/member-liablity-view.component';
import { SharesLedgerViewComponent } from '../shares-ledger-view/shares-ledger-view.component';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@Component({
  selector: 'app-master-card',
  templateUrl: './master-card.component.html',
  styleUrls: ['./master-card.component.scss']
})
export class MasterCardComponent implements OnInit {

  @ViewChild(LedgerViewComponent) child: LedgerViewComponent | undefined;
  @ViewChild(MemberLiablityViewComponent) Membechild: MemberLiablityViewComponent | undefined
  @ViewChild(SharesLedgerViewComponent) shareChild: SharesLedgerViewComponent | undefined


  angForm: FormGroup;
  obj: any[];
  url = environment.base_url

  iframe5url: any = '';
  showRepo: boolean = false;
  report_url = environment.report_url

  todate: any = null;
  fromdate: any = null
  edate: any = null
  maxDate: Date;
  minDate: Date;
  salaryDivision
  subSalaryDivision
  tableData = []

  ngBranchCode
  getschemename
  ngscheme
  accountedit
  accFromDate
  // fromdate
  accountEvent
  display: string;
  setLang: any;
  sanitizer: any;

  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _schemeService: SchemeAccountNoService,
    private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,
  ){this.systemParameter.getFormData(1).subscribe(data => {
   
    this.setLang = data.SET_LANGUAGE
    this.translate.setDefaultLang(this.setLang);
  }) }

  //ngmodel variables
  selectedScheme
  selectedmemno

  //ngfor variables
  Schemecode
  member_No
  branchData = []
  ngOnInit(): void {
    this.createForm();

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchData = data;
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (Schemecode) {
        return (Schemecode.name == 'SH');
      });
      this.Schemecode = filtered;
      this.getIntroducer()
    })



  }

  scheme
  acno
  getSchemeName(event) {
    this.scheme = event.id + " " + event.label

  }

  id
  accMember
  memberInfo
  getIntro(event) {
    this.tableData = []
    this.loanData = []
    this.depositDate = []
    this.showRepo = false
    this.memberInfo = event
    this.getscheme = event.name
    this.id = event.idmasterID

    this.accMember = event.AC_NO + " " + event.AC_NAME
    this.acno = event.AC_NO

    let closeAcc


    if (event.AC_CLOSEDT == null) {
      closeAcc = 'Active'
    } else if (event.AC_CLOSEDT != null) {
      closeAcc = 'Account Closed'
    }

    this.angForm.patchValue({
      'name': event.AC_NAME,
      'mobNo': event.AC_MOBILENO,
      'address': event.AC_ADD_REG != null ? event.AC_ADD_REG : event.AC_ADDR,
      'Status': closeAcc,
      'birthDate': event.AC_BIRTH_DT,
      'joinDate': event.AC_JOIN_DATE,
      'retirementDate': event.AC_RETIRE_DATE
    })

    let obj =
    {
      'idmasterID': event.idmasterID,
      'branch_code': event.BRANCH_CODE
    }

    this.http.post(this.url + '/share-master/getAllAccountDetails', obj).subscribe((data: any[]) => {
      this.tableData = data
      // console.log(this.tableData)
    })

    let obj1 = {
      "AC_NO": event.AC_NO
    }
    this.http.post(this.url + '/share-master/getSalryDiv', obj1).subscribe(data => {
      this.salaryDivision = data
      this.subSalaryDivision = data
      // console.log(this.salaryDivision)
    })
  }

  branchCode
  getBranch(event) {
    this.branchCode = event.name
  }

  getscheme: any
  getIntroducer() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.selectedScheme, branchCode]


    this.http.post(this.url + '/share-master/getAccInfo', {}).subscribe(data => {
      this.member_No = data
      // console.log(this.member_No)
    })





  }



  isloader = false
  createForm() {
    this.angForm = this.fb.group({
      scode: ['', [Validators.required]],
      memNo: ['', [Validators.required]],
      name: [''],
      mobNo: [''],
      Status: [''],
      address: [''],
      birthDate: [''],
      joinDate: [''],
      retirementDate: [''],
      salaryDiv: ['', [Validators.required]],
      subSalaryDiv: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      // BRANCH_CODE: ['', [Validators.required]],

    });
  }

  onFromDateChange(value: Date) {
    this.fromdate = value;
    this.maxDate = moment(value).add(1, 'year').toDate();
  }


  loanData = []
  depositDate = []
  schemeName
  schemeName1
  view() {

    let formVal = this.angForm.value
    let userData = JSON.parse(localStorage.getItem('user'));

    let startDate = moment(formVal.START_DATE).format('DD/MM/YYYY')
    let endDate = moment(formVal.END_DATE).format('DD/MM/YYYY')

    let obj =
    {
      "startDate": startDate,
      "endDate": endDate,
      "idmasterID": this.id,
      "BRANCH_CODE": userData.branch.CODE
    }

    this.http.post(this.url + '/voucher/loanStatement', obj).subscribe((data) => {
      this.loanData = data[0].transactions
      this.schemeName = data[0].schemaName
      // console.log(this.loanData,'data')
      // console.log(this.schemeName,'name')
    })


    this.http.post(this.url + '/voucher/depositStatement', obj).subscribe((data: any[]) => {

      this.depositDate = data[0].transactions
      this.schemeName1 = data[0].schemaName
      // console.log(this.depositDate)
    })
  }

  isLedger = true
  isMember = true
  isShare = true
  ledgerData
  clickHere(data) {
    this.isLedger = true
    this.ledgerData = data
    this.child.editClick(this.ledgerData)
  }
  clickHereToShowMember() {
    this.isMember = true
    let obj = {
      'scheme': this.scheme,
      'accMember': this.accMember,
      'acno': this.acno,
    }
    this.Membechild.editClick(obj)
  }

  sharesView(data) {
    this.isShare = true
    this.shareChild.editClick(data)
  }

  openModal(view) {
    if (view === 'ledgerView') {
      this.isLedger = true
      this.isMember = false
      this.isShare = false
      this.display = "block";
    }
    else if (view === 'memberLiabilityView') {
      this.isMember = true
      this.isLedger = false
      this.isShare = false
      this.display = "block";
    }
    else if (view === 'shareLedgerView') {
      this.isShare = true
      this.isMember = false
      this.isLedger = false
      this.display = "block";
    }
  }
  onCloseHandled() {
    this.display = "none";
    this.isLedger = true
    this.isMember = true
    this.isShare = true
  }

  showMasterCardView() {
    this.showRepo = true
    let obj = this.memberInfo
    let address = obj.AC_ADDR != null ? obj.AC_ADDR : ''
    let retirementDate = obj.AC_RETIRE_DATE != null ? obj.AC_RETIRE_DATE : ''

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    let branchCode = userData.branch.CODE
    let date = userData.branch.syspara.CURRENT_DATE

    this.iframe5url = this.report_url + "examples/masterCard.php/?&bankname='" + bankName + "'&Branch='" + branchName + "'&memberName='" + obj.AC_NAME + "'&memberNo='" + obj.AC_NO + "'&address='" + address + "'&dateOfBirth='" + obj.AC_BIRTH_DT + "'&retirementDate='" + retirementDate + "'&branchCode='" + branchCode + "'&IDMASTER='" + obj.idmasterID + "'&DATE='" + date + "'";
    // console.log(this.iframe5url);
    this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
  }

  cancel() {
    this.showRepo = false
  }

}
