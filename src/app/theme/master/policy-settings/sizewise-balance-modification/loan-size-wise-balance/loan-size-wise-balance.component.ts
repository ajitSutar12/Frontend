import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-loan-size-wise-balance',
  templateUrl: './loan-size-wise-balance.component.html',
  styleUrls: ['./loan-size-wise-balance.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class LoanSizeWiseBalanceComponent implements OnInit {
  showButton: boolean = true;
  updateShow: boolean = false;
  constructor(private fb: FormBuilder, private http: HttpClient,) { }
  //api 
  url = environment.base_url;
  //AMOUNT
  Amount = [{
    AMOUNT_FROM: '',
    AMOUNT_TO: ''
  }]

  //INTEREST RATE
  intRate = [{
    AMOUNT_FROM: '',
    AMOUNT_TO: ''
  }]

  //PERIOD
  peroid = [{
    FROM_MONTHS: '',
    TO_MONTHS: ''
  }]
  //Terms
  angForm: FormGroup;
  //INSURANCE AMOUNT
  Insurance = [{
    AMOUNT_FROM: '',
    AMOUNT_TO: ''
  }]

  createForm() {
    this.angForm = this.fb.group({
      shortTermFromMon: ['', [Validators.pattern]],
      shortTermToMon: ['', [Validators.pattern]],
      mediumTermFromMon: ['', [Validators.pattern]],
      mediumTermToMon: ['', [Validators.pattern]],
      longTermFromMon: ['', [Validators.pattern]],
      longTermToMon: ['', [Validators.pattern]],
    });
  }

  ngOnInit(): void {
    this.createForm();
    let ACNOTYPE = 'LN'
    this.http.get(this.url + '/sizewise-balance-updation/ACNOTYPE/' + ACNOTYPE).subscribe((data) => {
      if (data['amountExist'] == true) {
        this.Amount = data['amount']
      }
      if (data['insuranceExist'] == true) {
        this.Insurance = data['insurance']
      }
      if (data['IntRateExist'] == true) {
        this.intRate = data['IntRate']
      }
      if (data['periodsExist'] == true) {
        this.peroid = data['periods']
      }
      if (data['DataTermExist'] == true) {
        for (let term of data['terms']) {
          if (term.TERM_TYPE == 'S') {
            this.angForm.patchValue({
              shortTermFromMon: term.PERIOD_FROM,
              shortTermToMon: term.PERIOD_TO
            })
          }
          if (term.TERM_TYPE == 'M') {
            this.angForm.patchValue({
              mediumTermFromMon: term.PERIOD_FROM,
              mediumTermToMon: term.PERIOD_TO
            })
          }
          if (term.TERM_TYPE == 'L') {
            this.angForm.patchValue({
              longTermFromMon: term.PERIOD_FROM,
              longTermToMon: term.PERIOD_TO
            })
          }
        }
      }
    })
  }

  submit() {
    this.Amount.sort((b, a) => {
      return Number(b.AMOUNT_FROM) - Number(a.AMOUNT_FROM)
    });
    this.intRate.sort((b, a) => {
      return Number(b.AMOUNT_FROM) - Number(a.AMOUNT_FROM)
    });
    this.peroid.sort((b, a) => {
      return Number(b.FROM_MONTHS) - Number(a.FROM_MONTHS)
    });
    this.Insurance.sort((b, a) => {
      return Number(b.AMOUNT_FROM) - Number(a.AMOUNT_FROM)
    });
    let obj = {
      Amount: this.Amount,
      intRate: this.intRate,
      peroid: this.peroid,
      Terms: this.angForm.value,
      Insurance: this.Insurance,
      ACNOTYPE: 'LN'
    }
    this.http.post(this.url + '/sizewise-balance-updation/insert', obj).subscribe((data) => {
      Swal.fire('Success','Data Updated Successfully','success')
      this.http.get(this.url + '/sizewise-balance-updation/ACNOTYPE/' + obj.ACNOTYPE).subscribe((data) => {
        if (data['amountExist'] == true) {
          this.Amount = data['amount']
        }
        if (data['insuranceExist'] == true) {
          this.Insurance = data['insurance']
        }
        if (data['IntRateExist'] == true) {
          this.intRate = data['IntRate']
        }
        if (data['periodsExist'] == true) {
          this.peroid = data['periods']
        }
        if (data['DataTermExist'] == true) {
          for (let term of data['terms']) {
            if (term.TERM_TYPE == 'S') {
              this.angForm.patchValue({
                shortTermFromMon: term.PERIOD_FROM,
                shortTermToMon: term.PERIOD_TO
              })
            }
            if (term.TERM_TYPE == 'M') {
              this.angForm.patchValue({
                mediumTermFromMon: term.PERIOD_FROM,
                mediumTermToMon: term.PERIOD_TO
              })
            }
            if (term.TERM_TYPE == 'L') {
              this.angForm.patchValue({
                longTermFromMon: term.PERIOD_FROM,
                longTermToMon: term.PERIOD_TO
              })
            }
          }
        }
      })
    })
  }

  //Amount methods
  addAmountRow(i) {
    if ((this.Amount.length - 1) == i) {
      let row = {
        AMOUNT_FROM: '',
        AMOUNT_TO: ''
      }
      this.Amount.push(row);
    } else {
    }
  }

  deleteAmountRow(i) {
    this.Amount[i]['delete'] = 1
  }

  checkFromAmount(i, amt) {
    this.Amount[i].AMOUNT_FROM = amt
    if (i != 0 && Number(this.Amount[i].AMOUNT_FROM) < Number(this.Amount[i - 1].AMOUNT_TO)) {
      this.Amount[i].AMOUNT_FROM = ''
      Swal.fire('Info', `From Amount Must Be ${this.Amount[i - 1].AMOUNT_TO} or Greater Than ${this.Amount[i - 1].AMOUNT_TO}`, 'info')
    }
  }

  checkToAmount(i, amt) {
    this.Amount[i].AMOUNT_TO = amt
    if (Number(this.Amount[i].AMOUNT_FROM) > Number(this.Amount[i].AMOUNT_TO)) {
      this.Amount[i].AMOUNT_TO = ''
      Swal.fire('Info', `To Amount Must Be Greater Than ${this.Amount[i].AMOUNT_FROM}`, 'info')
    }
  }
  //Insurance methods
  addInsuranceRow(i) {
    if ((this.Insurance.length - 1) == i) {
      let row = {
        AMOUNT_FROM: '',
        AMOUNT_TO: ''
      }
      this.Insurance.push(row);
    } else {
    }
  }

  deleteInsuranceRow(i) {
    this.Insurance[i]['delete'] = 1
  }

  checkInsuranceFromAmount(i, amt) {
    this.Insurance[i].AMOUNT_FROM = amt
    if (i != 0 && Number(this.Insurance[i].AMOUNT_FROM) < Number(this.Insurance[i - 1].AMOUNT_TO)) {
      this.Insurance[i].AMOUNT_FROM = ''
      Swal.fire('Info', `From Amount Must Be Equal To Or Greater Than ${this.Insurance[i - 1].AMOUNT_TO}`, 'info')
    }
  }

  checkInsuranceToAmount(i, amt) {
    this.Insurance[i].AMOUNT_TO = amt
    if (Number(this.Insurance[i].AMOUNT_FROM) > Number(this.Insurance[i].AMOUNT_TO)) {
      this.Insurance[i].AMOUNT_TO = ''
      Swal.fire('Info', `To Amount Must Be Equal To Or Greater Than ${this.Insurance[i].AMOUNT_FROM}`, 'info')
    }
  }

  //Int rate methods
  addIntRateRow(i) {
    if ((this.intRate.length - 1) == i) {
      let row = {
        AMOUNT_FROM: '',
        AMOUNT_TO: ''
      }
      this.intRate.push(row);
    } else {
    }
  }

  deleteIntRateRow(i) {
    this.intRate[i]['delete'] = 1
  }

  checkFromIntRate(i, amt) {
    this.intRate[i].AMOUNT_FROM = amt
    if (i != 0 && Number(this.intRate[i].AMOUNT_FROM) < Number(this.intRate[i - 1].AMOUNT_TO)) {
      this.intRate[i].AMOUNT_FROM = ''
      Swal.fire('Info', `From Interest Amount Must Be ${this.intRate[i - 1].AMOUNT_TO} or Greater Than ${this.intRate[i - 1].AMOUNT_TO}`, 'info')
    }
  }

  checkToIntRate(i, amt) {
    this.intRate[i].AMOUNT_TO = amt
    if (Number(this.intRate[i].AMOUNT_FROM) > Number(this.intRate[i].AMOUNT_TO)) {
      this.intRate[i].AMOUNT_TO = ''
      Swal.fire('Info', `To Interest Amount Must Be Greater Than ${this.intRate[i].AMOUNT_FROM}`, 'info')
    }
  }

  //Peroid methods
  addPeriodRow(i) {
    if ((this.peroid.length - 1) == i) {
      let row = {
        FROM_MONTHS: '',
        TO_MONTHS: ''
      }
      this.peroid.push(row);
    } else {
    }
  }

  deletePeroidRow(i) {
    this.peroid[i]['delete'] = 1
  }

  checkFromPeroid(i, amt) {
    this.peroid[i].FROM_MONTHS = amt
    if (i != 0 && Number(this.peroid[i].FROM_MONTHS) < Number(this.peroid[i - 1].TO_MONTHS)) {
      this.peroid[i].FROM_MONTHS = ''
      Swal.fire('Info', `From Peroid Must Be Equal Or Greater Than ${this.peroid[i - 1].TO_MONTHS}`, 'info')
    }
  }

  checkToPeroid(i, amt) {
    this.peroid[i].TO_MONTHS = amt
    if (Number(this.peroid[i].FROM_MONTHS) > Number(this.peroid[i].TO_MONTHS)) {
      this.peroid[i].TO_MONTHS = ''
      Swal.fire('Info', `To Peroid Must Be Equal Or Greater Than ${this.peroid[i].FROM_MONTHS}`, 'info')
    }
  }

  //TERMS
  checkFromTerms(name) {
    if (name == 'mediumTermFromMon') {
      if (Number(this.angForm.controls['shortTermToMon'].value) > Number(this.angForm.controls['mediumTermFromMon'].value)) {
        Swal.fire('Info', `Medium Term From Month Must Be Equal Or Greater Than ${this.angForm.controls['shortTermToMon'].value}`, 'info')
      }
    }
    else if (name == 'longTermFromMon') {
      if (Number(this.angForm.controls['mediumTermToMon'].value) > Number(this.angForm.controls['longTermFromMon'].value)) {
        Swal.fire('Info', `Long Term From Month Must Be Equal Or Greater Than ${this.angForm.controls['mediumTermToMon'].value}`, 'info')
      }
    }
  }
  checkToTerms(name) {
    if (name == 'shortTermToMon') {
      if (Number(this.angForm.controls['shortTermToMon'].value) <= Number(this.angForm.controls['shortTermFromMon'].value)) {
        Swal.fire('Info', `Medium Term To Month Must Be Greater Than ${this.angForm.controls['shortTermFromMon'].value}`, 'info')
      }
    }
    else if (name == 'mediumTermToMon') {
      if (Number(this.angForm.controls['mediumTermToMon'].value) <= Number(this.angForm.controls['mediumTermFromMon'].value)) {
        Swal.fire('Info', `Medium Term To Month Must Be Greater Than ${this.angForm.controls['mediumTermFromMon'].value}`, 'info')
      }
    }
    else if (name == 'longTermToMon') {
      if (Number(this.angForm.controls['longTermToMon'].value) <= Number(this.angForm.controls['longTermFromMon'].value)) {
        Swal.fire('Info', `Long Term To Month Must Be Greater Than ${this.angForm.controls['longTermFromMon'].value}`, 'info')
      }
    }
  }
}
