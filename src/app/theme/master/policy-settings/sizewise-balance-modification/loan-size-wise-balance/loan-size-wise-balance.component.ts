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
    FromAmount: '',
    ToAmount: ''
  }]

  //INTEREST RATE
  intRate = [{
    FromInterestRate: '',
    ToInterestRate: ''
  }]

  //PERIOD
  peroid = [{
    FromPeroid: '',
    ToPeroid: ''
  }]
  //Terms
  angForm: FormGroup;
  //INSURANCE AMOUNT
  Insurance = [{
    FromAmount: '',
    ToAmount: ''
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
  }

  submit() {
    debugger
    console.log(this.angForm.value);
    this.Amount.sort((b, a) => {
      return Number(b.FromAmount) - Number(a.FromAmount)
    });
    this.intRate.sort((b, a) => {
      return Number(b.FromInterestRate) - Number(a.FromInterestRate)
    });
    this.peroid.sort((b, a) => {
      return Number(b.FromPeroid) - Number(a.FromPeroid)
    });
    this.Insurance.sort((b, a) => {
      return Number(b.FromAmount) - Number(a.FromAmount)
    });
    let obj = {
      Amount: this.Amount,
      intRate: this.intRate,
      peroid: this.peroid,
      Terms: this.angForm.value,
      Insurance: this.Insurance,
      ACNOTYPE:'LN'
    }
    this.http.post(this.url + '/sizewise-balance-updation/insert', obj).subscribe((data) => {
    })

  }

  //Amount methods
  addAmountRow(i) {
    if ((this.Amount.length - 1) == i) {
      let row = {
        FromAmount: '',
        ToAmount: ''
      }
      this.Amount.push(row);
    } else {
    }
  }

  deleteAmountRow(i) {
    this.Amount.splice(i, 1)
  }

  checkFromAmount(i, amt) {
    this.Amount[i].FromAmount = amt
    if (i != 0 && Number(this.Amount[i].FromAmount) < Number(this.Amount[i - 1].ToAmount)) {
      this.Amount[i].FromAmount = ''
      Swal.fire('Info', `From Amount Must Be ${this.Amount[i - 1].ToAmount} or Greater Than ${this.Amount[i - 1].ToAmount}`, 'info')
    }
  }

  checkToAmount(i, amt) {
    this.Amount[i].ToAmount = amt
    if (Number(this.Amount[i].FromAmount) > Number(this.Amount[i].ToAmount)) {
      this.Amount[i].ToAmount = ''
      Swal.fire('Info', `To Amount Must Be Greater Than ${this.Amount[i].FromAmount}`, 'info')
    }
  }
  //Insurance methods
  addInsuranceRow(i) {
    if ((this.Insurance.length - 1) == i) {
      let row = {
        FromAmount: '',
        ToAmount: ''
      }
      this.Insurance.push(row);
    } else {
    }
  }

  deleteInsuranceRow(i) {
    this.Insurance.splice(i, 1)
  }

  checkInsuranceFromAmount(i, amt) {
    this.Insurance[i].FromAmount = amt
    if (i != 0 && Number(this.Insurance[i].FromAmount) < Number(this.Insurance[i - 1].ToAmount)) {
      this.Insurance[i].FromAmount = ''
      Swal.fire('Info', `From Amount Must Be Equal To Or Greater Than ${this.Insurance[i - 1].ToAmount}`, 'info')
    }
  }

  checkInsuranceToAmount(i, amt) {
    this.Insurance[i].ToAmount = amt
    if (Number(this.Insurance[i].FromAmount) > Number(this.Insurance[i].ToAmount)) {
      this.Insurance[i].ToAmount = ''
      Swal.fire('Info', `To Amount Must Be Equal To Or Greater Than ${this.Insurance[i].FromAmount}`, 'info')
    }
  }

  //Int rate methods
  addIntRateRow(i) {
    if ((this.intRate.length - 1) == i) {
      let row = {
        FromInterestRate: '',
        ToInterestRate: ''
      }
      this.intRate.push(row);
    } else {
    }
  }

  deleteIntRateRow(i) {
    this.intRate.splice(i, 1)
  }

  checkFromIntRate(i, amt) {
    this.intRate[i].FromInterestRate = amt
    if (i != 0 && Number(this.intRate[i].FromInterestRate) < Number(this.intRate[i - 1].ToInterestRate)) {
      this.intRate[i].FromInterestRate = ''
      Swal.fire('Info', `From Interest Amount Must Be ${this.intRate[i - 1].ToInterestRate} or Greater Than ${this.intRate[i - 1].ToInterestRate}`, 'info')
    }
  }

  checkToIntRate(i, amt) {
    this.intRate[i].ToInterestRate = amt
    if (Number(this.intRate[i].FromInterestRate) > Number(this.intRate[i].ToInterestRate)) {
      this.intRate[i].ToInterestRate = ''
      Swal.fire('Info', `To Interest Amount Must Be Greater Than ${this.intRate[i].FromInterestRate}`, 'info')
    }
  }

  //Peroid methods
  addPeriodRow(i) {
    if ((this.peroid.length - 1) == i) {
      let row = {
        FromPeroid: '',
        ToPeroid: ''
      }
      this.peroid.push(row);
    } else {
    }
  }

  deletePeroidRow(i) {
    this.peroid.splice(i, 1)
  }

  checkFromPeroid(i, amt) {
    this.peroid[i].FromPeroid = amt
    if (i != 0 && Number(this.peroid[i].FromPeroid) < Number(this.peroid[i - 1].ToPeroid)) {
      this.peroid[i].FromPeroid = ''
      Swal.fire('Info', `From Peroid Must Be Equal Or Greater Than ${this.peroid[i - 1].ToPeroid}`, 'info')
    }
  }

  checkToPeroid(i, amt) {
    this.peroid[i].ToPeroid = amt
    if (Number(this.peroid[i].FromPeroid) > Number(this.peroid[i].ToPeroid)) {
      this.peroid[i].ToPeroid = ''
      Swal.fire('Info', `To Peroid Must Be Equal Or Greater Than ${this.peroid[i].FromPeroid}`, 'info')
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
