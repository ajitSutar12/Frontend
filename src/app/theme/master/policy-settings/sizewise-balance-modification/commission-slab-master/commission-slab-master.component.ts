import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
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
  
  amt1: any;
  multiField1 = [];
  maxDate: Date;
  submitButton: boolean = true;
  UpdateSubmitButton: boolean = false;
  constructor(private fb: FormBuilder,) {

    

    
  }

  ngOnInit(): void {
    this.createForm();

  }

  createForm() {
    this.angForm = this.fb.group({
      EFFECT_DATE: ['', [Validators.required]],
      AMOUNT_FROM: ['', [Validators.pattern]],
      AMOUNT_TO: ['', [Validators.pattern]],
      COMMISSION: ['', [Validators.pattern]],
      LOAN_COMMISSION: ['', [Validators.pattern]],
      SERVICE_CHARGE: ['', [Validators.pattern]],
    });
  }

  addField() {
 
    // if () {
      const formVal = this.angForm.value;
      var object = {
        EFFECT_DATE:formVal.EFFECT_DATE,
        AMOUNT_FROM: formVal.AMOUNT_FROM,
        AMOUNT_TO: formVal.AMOUNT_TO,
        COMMISSION: formVal.COMMISSION,
        LOAN_COMMISSION: formVal.LOAN_COMMISSION,
        SERVICE_CHARGE: formVal.SERVICE_CHARGE
      }
     
    // }
    if (formVal.EFFECT_DATE == "" || formVal.EFFECT_DATE == null) {
      Swal.fire("info!", "Please Select Effect Date!", "info");
    }
    else if (formVal.AMOUNT_FROM == "" || formVal.AMOUNT_FROM == null) {
      Swal.fire(
        "info!",
        "Please Select From Amount!",
        "info"
      );
    }
    else if (formVal.AMOUNT_TO == "" || formVal.AMOUNT_TO == null) {
      Swal.fire(
        "info!",
        "Please Select To Amount!",
        "info"
      );
    }
    else if (formVal.COMMISSION == "" || formVal.COMMISSION == null) {
      Swal.fire(
        "info!",
        "Please Select Commission!",
        "info"
      );
    }
    else if (formVal.LOAN_COMMISSION == "" || formVal.LOAN_COMMISSION == null) {
      Swal.fire(
        "info!",
        "Please Select Loan COmmission!",
        "info"
      );
    }
    else if (formVal.SERVICE_CHARGE == "" || formVal.SERVICE_CHARGE == null) {
      Swal.fire(
        "info!",
        "Please Select Service Charge!",
        "info"
      );
    }
    else
    {
      this.multiField.push(object);
      // console.log(object);
      this.resetField()
    }

  }
  resetField() {
    // this.angForm.controls['EFFECT_DATE'].reset();
    this.angForm.controls['AMOUNT_FROM'].reset();
    this.angForm.controls['AMOUNT_TO'].reset();
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
    this.submitButton = true;
    this.UpdateSubmitButton = false;
    const formVal = this.angForm.value;
    var object = {
      EFFECT_DATE: formVal.EFFECT_DATE,
      AMOUNT_FROM: formVal.AMOUNT_FROM,
      AMOUNT_TO: formVal.AMOUNT_TO,
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

      EFFECT_DATE: this.multiField[id].EFFECT_DATE,
      AMOUNT_FROM: this.multiField[id].AMOUNT_FROM,
      AMOUNT_TO: this.multiField[id].AMOUNT_TO,
      COMMISSION: this.multiField[id].COMMISSION,
      LOAN_COMMISSION: this.multiField[id].LOAN_COMMISSION,
      SERVICE_CHARGE: this.multiField[id].SERVICE_CHARGE,
      
    })
  }
  delField(id) {
    this.multiField.splice(id, 1)
  }


  submit()
  {
    const formVal = this.angForm.value;
    // let toDate = moment(this.effectdate, 'DD/MM/YYYY')
    // object['EFFECT_DATE'] = moment(toDate).format('DD/MM/YYYY')

    var object = {
      EFFECT_DATE:formVal.EFFECT_DATE ,
      // AMOUNT_FROM: formVal.AMOUNT_FROM,
      // AMOUNT_TO: formVal.AMOUNT_TO,
      // COMMISSION: formVal.COMMISSION,
      // LOAN_COMMISSION: formVal.LOAN_COMMISSION,
      // SERVICE_CHARGE: formVal.SERVICE_CHARGE
    }
    this.multiField1.push(object);
    // console.log(object);
    this.reset()
  }
  editData(id) {
    this.intIndex = id
    this.intID = this.multiField[id].id;
    this.submitButton = false;
    this.UpdateSubmitButton = true;
    this.angForm.patchValue({

      EFFECT_DATE: this.multiField[id].EFFECT_DATE,
      AMOUNT_FROM: this.multiField[id].AMOUNT_FROM,
      AMOUNT_TO: this.multiField[id].AMOUNT_TO,
      COMMISSION: this.multiField[id].COMMISSION,
      LOAN_COMMISSION: this.multiField[id].LOAN_COMMISSION,
      SERVICE_CHARGE: this.multiField[id].SERVICE_CHARGE,
      
    })
  }
 reset()
 {
      this.angForm.controls['EFFECT_DATE'].reset();

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
    let from = Number((document.getElementById("AMOUNT_FROM") as HTMLInputElement).value);
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
  checkFromAmount() {

    let amt1 = this.multiField[this.multiField.length -1];
    let from1 = Number((document.getElementById("AMOUNT_FROM") as HTMLInputElement).value);

      if (from1 < amt1.AMOUNT_TO ) {
      Swal.fire('Info', `From Amount Must Be ${amt1.AMOUNT_TO} or Greater Than ${amt1.AMOUNT_TO}` , 'info');
      (document.getElementById("AMOUNT_FROM") as HTMLInputElement).value = ""
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
