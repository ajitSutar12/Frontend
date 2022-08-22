import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { DeadstockmasterService } from 'src/app/theme/master/customer/dead-stock-master/dead-stock-master.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-bnk-reg-dead-stock',
  templateUrl: './bnk-reg-dead-stock.component.html',
  styleUrls: ['./bnk-reg-dead-stock.component.scss'],
  providers: [DeadstockmasterService]
})
export class BnkRegDeadStockComponent implements OnInit {

  iframe3url: any = '';
  // Created Form Group
  angForm: FormGroup;
  clicked: boolean = false;
  report_url = environment.report_url
  //  variable for validation
  formSubmitted = false;
  showRepo: boolean = false;
  //account
  memFrom
  memTo
  branch
  mem: any
  // branch name 
  selectedBranch: number;
  branch_codeList: any = null
  branch_code: any[]//from ownbranchmaster
  branchCode: any = null
  ngBranchCode
  ngscheme
  allScheme: any[];
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  selectedCode: any;

  //dropdown

  startingacc: any[];
  endingacc: any[];

  //
  startingAccount: any = null;
  EndingAccount: any = null;

  selectedType
  Types = [
    { id: 1, name: "All" },
    { id: 2, name: "Purchase" },
    { id: 3, name: "Sell" },
    { id: 4, name: "Breakage" },
    { id: 5, name: "Gain" },
    { id: 6, name: "Loss" },
    { id: 7, name: "Transfer" },
  ];

  //api
  url = environment.base_url;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
    private deadstockmasterService: DeadstockmasterService

  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Starting_Account: ['', [Validators.required]],
      Ending_Account: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      GROUP_BY: ['', [Validators.required]],
      PRINT_NEW_PAGE: [''],

    })
  }
  ngOnInit(): void {
    this.createForm()
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }
    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.ngBranchCode = data[0].value
    })
    //dead stock 
    this.deadstockmasterService.getDeadstockList().pipe(first()).subscribe(data => {
      this.startingacc = data;
      this.endingacc = data;
      console.log(data)
    })

  }
  src: any;
  view(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;

    if (this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let startingdate = moment(obj.START_DATE).format('DD/MM/YYYY');
      let endingdate = moment(obj.END_DATE).format('DD/MM/YYYY');

      let branch = obj.BRANCH_CODE;
      let startingcode = obj.Starting_Account;
      let endingcode = obj.Ending_Account;
      let groupby = obj.GROUP_BY;

      let checkbox = obj.PRINT_NEW_PAGE;


      this.iframe3url = this.report_url + "/DeadStockRegister.php?startingcode='" + startingcode + "'&endingcode='" + endingcode + "'&branch='" + branch + "'&startingdate='" + startingdate + "'&endingdate='" + endingdate + "'&groupby='" + groupby + "'&checkbox='" + checkbox + "'&bankName='" + bankName + "' ";
      this.iframe3url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe3url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }

  }

  getschemename
  //load acno according start and end acno
  loadAcno() {
    this.memFrom = this.angForm.controls['Starting_Account'].value
    this.memTo = this.angForm.controls['Ending_Account'].value
    this.branch = this.angForm.controls['BRANCH_CODE'].value
    if (this.angForm.controls['Starting_Account'].value < this.angForm.controls['Ending_Account'].value) {
      this.mem = [this.memFrom, this.memTo, this.branch]
      if (this.getschemename) {
        this.http.get(this.url + '/dead-stock-master' + this.mem).subscribe((data) => {
        });
      }





    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  close() {
    this.resetForm()
  }

  resetForm() {
    this.createForm()
    this.showRepo = false;
    this.clicked = false;
  }

}