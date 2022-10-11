import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

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
  angForm: FormGroup;
  dtExportButtonOptions1: any = {};
  dtExportButtonOptions2: any = {};
  dtExportButtonOptions3: any = {};
  dtExportButtonOptions4: any = {};
  dtExportButtonOptions5: any = {};
  dtExportButtonOptions6: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder) { this.createForm(); }

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

  //TERMS   
  Terms = [{
    FromMonths: '',
    ToMonths: ''
  }]

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





  }
  submit() {
    console.log(this.angForm.valid);

    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }


  addRow(i) {
    if ((this.Amount.length - 1) == i) {
      let row = {
        Sr_no: '',
        FromAmount: '',
        ToAmount: ''
      }
      this.Amount.push(row);
    } else {

    }
  }
  deleteRow(i) {
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
    debugger
    this.Amount[i].ToAmount = amt
    if (Number(this.Amount[i].FromAmount) > Number(this.Amount[i].ToAmount)) {
      this.Amount[i].ToAmount = ''
      Swal.fire('Info', `To Amount Must Be Greater Than ${this.Amount[i].FromAmount}`, 'info')
    }
  }

}
