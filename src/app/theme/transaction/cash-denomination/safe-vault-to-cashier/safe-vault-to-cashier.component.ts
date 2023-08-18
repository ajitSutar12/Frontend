import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import { CashDenominationService } from '../cash-denomination.service';
import { CashierUmService } from 'src/app/theme/utility/cashier-um/cashier-um.service';

@Component({
  selector: 'app-safe-vault-to-cashier',
  templateUrl: './safe-vault-to-cashier.component.html',
  styleUrls: ['./safe-vault-to-cashier.component.scss']
})
export class SafeVaultToCashierComponent implements OnInit {

  angForm: FormGroup;

  //ngmodel
  cashier
  formSubmitted
  DenominationChart: boolean;
  cashier_list: any;
  safeCashier: any;
  safeCashier1: any;

  denoamt
  SelectedBranch: any;
  branch_list: any;

  values = [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'Supervisor' },
  ];
  currencyData =
    [
      { currency: 2000, qty: "", total: 0, available: 0 },
      { currency: 1000, qty: "", total: 0, available: 0 },
      { currency: 500, qty: "", total: 0, available: 0 },
      { currency: 200, qty: "", total: 0, available: 0 },
      { currency: 100, qty: "", total: 0, available: 0 },
      { currency: 50, qty: "", total: 0, available: 0 },
      { currency: 20, qty: "", total: 0, available: 0 },
      { currency: 10, qty: "", total: 0, available: 0 },
      { currency: 5, qty: "", total: 0, available: 0 },
      { currency: 2, qty: "", total: 0, available: 0 },
      { currency: 1, qty: "", total: 0, available: 0 },
      { currency: 'Coin', qty: "", total: 0, available: 0 },
    ]


  dtExportButtonOptions: any = {};
  // available: number;
  constructor(private fb: FormBuilder, private systemParameter: SystemMasterParametersService,
    private _service: CashDenominationService, private _services: CashierUmService,
  ) { }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      CASHIER: ['', [Validators.required]],
      TRAN_DATE: ['', [Validators.required]],
      DENOMINATION_AMT: ['', [Validators.required]],
      Branch: ['', [Validators.required]],
      Available: ['']
    })
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        TRAN_DATE: data.CURRENT_DATE
      })
    })
    let user = JSON.parse(localStorage.getItem('user'));
    this._service.getOwnbranchList().subscribe(data => {
      this.branch_list = data;
      this.SelectedBranch = user.branchId;
      //Get Cashier List
      this._service.getList({ branch_id: this.SelectedBranch }).subscribe(data => {
        this.cashier_list = data;
        this.safeCashier = this.cashier_list.filter(el => el.CASHIER_CODE !== 'SAFE VAULT');
        this.safeCashier1 = this.cashier_list.filter(el => el.CASHIER_CODE == 'SAFE VAULT');


      })

    })

    this.reset();
  }

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


  // sum: number = 0
  // calculation(data, index, element) {

  //   console.log(element.target.value);
  //   let currency = this.currencyData[index].currency;
  //   let qty = element.target.value;
  //   let total = (currency == 'Coin' ? Number(qty) : Number(currency) * Number(qty));
  //   this.currencyData[index].currency = currency;
  //   this.currencyData[index].qty = qty;
  //   this.currencyData[index].total = total;


  //   this.sum = this.currencyData.reduce((accumulator, object) => {
  //     return accumulator + object.total;
  //   }, 0);

  // }

  sum: number = 0
  calculation(data, index, element) {
    let qty = element.target.value;
    if (Number(qty) > Number(this.currencyData[index].available)) {
      Swal.fire('Warning!', 'Please insert Correct Quantity', 'warning')
      element.target.value = 0;
      let currency = this.currencyData[index].currency;
      let available = element.target.value;
      let total = Number(currency) * 0;
      this.currencyData[index].currency = currency;
      this.currencyData[index].qty = "";
      this.currencyData[index].total = total;
      this.sum = this.currencyData.reduce((accumulator, object) => {
        return accumulator + object.total;
      }, 0);
    } else {
      let currency = this.currencyData[index].currency;
      let available = element.target.value;
      let total = (currency == 'Coin' ? Number(qty) : Number(currency) * Number(qty));
      this.currencyData[index].currency = currency;
      this.currencyData[index].qty = qty;
      this.currencyData[index].total = total;
      this.sum = this.currencyData.reduce((accumulator, object) => {
        return accumulator + object.total;
      }, 0);
    }
  }
  submit() {
    let object = this.angForm.value;
    const formVal = this.angForm.value;

    if (formVal.DENOMINATION_AMT != this.sum) {
      Swal.fire('Warning!', 'Please insert Correct Amount!', 'warning')
    }
    else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be transfer Safe Vault to Cashier!",
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
            this.angForm.reset();
            this.DenominationChart = false;
          }, err => {
            console.log(err);
          })
        }
      })
    }
  }
  reset() {
    // this.angForm.sum.reset()
    this.currencyData.forEach(entry => {

      // this.available = 0;
    })
  }
  changeData(ele) {
    // console.log(ele);
    this.currencyData[0].available = this.safeCashier1[0].DENO_2000;
    this.currencyData[1].available = this.safeCashier1[0].DENO_1000;
    this.currencyData[2].available = this.safeCashier1[0].DENO_500;
    this.currencyData[3].available = this.safeCashier1[0].DENO_200;
    this.currencyData[4].available = this.safeCashier1[0].DENO_100;
    this.currencyData[5].available = this.safeCashier1[0].DENO_50;
    this.currencyData[6].available = this.safeCashier1[0].DENO_20;
    this.currencyData[7].available = this.safeCashier1[0].DENO_10;
    this.currencyData[8].available = this.safeCashier1[0].DENO_5;
    this.currencyData[9].available = this.safeCashier1[0].DENO_2;
    this.currencyData[10].available = this.safeCashier1[0].DENO_1;
    this.currencyData[11].available = this.safeCashier1[0].DENO_COINS_AMT

    // // this.currencyData[0].qty

    // for (let item of this.currencyData) {
    //   // item.total = Number(item.currency) * Number(item.qty);
    //   let total = (Number(item.qty) == ele.DENO_COINS_AMT ? Number(item.qty) : Number(item.currency) * Number(item.qty));

    // }
    // this.sum = this.currencyData.reduce((accumulator, object) => {
    //   return accumulator + object.total;
    // }, 0);
  }
}
