import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TermDepositSchemeService } from 'src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service';
import Swal from 'sweetalert2';
import { OtherViewService } from '../other-view.service';

@Component({
  selector: 'app-deposit-interest-projection',
  templateUrl: './deposit-interest-projection.component.html',
  styleUrls: ['./deposit-interest-projection.component.scss']
})
export class DepositInterestProjectionComponent implements OnInit {


  ngForm: FormGroup;

  //ngmodel
  BranchCode
  scheme
  depositAmount
  schemeCode

  dates: any = null
  maxDate: any;
  expiryDate
  dtExportButtonOptions: any = {};
  // branch_code: any;
  http: any;
  url: string;
  tilldate: any;
  result: number;
  i: number;
  resultData: any;
  constructor(private fb: FormBuilder, private ownbranchMasterService: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private _termDepositScheme: TermDepositSchemeService,
    private datePipe: DatePipe,
    private _services: OtherViewService,

    private schemeCodeDropdownService: SchemeCodeDropdownService) {
    this.dates = moment().format('DD/MM/YYYY');
    // this.maxDate = new Date();
    // this.maxDate.setDate(this.maxDate.getDate())
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
  }

  ngOnInit(): void {

    this.createForm()

    let user = JSON.parse(localStorage.getItem('user'));

    //branchcode
    // this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
    //   this.branch_code = data;
    //   // this.BranchCode = user.branchId;
    // })

    //scheme
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'TD');

      });

      this.scheme = filtered;
    })
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.dates = data.CURRENT_DATE;
    });

  }

  createForm() {
    this.ngForm = this.fb.group({

      // BRANCH_CODE: ['', [Validators.required]],
      Scheme: ['', [Validators.required]],
      DEPO_AMT: ['', [Validators.required]],
      AC_MONTHS: ['', [Validators.required]],
      AC_DAYS: ['', []],
      INT_RATE: ['', [Validators.required]],
      DEPO_DATE: ['', [Validators.required]],
      MATUR_DATE: ['', [Validators.required]],
      MATUR_AMT: ['', [Validators.required]],

    });
  }



  decimalAllContent($event) {
    // let value = Number($event.target.value);
    //   let data = value.toFixed(2);
    //   $event.target.value = data;
    var t = $event.target.value;
    $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }
  getschemename: any
  getBranch() {
    this.getschemename = null

    this.schemeCode = null
  }

  CheckmonthDays() {
    this._termDepositScheme.getFormData(this.schemeCode).subscribe(data => {
      if (data.UNIT_OF_PERIOD == "B") {
        this.ngForm.controls['AC_MONTHS'].enable()
        this.ngForm.controls['AC_DAYS'].enable()
        if (Number(this.ngForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.ngForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
          Swal.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + " Month and " + data.MIN_DAYS + " Days", "error");
          this.ngForm.controls['AC_MONTHS'].reset()
          this.ngForm.controls['AC_DAYS'].reset()
        }
      }
      else if (data.UNIT_OF_PERIOD == "D") {
        this.ngForm.patchValue({
          AC_MONTHS: ''
        })
        this.ngForm.controls['AC_MONTHS'].disable()
        this.ngForm.controls['AC_DAYS'].enable()
        if (Number(this.ngForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
          Swal.fire("Days Must Be Geater Than " + data.MIN_DAYS + ' Days', "error");
          this.ngForm.controls['AC_DAYS'].reset()
        }
      }
      else if (data.UNIT_OF_PERIOD == "M") {
        this.ngForm.patchValue({
          AC_DAYS: '',
        })
        this.ngForm.controls['AC_MONTHS'].enable()
        this.ngForm.controls['AC_DAYS'].disable()
        if (Number(this.ngForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH)) {
          Swal.fire("Month Must Be Geater Than " + data.MIN_MONTH + ' Months', "error");
          this.ngForm.controls['AC_MONTHS'].reset()
        }
      }


      if (data.UNIT_OF_PERIOD == "B" && data.IS_AUTO_PERIOD_CALCULATE == '1') {
        this.ngForm.controls['AC_MONTHS'].enable()
        this.ngForm.controls['AC_DAYS'].enable()
        if (Number(this.ngForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.ngForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
          Swal.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + "and " + data.MIN_DAYS, "error");
          this.ngForm.controls['AC_MONTHS'].reset()
          this.ngForm.controls['AC_DAYS'].reset()
        }
      }

      var date1 = this.ngForm.controls['DEPO_DATE'].value;
      let expiryT = moment(date1, 'DD/MM/YYYY').add(Number(this.ngForm.controls['AC_DAYS'].value), 'days').format('DD/MM/YYYY')
      let expiryDate = moment(expiryT, 'DD/MM/YYYY').add(Number(this.ngForm.controls['AC_MONTHS'].value), 'months').format('DD/MM/YYYY')
      this.expiryDate = expiryDate
      this.ngForm.patchValue({
        MATUR_DATE: expiryDate
      })


      // if (data.MULTIPLE_OF_DAYS != null) {
      //   if ((Number((this.ngForm.controls['AC_DAYS'].value)) % Number((data.MULTIPLE_OF_DAYS))) != 0) {
      //     Swal.fire("Days Should Be Multiple Of " + data.MULTIPLE_OF_DAYS, "error");
      //   }
      // }
      // if (data.MULTIPLE_OF_MONTH != null) {
      //   if ((Number((this.ngForm.controls['AC_MONTHS'].value)) % Number((data.MULTIPLE_OF_MONTH))) != 0) {
      //     Swal.fire("Month Should Be Multiple Of " + data.MULTIPLE_OF_MONTH, "error");
      //   }
      // }
    })
  }
  setMaturityDate() {
    this.schemedata(this.schemeCode)
    this.ngForm.patchValue({
      MATUR_AMT: this.ngForm.controls['DEPO_AMT'].value == '' || this.ngForm.controls['DEPO_AMT'].value == null ? 0 : this.ngForm.controls['DEPO_AMT'].value
    })
  }
  //simple interest
  installmentType
  simpleInterestCalculation() {

    var date1 = this.ngForm.controls['AC_ASON_DATE'].value;
    var date2 = this.ngForm.controls['AC_EXPDT'].value;

    // date1 = moment(date1).format('DD/MM/YYYY');
    // date2 = moment(date2).format('DD/MM/YYYY');

    var startDate = moment(date1, "DD/MM/YYYY");
    var endDate = moment(date2, "DD/MM/YYYY");

    var result = endDate.diff(startDate, 'days');
    this.result = Math.round(Math.floor(this.ngForm.controls['DEPO_AMT'].value) * (Math.floor(result)) * Math.floor(this.ngForm.controls['INT_RATE'].value) / 36500 + Math.floor(this.ngForm.controls['DEPO_AMT'].value))
    this.ngForm.patchValue({
      MATUR_AMT: this.result
    })
  }
  // data scheme master
  schemedata(id) {
    this._termDepositScheme.getFormData(id).subscribe(data => {
      // this.recurringCompoundInterest()
      if (data.IS_CAL_MATURITY_AMT != '1') {
        // this.setMaturityDate()
        this.ngForm.patchValue({
          MATUR_AMT: this.ngForm.controls['DEPO_AMT'].value == '' || this.ngForm.controls['DEPO_AMT'].value == null ? 0 : this.ngForm.controls['DEPO_AMT'].value
        })
      }
      else {
        // call calculation function
        // INTEREST_RULE: string;
        // IS_RECURRING_TYPE: string;
        // IS_CALLDEPOSIT_TYPE: string; 
        // REINVESTMENT: string;
        if ((data.INTEREST_RULE == "0" && data.IS_RECURRING_TYPE == '0' && data.IS_CALLDEPOSIT_TYPE == '0' && data.REINVESTMENT == '0')) {
          if (data.S_INTCALTP == "D" && data.S_INTCALC_METHOD == "S") {
            this.simpleInterestCalculation()
          } else if (data.S_INTCALTP == "D" && data.S_INTCALC_METHOD == "C") {
            if (data.COMPOUND_INT_BASIS == "M" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == '1') {
              var Quarters = Math.floor(this.ngForm.controls['AC_MONTHS'].value) / 1;
            } else if (data.COMPOUND_INT_BASIS == "Q" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == '1') {
              var Quarters = Math.floor(this.ngForm.controls['AC_MONTHS'].value) / 3;
            } else if (data.COMPOUND_INT_BASIS == "H" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == '1') {
              var Quarters = Math.floor(this.ngForm.controls['AC_MONTHS'].value) / 6;
            } else if (data.COMPOUND_INT_BASIS == "Y" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == '1') {
              var Quarters = Math.floor(this.ngForm.controls['AC_MONTHS'].value) / 12;
            }

            var date1 = this.ngForm.controls['AC_ASON_DATE'].value;
            var date2 = this.ngForm.controls['AC_EXPDT'].value;

            // date1 = moment(date1).format('DD/MM/YYYY');

            var startDate = moment(date1, "DD/MM/YYYY");
            var endDate = moment(date2, "DD/MM/YYYY");

            var result = endDate.diff(startDate, 'days');
            var amount = this.ngForm.controls['DEPO_AMT'].value == '' || this.ngForm.controls['DEPO_AMT'].value == null ? 0 : this.ngForm.controls['DEPO_AMT'].value
            var maturityAmount = this.ngForm.controls['MATUR_AMT'].value

            for (this.i = 1; this.i <= Quarters; this.i++) {
              let totalInterest: number
              var sample = parseFloat(amount);
              var totalInt = (parseFloat(amount) * Number(this.ngForm.controls['INT_RATE'].value) * Math.trunc((result) / (Quarters)) / 36500).toFixed(10)
              totalInterest = Number(totalInt)
              amount = (parseFloat(amount) + (totalInterest)).toFixed(10)

              totalInterest = 0


            }
            maturityAmount = Math.round(parseFloat(amount) + (parseFloat(amount) * Number(this.ngForm.controls['INT_RATE'].value) * ((result) - Math.trunc((result) / (Quarters)) * (Quarters))) / 36500)

            this.ngForm.patchValue({
              MATUR_AMT: maturityAmount
            })
          } else if (data.S_INTCALTP == "M" && data.S_INTCALC_METHOD == "S") {

            var date1 = this.ngForm.controls['AC_ASON_DATE'].value;
            var date2 = this.ngForm.controls['AC_EXPDT'].value;

            // date1 = moment(date1).format('DD/MM/YYYY');
            // date2 = moment(date2).format('DD/MM/YYYY');

            var b = moment(date1, "DD/MM/YYYY");
            var a = moment(date2, "DD/MM/YYYY");

            var months = a.diff(b, 'months');
            b.add(months, 'months');

            var days = a.diff(b, 'days');


            var tmpAmt1 = Math.round(((Number(this.ngForm.controls['DEPO_AMT'].value) * Number(this.ngForm.controls['INT_RATE'].value) * months) / (12 * 100)))
            var tmpAmt2 = Math.round(((Number(this.ngForm.controls['DEPO_AMT'].value) * Number(this.ngForm.controls['INT_RATE'].value) * days) / (365 * 100)))
            var Interest = (tmpAmt1 + tmpAmt2)
            var Maturity = Math.round(Number(this.ngForm.controls['DEPO_AMT'].value) + Interest)
            this.ngForm.patchValue({
              MATUR_AMT: Maturity
            })
          } else if (data.S_INTCALTP == "M" && data.S_INTCALC_METHOD == "C") {
            this.ngForm.patchValue({
              MATUR_AMT: 0
            })
          } else if (data.S_INTCALTP == "B" && data.IS_START_WITH_MONTHS == '1' && data.S_INTCALC_METHOD == "S") {
            var date1 = this.ngForm.controls['AC_ASON_DATE'].value;
            var date2 = this.ngForm.controls['AC_EXPDT'].value;

            // date1 = moment(date1).format('DD/MM/YYYY');
            // date2 = moment(date2).format('DD/MM/YYYY');

            var b = moment(date1, "DD/MM/YYYY");
            var a = moment(date2, "DD/MM/YYYY");

            var months = a.diff(b, 'months');
            b.add(months, 'months');

            var days = a.diff(b, 'days');


            var tmpAmt1 = Math.round(((Number(this.ngForm.controls['DEPO_AMT'].value) * Number(this.ngForm.controls['INT_RATE'].value) * months) / (12 * 100)))
            var tmpAmt2 = Math.round(((Number(this.ngForm.controls['DEPO_AMT'].value) * Number(this.ngForm.controls['INT_RATE'].value) * days) / (365 * 100)))
            var Interest = (tmpAmt1 + tmpAmt2)
            var Maturity = Math.round(Number(this.ngForm.controls['DEPO_AMT'].value) + Interest)
            this.ngForm.patchValue({
              MATUR_AMT: Maturity
            })
          } else if (data.S_INTCALTP == "B" && data.IS_START_WITH_MONTHS == '1' && data.S_INTCALC_METHOD == "C") {
            var Quarters = Math.floor(this.ngForm.controls['AC_MONTHS'].value) / 3;
            var date1 = this.ngForm.controls['AC_ASON_DATE'].value;
            var date2 = this.ngForm.controls['AC_EXPDT'].value;

            // date1 = moment(date1).format('DD/MM/YYYY');

            var b = moment(date1, "DD/MM/YYYY");
            var a = moment(date2, "DD/MM/YYYY");

            var months = a.diff(b, 'months');
            b.add(months, 'months');

            var days = a.diff(b, 'days');

            var End = moment(date2, "DD/MM/YYYY").subtract(1, 'days');
            var EndDate = End.format("DD/MM/YYYY");

            var Start = moment(date1, "DD/MM/YYYY").subtract(1, 'days');
            var StartDate = Start.format("DD/MM/YYYY");

            var CurrentDate = this.ngForm.controls['AC_ASON_DATE'].value
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
              this._termDepositScheme.getFormData(this.schemeCode).subscribe(data => {
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
            var date1 = this.ngForm.controls['AC_ASON_DATE'].value;
            var date2 = this.ngForm.controls['AC_EXPDT'].value;

            // date1 = moment(date1).format('DD/MM/YYYY');
            // date2 = moment(date2).format('DD/MM/YYYY');

            var b = moment(date1, "DD/MM/YYYY");
            var a = moment(date2, "DD/MM/YYYY");

            var months = a.diff(b, 'months');
            b.add(months, 'months');

            var days = a.diff(b, 'days');

            var tmpAmt1 = Math.round(((Number(this.ngForm.controls['DEPO_AMT'].value) * Number(this.ngForm.controls['INT_RATE'].value) * months) / (12 * 100)))
            var tmpAmt2 = Math.round(((Number(this.ngForm.controls['DEPO_AMT'].value) * Number(this.ngForm.controls['INT_RATE'].value) * days) / (365 * 100)))
            var Interest = (tmpAmt1 + tmpAmt2)
            var Maturity = Math.round(Number(this.ngForm.controls['DEPO_AMT'].value) + Interest)
            this.ngForm.patchValue({
              MATUR_AMT: Maturity
            })
          } else if (data.S_INTCALTP == "B" && data.IS_START_WITH_MONTHS == '1' && data.S_INTCALC_METHOD == "C") {
            this.recurringCompoundInterest()
          } else if (data.S_INTCALTP == "P" && data.S_INTCALC_METHOD == "S") {
            this.recurringSimpleInterest()
          }
        }
        else if (data.INTEREST_RULE == "1") {
          this.ngForm.patchValue({
            MATUR_AMT: Number(this.ngForm.controls['DEPO_AMT'].value) * Number(data.S_MATUCALC)
          })
        }
      }
    })
  }

  recurringSimpleInterest() {

    var noOfInstallment = Math.floor(this.ngForm.controls['AC_MONTHS'].value) / 1;
    var amount = this.ngForm.controls['DEPO_AMT'].value
    var rate = this.ngForm.controls['INT_RATE'].value
    var Interest = (noOfInstallment * noOfInstallment + noOfInstallment) / 2 * Number(amount) * Number(rate) / 1200
    var maturity = (Number(amount) * Number(noOfInstallment)) + Number(Interest)
    this.ngForm.patchValue({
      MATUR_AMT: maturity
    })
  }
  recurringCompoundInterest() {

    var date1 = this.ngForm.controls['AC_ASON_DATE'].value;
    var date2 = this.ngForm.controls['AC_EXPDT'].value;

    // date1 = moment(date1).format('DD/MM/YYYY');

    var b = moment(date1, "DD/MM/YYYY");
    var a = moment(date2, "DD/MM/YYYY");

    var months = a.diff(b, 'months');
    b.add(months, 'months');

    var days = a.diff(b, 'days');

    var amount = Number(this.ngForm.controls['DEPO_AMT'].value)
    var rate = Number(this.ngForm.controls['INT_RATE'].value)
    var noOfInstallment = Math.floor(this.ngForm.controls['AC_MONTHS'].value) / 1;
    var totalInterest = 0

    for (this.i = 1; this.i <= noOfInstallment; this.i++) {
      totalInterest = Math.round((totalInterest + (amount * ((1 + (rate * 1) / (12 * 100)) ** (this.i / 1)) - amount)))
    }
    var maturity = (Number(amount) * Number(noOfInstallment)) + Number(totalInterest)
    this.ngForm.patchValue({
      MATUR_AMT: maturity
    })
  }
  checkAmount() {

    const formVal = this.ngForm.value;
    this._termDepositScheme.getFormData(this.schemeCode).subscribe(data => {
      if (data.MAX_DEP_LMT != '' || data.MULTIPLE_OF_AMT != '') {
        if (Number(this.ngForm.controls['DEPO_AMT'].value) > Number(data.MAX_DEP_LMT)) {
          Swal.fire("Deposit Amount Should Be Less Than " + data.MAX_DEP_LMT, "error");
          this.ngForm.controls['DEPO_AMT'].reset()
        } else if (((Number(this.ngForm.controls['DEPO_AMT'].value)) % Number((data.MULTIPLE_OF_AMT))) != 0) {
          Swal.fire("Deposit Amount Should Be Multiple Of " + data.MULTIPLE_OF_AMT, "error");
        }
      } else {
        this.ngForm.patchValue({
          MATUR_AMT: formVal.MATUR_AMT
        })
      }

    })
  }

  //check  if margin values are below 100
  checkmargin(ele: any) {
    //check  if given value  is below 100
    if (ele <= 50) {
    } else {
      Swal.fire("Invalid Input", "Please insert values below 50", "error");
      this.ngForm.patchValue({
        TDS_RATE: 0
      })
    }
  }

  Process() {
    let formVal = this.ngForm.value;

    let obj = {
      cmDepositAmount: formVal.DEPO_AMT,
      cmIntRate: formVal.INT_RATE,
      cmSchemeCd: formVal.Scheme,
      cmDate: formVal.DEPO_DATE,
      cmMonths: formVal.AC_MONTHS,
      cmDays: formVal.AC_DAYS
    }



    obj['user'] = JSON.parse(localStorage.getItem('user'));
    this._services.depositProjection(obj).subscribe(data => {
      console.log(data);
      this.resultData = data;
    })
  }

  resetForm() {
    this.createForm()
  }
}







// this.http.post<any>(this.url + '/ledger-view/managerView', obj).subscribe((data) => {
//   this.mangerViewDetails = data
//   let denomination = this.mangerViewDetails.denomination


//   denomination.forEach(entry =>{
//     this.retrivedata.push(entry);
//     // console.log(this.retrivedata)
//   })
// })