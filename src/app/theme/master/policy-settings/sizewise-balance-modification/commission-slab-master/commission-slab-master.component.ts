import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-commission-slab-master',
  templateUrl: './commission-slab-master.component.html',
  styleUrls: ['./commission-slab-master.component.scss']
})
export class CommissionSlabMasterComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  angForm: FormGroup;

  effectdate

  // maxDate: Date;
  multiField = [];
  addShowButton: boolean = true
  UpdateShowButton: boolean = false

  constructor(private fb: FormBuilder,) {

    // this.maxDate = new Date();
    // this.maxDate.setDate(this.maxDate.getDate())

  }

  ngOnInit(): void {
    this.createForm();

  }

  createForm() {
    this.angForm = this.fb.group({
      EFFECT_DATE: ['', [Validators.required]],
      FROM_AMOUNT: ['', [Validators.pattern]],
      TO_AMOUNT: ['', [Validators.pattern]],
      COMMISSION: ['', [Validators.pattern]],
      LOAN_COMMISSION: ['', [Validators.pattern]],
      SERVICE_CHARGE: ['', [Validators.pattern]],
    });
  }

  addField() {
    // let intrate = (document.getElementById("COMMISSION") as HTMLInputElement).value;
    // let penint = (document.getElementById("LOAN_COMMISSION") as HTMLInputElement).value;

    
    // if (penint == "") {
    //   Swal.fire(
    //     'Info',
    //     'Please Add Loan Commission ',
    //     'info'
    //   )
    // }
    // if (intrate == "") {
    //   Swal.fire(
    //     'Info',
    //     'Please Input Commission',
    //     'info'
    //   )
    // }

    // if () {
      const formVal = this.angForm.value;
      var object = {
        FROM_AMOUNT: formVal.FROM_AMOUNT,
        TO_AMOUNT: formVal.TO_AMOUNT,
        COMMISSION: formVal.COMMISSION,
        LOAN_COMMISSION: formVal.LOAN_COMMISSION,
        SERVICE_CHARGE: formVal.SERVICE_CHARGE
      }
      this.multiField.push(object);
      this.resetField()
    // }

  }
  resetField() {
    this.angForm.controls['EFFECT_DATE'].reset();
    this.angForm.controls['FROM_AMOUNT'].reset();
    this.angForm.controls['TO_AMOUNT'].reset();
    this.angForm.controls['COMMISSION'].reset();
    this.angForm.controls['LOAN_COMMISSION'].reset();
    this.angForm.controls['SERVICE_CHARGE'].reset();

  }
  intIndex: number
  intID: number
  updateField() {
    let index = this.intIndex;
    this.addShowButton = true;
    this.UpdateShowButton = false;
    const formVal = this.angForm.value;
    var object = {
      FROM_AMOUNT: formVal.FROM_AMOUNT,
      TO_AMOUNT: formVal.TO_AMOUNT,
      COMMISSION: formVal.COMMISSION,
      LOAN_COMMISSION: formVal.LOAN_COMMISSION,
      SERVICE_CHARGE: formVal.SERVICE_CHARGE,
      id: this.intID
    }
    this.multiField[index] = object;
    this.resetField()
  }

  editField(id) {
    this.intIndex = id
    this.intID = this.multiField[id].id;
    this.addShowButton = false;
    this.UpdateShowButton = true;
    this.angForm.patchValue({
      FROM_AMOUNT: this.multiField[id].FROM_AMOUNT,
      TO_AMOUNT: this.multiField[id].TO_AMOUNT,
      COMMISSION: this.multiField[id].COMMISSION,
      LOAN_COMMISSION: this.multiField[id].LOAN_COMMISSION,
      SERVICE_CHARGE: this.multiField[id].SERVICE_CHARGE,
      
    })
  }
  delField(id) {
    this.multiField.splice(id, 1)
  }

 
  checkmargin(ele: any) {
    //check  if given value  is below 50
    if (ele.target.value <= 50) {
    }
    else {
      Swal.fire("Invalid Input", "Please Insert Values Below 50", "error");
      ele.target.value = 0

    }
  }

  compareamount() {
    let from = Number((document.getElementById("FROM_AMOUNT") as HTMLInputElement).value);
    let to = Number((document.getElementById("toamt") as HTMLInputElement).value);
    if (to != 0) {
      if (from > to) {
        Swal.fire(
          'Warning!',
          'From Amount Should Be Less Than Upto Amount',
          'warning'
        );
        (document.getElementById("toamt") as HTMLInputElement).value = ""
      }
    }

  }

  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }

}
