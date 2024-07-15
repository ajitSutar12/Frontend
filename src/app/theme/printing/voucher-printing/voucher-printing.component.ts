
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { VoucherEntryService } from '../../transaction/voucher-entry/voucher-entry.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

import { ReportFrameComponent } from "../../reports/report-frame/report-frame.component";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-voucher-printing',
  templateUrl: './voucher-printing.component.html',
  styleUrls: ['./voucher-printing.component.scss']
})
export class VoucherPrintingComponent implements OnInit {
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;

  @ViewChild(ReportFrameComponent) child: ReportFrameComponent;

  //for Formgroup
  ngForm: FormGroup

  bsValue = new Date();
  branchC
  //ngModel
  BranchCode
  schemeCode
  firstno
  fromdate
  acnumber
  lastno
  scheme
  vtype
  tranType
  isTdsForm: boolean;
  branch_code: any;

  obj: any;
  introducerACNo: any;
  selectedBranch: any;
  narrationList: any;
  getschemename: any
  allScheme //account type for introducer
  formSubmitted = false;
  report_url = environment.report_url;
  showRepo: boolean = false;
  clicked: boolean = false;
  iframe5url: any = '';
  Scheme
  ngFnarration: any;
  maxDate: any;
  minDate: Date;
  dates
  schemeACNo
  transferSchemeDetails: any;
  schemeType: any
  city: any;
  Ncity: any;
  defaultDate: any;
  ngbranch: any;
  branchName: any;
  voucherNo
  glDetails: any;

  url = environment.base_url;

  ttypes = [

    { label: 'Cash', value: 'CS' },
    { label: 'Transfer', value: 'TR' },
  ]

  vtypes = [

    // { label: 'Locker Rent', value: 'LR' },
    // { label: 'Cancellation', value: 'CN' },
    { label: 'Voucher', value: 'VC' },
    { label: 'Multi-Voucher', value: 'MV' },
    { label: 'Deposit Closing', value: 'DC' },
    // { label: 'Renewal', value: 'RW' },
    // { label: 'Shares Issue', value: 'SHI' },
    // { label: 'SharesTransfer', value: 'SHT' },
    // { label: 'Sell', value: 'SEL' },
    // { label: 'Purches', value: 'PUR' },
    // { label: 'Depreciation', value: 'DPR' },
    // { label: 'Breakage', value: 'BRK' },
    // { label: 'Gain', value: 'GIN' },
    // { label: 'Loss', value: 'LOS' },
    // { label: 'Transfer', value: 'TRE' },
  ]

  constructor(
    private fb: FormBuilder,
    private _service: VoucherEntryService,

    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private savingMasterService: SavingMasterService,
    private _SchemeCodeDropdown: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer, private systemParameter: SystemMasterParametersService,
    private http: HttpClient,


  ) {
    this.dates = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()

    let user = JSON.parse(localStorage.getItem('user'));

    //branchcode
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.BranchCode = user.branchId;
    })

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data


      this.schemeCode = data[0].value
      this.getIntroducer()

    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.Scheme = data;
    });
    this._SchemeCodeDropdown.getAllSchemeList().pipe(first()).subscribe(data => {
      this.allScheme = data;
    })
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.dates = data.CURRENT_DATE;
    });

    //display defalut date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE;
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME
      this.branchC = result.branch.id

    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME
      this.branchC = result.branch.id


    }



  }


  createForm() {
    this.ngForm = this.fb.group({

      BRANCH_CODE: ['', [Validators.required]],
      DATE: ['', [Validators.required]],
      VOUCHER_NO: ['', [Validators.required]],
      VOUCHER_TYPE: ['', [Validators.required]],
      TRAN_TYPE: [''],
      DC_NO: [''],
      drcr: new FormControl('Debit'),
    });
  }



  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }

  //get account no according scheme for introducer
  getIntroducer() {
    this.obj = [this.schemeCode, this.BranchCode,]
    switch (this.getschemename) {
      case 'SB':
        this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null

        })
        break;

      case 'SH':
        this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'CA':
        this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'LN':
        this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'DS':
        this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'CC':
        this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'GS':
        this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'PG':
        this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'AG':
        this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'IV':
        this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;
    }
  }

  view(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let code = userData.branch.CODE

    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    // let branch = userData.branch.CODE;
    this.voucherNo
    // if (this.ngForm.valid) {
      let obj = this.ngForm.value
      this.showRepo = true;

      if (this.dates == userData.branch.syspara.CURRENT_DATE) {
        obj['DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.dates).format('DD/MM/YYYY');
        let tDate = moment(date, 'DD/MM/YYYY')
        obj['DATE'] = date
      }
      // let startDate = moment(obj.FROM_DATE).format('DD/MM/YYYY');
      // var sdate = moment(obj.FROM_DATE).startOf('quarter').format('DD/MM/YYYY');

      let scheme = obj.Scheme_code
      // let branch = obj.BRANCH_CODE
      let voucherNo = obj.VOUCHER_NO
      let voucherType = obj.VOUCHER_TYPE
      let tranType = obj.TRAN_TYPE

     

      let drcrtype
      if (obj.drcr === 'Debit') {
        drcrtype = 0
      }
      else if (obj.drcr === 'Credit') {
        drcrtype = 1
      }
      else if (obj.drcr === 'Both') {
        drcrtype = 2
      }
      // this.iframe5url = this.report_url + "examples/VoucherPrinting.php?&Branchname='" + this.branchName + "'&date='" + obj.DATE + "'&VoucharNo='"+voucherNo+"'&voucher_type='"+voucherType+"'&tran_type='"+tranType+"'&Branch='" + branchName + "'&branchcode='" +  this.branchC  + "'";
      // console.log(this.iframe5url);
      // this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

      let type
      if (obj.VOUCHER_TYPE === 'MV') {
        type = 4
      }
      else if (obj.VOUCHER_TYPE === 'DC') {
        type = 5
      }

      if (voucherType == 'VC') {
        this.iframe5url = this.report_url + "examples/VoucherPrinting.php?&Branchname='" + this.branchName + "'&date='" + obj.DATE + "'&VoucharNo='" + voucherNo + "'&voucher_type='" + voucherType + "'&tran_type='" + tranType + "'&Branch='" + branchName + "'&branchcode='" + this.branchC + "'&bankName='" + bankName + "'";
        console.log(this.iframe5url);
        this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
      }
      else if (voucherType == 'MV') {
        this.iframe5url = this.report_url + "examples/multiVoucher.php?&Branchname='" + this.branchName + "'&date='" + obj.DATE + "'&VoucharNo='" + voucherNo + "'&voucher_type='" + voucherType + "'&tran_type='" + 'TR' + "'&Branch='" + branchName + "'&branchcode='" + this.branchC + "'&flag=" + drcrtype + "&type=" + type + "&bankName='" + bankName+"";
        console.log(this.iframe5url);
        this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
      }
      else if (voucherType == 'DC') {
        this.iframe5url = this.report_url + "examples/multiVoucher.php?&Branchname='" + this.branchName + "'&date='" + obj.DATE + "'&VoucharNo='" + voucherNo + "'&voucher_type='" + voucherType + "'&tran_type='" + 'TR' + "'&Branch='" + branchName + "'&branchcode='" + this.branchC + "'&flag=" + drcrtype + "&type=" + type + "&code=" + code + "";
        console.log(this.iframe5url);
        this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
      }


    // }
    // else {
    //   Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    // }

  }
  close() {
    this.reset()
  }

  // Reset Function
  reset() {
    this.ngForm.controls.VOUCHER_NO.reset();
    this.ngForm.controls.VOUCHER_TYPE.reset();
    this.ngForm.controls.DC_NO.reset();
    this.ngForm.controls.TRAN_TYPE.reset();

    this.showRepo = false;
    this.clicked = false;
  }
  getBranch(event) {
    this.getIntroducer()
    this.ngbranch = event.value
    this.branchName = event.branchName
  }


  hide: boolean = false
  show: boolean = true
  isdepoClose: boolean = false
  getType(event) {

    this.vtype = event.value
    if (this.vtype == 'MV') {
      this.show = false
      this.hide = true
      this.isdepoClose = false

      this.getType1(event);
    }
    else if (this.vtype == 'DC') {
      this.show = true
      // this.hide = false
      this.hide = true
      this.isdepoClose = true

      // this.getType1(event);
      // this.tranList()
    }
    else if (this.vtype == 'VC') {
      this.show = true
      this.hide = false
      // this.hide = true
      this.isdepoClose = false

      // this.getType1(event);
      // this.tranList()
    }
    else {
      this.show = true
      this.hide = false
    }
    this.ngForm.controls.VOUCHER_NO.reset();
    this.ngForm.controls.TRAN_TYPE.reset();

  }

  // tranList() {

  //   let userData = JSON.parse(localStorage.getItem('user'));


  //   let obj = {
  //     'TRAN_SOURCE_TYPE': 'DC',
  //     'BRANCH_CODE': userData.id,
  //     'TRAN_DATE': this.sdate
  //   }

  //   // this.http.post('http://192.168.1.157:4771/voucher/tranList', obj).subscribe(data => {

  //   // })
  // }

  getType2(event) {
    this.voucherNo = event.TRAN_NO

  }

  trType
  sdate
  getType1(event) {
    this.tranType = event.value
    let userData = JSON.parse(localStorage.getItem('user'));

    // let sdate
    if (this.dates == userData.branch.syspara.CURRENT_DATE) {
      this.sdate = userData.branch.syspara.CURRENT_DATE
    }
    else {
      let date = moment(this.dates).format('DD/MM/YYYY');
      let tDate = moment(date, 'DD/MM/YYYY')
      this.sdate = date
    }


    //for voucher Number

    if (this.vtype == 'MV') {
      this.trType = 'TR'
    }
    else {
      this.trType = this.tranType
    }

    let obj1 = {
      type: this.vtype,
      branch: this.ngbranch,
      tran_type: this.tranType,
      date: this.sdate


    }
    // this.http.post<any>(this.url + '/voucher/tranList', obj1).subscribe((data) => {
    this.http.post<any>(this.url + '/voucher/tranList', obj1).subscribe((data) => {
      this.glDetails = data
      console.log(this.glDetails)
    })
  }
}




