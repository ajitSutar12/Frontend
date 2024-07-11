import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SavingMasterService } from 'src/app/theme/master/customer/saving-master/saving-master.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-amountwise-deposit-intrest-certi',
  templateUrl: './amountwise-deposit-intrest-certi.component.html',
  styleUrls: ['./amountwise-deposit-intrest-certi.component.scss']
})
export class AmountwiseDepositIntrestCertiComponent implements OnInit {

  //fromgroup
  // ngForm:FormGroup
  obj: any;
  scode: any = null;
  ngForm: FormGroup
  ngbranch
  //ngfor
  branchOption

  //ngmodel
  branch
  schemetype

  bsValue = new Date();
  Schemewise: boolean = false;

  from_Date: string;
  maxDate: Date;
  minDate: Date;
  showRepo: boolean = false;
  report_url = environment.report_url;
  url = environment.base_url;
  showLoading: boolean = false;
  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer,
    private savingMasterService: SavingMasterService,
    private _ACMasterDropdownService: ACMasterDropdownService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _ownbranchmasterservice: OwnbranchMasterService, private http: HttpClient) {
    this.from_Date = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())

  }
  scheme
  ngOnInit(): void {
    this.createForm()
    //branchlist
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });

    // this.http.get(this.url + '/ledger-view/cschemtdsbpg').subscribe((data: any) => {
    //   this.scheme = data
    //   console.log(this.scheme)
    // })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'TD');
      });
      this.scheme = filtered;
      console.log(this.scheme);

    })

    this._ACMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      // debugger
      console.log("accData", data);

    })
    
  }
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      scheme: ["", [Validators.required]],
      FROM_AC_NO: ["", [Validators.required]],
      from_Date: ["", [Validators.required]],
      to_Date: ["", [Validators.required]],


    });

  }


  // For Starting account and Ending Account dropdown
  getschemename: any
  getbranchName
  getcode
  startingacc
  startingAccount
  endingacc
  EndingAccount
  getBranch() {
    this.getIntroducer()
  }
  getIntro(event) {
    this.getschemename = event.name
    this.scode = event.value
    this.getIntroducer()
  }
  getBranchName(event) {
    this.getbranchName = event.branchName
    this.getcode = event.value
  }

  getIntroducer() {

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = this.ngForm.value.BRANCH_CODE;
    this.obj = [this.scode, this.ngbranch]

    switch (this.getschemename) {


      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

    }
  }

  //iframe
  formSubmitted = false;
  clicked: boolean = false;
  iframe1url: any = 'https://google.com';

  View(event) {
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if (this.ngForm.valid) {
      let obj = this.ngForm.value
      this.showRepo = true;
      let fromDate = moment(obj.from_Date).format('DD/MM/YYYY');
      let toDate = moment(obj.to_Date).format('DD/MM/YYYY');
      let acc = obj.FROM_AC_NO;





      this.iframe1url =
      this.report_url + "examples/AMOUNTWISEDEPOSITINTRESTCERTIFICATE.php?startDate='" + fromDate +
        "'&endDate='" + toDate +
        "'&accno='" + acc.BANKACNO +
        "'&branchName='" + branchName +
        "&bankName='" + bankName + "'";
      console.log(this.iframe1url);
      this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);

      // this.iframe1url = this.report_url + "examples/TOTALCHALLLENDETAILS.php?" +
      //   "&startDate=" + "'" + fromDate + "'" +
      //   "&enddate=" + "'" + toDate + "'" +

      //   "&branchName=" + branchName + "&bankName=" + bankName + "";

      // console.log(this.iframe1url);
      // this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);


    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  close() {
    this.resetForm()
  }

  resetForm() {
    this.showRepo = false;
    this.clicked = false;

    this.ngForm.get("to_Date").reset()
    this.ngForm.get("from_Date").reset()
    this.ngForm.get("FROM_AC_NO").reset()
    this.ngForm.get("scheme").reset()
    debugger
    // this.ngForm.reset();
  }

  onLoad() {
    debugger
    this.showLoading = false;

  }


}
