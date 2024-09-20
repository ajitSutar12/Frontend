import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { DepositLoanInterestRateEditChangeService } from 'src/app/theme/master/maintainance/deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-expensive-list',
  templateUrl: './expensive-list.component.html',
  styleUrls: ['./expensive-list.component.scss']
})
export class ExpensiveListComponent implements OnInit {

  angForm: FormGroup;
  ngbranch

  branchOption: any = [];
  branchName: any;
  fromAc: any;
  toAc: any;
  scode: any;
  ngtoac: null;
  ngfromac: null;
  InterestArr: any[];
  arrTable: Object;
  tscheme: string;
  tScheme
  obj: any[];
  acno: any;
  acno2: any;
  Accode: any;
  end_code
  StartCode
  report_url = environment.report_url;
  showLoading: boolean = false;

  showRepo: boolean = false;
  //iframe
  formSubmitted = false;
  clicked: boolean = false;
  iframeurl: any = ' ';
  url = environment.base_url;
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private fb: FormBuilder,
    private _interestRateChange: DepositLoanInterestRateEditChangeService,


  ) { }
  Start_code
  ngOnInit(): void {
    this.createForm();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    // this.http.get<any>(this.url + '/gl-account-master/').subscribe(data => {
    //   this.Start_code = data;
    //   this.end_code = data
    //   console.log(this.Start_code)
    // })
  }
  date
  getdata(event) {
    let obj = this.angForm.value
    this.date = moment(obj.from_Date).format('DD/MM/YYYY');
    let obj1 = {

      branch_code: this.ngbranch,
      date: this.date
    }
    this.http.post(this.url+'/gl-account-master/getexpensedat', obj1).subscribe((data: any) => {
    // this.http.post('http://localhost:7272/gl-account-master/getexpensedat', {}).subscribe((data: any) => {
      // console.log(data);
      let sortedData = data.sort((a, b) => a.CODE - b.CODE);
      this.Start_code = sortedData;
      this.end_code = sortedData


      console.log(this.StartCode);
    })
  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      from_Date: ['', [Validators.required]],
      to_Date: ['', [Validators.required]],
      StartCode: ['', [Validators.required]],
      type: ['', [Validators.required]],
      SUBMISSION: ['SUBMISSION'],
      endcode: ['', [Validators.required]],

    })
  }
  // getintroduce() {

  //   this.obj = [this.scode, this.ngbranch]
  //   this.ngfromac = null
  //   this.ngtoac = null
  //   // this.selectedItems= null;
  //   this.arrTable = []
  //   this.InterestArr = []
  //   switch (this.tScheme) {
  //     case 'LN':
  //       this._interestRateChange.getTermLoanSchemeList1(this.obj).subscribe(data => {
  //         this.fromAc = data;
  //         this.toAc = data;
  //         console.log(data);
  //       })
  //       break;
  //     case 'CC':
  //       this._interestRateChange.getCashCreditSchemeList1(this.obj).subscribe(data => {
  //         this.fromAc = data;
  //         this.toAc = data
  //         console.log(data);
  //       })
  //       break;
  //     case 'DS':
  //       this._interestRateChange.getTermDepositSchemeList1(this.obj).subscribe(data => {
  //         this.fromAc = data;
  //         this.toAc = data
  //         console.log(data);
  //       })
  //       break;
  //   }

  // }
  // getAccountList(event) {
  //   this.acno = event.bankacno
  //   console.log(this.Accode);

  // }
  onLoad() {
    this.showLoading = false;

  }
  ngType
  Branchname
  getbranch(event) {
    this.Branchname = event
  }
  type1
  getType(event) {
    this.type1 = event.type
  }
  type = [
    { type: 'Transfer' },
    { type: 'Cash' },
    { type: 'Both' },
  ];
  View(event) {
    event.preventDefault();
    this.formSubmitted = true;
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if (this.angForm.valid) {
      let obj = this.angForm.value
      this.showRepo = true;
      let fromDate = moment(obj.from_Date).format('DD/MM/YYYY');
      let toDate = moment(obj.to_Date).format('DD/MM/YYYY');
      let branch = this.Branchname
      let type = this.type1
      let Rdio = obj.SUBMISSION
      let flg
      if (Rdio == 'RETURN') {
        flg = 5;
      }
      let flag
      if (type == 'Cash') {
        flag = 0;
      }
      else if (type == 'Transfer') {
        flag = 1;
      }
      else if (type == 'Both') {
        flag = 2;
      }
      this.iframeurl = this.report_url + "examples/Expensisdetailreport.php?startDate='" + fromDate + "'&endDate='" + toDate + "'&Rdio='" + Rdio + "'&type='" + type + "'&scheme='" + branchName + "'&branch='" + branch + "&bankName=" + bankName + "&flag=" + flag + "&startCode=" + this.startdt + "&endCode=" + this.enddt +"&flg=" + flg + "";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }
  close() {
    this.resetForm()
  }
  resetForm() {
    this.angForm.controls['StartCode'].reset()
    this.angForm.controls['endcode'].reset()
    this.angForm.controls['type'].reset()
    this.angForm.controls['from_Date'].reset()
    this.angForm.controls['to_Date'].reset()
    this.showRepo = false;
    this.clicked = false;
  }
  enddt
  getEnd(event) {
    this.enddt = event.CODE
  }
  startdt
  getStart(event) {
    this.startdt = event.CODE
  }
}
