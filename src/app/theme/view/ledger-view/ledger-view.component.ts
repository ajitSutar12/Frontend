import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-ledger-view',
  templateUrl: './ledger-view.component.html',
  styleUrls: ['./ledger-view.component.scss']
})
export class LedgerViewComponent implements OnInit {
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
  maxDate: Date;
  minDate: Date;
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
  grandTotal: number = 0

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ACMasterDropdownService: ACMasterDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
    private _service: LegderViewService
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
    // this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit(): void {
    this.createForm()
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'AG' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'GL')
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
  }

  schemechange(event) {
    this.getschemename = event.name
    this.ngscheme = event.value
    this.getAccountlist()
  }

  // Fetching account from seleted scheme
  getAccountlist() {
    this.accountedit = null
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
    debugger
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

  //transactions list in table
  getTransactionsDeatils() {
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
    let obj = [this.getschemename, this.ngscheme, this.bankacno, moment(this.angForm.controls['FROM_DATE'].value).format('DD/MM/YYYY'), moment(this.angForm.controls['TO_DATE'].value).format('DD/MM/YYYY')]
    this.http.post(this.url + '/ledger-view/allAccount', obj).subscribe((data) => {
      let closeBal = 0
      let grandOpening = 0
      grandOpening = Math.abs(data[0]?.openingBal)
      closeBal = Math.abs(data[0]?.openingBal)
      data[0]?.openingBal < 0 ? this.drcr = 'Cr' : this.drcr = 'Dr'
      // this.transactions = data
      this.transactions = this.sortData(data);
      if (this.transactions.length != 0) {
        let obj = {
          TRAN_DATE: moment(this.angForm.controls['FROM_DATE'].value).format('DD/MM/YYYY'),
          NARRATION: 'Opening Balance',
          closeBalance: closeBal
        }
        this.tableData.push(obj)
        this.transactions.forEach((element) => {
          debugger
          if (element.TRAN_SOURCETYPE != 'Opening Balance' && element.TRAN_STATUS != '2') {
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
                element['closeBalance'] = closeBal
              }
              else if (this.drcr == 'Dr') {
                element.TRAN_DRCR == 'D' ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal - Number(element.TRAN_AMOUNT)
                element['closeBalance'] = closeBal
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
        console.log(this.tableData, 'table')
        //grand total amount
        this.grandTotal = this.creditTotal + grandOpening

      }
      else {
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
        Swal.fire('Info', 'No Records Found', 'info')
      }
    })

    console.log(this.tableData, 'sorted data')
  }

  sortData(data) {
    return data.sort((a, b) => {
      return <any>new Date(a.TRAN_DATE) - <any>new Date(b.TRAN_DATE);
    });
  }
}
