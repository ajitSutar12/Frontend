import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { log } from 'console';
@Component({
  selector: 'app-interest-paid-history',
  templateUrl: './interest-paid-history.component.html',
  styleUrls: ['./interest-paid-history.component.scss'],
  providers: [SchemeAccountNoService, SchemeCodeDropdownService]
})
export class InterestPaidHistoryComponent implements OnInit, OnChanges {
  url = environment.base_url;
  //passing data from parent to child component
  @Input() accBranch: any;
  @Input() accScheme: any;
  @Input() accAcNo: any;
  @Input() accSchemeName: any;
  @Input() accFromDate: any;
  @Input() accToDate: any;

  angForm: FormGroup;
  // Date variables
  accopeningdate: any = null;
  tilldate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  branch_code//from ownbranchmaster
  ngBranchCode: any = null
  //ng model
  schemeCode: any = null;
  accno: any = null;
  obj: any;
  formSubmitted = false;
  //dropdown variable
  scheme: any[];
  Acc_No: any[];
  accountOpeningDate = null
  showView: boolean = true
  dtExportButtonOptions: any = {};
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnChanges() {
    debugger
    this.showView = false
    this.createForm()
    this.ngBranchCode = this.accBranch
    this.schemeCode = this.accScheme
    this.getschemename = this.accSchemeName
    this.getAccountList()
    this.accno = this.accAcNo
    this.accountOpeningDate = this.accFromDate
    this.tilldate = this.accToDate
    this.getTable()

  }
  ngOnInit(): void {
    this.createForm()
    //Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      //  debugger
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'TD');
        // return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'TD' || scheme.name == 'DS'  || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'AG' || scheme.name == 'IV');
      });

      this.scheme = filtered;
    })

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

  }
  sysparaDate
  createForm() {
    this.angForm = this.fb.group({
      Scheme: ['', [Validators.required]],
      AccountNumber: ['', [Validators.required]],
      Till_Date: ['', [Validators.required]],
      BRANCH_CODE: ['', [Validators.required]]
    });
    this.http.get(this.url + '/system-master-parameters/' + 1).subscribe(data => {
      this.tilldate = data['CURRENT_DATE']
      this.sysparaDate = data['CURRENT_DATE']
    })
  }

  getBranch() {
    this.getschemename = null
    this.accno = null
    this.schemeCode = null
  }

  // For Account Number dropdown
  getschemename: any
  getscheme(event) {
    this.getschemename = event.name
    this.accno = null
    this.Acc_No = []
    this.getAccountList()
  }
  getAccountList() {
    this.obj = [this.schemeCode, this.ngBranchCode]
    this.accno = null
    switch (this.getschemename) {

      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.Acc_No = data;
        })
        break;
      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.Acc_No = data;
        })
        break;
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.Acc_No = data;
        })
        break;
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.Acc_No = data;
        })
        break;
      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.Acc_No = data;
        })
        break;
      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.Acc_No = data;
        })
        break;
      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.Acc_No = data;
        })
        break;
      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.Acc_No = data;
        })
        break;
    }
  }

  getAccountDeatils(event) {
    this.accountOpeningDate = event.opendate
  }
  tableArr = []
  totalDebitInt = 0
  totalCreditInt = 0
  getTable() {

    this.tableArr = []
    this.totalDebitInt = 0
    this.totalCreditInt = 0
    if (this.accno != null && this.tilldate != null) {
      let obj = {
        branch: this.ngBranchCode,
        TRAN_ACNOTYPE: 'TD',
        actype: this.schemeCode,
        bankacno: this.accno,
        fromDate: this.accountOpeningDate,
        toDate: this.tilldate == this.sysparaDate ? this.tilldate : moment(this.tilldate).format('DD/MM/YYYY')
      }
      this.http.post<any>(this.url + '/ledger-view/interestPaidHistory', obj).subscribe((data) => {

        // console.log(data);

        if (data.table.length == 0) {
          Swal.fire('info', 'No Records Found!', 'info')
        }
        else {
          this.tableArr = data.table
          this.totalDebitInt = data.TotalDebitInt
          this.totalCreditInt = data.totalCreditInt

        }
      })
    }
  }

}
