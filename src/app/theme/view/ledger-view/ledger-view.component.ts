import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service'
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { LegderViewService } from './ledger-view.service'
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
@Component({
  selector: 'app-ledger-view',
  templateUrl: './ledger-view.component.html',
  styleUrls: ['./ledger-view.component.scss']
})
export class LedgerViewComponent implements OnInit, OnChanges {
  angForm: FormGroup;
  formSubmitted = false;
  //api 
  url = environment.base_url;
  // dropdown variables
  ngscheme: any = null
  accountedit: any = null
  allScheme: any[]
  schemeACNo: any;
  scheme: any[];
  GLACNooption: any[];
  branch_code//from ownbranchmaster
  ngBranchCode: any = null
  // Date variables
  todate: any = null;
  fromdate: any = null
  accountOpenDate: any = null
  maxDate: any;
  minDate: any;
  bsValue = new Date();
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // for grid variable declaration
  dormantac: boolean = false
  acclosedon: boolean = false
  freezeac: boolean = false
  obj: any
  getschemename: any
  bankacno
  acCloseDate
  freezStataus
  transactions
  tableData = []
  drcr
  debitTotal: number = 0
  creditTotal: number = 0
  normalInt: number = 0
  recpayInt: number = 0
  overDueAmt: number = 0
  penalInt: number = 0
  recpenalInt: number = 0
  otherAmount: number = 0
  addedPenal: number = 0
  totalDepositAmount: number = 0
  grandTotal: number = 0

  opendate
  disableFields: boolean = false
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
    private ACMasterDropdownService: ACMasterDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
    private systemParameter: SystemMasterParametersService,
    private _service: LegderViewService
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
    this.disableFields = true
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
    this.angForm.controls['AC_OPDATE'].disable()
    this.angForm.controls['AMOUNT'].disable()
  }
  changeAccountDetails(event) {
    this.tableData = []
    this.transactions = null
    this.debitTotal = 0
    this.creditTotal = 0
    this.normalInt = 0
    this.recpayInt = 0
    this.overDueAmt = 0
    this.penalInt = 0
    this.recpenalInt = 0
    this.otherAmount = 0
    this.addedPenal = 0
    this.grandTotal = 0
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
    this.opendate = event.AC_OPDATE
    this.accountOpenDate = moment(event.AC_OPDATE, 'DD/MM/YYYY')
    this.accountOpenDate = this.accountOpenDate._d

  }

  getLedgerTransactionsDeatils() {
    this.showLoader = true
    this.tableData = []
    this.debitTotal = 0
    this.creditTotal = 0
    this.normalInt = 0
    this.recpayInt = 0
    this.overDueAmt = 0
    this.penalInt = 0
    this.recpenalInt = 0
    this.otherAmount = 0
    this.addedPenal = 0
    this.grandTotal = 0
    this.transactions = null

    // let obj = [this.getschemename, this.ngscheme, this.bankacno, moment(this.fromdate).format('DD/MM/YYYY'), moment(this.todate).format('DD/MM/YYYY')]

    let toDate = moment(this.todate, 'DD/MM/YYYY')
    let toDt = moment(toDate).format('DD/MM/YYYY')
    let fromDate = moment(this.fromdate, 'DD/MM/YYYY')
    let fromDatet = moment(fromDate).format('DD/MM/YYYY')
    let obj = [this.getschemename, this.ngscheme, this.bankacno, fromDatet, toDt]

    this.http.post(this.url + '/ledger-view/ledgerView', obj).subscribe((data) => {
      let closeBal = 0
      let grandOpening = 0
      grandOpening = Math.abs(data[0]?.openingBal)
      closeBal = Math.abs(data[0]?.openingBal)
      data[0]?.openingBal < 0 ? this.drcr = 'Cr' : this.drcr = 'Dr'
      this.transactions = this.sort_by_key(data, 'TRAN_DATE');
      // this.transactions = this.sortData(data);
      let obj = {
        TRAN_DATE: moment(this.angForm.controls['FROM_DATE'].value).format('DD/MM/YYYY'),
        NARRATION: 'Opening Balance',
        closeBalance: closeBal,
        DR_CR: this.drcr
      }
      this.tableData.push(obj)
      if (this.transactions.length >= 1) {
        this.transactions.forEach((element) => {
          if (element.TRAN_SOURCE_TYPE != 'Opening Balance' && element.TRAN_STATUS != '2' && element.take == true) {
            //record wise other amount 
            let otherAmt = 0
            otherAmt = Number(element.OTHER1_AMOUNT) + Number(element.OTHER2_AMOUNT) + Number(element.OTHER3_AMOUNT) + Number(element.OTHER4_AMOUNT) + Number(element.OTHER5_AMOUNT) + Number(element.OTHER6_AMOUNT) + Number(element.OTHER7_AMOUNT) + Number(element.OTHER8_AMOUNT) + Number(element.OTHER9_AMOUNT) + Number(element.OTHER11_AMOUNT)
            element['otherAmt'] = otherAmt

            //total credit and debit amount
            if (element.TRAN_STATUS != '0') {
              if (element.TRAN_DRCR == 'D') { this.debitTotal = this.debitTotal + Number(element.TRAN_AMOUNT) }
              if (element.TRAN_DRCR == 'C') { this.creditTotal = this.creditTotal + Number(element.TRAN_AMOUNT) }
              //closing balance calculation
              if (this.drcr == 'Cr') {
                element.TRAN_DRCR == 'C' ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal - Number(element.TRAN_AMOUNT)
                closeBal > 0 ? element['DR_CR'] = 'Cr' : element['DR_CR'] = 'Dr'
                element['closeBalance'] = Math.abs(closeBal)
              }
              else if (this.drcr == 'Dr') {
                element.TRAN_DRCR == 'D' ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal - Number(element.TRAN_AMOUNT)
                closeBal > 0 ? element['DR_CR'] = 'Dr' : element['DR_CR'] = 'Cr'
                element['closeBalance'] = Math.abs(closeBal)
              }
              //column wise total amount
              element.INTEREST_AMOUNT != undefined ? this.normalInt = this.normalInt + Number(element.INTEREST_AMOUNT) : this.normalInt = this.normalInt + 0
              element.RECPAY_INT_AMOUNT != undefined ? this.recpayInt = this.recpayInt + Number(element.RECPAY_INT_AMOUNT) : this.recpayInt = this.recpayInt + 0
              element.OTHER10_AMOUNT != undefined ? this.overDueAmt = this.overDueAmt + Number(element.OTHER10_AMOUNT) : this.overDueAmt = this.overDueAmt + 0
              element.PENAL_INTEREST != undefined ? this.penalInt = this.penalInt + Number(element.PENAL_INTEREST) : this.penalInt = this.penalInt + 0
              element.REC_PENAL_INT_AMOUNT != undefined ? this.recpenalInt = this.recpenalInt + Number(element.REC_PENAL_INT_AMOUNT) : this.recpenalInt = this.recpenalInt + 0
              element.ADDED_PENAL_INTEREST != undefined ? this.addedPenal = this.addedPenal + Number(element.ADDED_PENAL_INTEREST) : this.addedPenal = this.addedPenal + 0
              this.otherAmount = this.otherAmount + otherAmt
            }
            else {
              element['closeBalance'] = closeBal
            }
            this.tableData.push(element)
          }
        });
      }
      //grand total amount
      this.grandTotal = this.creditTotal + grandOpening
      this.totalDepositAmount = this.creditTotal + this.normalInt + this.recpayInt + this.overDueAmt + this.penalInt + this.recpenalInt + this.addedPenal + this.otherAmount
      // }
      // else {
      //   this.tableData = []
      //   this.debitTotal = 0
      //   this.creditTotal = 0
      //   this.normalInt = 0
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
      var allscheme = data.filter(function (scheme) {
        return (
          scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'AG' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'GL')
      });
      this.allScheme = allscheme;
    })

    this.schemeCodeDropdownService.getTermDepositSchemePatD().pipe(first()).subscribe(data => {
      this.allScheme.push(data)
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
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.required]],
      TO_DATE: ['', [Validators.required]],
      AC_OPDATE: ['', [Validators.required]],
      AMOUNT: [''],
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
    this.getschemename = event.name
    this.ngscheme = event.value
    this.schemeACNo = null
    this.getAccountlist()
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
      case 'SB':
        this.schemeAccountNoService.getSavingMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'CA':
        this.schemeAccountNoService.getCurrentMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'AG':
        this.schemeAccountNoService.getPigmyAgentMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'GS':
        this.schemeAccountNoService.getAnamatMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'PG':
        this.schemeAccountNoService.getPigmyAccountMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'TD':
        this.schemeAccountNoService.getTermDepositMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'LN':
        this.schemeAccountNoService.getTermLoanMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'CC':
        this.schemeAccountNoService.getCashCreditMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'IV':
        this.schemeAccountNoService.getInvestmentMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data
        })
        break;
    }
  }

  //get account details
  getAccountDetails(event) {
    this.showLoader = false
    this.tableData = []
    this.transactions = null
    this.debitTotal = 0
    this.creditTotal = 0
    this.normalInt = 0
    this.recpayInt = 0
    this.overDueAmt = 0
    this.penalInt = 0
    this.recpenalInt = 0
    this.otherAmount = 0
    this.addedPenal = 0
    this.grandTotal = 0
    this.bankacno = event.bankacno
    this.dormantac = event.dormant
    this.acclosedon = event.acClose == null || event.acClose == '' ? false : true
    this.acCloseDate = event.acClose == null || event.acClose == '' ? '' : event.acClose
    this.freezeac = event.freez == null || event.freez == '' ? false : true
    this.freezStataus = event.freez == null || event.freez == '' ? '' : event.freez
    let maturedAmount = Number(event.autoMaturedPayableAmt) + Number(event.autoMaturedIntrestAmt)
    this.angForm.patchValue({
      AC_OPDATE: event.opendate,
      AMOUNT: maturedAmount
    })

    this.accountOpenDate = moment(event.opendate, 'DD/MM/YYYY')
    this.accountOpenDate = this.accountOpenDate._d
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

  //transactions list in table
  getTransactionsDeatils() {
    this.showLoader = true
    this.tableData = []
    this.debitTotal = 0
    this.creditTotal = 0
    this.normalInt = 0
    this.recpayInt = 0
    this.overDueAmt = 0
    this.penalInt = 0
    this.recpenalInt = 0
    this.otherAmount = 0
    this.addedPenal = 0
    this.grandTotal = 0
    this.transactions = null
    let toDate = moment(this.angForm.controls['TO_DATE'].value, 'DD/MM/YYYY')
    let toDt = moment(toDate).format('DD/MM/YYYY')
    let fromDate = moment(this.angForm.controls['FROM_DATE'].value, 'DD/MM/YYYY')
    let fromDatet = moment(fromDate).format('DD/MM/YYYY')
    let obj = [this.getschemename, this.ngscheme, this.bankacno, fromDatet, toDt]
    this.http.post(this.url + '/ledger-view/ledgerView', obj).subscribe((data) => {
      let closeBal = 0
      let grandOpening = 0
      grandOpening = Math.abs(data[0]?.openingBal)
      closeBal = Math.abs(data[0]?.openingBal)
      data[0]?.openingBal < 0 ? this.drcr = 'Cr' : this.drcr = 'Dr'
      this.transactions = data
      // this.transactions = this.sortData(data);
      this.transactions = this.sort_by_key(data, 'TRAN_DATE');
      console.log(this.transactions, 'dta')
      // if (this.transactions.length != 0) {
      let obj = {
        TRAN_DATE: moment(this.angForm.controls['FROM_DATE'].value).format('DD/MM/YYYY'),
        NARRATION: 'Opening Balance',
        closeBalance: closeBal,
        DR_CR: this.drcr
      }
      this.tableData.push(obj)
      if (this.transactions.length >= 1) {
        // if (this.transactions.length >= 2) {
        this.transactions.forEach((element) => {
          if (element?.TRAN_SOURCE_TYPE != 'Opening Balance' && element?.TRAN_STATUS != '2' && element.take == true) {
            //record wise other amount 
            let otherAmt = 0
            otherAmt = Number(element.OTHER1_AMOUNT) + Number(element.OTHER2_AMOUNT) + Number(element.OTHER3_AMOUNT) + Number(element.OTHER4_AMOUNT) + Number(element.OTHER5_AMOUNT) + Number(element.OTHER6_AMOUNT) + Number(element.OTHER7_AMOUNT) + Number(element.OTHER8_AMOUNT) + Number(element.OTHER9_AMOUNT) + Number(element.OTHER11_AMOUNT)
            element['otherAmt'] = otherAmt

            //total credit and debit amount
            if (element.TRAN_STATUS != '0') {
              if (element.TRAN_DRCR == 'D') { this.debitTotal = this.debitTotal + Number(element.TRAN_AMOUNT) }
              if (element.TRAN_DRCR == 'C') { this.creditTotal = this.creditTotal + Number(element.TRAN_AMOUNT) }
              //closing balance calculation
              if (this.drcr == 'Cr') {
                element.TRAN_DRCR == 'C' ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal - Number(element.TRAN_AMOUNT)
                closeBal > 0 ? element['DR_CR'] = 'Cr' : element['DR_CR'] = 'Dr'
                element['closeBalance'] = Math.abs(closeBal)
              }
              else if (this.drcr == 'Dr') {
                element.TRAN_DRCR == 'D' ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal - Number(element.TRAN_AMOUNT)
                closeBal > 0 ? element['DR_CR'] = 'Dr' : element['DR_CR'] = 'Cr'
                element['closeBalance'] = Math.abs(closeBal)
              }
              //column wise total amount
              element.INTEREST_AMOUNT != undefined ? this.normalInt = this.normalInt + Number(element.INTEREST_AMOUNT) : this.normalInt = this.normalInt + 0
              element.RECPAY_INT_AMOUNT != undefined ? this.recpayInt = this.recpayInt + Number(element.RECPAY_INT_AMOUNT) : this.recpayInt = this.recpayInt + 0
              element.OTHER10_AMOUNT != undefined ? this.overDueAmt = this.overDueAmt + Number(element.OTHER10_AMOUNT) : this.overDueAmt = this.overDueAmt + 0
              element.PENAL_INTEREST != undefined ? this.penalInt = this.penalInt + Number(element.PENAL_INTEREST) : this.penalInt = this.penalInt + 0
              element.REC_PENAL_INT_AMOUNT != undefined ? this.recpenalInt = this.recpenalInt + Number(element.REC_PENAL_INT_AMOUNT) : this.recpenalInt = this.recpenalInt + 0
              element.ADDED_PENAL_INTEREST != undefined ? this.addedPenal = this.addedPenal + Number(element.ADDED_PENAL_INTEREST) : this.addedPenal = this.addedPenal + 0
              this.otherAmount = this.otherAmount + otherAmt
            }
            else {
              element['closeBalance'] = closeBal
            }
            this.tableData.push(element)
          }
        });
      }
      console.log(this.tableData, 'table')
      //grand total amount
      this.grandTotal = this.creditTotal + grandOpening
      this.totalDepositAmount = this.creditTotal + this.normalInt + this.recpayInt + this.overDueAmt + this.penalInt + this.recpenalInt + this.addedPenal + this.otherAmount

      // }
      // else {
      //   this.tableData = []
      //   this.debitTotal = 0
      //   this.creditTotal = 0
      //   this.normalInt = 0
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

    console.log(this.tableData, 'sorted data')
  }

  sort_by_key(array: any, key: any) {
    return array.sort(function (a: any, b: any) {
      let p = moment(a[key], 'DD/MM/YYYY');
      let q = moment(b[key], 'DD/MM/YYYY');
      return (p < q) ? -1 : ((p > q) ? 1 : 0)
    });
  }
}
