import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { HttpClient } from '@angular/common/http';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import * as moment from 'moment';
import { Subject } from 'rxjs-compat';
import { DataTableDirective } from 'angular-datatables';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-shares-ledger-view',
  templateUrl: './shares-ledger-view.component.html',
  styleUrls: ['./shares-ledger-view.component.scss']
})
export class SharesLedgerViewComponent implements OnInit, OnChanges {
  angForm: FormGroup;
  formSubmitted = false;

  //api 

  url = environment.base_url;

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  // dropdown variables
  allScheme: any[]
  ngscheme: any = null
  accountedit: any = null
  schemeACNo: any;

  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: any;
  minDate: any;
  bsValue = new Date();
  // for grid variable declaration
  dormantac: boolean = false
  acclosedon: boolean = false
  freezeac: boolean = false
  obj: any
  getschemename: any
  bankacno
  acno
  acCloseDate
  freezStataus
  transactions
  tableData = []
  drcr
  debitTotal: number = 0
  creditTotal: number = 0
  debitDivTotal: number = 0
  creditDivTotal: number = 0
  normalInt: number = 0
  recpayInt: number = 0
  overDueAmt: number = 0
  penalInt: number = 0
  recpenalInt: number = 0
  otherAmount: number = 0
  addedPenal: number = 0
  grandTotal: number = 0
  accountOpenDate: any = null
  branch_code//from ownbranchmaster
  ngBranchCode: any = null
  showLoader: boolean = false

  //passing data from parent to child component
  @Input() accBranch: any;
  @Input() accScheme: any;
  @Input() accAcNo: any;
  @Input() accFromDate: any;
  @Input() accToDate: any;
  @Input() accSchemeName: any;
  @Input() accountEvent: any;
  showView: boolean = true
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
    private systemParameter: SystemMasterParametersService
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate._d
    })
  }

  ngOnChanges() {
    this.createForm()
    this.showView = false
    this.ngBranchCode = this.accBranch
    this.ngscheme = this.accScheme
    this.getschemename = this.accSchemeName
    this.getAccountlist()
    this.accountedit = this.accAcNo
    this.fromdate = this.accFromDate
    this.todate = this.accToDate
    this.accountEvent = this.accountEvent
    this.changeAccountDetails(this.accountEvent)
    this.getLedgerTransactionsDeatils()
    this.angForm.controls['BRANCH_CODE'].disable()
    this.angForm.controls['AC_TYPE'].disable()
    this.angForm.controls['AC_NO'].disable()
    this.angForm.controls['FROM_DATE'].disable()
    this.angForm.controls['TO_DATE'].disable()
  }

  changeAccountDetails(event) {
    this.tableData = []
    this.transactions = null
    this.debitTotal = 0
    this.debitDivTotal = 0
    this.creditDivTotal = 0
    this.creditTotal = 0
    this.rebitTotal = 0
    this.bonusTotal = 0
    this.totalShares = 0
    this.normalInt = 0
    this.recpayInt = 0
    this.overDueAmt = 0
    this.penalInt = 0
    this.recpenalInt = 0
    this.otherAmount = 0
    this.addedPenal = 0
    this.grandTotal = 0
    this.acno = event.AC_NO
    this.bankacno = event.BANKACNO
    this.dormantac = event.IS_DORMANT
    this.acclosedon = event.AC_CLOSEDT == null || event.AC_CLOSEDT == '' ? false : true
    this.acCloseDate = event.AC_CLOSEDT == null || event.AC_CLOSEDT == '' ? '' : event.AC_CLOSEDT
    this.freezeac = event.AC_FREEZE_STATUS == null || event.AC_FREEZE_STATUS == '' ? false : true
    this.freezStataus = event.AC_FREEZE_STATUS == null || event.AC_FREEZE_STATUS == '' ? '' : event.AC_FREEZE_STATUS
    let maturedAmount = Number(event.AUTO_MATURED_PAYABLEAMT) + Number(event.AUTO_MATURED_INTERESTAMT)
    this.angForm.patchValue({
      AC_OPDATE: event.AC_OPDATE,
      AMOUNT: maturedAmount
    })
    this.accountOpenDate = moment(event.AC_OPDATE, 'DD/MM/YYYY')
    this.accountOpenDate = this.accountOpenDate._d
  }

  getLedgerTransactionsDeatils() {
    this.showLoader = true
    this.tableData = []
    this.debitTotal = 0
    this.creditTotal = 0
    this.debitDivTotal = 0
    this.creditDivTotal = 0
    this.normalInt = 0
    this.rebitTotal = 0
    this.bonusTotal = 0
    this.totalShares = 0
    this.recpayInt = 0
    this.overDueAmt = 0
    this.penalInt = 0
    this.recpenalInt = 0
    this.otherAmount = 0
    this.addedPenal = 0
    this.grandTotal = 0
    this.transactions = null
    // let obj = [this.getschemename, this.ngscheme, this.bankacno, moment(this.fromdate).format('DD/MM/YYYY'), moment(this.todate).format('DD/MM/YYYY'), this.acno, this.ngBranchCode]

    let toDate = moment(this.todate, 'DD/MM/YYYY')
    let toDt = moment(toDate).format('DD/MM/YYYY')
    let fromDate = moment(this.fromdate, 'DD/MM/YYYY')
    let fromDatet = moment(fromDate).format('DD/MM/YYYY')
    let obj = [this.getschemename, this.ngscheme, this.bankacno, fromDatet, toDt]

    this.http.post(this.url + '/ledger-view/shareView', obj).subscribe((data) => {
      let closeBal = 0
      let grandOpening = 0
      grandOpening = Math.abs(data[0]?.openingBal)
      closeBal = Math.abs(data[0]?.openingBal)
      data[0]?.openingBal < 0 ? this.drcr = 'Cr' : this.drcr = 'Dr'
      this.transactions = this.sort_by_key(data, 'TRAN_DATE')
      // console.log(this.transactions, 'Tran data')
      // if (this.transactions.length != 0) {
      let divBal = 0
      let obj = {
        TRAN_DATE: moment(this.fromdate).format('DD/MM/YYYY'),
        NARRATION: 'Opening Balance',
        closeBalance: closeBal,
        dividendBalance: divBal,
        DIV_DR_CR: this.drcr,
        TRAN_DR_CR: this.drcr,
      }
      this.tableData.push(obj)
      this.transactions.forEach((element) => {

        if (element.TRAN_SOURCE_TYPE != 'Opening Balance' && element.TRAN_STATUS != '2') {
          if (element.TRAN_MODE == '7') {
            element['DIVIDEND_AMOUNT'] = element.OTHER2_AMOUNT
          }
          //total credit and debit amount
          if (element.TRAN_STATUS != '0') {

            if (element.WARRENT_DATE != null && element.WARRENT_DATE != '') {
              element['TRAN_DRCR'] = 'C'
              element['TRAN_TYPE'] = 'UP'
              element['TRAN_DATE'] = element.WARRENT_DATE
              element['drcr'] = 'Cr'
            }
            else if (element.DIV_PAID_DATE != null && element.DIV_PAID_DATE != '') {
              element['TRAN_DRCR'] = 'D'
              element['TRAN_TYPE'] = 'PD'
              element['TRAN_DATE'] = element.DIV_PAID_DATE
              element['drcr'] = 'Dr'
            }
            else if (element.TRAN_DATE != null && element.TRAN_DATE != '' && element.REBIT_PAID_DATE == null) {
              element['TRAN_DATE'] = element.TRAN_DATE
              // element['TRAN_DRCR'] = 'C'
              element['TRAN_TYPE'] = 'UP'
              element['drcr'] = 'Cr'
              // element['isRebit'] = true
            }
            else if (element.REBIT_PAID_DATE != null && element.REBIT_PAID_DATE != '') {
              element['TRAN_DATE'] = element.REBIT_PAID_DATE
              element['TRAN_DRCR'] = 'D'
              element['TRAN_TYPE'] = 'PD'
              element['drcr'] = 'Dr'
              element['isRebit'] = true
            }
            if (element.isRebit == true) {
              element['REBIT_AMOUNT'] = element.TRAN_AMOUNT
              element['TRAN_AMOUNT'] = '0.00'
              element.TRAN_DRCR == 'C' ? this.rebitTotal = this.rebitTotal + Number(element.TRAN_AMOUNT) : this.rebitTotal = this.rebitTotal + 0
              element.TRAN_DRCR == 'D' ? this.rebitTotal = this.rebitTotal - Number(element.TRAN_AMOUNT) : this.rebitTotal = this.rebitTotal - 0
            }
            if (element.isRebit == undefined) {
              if (element.TRAN_DRCR == 'C') {
                element.TRAN_AMOUNT != undefined ? this.creditTotal = this.creditTotal + Number(element.TRAN_AMOUNT) : this.creditTotal = this.creditTotal + 0
                element.DIVIDEND_AMOUNT != undefined ? this.creditDivTotal = this.creditDivTotal + Number(element.DIVIDEND_AMOUNT) : this.creditDivTotal = this.creditDivTotal + 0
              }
              if (element.TRAN_DRCR == 'D') {
                element.TRAN_AMOUNT != undefined ? this.debitTotal = this.debitTotal + Number(element.TRAN_AMOUNT) : this.debitTotal = this.debitTotal + 0
                element.DIVIDEND_AMOUNT != undefined ? this.debitDivTotal = this.debitDivTotal + Number(element.DIVIDEND_AMOUNT) : this.debitDivTotal = this.debitDivTotal + 0
              }
              //closing balance calculation
              if (this.drcr == 'Cr') {
                element.TRAN_DRCR == 'C' ? element.TRAN_AMOUNT != undefined ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal + 0 : element.TRAN_AMOUNT != undefined ? closeBal = closeBal - Number(element.TRAN_AMOUNT) : closeBal = closeBal - 0
                closeBal > 0 ? element['TRAN_DR_CR'] = 'Cr' : element['TRAN_DR_CR'] = 'Dr'
                element['closeBalance'] = Math.abs(closeBal)
                element.TRAN_DRCR == 'C' ? element.DIVIDEND_AMOUNT != undefined ? divBal = divBal + Number(element.DIVIDEND_AMOUNT) : divBal = divBal + 0 : element.DIVIDEND_AMOUNT != undefined ? divBal = divBal - Number(element.DIVIDEND_AMOUNT) : divBal = divBal - 0
                divBal > 0 ? element['DIV_DR_CR'] = 'Cr' : element['DIV_DR_CR'] = 'Dr'
                element['dividendBalance'] = Math.abs(divBal)
              }
              else if (this.drcr == 'Dr') {
                element.TRAN_DRCR == 'D' ? element.TRAN_AMOUNT != undefined ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal + 0 : element.TRAN_AMOUNT != undefined ? closeBal = closeBal - Number(element.TRAN_AMOUNT) : closeBal = closeBal - 0
                closeBal > 0 ? element['TRAN_DR_CR'] = 'Dr' : element['TRAN_DR_CR'] = 'Cr'
                element['closeBalance'] = Math.abs(closeBal)
                element.TRAN_DRCR == 'D' ? element.DIVIDEND_AMOUNT != undefined ? divBal = divBal + Number(element.DIVIDEND_AMOUNT) : divBal = divBal + 0 : element.DIVIDEND_AMOUNT != undefined ? divBal = divBal - Number(element.DIVIDEND_AMOUNT) : divBal = divBal - 0
                divBal > 0 ? element['DIV_DR_CR'] = 'Dr' : element['DIV_DR_CR'] = 'Cr'
                element['dividendBalance'] = Math.abs(divBal)
              }
              if (element.TOTAL_SHARES != null || element.TOTAL_SHARES != '' || element.NO_OF_SHARES != null || element.NO_OF_SHARES != '') {
                element.TOTAL_SHARES != undefined ? this.totalShares = this.totalShares + Number(element.TOTAL_SHARES) : this.totalShares = this.totalShares + 0
                element.NO_OF_SHARES != undefined ? this.totalShares = this.totalShares + Number(element.NO_OF_SHARES) : this.totalShares = this.totalShares + 0
              }
            }
            else {
              element['closeBalance'] = closeBal
              element['dividendBalance'] = divBal
            }
            this.tableData.push(element)
          }
        }
      });
      // console.log(this.tableData, 'table')
      //grand total amount
      this.grandTotal = this.creditTotal + grandOpening
      // }
      // else {
      //   this.tableData = []
      //   this.debitTotal = 0
      //   this.creditTotal = 0
      //   this.debitDivTotal = 0
      //   this.creditDivTotal = 0
      //   this.normalInt = 0
      //   this.rebitTotal = 0
      //   this.bonusTotal = 0
      //   this.totalShares = 0
      //   this.recpayInt = 0
      //   this.overDueAmt = 0
      //   this.penalInt = 0
      //   this.recpenalInt = 0
      //   this.otherAmount = 0
      //   this.addedPenal = 0
      //   this.grandTotal = 0
      //   Swal.fire('Info', 'No Records Found', 'info')
      // }
    })
  }

  ngOnInit(): void {
    this.createForm()
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SH');
      });
      this.allScheme = filtered;
    })
    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`
      this.todate = data.CURRENT_DATE
      this.fromdate = moment(`01/04/${year - 1}`, 'DD/MM/YYYY')
      this.fromdate = this.fromdate._d
    })


  }

  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.required]],
      TO_DATE: ['', [Validators.required]],
      AC_OPDATE: ['', [Validators.required]],
      BRANCH_CODE: ['', [Validators.required]],
    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngBranchCode = result.branch.id
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }
  }


  schemechange(event) {
    this.acCloseDate = null
    this.isOpen = false
    this.getschemename = event.name
    this.ngscheme = event.value
    this.getAccountlist()




  }
  getdata() {
    this.ngscheme = null;
    this.accountedit = null;
  }
  // Fetching account from seleted scheme
  getAccountlist() {
    this.showLoader = false
    this.accountedit = null
    this.Cust_ID = null
    this.tableData = []
    this.transactions = null
    this.debitTotal = 0
    this.creditTotal = 0
    this.debitDivTotal = 0
    this.rebitTotal = 0
    this.bonusTotal = 0
    this.totalShares = 0
    this.creditDivTotal = 0
    this.normalInt = 0
    this.recpayInt = 0
    this.overDueAmt = 0
    this.penalInt = 0
    this.recpenalInt = 0
    this.otherAmount = 0
    this.addedPenal = 0
    this.grandTotal = 0
    let obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {
      case 'SH':
        this.schemeAccountNoService.getShareMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data

        })
        break;
    }

  }

  isOpen: boolean = false
  //get account details
  getAccountDetails(event) {
    this.showLoader = false
    this.tableData = []
    this.transactions = null
    this.debitTotal = 0
    this.debitDivTotal = 0
    this.creditDivTotal = 0
    this.creditTotal = 0
    this.rebitTotal = 0
    this.bonusTotal = 0
    this.totalShares = 0
    this.normalInt = 0
    this.recpayInt = 0
    this.overDueAmt = 0
    this.penalInt = 0
    this.recpenalInt = 0
    this.otherAmount = 0
    this.addedPenal = 0
    this.grandTotal = 0
    this.acno = event.label
    this.bankacno = event.bankacno
    this.dormantac = event.dormant
    this.acclosedon = event.acClose == null || event.acClose == '' ? false : true
    this.acCloseDate = event.acClose == null || event.acClose == '' ? null: event.acClose
    this.freezeac = event.freez == null || event.freez == '' ? false : true
    this.freezStataus = event.freez == null || event.freez == '' ? '' : event.freez
    let maturedAmount = Number(event.autoMaturedPayableAmt) + Number(event.autoMaturedIntrestAmt)
    this.angForm.patchValue({
      AC_OPDATE: event.opendate,
      AMOUNT: maturedAmount
    })
    if (this.acCloseDate != null) {
      this.acCloseDate = event.acClose
      this.isOpen = false
      this.freezeac = false

    }
    else if (this.freezeac == true) {
      this.acCloseDate = null
      this.isOpen = false
      this.freezeac = true
    }
    else {
      this.acCloseDate = null
      this.isOpen = true
      this.freezeac = false

    }

    this.accountOpenDate = moment(event.opendate, 'DD/MM/YYYY')
    this.accountOpenDate = this.accountOpenDate._d
  }

  rebitTotal: number = 0
  bonusTotal: number = 0
  totalShares: number = 0
  //transactions list in table
  getTransactionsDeatils() {
    this.showLoader = true
    this.tableData = []
    this.debitTotal = 0
    this.creditTotal = 0
    this.debitDivTotal = 0
    this.creditDivTotal = 0
    this.normalInt = 0
    this.rebitTotal = 0
    this.bonusTotal = 0
    this.totalShares = 0
    this.recpayInt = 0
    this.overDueAmt = 0
    this.penalInt = 0
    this.recpenalInt = 0
    this.otherAmount = 0
    this.addedPenal = 0
    this.grandTotal = 0
    this.transactions = null

    // let obj = [this.getschemename, this.ngscheme, this.bankacno, moment(this.angForm.controls['FROM_DATE'].value).format('DD/MM/YYYY'), moment(this.angForm.controls['TO_DATE'].value).format('DD/MM/YYYY'), this.acno, this.ngBranchCode]

    let toDate = moment(this.angForm.controls['TO_DATE'].value, 'DD/MM/YYYY')
    let toDt = moment(toDate).format('DD/MM/YYYY')
    let fromDate = moment(this.angForm.controls['FROM_DATE'].value, 'DD/MM/YYYY')
    let fromDatet = moment(fromDate).format('DD/MM/YYYY')
    let obj = [this.getschemename, this.ngscheme, this.bankacno, fromDatet, toDt]

    this.http.post(this.url + '/ledger-view/shareView', obj).subscribe((data) => {
      let closeBal = 0
      let grandOpening = 0
      grandOpening = Math.abs(data[0]?.openingBal)
      closeBal = Math.abs(data[0]?.openingBal)
      data[0]?.openingBal < 0 ? this.drcr = 'Cr' : this.drcr = 'Dr'
      this.transactions = this.sort_by_key(data, 'TRAN_DATE');
      // console.log(this.transactions, 'Tran data')
      // if (this.transactions.length != 0) {
      let divBal = 0
      let obj = {
        TRAN_DATE: moment(this.angForm.controls['FROM_DATE'].value).format('DD/MM/YYYY'),
        NARRATION: 'Opening Balance',
        closeBalance: closeBal,
        dividendBalance: divBal,
        DIV_DR_CR: this.drcr,
        TRAN_DR_CR: this.drcr,
      }
      this.tableData.push(obj)
      if (this.transactions.length >= 1 && this.transactions[0].TRAN_STATUS != undefined) {
        this.transactions.forEach((element) => {

          if (element.TRAN_SOURCE_TYPE != 'Opening Balance' && element.TRAN_STATUS != '2') {
            if (element.TRAN_MODE == '7') {
              element['DIVIDEND_AMOUNT'] = element.OTHER2_AMOUNT
            }
            //total credit and debit amount
            if (element.TRAN_STATUS != '0') {

              if (element.WARRENT_DATE != null && element.WARRENT_DATE != '') {
                element['TRAN_DRCR'] = 'C'
                element['TRAN_TYPE'] = 'UP'
                element['TRAN_DATE'] = element.WARRENT_DATE
                element['drcr'] = 'Cr'
              }
              else if (element.DIV_PAID_DATE != null && element.DIV_PAID_DATE != '') {
                element['TRAN_DRCR'] = 'D'
                element['TRAN_TYPE'] = 'PD'
                element['TRAN_DATE'] = element.DIV_PAID_DATE
                element['drcr'] = 'Dr'
              }
              else if (element.TRAN_DATE != null && element.TRAN_DATE != '' && element.REBIT_PAID_DATE == null) {
                element['TRAN_DATE'] = element.TRAN_DATE
                // element['TRAN_DRCR'] = 'C'
                element['TRAN_TYPE'] = 'UP'
                element['drcr'] = 'Cr'
                // element['isRebit'] = true
              }
              else if (element.REBIT_PAID_DATE != null && element.REBIT_PAID_DATE != '') {
                element['TRAN_DATE'] = element.REBIT_PAID_DATE
                element['TRAN_DRCR'] = 'D'
                element['TRAN_TYPE'] = 'PD'
                element['drcr'] = 'Dr'
                element['isRebit'] = true
              }
              if (element.isRebit == true) {
                element['REBIT_AMOUNT'] = element.TRAN_AMOUNT
                element['TRAN_AMOUNT'] = '0.00'
                element.TRAN_DRCR == 'C' ? this.rebitTotal = this.rebitTotal + Number(element.TRAN_AMOUNT) : this.rebitTotal = this.rebitTotal + 0
                element.TRAN_DRCR == 'D' ? this.rebitTotal = this.rebitTotal - Number(element.TRAN_AMOUNT) : this.rebitTotal = this.rebitTotal - 0
              }
              if (element.isRebit == undefined) {
                if (element.TRAN_DRCR == 'C') {
                  element.TRAN_AMOUNT != undefined ? this.creditTotal = this.creditTotal + Number(element.TRAN_AMOUNT) : this.creditTotal = this.creditTotal + 0
                  element.DIVIDEND_AMOUNT != undefined ? this.creditDivTotal = this.creditDivTotal + Number(element.DIVIDEND_AMOUNT) : this.creditDivTotal = this.creditDivTotal + 0
                }
                if (element.TRAN_DRCR == 'D') {
                  element.TRAN_AMOUNT != undefined ? this.debitTotal = this.debitTotal + Number(element.TRAN_AMOUNT) : this.debitTotal = this.debitTotal + 0
                  element.DIVIDEND_AMOUNT != undefined ? this.debitDivTotal = this.debitDivTotal + Number(element.DIVIDEND_AMOUNT) : this.debitDivTotal = this.debitDivTotal + 0
                }
                //closing balance calculation
                if (this.drcr == 'Cr') {
                  element.TRAN_DRCR == 'C' ? element.TRAN_AMOUNT != undefined ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal + 0 : element.TRAN_AMOUNT != undefined ? closeBal = closeBal - Number(element.TRAN_AMOUNT) : closeBal = closeBal - 0
                  closeBal > 0 ? element['TRAN_DR_CR'] = 'Cr' : element['TRAN_DR_CR'] = 'Dr'
                  element['closeBalance'] = Math.abs(closeBal)
                  element.TRAN_DRCR == 'C' ? element.DIVIDEND_AMOUNT != undefined ? divBal = divBal + Number(element.DIVIDEND_AMOUNT) : divBal = divBal + 0 : element.DIVIDEND_AMOUNT != undefined ? divBal = divBal - Number(element.DIVIDEND_AMOUNT) : divBal = divBal - 0
                  divBal > 0 ? element['DIV_DR_CR'] = 'Cr' : element['DIV_DR_CR'] = 'Dr'
                  element['dividendBalance'] = Math.abs(divBal)
                }
                else if (this.drcr == 'Dr') {
                  element.TRAN_DRCR == 'D' ? element.TRAN_AMOUNT != undefined ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal + 0 : element.TRAN_AMOUNT != undefined ? closeBal = closeBal - Number(element.TRAN_AMOUNT) : closeBal = closeBal - 0
                  closeBal > 0 ? element['TRAN_DR_CR'] = 'Dr' : element['TRAN_DR_CR'] = 'Cr'
                  element['closeBalance'] = Math.abs(closeBal)
                  element.TRAN_DRCR == 'D' ? element.DIVIDEND_AMOUNT != undefined ? divBal = divBal + Number(element.DIVIDEND_AMOUNT) : divBal = divBal + 0 : element.DIVIDEND_AMOUNT != undefined ? divBal = divBal - Number(element.DIVIDEND_AMOUNT) : divBal = divBal - 0
                  divBal > 0 ? element['DIV_DR_CR'] = 'Dr' : element['DIV_DR_CR'] = 'Cr'
                  element['dividendBalance'] = Math.abs(divBal)
                }
                if (element.TOTAL_SHARES != null || element.TOTAL_SHARES != '' || element.NO_OF_SHARES != null || element.NO_OF_SHARES != '') {
                  element.TOTAL_SHARES != undefined ? this.totalShares = this.totalShares + Number(element.TOTAL_SHARES) : this.totalShares = this.totalShares + 0
                  element.NO_OF_SHARES != undefined ? this.totalShares = this.totalShares + Number(element.NO_OF_SHARES) : this.totalShares = this.totalShares + 0
                }
              }
              else {
                element['closeBalance'] = closeBal
                element['dividendBalance'] = divBal
              }
              this.tableData.push(element)
            }
          }
        });
      }
      // console.log(this.tableData, 'table')
      //grand total amount
      this.grandTotal = this.creditTotal + grandOpening
      // }
      // else {
      //   this.tableData = []
      //   this.debitTotal = 0
      //   this.creditTotal = 0
      //   this.debitDivTotal = 0
      //   this.creditDivTotal = 0
      //   this.normalInt = 0
      //   this.rebitTotal = 0
      //   this.bonusTotal = 0
      //   this.totalShares = 0
      //   this.recpayInt = 0
      //   this.overDueAmt = 0
      //   this.penalInt = 0
      //   this.recpenalInt = 0
      //   this.otherAmount = 0
      //   this.addedPenal = 0
      //   this.grandTotal = 0
      //   Swal.fire('Info', 'No Records Found', 'info')
      // }
    })
  }

  sort_by_key(array: any, key: any) {
    return array.sort(function (a: any, b: any) {
      let p = moment(a[key], 'DD/MM/YYYY');
      let q = moment(b[key], 'DD/MM/YYYY');
      return (p < q) ? -1 : ((p > q) ? 1 : 0)
    });
  }

  Cust_ID
  //filter object
  filterObject(ele) {
    this.Cust_ID = [];
    if (ele.key == 'Backspace' && ele.target.value == '') {
      this.Cust_ID = [];
    }
    else {
      for (let element of this.schemeACNo) {
        if (JSON.stringify(element.label).includes(ele.target.value.toUpperCase())) {
          this.Cust_ID.push(element);
        }
      }
    }
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

}
