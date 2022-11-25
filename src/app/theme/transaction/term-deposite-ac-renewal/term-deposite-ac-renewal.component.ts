import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import { TermDepositeAcRenewalService } from './term-deposite-ac-renewal.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { NgSelectComponent } from '@ng-select/ng-select'
//date pipe
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-term-deposite-ac-renewal',
  templateUrl: './term-deposite-ac-renewal.component.html',
  styleUrls: ['./term-deposite-ac-renewal.component.scss']
})
export class TermDepositeAcRenewalComponent implements OnInit {
  @Output() reloadTablePassing = new EventEmitter<string>();
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  updateID: number = 0;

  selectedBranch: any;
  selectedIntCate: any;
  selectedCode: any;
  selectedScheme: any;
  customer: any;
  selectedCodeNormal: any;
  selectedSchemeNormal: any;
  customerNormal: any;
  selectedCodePayable: any;
  selectedSchemePayable: any;
  renewalAsOnDate: any;
  customerPayable: any;
  angForm: FormGroup;

  date: any;
  branch_code: any;
  introducerACNo
  introducerACNoNormal
  introducerACNoPayable
  obj: any
  allScheme = new Array()//from schme master
  master: any;
  allSchemeCode: any//from schme master
  allSchemeCodeNormal: any;
  allSchemeCodePayable: any;
  isture: boolean = true;

  NormalCheck: boolean = true;
  transferShowNormal: boolean = false;
  payableTranferShow: boolean = false;
  InterestDate: any;
  current_date: any;

  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  InterestCategoryData: any;
  maxDate: Date;
  payableShow: boolean = true;

  constructor(private fb: FormBuilder,
    private multiService: MultiVoucherService,
    private ownbranchMasterService: OwnbranchMasterService,
    private savingMasterService: SavingMasterService,
    private Multiservice: MultiVoucherService,
    private _service: TermDepositeAcRenewalService,
    private datePipe: DatePipe,
  ) {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
    if (this.childMessage != undefined) {
      this.editClickHandler(this.childMessage);
    }
  }

  ngOnInit(): void {
    this.createForm()

    let user = JSON.parse(localStorage.getItem('user'));

    this.current_date = user.branch.syspara.CURRENT_DATE;

    //get syspara details
    this.multiService.getSysParaData().subscribe(data => {
      // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
      this.date = data[0].CURRENT_DATE;
    })

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.selectedBranch = user.branchId;
    })

    //Scheme Code
    this.Multiservice.getSchemeCodeList().subscribe(data => {
      this.master = data;
      this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()];
      this.allSchemeCodeNormal = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()];
      this.allSchemeCodePayable = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()];
      this.selectedCode = 'TD';
      this.selectedSchemeCode()
    })

    //Data
    this._service.interestCategory().subscribe(data => {
      this.InterestCategoryData = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      branch_code: ['', [Validators.required]],
      date: [''],
      scheme_type: ['', [Validators.required]],
      scheme: ['', [Validators.required]],
      account_no: ['', [Validators.required]],
      NormalInt: [''],
      NormalIntCheck: [''],
      payableInterestcheck: [''],
      IntUpto: [''],
      NormalIntRadio: [''],
      PayableCheck: [''],
      new_matu_date: [''],
      new_maturity_amt: [''],
      new_last_date: [''],
      new_rate: [''],
      new_deposit: [''],
      new_receipt: [''],
      new_day: [''],
      new_month: [''],
      new_ason_date: [''],
      new_category: [''],
      renewal_tran_no: [''],
      payable_account_no: ['', [Validators.required]],
      payable_scheme: ['', [Validators.required]],
      payable_scheme_type: ['', [Validators.required]],
      PayableIntRadio: [''],
      payableCheck: [''],
      normal_account_no: ['', [Validators.required]],
      normal_scheme: ['', [Validators.required]],
      normal_scheme_type: ['', [Validators.required]],
      old_last_trn_date: [''],
      old_int_cate: [''],
      old_last_int_date: [''],
      old_total_int_paid: [''],
      old_intrate: [''],
      old_month: [''],
      old_days: [''],
      old_receipt_no: [''],
      old_ac_ason_date: [''],
      old_ac_matuamt: [''],
      old_ac_expdt: [''],
      old_Ac_op_date: [''],
      old_deposit_Amt: [''],
      payableInt: [0],
      AC_RENEWAL_COUNTER: [0],
      TRAN_NO: [0]
    })
  }

  formatInterestDate() {
    this.InterestDate = moment(this.InterestDate).format('DD/MM/YYYY')
  }

  customerAc
  //Customer change function
  TotalDays: number;
  funAmtPayableInterest = 0
  funInterestRate = 0
  funAmtNormalInterest = 0
  isCalulateMaturityAmountFlag: boolean = false
  ledgerBalance = 0
  getVoucherData() {
    this.selectedIntCate = Number(this.customer.AC_INTCATA);
    this.renewalAsOnDate = this.customer.AC_EXPDT;
    this.angForm.patchValue({
      'new_month': this.customer.AC_MONTHS,
      'new_day': this.customer.AC_DAYS,
      'new_deposit': this.customer.AC_SCHMAMT,
      'new_rate': this.customer.AC_INTRATE,
      'new_last_date': this.customer.AC_LINTEDT,
      'new_maturity_amt': Number(this.customer.AC_MATUAMT).toFixed(2),
    })

    //Calculate Total Days
    let total = Number(this.customer.AC_MONTHS) / 12 * 365;
    this.TotalDays = Math.round(total + Number(this.customer.AC_DAYS));
    this.getMaturityDate()
    let obj = {
      Scheme: this.selectedScheme.S_APPL,
      AC_TYPE: this.selectedScheme.id,
      BANKACNO: this.customer.BANKACNO,
      Date: this.date,
    }
    this._service.getAccountDeatils(obj).subscribe(data => {
      console.log('data', data)
      this.angForm.patchValue({
        old_total_int_paid: Number(data.totalinterest).toFixed(2),
        new_rate: data.InterestRate,
        new_deposit: Math.abs(data.ledgerBal).toFixed(2),
        AC_RENEWAL_COUNTER: data.renewalCount,
        old_last_trn_date: data.lastTransactionDate
      })
      this.funAmtNormalInterest = data.normalInterest
      this.funAmtPayableInterest = data.paybableInterest
      this.isCalulateMaturityAmountFlag = data.isCalulateMaturityAmountFlag
      this.funInterestRate = data.InterestRate
      this.ledgerBalance = Math.abs(data.ledgerBal)
      this.getMaturityAmount()
    })

  }


  result: number
  simpleInterestCalculation() {

    var date1 = this.angForm.controls['new_ason_date'].value;
    var date2 = this.angForm.controls['new_matu_date'].value;

    // date1 = moment(date1).format('DD/MM/YYYY');
    // date2 = moment(date2).format('DD/MM/YYYY');

    var startDate = moment(date1, "DD/MM/YYYY");
    var endDate = moment(date2, "DD/MM/YYYY");

    var result = endDate.diff(startDate, 'days');
    this.result = Math.round(Math.floor(this.angForm.controls['new_deposit'].value) * (Math.floor(result)) * Math.floor(this.angForm.controls['new_rate'].value) / 36500 + Math.floor(this.angForm.controls['new_deposit'].value))
    this.angForm.patchValue({
      new_maturity_amt: Number(this.result).toFixed(2)
    })
  }

  //compound interest
  i: number
  total = 0

  getMaturityAmount() {
    if (this.isCalulateMaturityAmountFlag) {
      this.angForm.patchValue({
        new_maturity_amt: Math.abs(this.ledgerBalance).toFixed(2)
      })
      //   // calculate
      this._service.getTermDepositAccountDeatils(this.selectedScheme.id).subscribe(data => {
        if (data.IS_CAL_MATURITY_AMT == '1') {
          if ((data.INTEREST_RULE == "0" && data.IS_RECURRING_TYPE == '0' && data.IS_CALLDEPOSIT_TYPE == '0' && data.REINVESTMENT == '0') || data.INTEREST_RULE == "1") {
            if (data.S_INTCALTP == "D" && data.S_INTCALC_METHOD == "S") {
              this.simpleInterestCalculation()
            } else if (data.S_INTCALTP == "D" && data.S_INTCALC_METHOD == "C") {
              if (data.COMPOUND_INT_BASIS == "M" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == '1') {
                var Quarters = Math.floor(this.angForm.controls['new_month'].value) / 1;
              } else if (data.COMPOUND_INT_BASIS == "Q" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == '1') {
                var Quarters = Math.floor(this.angForm.controls['new_month'].value) / 3;
              } else if (data.COMPOUND_INT_BASIS == "H" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == '1') {
                var Quarters = Math.floor(this.angForm.controls['new_month'].value) / 6;
              } else if (data.COMPOUND_INT_BASIS == "Y" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == '1') {
                var Quarters = Math.floor(this.angForm.controls['new_month'].value) / 12;
              }
              var date1 = this.angForm.controls['new_ason_date'].value;
              var date2 = this.angForm.controls['new_matu_date'].value;
              var startDate = moment(date1, "DD/MM/YYYY");
              var endDate = moment(date2, "DD/MM/YYYY");
              var result = endDate.diff(startDate, 'days');
              var amount = this.angForm.controls['new_deposit'].value
              var maturityAmount = this.angForm.controls['new_deposit'].value

              for (this.i = 1; this.i <= Quarters; this.i++) {
                let totalInterest: number
                var sample = parseFloat(amount);
                var totalInt = (parseFloat(amount) * (this.angForm.controls['new_rate'].value) * Math.trunc((result) / (Quarters)) / 36500).toFixed(10)
                totalInterest = Number(totalInt)
                amount = (parseFloat(amount) + (totalInterest)).toFixed(10)
                totalInterest = 0
              }
              maturityAmount = Math.round(parseFloat(amount) + (parseFloat(amount) * (this.angForm.controls['new_rate'].value) * ((result) - Math.trunc((result) / (Quarters)) * (Quarters))) / 36500)
              this.angForm.patchValue({
                new_maturity_amt: (maturityAmount).toFixed(2)
              })
            } else if (data.S_INTCALTP == "M" && data.S_INTCALC_METHOD == "S") {
              var date1 = this.angForm.controls['new_ason_date'].value;
              var date2 = this.angForm.controls['new_matu_date'].value;
              var b = moment(date1, "DD/MM/YYYY");
              var a = moment(date2, "DD/MM/YYYY");
              var months = a.diff(b, 'months');
              b.add(months, 'months');
              var days = a.diff(b, 'days');
              var tmpAmt1 = Math.round(((this.angForm.controls['new_deposit'].value * this.angForm.controls['new_rate'].value * months) / (12 * 100)))
              var tmpAmt2 = Math.round(((this.angForm.controls['new_deposit'].value * this.angForm.controls['new_rate'].value * days) / (365 * 100)))
              var Interest = (tmpAmt1 + tmpAmt2)
              var Maturity = Math.round(Number(this.angForm.controls['new_deposit'].value) + Interest)
              this.angForm.patchValue({
                new_maturity_amt: (Maturity).toFixed(2)
              })
            } else if (data.S_INTCALTP == "M" && data.S_INTCALC_METHOD == "C") {
              this.angForm.patchValue({
                new_maturity_amt: 0
              })
            } else if (data.S_INTCALTP == "B" && data.IS_START_WITH_MONTHS == '1' && data.S_INTCALC_METHOD == "S") {
              var date1 = this.angForm.controls['new_ason_date'].value;
              var date2 = this.angForm.controls['new_matu_date'].value;
              var b = moment(date1, "DD/MM/YYYY");
              var a = moment(date2, "DD/MM/YYYY");
              var months = a.diff(b, 'months');
              b.add(months, 'months');
              var days = a.diff(b, 'days');
              var tmpAmt1 = Math.round(((this.angForm.controls['new_deposit'].value * this.angForm.controls['new_rate'].value * months) / (12 * 100)))
              var tmpAmt2 = Math.round(((this.angForm.controls['new_deposit'].value * this.angForm.controls['new_rate'].value * days) / (365 * 100)))
              var Interest = (tmpAmt1 + tmpAmt2)
              var Maturity = Math.round(Number(this.angForm.controls['new_deposit'].value) + Interest)
              this.angForm.patchValue({
                new_maturity_amt: (Maturity).toFixed(2)
              })
            } else if (data.S_INTCALTP == "B" && data.IS_START_WITH_MONTHS == '1' && data.S_INTCALC_METHOD == "C") {
              var Quarters = Math.floor(this.angForm.controls['new_month'].value) / 3;
              var date1 = this.angForm.controls['new_ason_date'].value;
              var date2 = this.angForm.controls['new_matu_date'].value;
              var b = moment(date1, "DD/MM/YYYY");
              var a = moment(date2, "DD/MM/YYYY");
              var months = a.diff(b, 'months');
              b.add(months, 'months');
              var days = a.diff(b, 'days');
              var End = moment(date2, "DD/MM/YYYY").subtract(1, 'days');
              var EndDate = End.format("DD/MM/YYYY");
              var Start = moment(date1, "DD/MM/YYYY").subtract(1, 'days');
              var StartDate = Start.format("DD/MM/YYYY");
              var CurrentDate = this.angForm.controls['new_ason_date'].value
              var lngMonths = 0;
              var lngDays = 0;
              var VcumPeriod = 0;
              var IntAmount = 0
              var vmonth = moment(date1, "DD/MM/YYYY").add(1, 'days');
              var Mth = vmonth.format("DD/MM/YYYY");
              var vMth = new Date(Mth).getMonth();
              var PeriodEndDate = EndDate
              VcumPeriod = 12
              var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              PeriodEndDate = moment([year, "09", "30"]).format('YYYY/MM/DD')
              if (CurrentDate >= EndDate) {
              } else {
                this._service.getTermDepositAccountDeatils(this.selectedScheme.id).subscribe(data => {
                  if (data.S_INTCALC_METHOD == '1') {
                    if (data.COMPOUND_INT_BASIS == "Y") {
                      PeriodEndDate = EndDate
                      VcumPeriod = 12
                    } else if (data.COMPOUND_INT_BASIS == "H") {
                      if (vMth >= 4 && vMth <= 9) {
                        var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                        var year = oneDate.format('YYYY');
                        PeriodEndDate = moment([year, "09", "30"]).format('YYYY/MM/DD')
                      } else {
                        var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                        var year = oneDate.format('YYYY');
                        PeriodEndDate = moment([year, "03", "31"]).format('YYYY/MM/DD')
                        if (PeriodEndDate < CurrentDate) {
                          var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                          var year = oneDate.format('YYYY');
                          var PeriodEnd = moment([year, "03", "31"]).format('YYYY/MM/DD')
                          var Period = moment(PeriodEnd, 'YYYY/MM/DD').add(1, 'days');
                          PeriodEndDate = Period.toString()
                        }
                      }
                      VcumPeriod = 6
                    } else if (data.COMPOUND_INT_BASIS == "Q") {
                      if (vMth >= 1 && vMth <= 3) {
                        var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                        var year = oneDate.format('YYYY');
                        PeriodEndDate = moment([year, "03", "31"]).format('YYYY/MM/DD')
                        if (PeriodEndDate < CurrentDate) {
                          var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                          var year = oneDate.format('YYYY');
                          var PeriodEnd = moment([year, "03", "31"]).format('YYYY/MM/DD')
                          var Period = moment(PeriodEnd, 'YYYY/MM/DD').add(1, 'days');
                          PeriodEndDate = Period.toString()
                        }
                      } else if (vMth >= 4 && vMth <= 6) {
                        var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                        var year = oneDate.format('YYYY');
                        PeriodEndDate = moment([year, "06", "30"]).format('YYYY/MM/DD')
                      } else if (vMth >= 7 && vMth <= 9) {
                        var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                        var year = oneDate.format('YYYY');
                        PeriodEndDate = moment([year, "09", "30"]).format('YYYY/MM/DD')
                      } else {
                        var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                        var year = oneDate.format('YYYY');
                        PeriodEndDate = moment([year, "12", "30"]).format('YYYY/MM/DD')
                      }
                      VcumPeriod = 3
                    } else if (data.COMPOUND_INT_BASIS == "M") {
                      var current = new Date(CurrentDate)
                      let year = current.getFullYear();
                      var month = new Date(CurrentDate).getMonth();
                      var day = new Date(current).getDate();
                      var exe_day = month + 1
                      var nextDate = new Date(year, exe_day, day);
                      var lastDay = new Date(current.getFullYear(), nextDate.getMonth() + 1, 0);
                      var nextExeDate = this.datePipe.transform(lastDay, "YYYY/MM/DD")
                      VcumPeriod = 3
                    } else if (data.COMPOUND_INT_BASIS == "M") {
                      if (data.COMPOUND_INT_DAYS <= 0) {
                        Swal.fire('You Must Assign Valid Compound Basis Days For The Scheme Please Contact To Software Engineer')
                      }
                      VcumPeriod = 0
                    } else {
                      Swal.fire('You Must Assign Valid Compound Basis Days For The Scheme Please Contact To Software Engineer')
                    }
                    if (PeriodEndDate > EndDate) {
                      PeriodEndDate = EndDate
                    }
                  }
                })
              }
            } else if (data.S_INTCALTP == "P" && data.S_INTCALC_METHOD == "S") {
              this.simpleInterestCalculation()
            }
          } else if (data.IS_RECURRING_TYPE == "1") {
            if (data.S_INTCALTP == "D" && data.S_INTCALC_METHOD == "S") {
              this.recurringSimpleInterest()
            } else if (data.S_INTCALTP == "D" && data.S_INTCALC_METHOD == "C") {
              this.recurringSimpleInterest()
            } else if (data.S_INTCALTP == "M" && data.S_INTCALC_METHOD == "S") {
              this.recurringSimpleInterest()
            } else if (data.S_INTCALTP == "M" && data.S_INTCALC_METHOD == "C") {
              this.recurringCompoundInterest()
            } else if (data.S_INTCALTP == "B" && data.IS_START_WITH_MONTHS == '1' && data.S_INTCALC_METHOD == "S") {
              var date1 = this.angForm.controls['new_ason_date'].value;
              var date2 = this.angForm.controls['new_matu_date'].value;
              var b = moment(date1, "DD/MM/YYYY");
              var a = moment(date2, "DD/MM/YYYY");
              var months = a.diff(b, 'months');
              b.add(months, 'months');
              var days = a.diff(b, 'days');
              var tmpAmt1 = Math.round(((this.angForm.controls['new_deposit'].value * this.angForm.controls['new_rate'].value * months) / (12 * 100)))
              var tmpAmt2 = Math.round(((this.angForm.controls['new_deposit'].value * this.angForm.controls['new_rate'].value * days) / (365 * 100)))
              var Interest = (tmpAmt1 + tmpAmt2)
              var Maturity = Math.round(Number(this.angForm.controls['new_deposit'].value) + Interest)
              this.angForm.patchValue({
                new_maturity_amt: (Maturity).toFixed(2)
              })
            } else if (data.S_INTCALTP == "B" && data.IS_START_WITH_MONTHS == '1' && data.S_INTCALC_METHOD == "C") {
              this.recurringCompoundInterest()
            } else if (data.S_INTCALTP == "P" && data.S_INTCALC_METHOD == "S") {
              this.recurringSimpleInterest()
            }
          }
        }
      })
    }
    else {
      this.angForm.patchValue({
        new_maturity_amt: Number(this.ledgerBalance).toFixed(2)
      })
    }
  }

  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }

  selectAllContent($event) {
    $event.target.select();
  }

  recurringCompoundInterest() {
    var date1 = this.angForm.controls['new_ason_date'].value;
    var date2 = this.angForm.controls['new_matu_date'].value;
    var b = moment(date1, "DD/MM/YYYY");
    var a = moment(date2, "DD/MM/YYYY");
    var months = a.diff(b, 'months');
    b.add(months, 'months');
    var days = a.diff(b, 'days');
    var amount = this.angForm.controls['new_deposit'].value
    var rate = this.angForm.controls['new_rate'].value
    var noOfInstallment = Math.floor(this.angForm.controls['new_month'].value) / 1;
    var totalInterest = 0

    for (this.i = 1; this.i <= noOfInstallment; this.i++) {
      totalInterest = Math.round((totalInterest + (amount * ((1 + (rate * 1) / (12 * 100)) ** (this.i / 1)) - amount)))
    }
    var maturity = (Number(amount) * Number(noOfInstallment)) + Number(totalInterest)
    this.angForm.patchValue({
      new_maturity_amt: Number(maturity).toFixed(2)
    })
  }


  recurringSimpleInterest() {

    var noOfInstallment = Math.floor(this.angForm.controls['new_month'].value) / 1;
    var amount = this.angForm.controls['new_deposit'].value
    var rate = this.angForm.controls['new_rate'].value
    var Interest = (noOfInstallment * noOfInstallment + noOfInstallment) / 2 * amount * rate / 1200
    var maturity = (Number(amount) * Number(noOfInstallment)) + Number(Interest)
    this.angForm.patchValue({
      new_maturity_amt: Number(maturity).toFixed(2)
    })
  }


  getTotalDays() {
    //Calculate Total Days
    let total = Number(this.angForm.controls['new_month'].value) / 12 * 365;
    this.TotalDays = Math.round(total + Number(this.angForm.controls['new_day'].value));
    this.getMaturityDate()
    this.getMaturityAmount()
  }

  getMaturityDate() {
    let date = moment(this.renewalAsOnDate, 'DD/MM/YYYY').add(this.TotalDays, 'days').format('DD/MM/YYYY')
    this.angForm.patchValue({
      new_matu_date: date
    })
  }

  //get account no according scheme for introducer
  async getIntroducer() {
    this.customerAc = null
    this.introducerACNo = [];
    this.obj = [this.selectedScheme.id, this.selectedBranch]
    switch (this.selectedCode) {
      case 'TD':
        this._service.termDepositExpiryAccount(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;
    }
  }

  getIntroducerNormal() {
    this.introducerACNoNormal = [];
    this.obj = [this.selectedSchemeNormal.id, this.selectedBranch]
    switch (this.selectedCodeNormal) {
      case 'SB':
        this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'SH':
        this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'CA':
        this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'LN':
        this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'DS':
        this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'CC':
        this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'GS':
        this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'PG':
        this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'AG':
        this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'IV':
        this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;
    }
  }

  getIntroducerPayable() {
    this.introducerACNoPayable = [];
    this.obj = [this.selectedSchemePayable.id, this.selectedBranch]
    switch (this.selectedCodePayable) {
      case 'SB':
        this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'SH':
        this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'CA':
        this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'LN':
        this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'DS':
        this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'CC':
        this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'GS':
        this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'PG':
        this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'AG':
        this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'IV':
        this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;
    }
  }
  selectedSchemeCode() {
    this.allScheme = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCode) {
        this.allScheme.push(element)
      }
    });
  }

  allSchemeNormal: any;
  selectedSchemeCodeNormal() {
    this.allSchemeNormal = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCodeNormal) {
        this.allSchemeNormal.push(element)
      }
    });
  }
  allSchemePayable: any;
  selectedSchemeCodePayable() {
    this.allSchemePayable = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCodePayable) {
        this.allSchemePayable.push(element)
      }
    });
  }
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  updatecheckdata
  editClickHandler(id) {

    this._service.getTermFormData(id).subscribe((data) => {
      this.updatecheckdata = data
      if (data.SYSCHNG_LOGIN == null) {
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
      } else {
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
      }
      this.updateID = data.id;
      this.date = data.RENEWAL_DATE
      let normalType
      if (data.NORMAL_INT_TRTYPE == 'DP') {
        normalType = 'AddInDeposit'
      }
      else if (data.NORMAL_INT_TRTYPE == 'CS') {
        normalType = 'cash';
      } else if (data.NormalIntRadio == 'TR') {
        normalType = 'transfer';
      } else if (data.NormalIntRadio == 'KP') {
        normalType = 'keepaspayable';
      }
      let PAY_INT_TRTYPE
      if (data.PAY_INT_TRTYPE == 'DP') {
        PAY_INT_TRTYPE = 'AddInDeposit'
      }
      else if (data.PAY_INT_TRTYPE == 'CS') {
        PAY_INT_TRTYPE = 'cash';
      } else if (data.PAY_INT_TRTYPE == 'TR') {
        PAY_INT_TRTYPE = 'transfer';
      }
      // this.selectedScheme = Number(data.AC_TYPE)
      this.selectedScheme = data.selectedScheme
      this.customer = data.customer
      let obj = {
        Scheme: this.selectedScheme.S_APPL,
        AC_TYPE: this.selectedScheme.id,
        BANKACNO: this.customer.BANKACNO,
        Date: this.date,
      }
      this._service.getAccountDeatils(obj).subscribe(data => {
        this.angForm.patchValue({
          old_total_int_paid: data.totalinterest,
          new_rate: data.InterestRate,
          new_deposit: Math.abs(data.ledgerBal),
          AC_RENEWAL_COUNTER: data.renewalCount
        })
        this.funAmtNormalInterest = data.normalInterest
        this.funAmtPayableInterest = data.paybableInterest
        this.isCalulateMaturityAmountFlag = data.isCalulateMaturityAmountFlag
        this.funInterestRate = data.InterestRate
        this.ledgerBalance = data.ledgerBal
      })
      this.updateID = data.id
      this.angForm.patchValue({
        branch_code: data.BRANCH_CODE,
        old_month: data.OLD_MONTH,
        old_ac_expdt: data.OLD_EXPIRY_DATE,
        date: data.RENEWAL_DATE,
        scheme_type: data.AC_ACNOTYPE,
        new_deposit: Math.abs(data.RENEWAL_AMOUNT),
        new_month: data.NEW_MONTH,
        new_day: data.NEW_DAYS,
        new_ason_date: data.NEW_ASON_DATE,
        NormalIntRadio: normalType,
        NormalIntCheck: normalType == null ? false : true,
        PayableIntRadio: PAY_INT_TRTYPE,
        AC_RENEWAL_COUNTER: data.AC_RENEWAL_COUNTER,
        TRAN_NO: data.TRAN_NO,
        payableInt: data.PAYABLE_INTEREST,
        NormalInt: data.NORMAL_INTEREST,
        payableInterestcheck: PAY_INT_TRTYPE == null ? false : true,
        new_maturity_amt: data.NEW_MATURITY_AMOUNT,
        new_rate: data.NEW_INTEREST_RATE,
        new_matu_date: data.NEW_EXPIRY_DATE,
        new_receipt: data.NEW_RECEIPTNO,
        renewal_tran_no: data.TRAN_NO,
        IntUpto: data.INTEREST_DATE,
        new_category: data.NEW_INT_CATA
      })
      this.getTotalDays()
      this.angForm.patchValue({
        new_maturity_amt: Number(data.NEW_MATURITY_AMOUNT).toFixed(2),
        new_rate: data.NEW_INTEREST_RATE,
        new_matu_date: data.NEW_EXPIRY_DATE,
        scheme: data.selectedScheme.S_APPL + ' ' + data.selectedScheme.S_NAME,
        account_no: data.customer.AC_NO + ' ' + data.customer.AC_NAME,
      })
    })
  }

  updateData() {
    let billDate
    let intDate
    let chequeDate
    let obj = this.angForm.value;
    let dataToSend = this.angForm.value
    if (this.updatecheckdata.NEW_EXPIRY_DATE != obj.new_matu_date) {
      (obj.new_matu_date == 'Invalid date' || obj.new_matu_date == '' || obj.new_matu_date == null) ? (billDate = '', obj['new_matu_date'] = billDate) : (billDate = obj.new_matu_date, dataToSend['new_matu_date'] = moment(billDate).format('DD/MM/YYYY'))
    } else {
      dataToSend['new_matu_date'] = obj.new_matu_date
    }
    if (this.updatecheckdata.INTEREST_DATE != obj.IntUpto) {
      (obj.IntUpto == 'Invalid date' || obj.IntUpto == '' || obj.IntUpto == null) ? (intDate = '', obj['IntUpto'] = intDate) : (intDate = obj.IntUpto, dataToSend['INTEREST_DATE'] = moment(intDate).format('DD/MM/YYYY'))
    } else {
      dataToSend['INTEREST_DATE'] = obj.IntUpto
    }
    dataToSend['current_date'] = this.date;
    dataToSend['customer'] = this.customer;
    dataToSend['user'] = JSON.parse(localStorage.getItem('user'))
    dataToSend['id'] = this.updateID
    this._service.updateData(dataToSend).subscribe(
      (data) => {
        Swal.fire("Success!", "Data Updated Successfully !", "success");
        this.resetForm()
        var button = document.getElementById('triggerhide');
        button.click();
      },
      (error) => {
        console.log(error);
      }
    );

  }
  //approve account
  Approve() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      TRAN_NO: this.angForm.controls['TRAN_NO'].value,
      new_receipt: this.angForm.controls['new_receipt'].value,
      new_category: this.angForm.controls['new_category'].value,
      BANKACNO: this.customer.BANKACNO
    }
    this._service.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Term Deposit Account Renewal approved successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }


  //reject account
  reject() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      TRAN_NO: this.angForm.controls['TRAN_NO'].value
    }
    this._service.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Term Deposit Account Renewal rejected successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  resetForm() {
    this.createForm()
  }

  isNormalIntAdded: boolean = false
  changeNormal(ele) {
    if (ele.target.value == 'transfer') {
      this.payableShow = true;
      this.transferShowNormal = true;
      if (this.isNormalIntAdded) {
        let depositeAmount = this.angForm.controls['new_deposit'].value;
        let intValue = this.angForm.controls['NormalInt'].value;
        let Int = Number(Math.abs(depositeAmount)) - Number(intValue);
        this.angForm.patchValue({
          'new_deposit': Int
        })
        this.isNormalIntAdded = false
      }
    }
    else if (ele.target.value == 'AddInDeposit') {
      this.payableShow = true;
      let depositeAmount = this.angForm.controls['new_deposit'].value;
      let intValue = this.angForm.controls['NormalInt'].value;

      let Int = Number(Math.abs(depositeAmount)) + Number(intValue);

      this.angForm.patchValue({
        'new_deposit': Int
      })
      this.isNormalIntAdded = true
      this.transferShowNormal = false;
    }
    else if (ele.target.value == 'keepaspayable') {
      this.payableShow = false;
    }
    else {
      this.payableShow = true;
      this.transferShowNormal = false;
      if (this.isNormalIntAdded) {
        let depositeAmount = this.angForm.controls['new_deposit'].value;
        let intValue = this.angForm.controls['NormalInt'].value;
        let Int = Number(depositeAmount) - Number(intValue);
        this.angForm.patchValue({
          'new_deposit': Int
        })
        this.isNormalIntAdded = false
      }
    }
    this.getMaturityAmount()
  }

  getnormalCheck(ele) {
    if (ele.target.checked) {
      this.NormalCheck = false;
      this.InterestDate = moment(this.current_date, 'DD/MM/YYYY').subtract(1, 'day').format('DD/MM/YYYY');
      this.angForm.patchValue({
        NormalInt: this.funAmtNormalInterest,
        NormalIntRadio: 'cash'
      })
    }
    else {
      this.NormalCheck = true;
      this.InterestDate = null;
      this.angForm.patchValue({
        NormalInt: null,
        NormalIntRadio: ''
      })
    }
  }

  PayableCheck: boolean = true;
  getpayableInterest(ele) {
    if (ele.target.checked) {
      this.PayableCheck = false;
      this.angForm.patchValue({
        payableInt: this.funAmtPayableInterest,
        PayableIntRadio: 'cash'
      })
    }
    else {
      this.PayableCheck = true;
      this.angForm.patchValue({
        payableInt: null,
        PayableIntRadio: ''
      })
    }
  }
  isPayableIntAdded: boolean = false
  payableStatus(ele) {
    let dataValue = this.angForm.controls['NormalIntRadio'].value;
    let selectedValue = ele.target.value;
    if (dataValue == selectedValue) {
      if (ele.target.value == 'transfer') {
        this.payableTranferShow = true;
        if (this.isPayableIntAdded) {
          let depositeAmount = Number(this.angForm.controls['new_deposit'].value);
          let IntAmt = Number(this.angForm.controls['payableInt'].value);
          let Int = Math.abs(depositeAmount) - IntAmt;
          this.angForm.patchValue({
            'new_deposit': Int
          })
          this.isPayableIntAdded = false
        }
      } else if (ele.target.value == 'AddInDeposit') {
        let depositeAmount = Number(this.angForm.controls['new_deposit'].value);
        let IntAmt = Number(this.angForm.controls['payableInt'].value);

        let Int = Math.abs(depositeAmount) + IntAmt;

        this.angForm.patchValue({
          'new_deposit': Int
        })
        this.isPayableIntAdded = true
        this.payableTranferShow = false;
      }
      else {
        if (this.isPayableIntAdded) {
          let depositeAmount = Number(this.angForm.controls['new_deposit'].value);
          let IntAmt = Number(this.angForm.controls['payableInt'].value);
          let Int = Math.abs(depositeAmount) - IntAmt;
          this.angForm.patchValue({
            'new_deposit': Int
          })
          this.isPayableIntAdded = false
        }
        this.payableTranferShow = false;
      }
      this.getMaturityAmount()
    } else {
      Swal.fire('Oops...!', 'You select wrong option please select proper option', 'error');
      this.angForm.patchValue({
        payableInt: ''
      })
    }
  }

  submit() {
    let obj = this.angForm.value;
    obj['current_date'] = this.date;
    obj['user'] = JSON.parse(localStorage.getItem('user'))
    this._service.postData(obj).subscribe(data => {
      Swal.fire('Success!', 'Account Renewaled Successfully !', 'success');
      this.createForm()
    }, err => {
      console.log(err?.error?.message)
    })
  }

  getDecimalPoint(event) {
    event.target.value = parseFloat(event.target.value).toFixed(2);
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  onOpen(select: NgSelectComponent) {
    //debugger
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }

  closeModal() {
    var button = document.getElementById('triggerhide');
    button.click();
    this.reloadTablePassing.emit();
  }
}
