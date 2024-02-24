import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { environment } from '../../../../../../environments/environment'
// Http Client
import { HttpClient } from '@angular/common/http';
import { SystemMasterParametersService } from '../../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-commissionslabmaster',
  templateUrl: './commission-slab-master.component.html',
  styleUrls: ['./commission-slab-master.component.scss']
})
export class CommissionSlabMasterComponent implements OnInit {

  url = environment.base_url;
  angForm: FormGroup;
  effectdate
  multiField = [];
  addShowButton: boolean = true
  UpdateShowButton: boolean = false
  amt1: any;
  maxDate: any;
  submitButton: boolean = true;
  showDeleteBtn: boolean = true;
  UpdateButton: boolean = false;
  UpdateSubmitButton: boolean = false;
  // For reloading angular datatable after CRUD operation
  // @ViewChild(DataTableDirective, { static: false })
  // dtElement: DataTableDirective;
  // dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject();
  // //Datatable variable
  // dtExportButtonOptions: DataTables.Settings = {};
  // //variables for pagination
  // page: number = 1;
  //filter variable
  filterData = {};
  constructor(private fb: FormBuilder, private http: HttpClient, private systemParameter: SystemMasterParametersService) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
  }

  ngOnInit(): void {
    this.createForm();
    // Fetching Server side data
    this.http.get(this.url + '/sizewise-balance-updation').subscribe(resp => {
      this.multiField1 = resp;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      EFFECT_DATE: ['', [Validators.required]],
      AMOUNT_FROM: ['', [Validators.pattern]],
      AMOUNT_TO: ['', [Validators.pattern]],
      PIGMY_COMMISSION_PERCENTAGE: ['', [Validators.pattern]],
      COMM_AGAINST_LN_PERCENT: ['', [Validators.pattern]],
      PIGMY_SVR_CHARGE_RATE: ['', [Validators.pattern]],
    });
  }

  addField() {

    // if () {
    const formVal = this.angForm.value;
    var object = {
      EFFECT_DATE: formVal.EFFECT_DATE,
      AMOUNT_FROM: formVal.AMOUNT_FROM,
      AMOUNT_TO: formVal.AMOUNT_TO,
      PIGMY_COMMISSION_PERCENTAGE: formVal.PIGMY_COMMISSION_PERCENTAGE,
      COMM_AGAINST_LN_PERCENT: formVal.COMM_AGAINST_LN_PERCENT,
      PIGMY_SVR_CHARGE_RATE: formVal.PIGMY_SVR_CHARGE_RATE
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
    else if (formVal.PIGMY_COMMISSION_PERCENTAGE == "" || formVal.PIGMY_COMMISSION_PERCENTAGE == null) {
      Swal.fire(
        "info!",
        "Please Select PIGMY_COMMISSION_PERCENTAGE!",
        "info"
      );
    }
    else if (formVal.COMM_AGAINST_LN_PERCENT == "" || formVal.COMM_AGAINST_LN_PERCENT == null) {
      Swal.fire(
        "info!",
        "Please Select Loan PIGMY_COMMISSION_PERCENTAGE!",
        "info"
      );
    }
    else if (formVal.PIGMY_SVR_CHARGE_RATE == "" || formVal.PIGMY_SVR_CHARGE_RATE == null) {
      Swal.fire(
        "info!",
        "Please Select Service Charge!",
        "info"
      );
    }
    else {
      this.multiField.push(object);
      // console.log(object);
      this.resetField()
    }

  }
  resetField() {
    // this.angForm.controls['EFFECT_DATE'].reset();
    this.angForm.controls['AMOUNT_FROM'].reset();
    this.angForm.controls['AMOUNT_TO'].reset();
    this.angForm.controls['PIGMY_COMMISSION_PERCENTAGE'].reset();
    this.angForm.controls['COMM_AGAINST_LN_PERCENT'].reset();
    this.angForm.controls['PIGMY_SVR_CHARGE_RATE'].reset();

  }
  intIndex: number
  intID: number
  updateField() {
    let index = this.intIndex;
    this.addShowButton = true;
    this.UpdateShowButton = false;
    this.UpdateSubmitButton = false;
    const formVal = this.angForm.value;
    var object = {
      EFFECT_DATE: formVal.EFFECT_DATE,
      AMOUNT_FROM: formVal.AMOUNT_FROM,
      AMOUNT_TO: formVal.AMOUNT_TO,
      PIGMY_COMMISSION_PERCENTAGE: formVal.PIGMY_COMMISSION_PERCENTAGE,
      COMM_AGAINST_LN_PERCENT: formVal.COMM_AGAINST_LN_PERCENT,
      PIGMY_SVR_CHARGE_RATE: formVal.PIGMY_SVR_CHARGE_RATE,
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
      PIGMY_COMMISSION_PERCENTAGE: this.multiField[id].PIGMY_COMMISSION_PERCENTAGE,
      COMM_AGAINST_LN_PERCENT: this.multiField[id].COMM_AGAINST_LN_PERCENT,
      PIGMY_SVR_CHARGE_RATE: this.multiField[id].PIGMY_SVR_CHARGE_RATE,

    })
  }
  delField(id) {
    this.multiField.splice(id, 1)
  }

  multiField1: any = []
  submit() {
    let toDate = moment(this.effectdate, 'DD/MM/YYYY')
    let effectdate = moment(toDate).format('DD/MM/YYYY')
    var object = {
      EFFECT_DATE: effectdate,
      arr: this.multiField
    }
    this.http.post(this.url + '/sizewise-balance-updation/commisionInsert', object).subscribe(data => {
      Swal.fire('Success', 'Data has been inserted successfully', 'success')
    })
    this.ngOnInit()
  }
  editData(id) {
    this.submitButton = false
    this.UpdateButton = true
    this.showDeleteBtn = false
    let object = {
      EFFECT_DATE: this.multiField1[id].EFFECT_DATE
    }
    this.http.post(this.url + '/sizewise-balance-updation/edit', object).subscribe((data: any) => {
      this.angForm.patchValue({
        EFFECT_DATE: data[0].EFFECT_DATE
      })
      this.multiField = data
    })

  }
  reset() {
    this.angForm.controls['EFFECT_DATE'].reset();
    this.showDeleteBtn = true
    this.multiField = []

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

    let amt1 = this.multiField[this.multiField.length - 1];
    let from1 = Number((document.getElementById("AMOUNT_FROM") as HTMLInputElement).value);

    if (from1 < amt1.AMOUNT_TO) {
      Swal.fire('Info', `From Amount Must Be ${amt1.AMOUNT_TO} or Greater Than ${amt1.AMOUNT_TO}`, 'info');
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

  updateData() {
    let toDate = moment(this.effectdate, 'DD/MM/YYYY')
    let effectdate = moment(toDate).format('DD/MM/YYYY')
    var object = {
      EFFECT_DATE: effectdate,
      arr: this.multiField
    }
    this.http.post(this.url + '/sizewise-balance-updation/updatecommision', object).subscribe(data => {
      Swal.fire('Success', 'Data has been updated successfully', 'success')
      this.submitButton = true
      this.UpdateButton = false
    })
    this.ngOnInit()
  }
  CancelData() {
    this.submitButton = true
    this.UpdateButton = false
    this.reset()
    this.ngOnInit()
  }
}
