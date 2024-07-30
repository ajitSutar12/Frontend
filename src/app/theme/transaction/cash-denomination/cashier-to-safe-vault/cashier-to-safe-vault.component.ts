import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import { CashDenominationService } from '../cash-denomination.service';


@Component({
  selector: 'app-cashier-to-safe-vault',
  templateUrl: './cashier-to-safe-vault.component.html',
  styleUrls: ['./cashier-to-safe-vault.component.scss']
})
export class CashierToSafeVaultComponent implements OnInit {

  angForm: FormGroup;

  //ngmodel
  cashier
  formSubmitted
  DenominationChart: boolean;
  cashier_list: any;
  safeCashier: any;
  SelectedBranch: any;
  branch_list: any;

  values = [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'Supervisor' },
  ];
  currencyData =
    [
      { currency: 2000, qty: 0, total: 0 },
      { currency: 1000, qty: 0, total: 0 },
      { currency: 500, qty: 0, total: 0 },
      { currency: 200, qty: 0, total: 0 },
      { currency: 100, qty: 0, total: 0 },
      { currency: 50, qty: 0, total: 0 },
      { currency: 20, qty: 0, total: 0 },
      { currency: 10, qty: 0, total: 0 },
      { currency: 5, qty: 0, total: 0 },
      { currency: 2, qty: 0, total: 0 },
      { currency: 1, qty: 0, total: 0 },
    ]


  dtExportButtonOptions: any = {};
  result_list: any;
  safeCashier_list: any;
  totalSum: number;
  constructor(private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private _service: CashDenominationService
  ) { }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      CASHIER: ['', [Validators.required]],
      TRAN_DATE: ['', [Validators.required]],
      // DENOMINATION_AMT:['', [Validators.required]],
      Branch: ['', [Validators.required]]
    })
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        TRAN_DATE: data.CURRENT_DATE
      })
    })
    this.DenominationChart = true

    let user = JSON.parse(localStorage.getItem('user'));
    this._service.getOwnbranchList().subscribe(data => {
      this.branch_list = data;
      this.SelectedBranch = user.branchId;
      //Get Cashier List
      this._service.getList({ branch_id: this.SelectedBranch }).subscribe(data => {
        this.cashier_list = data;
        console.log("Casher_List", data);
        // this.changeData(data);

        // const result = this.cashier_list.find((CASHIER_CODE) => CASHIER_CODE.CASHIER_CODE == user.id);
        const result = this.cashier_list;
        console.log("result",result)
        this.changeData(result)
        this.BRANCH_CODE = result.BRANCH_CODE;
        this.CASHIER_CODE = result.CASHIER_CODE;


        this.safeCashier = this.cashier_list.filter(el => el.CASHIER_CODE !== 'SAFE VAULT');
        this.safeCashier_list = this.safeCashier
        console.log("cashier list table", this.safeCashier)
      })
    })
  }


  BRANCH_CODE
  CASHIER_CODE


  decimalAllContent($event) {


    var t = $event.target.value;
    $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    this.angForm.patchValue({
      DENOMINATION_AMT: $event.target.value
    })
  }

  isFormA(value) {
    if (Number(this.angForm.controls['DENOMINATION_AMT'].value) == 0) {
      this.DenominationChart = false
    }
    else {
      this.DenominationChart = true
    }
  }

  changeData(user) {
    this.DenominationChart = true

    console.log(user)
    this.currencyData[0].qty = user.DENO_2000;
    this.currencyData[1].qty = user.DENO_1000;
    this.currencyData[2].qty = user.DENO_500;
    this.currencyData[3].qty = user.DENO_200;
    this.currencyData[4].qty = user.DENO_100;
    this.currencyData[5].qty = user.DENO_50;
    this.currencyData[6].qty = user.DENO_20;
    this.currencyData[7].qty = user.DENO_10;
    this.currencyData[8].qty = user.DENO_5;
    this.currencyData[9].qty = user.DENO_2;
    this.currencyData[10].qty = user.DENO_1;
    // this.currencyData[11].qty = user.DENO_COINS_AMT;

    console.log("Changedata", this.currencyData);
    let totalCal
    let da1 = 0
    let totalSum
    let totalarr = []
    let abc = this.currencyData[0].currency
    let abc1 = this.currencyData[0].qty

    this.totalSum = 0;

    for (let i = 0; i < this.currencyData.length; i++) {
      let totalCal = Math.abs(Number(this.currencyData[i].currency)) || 0;
      let qty = Math.abs(Number(this.currencyData[i].qty)) || 0;
      let da1 = totalCal * qty;
      this.currencyData[i]['totalcurrency'] = da1;
      this.totalSum += da1;
    }

  }

  sum: number = 0
  calculation(data, index, element) {

    console.log(element.target.value);
    let currency = this.currencyData[index].currency;
    let qty = element.target.value;
    let total = currency * qty;
    this.currencyData[index].currency = currency;
    this.currencyData[index].qty = qty;
    this.currencyData[index].total = total;


    this.sum = this.currencyData.reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);

  }
  submit() {
    let object = this.angForm.value;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be transfer cash to Safe Vault!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, transfer it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.cashiertosafevault(object).subscribe(data => {
          Swal.fire(
            'Transferd!',
            'Your cash has been transfered.',
            'success'
          )
          // this.reset();
          this.DenominationChart = false;
        }, err => {
          console.log(err);
        })
      }
    })
  }

  close() {
    this.DenominationChart = false

  }

  // reset(){

  // }

  // changeData(ele) {
  //   console.log(ele);
  //   this.currencyData[0].qty = ele.DENO_2000
  //   this.currencyData[1].qty = ele.DENO_1000
  //   this.currencyData[2].qty = ele.DENO_500
  //   this.currencyData[3].qty = ele.DENO_200
  //   this.currencyData[4].qty = ele.DENO_100
  //   this.currencyData[5].qty = ele.DENO_50
  //   this.currencyData[6].qty = ele.DENO_20
  //   this.currencyData[7].qty = ele.DENO_10
  //   this.currencyData[8].qty = ele.DENO_5
  //   this.currencyData[9].qty = ele.DENO_2
  //   this.currencyData[10].qty = ele.DENO_1
  //   // this.currencyData[0].qty

  //   for (let item of this.currencyData) {
  //     item.total = Number(item.currency) * Number(item.qty);
  //   }
  //   this.sum = this.currencyData.reduce((accumulator, object) => {
  //     return accumulator + object.total;
  //   }, 0);
  // }
}
