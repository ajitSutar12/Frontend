import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CashDenominationService } from '../cash-denomination.service';

@Component({
  selector: 'app-cash-initialisation-entry',
  templateUrl: './cash-initialisation-entry.component.html',
  styleUrls: ['./cash-initialisation-entry.component.scss']
})
export class CashInitialisationEntryComponent implements OnInit {

  elements: any;

  url = environment.base_url;

  //ngmodel
  Cashier: any
  DenominationChart: boolean;
  SelectedBranch: any

  // Formgroup variable
  angForm: FormGroup;
  ngTransactionNo: any = null

  // date variables
  branch_list: any;
  cashier_list: any;

  ngtrandate: any = null

  values = [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'Supervisor' },
  ];

  values1 = [
    { type: 2000, Amt: 0, Qty: 0 },
    { type: 2000, Amt: 0, Qty: 0 }
  ]
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

    cashData =
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


  no1: any = 0;
  nonotes: any = 0;
  total1: any = 0;
  ans: string;
  name
  totalSum: number;
  safCashier_list: any;
  availableData: any;
  // cashData = [];
  new_casher_list: any;


  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private config: NgSelectConfig,
    private systemParameter: SystemMasterParametersService,
    private _services: CashDenominationService) {

    let user = JSON.parse(localStorage.getItem('user'))
    this.name = user.F_NAME + '   ' + user.L_NAME
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    this.angForm = this.fb.group({
      DENOMINATION_AMT: ['', [Validators.required, Validators.pattern]],
      TRANSACTION_NO: ['', [Validators.required, Validators.pattern]],
      TRAN_DATE: ['', [Validators.required]],
      cashier_data: ['', [Validators.required]],
      no1: ['', [Validators.required]],
      NONOTES: ['', [Validators.required]],
      TOTAL1: ['', [Validators.required]],
      Branch: ['', [Validators.required]]
    })

    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        TRAN_DATE: data.CURRENT_DATE
      })
    })

    //Get Brach Details 
    this._services.getOwnbranchList().subscribe(data => {
      this.branch_list = data;
      this.SelectedBranch = user.branchId;
      //Get Cashier List
      this._services.getList({ branch_id: this.SelectedBranch }).subscribe(data => {
        console.log(data);
        this.cashier_list = data;
        this.new_casher_list = data; //cash in hand table


        // cash in Denomination Table
        const result = this.cashier_list.find((CASHIER_CODE) => CASHIER_CODE.CASHIER_CODE == user.id);
        if (result) {
          console.log('Result:', result);
          this.changeData(result);
          // this.cashData(result);
          this.BRANCH_CODE = result.BRANCH_CODE;
          this.CASHIER_CODE = result.CASHIER_CODE;
        } else {
          console.error('No matching cashier found');
          if (this.cashier_list.length > 0) {
            this.BRANCH_CODE = this.cashier_list[0].BRANCH_CODE;
            this.CASHIER_CODE = this.cashier_list[0].CASHIER_CODE;
          }
        }

        //cash in hand Table 
        let resultCash = this.new_casher_list.find((CASHIER_CODE) => CASHIER_CODE.CASHIER_CODE == user.id);
        if (resultCash) {
          console.log('result Cash IN Hand:', resultCash);
          // this.changeData(resultCash);
          // this.cashData(resultCash);
          this.BRANCH_CODE = resultCash.BRANCH_CODE;
          this.CASHIER_CODE = resultCash.CASHIER_CODE;
        } else {
          console.error('No matching cashier found');
          if (this.new_casher_list.length > 0) {
            this.BRANCH_CODE = this.new_casher_list[0].BRANCH_CODE;
            this.CASHIER_CODE = this.new_casher_list[0].CASHIER_CODE;
          }
        }

        // this.Cashier = this.cashier_list.filter(el => el.CASHIER_CODE !== 'SAFE VAULT');
        // this.safCashier_list = this.Cashier
        // console.log("cashier list table", this.Cashier)
      })
    })
  }
  BRANCH_CODE
  CASHIER_CODE

  cashierDrop(event) { }


  getNotes(name, value, id) {
    let ans = Number(name) * Number(value)
    document.getElementById("anstwoThou").innerHTML = this.ans;
    console.log(ans)

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

  sum: number = 0
  calculation(data, index, element) {
    console.log(element.target.value);
    let currency = this.currencyData[index].currency;
    let qty = element.target.value;
    let total = Number(currency) * Number(qty)
    this.currencyData[index].currency = currency;
    this.currencyData[index].qty = qty;
    this.currencyData[index].total = total;

    this.sum = this.currencyData.reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);

  }

  cashInHand(user) {
    this.DenominationChart = true

    console.log(user)
    this.cashData[0].qty = user.DENO_2000;
    this.cashData[1].qty = user.DENO_1000;
    this.cashData[2].qty = user.DENO_500;
    this.cashData[3].qty = user.DENO_200;
    this.cashData[4].qty = user.DENO_100;
    this.cashData[5].qty = user.DENO_50;
    this.cashData[6].qty = user.DENO_20;
    this.cashData[7].qty = user.DENO_10;
    this.cashData[8].qty = user.DENO_5;
    this.cashData[9].qty = user.DENO_2;
    this.cashData[10].qty = user.DENO_1;
    // this.currencyData[11].qty = user.DENO_COINS_AMT;

    console.log("cash In Hand Table", this.cashData);
    let totalCal
    let da1 = 0
    let totalSum
    let totalarr = []
    let abc = this.cashData[0].currency
    let abc1 = this.cashData[0].qty

    this.totalSum = 0;

    for (let i = 0; i < this.cashData.length; i++) {
      let totalCal = Math.abs(Number(this.cashData[i].currency)) || 0;
      let qty = Math.abs(Number(this.cashData[i].qty)) || 0;
      let da1 = totalCal * qty;
      this.cashData[i]['totalcurrency'] = da1;
      this.totalSum += da1;
    }

  }

  changeData(user) {
    console.log(user)
    this.currencyData[0].available = user.DENO_2000;
    this.currencyData[1].available = user.DENO_1000;
    this.currencyData[2].available = user.DENO_500;
    this.currencyData[3].available = user.DENO_200;
    this.currencyData[4].available = user.DENO_100;
    this.currencyData[5].available = user.DENO_50;
    this.currencyData[6].available = user.DENO_20;
    this.currencyData[7].available = user.DENO_10;
    this.currencyData[8].available = user.DENO_5;
    this.currencyData[9].available = user.DENO_2;
    this.currencyData[10].available = user.DENO_1;
    this.currencyData[11].available = user.DENO_COINS_AMT;


    console.log("Changedata", this.currencyData);
    let totalCal
    let da1 = 0
    let totalSum
    let totalarr = []
    let abc = this.currencyData[0].currency
    let abc1 = this.currencyData[0].available

    // console.log(Number(abc) * abc1)


    this.totalSum = 0;

    for (let i = 0; i < this.currencyData.length; i++) {
      let totalCal = Math.abs(Number(this.currencyData[i].currency)) || 0;
      let available = Math.abs(Number(this.currencyData[i].available)) || 0;
      let da1 = totalCal * available;
      this.currencyData[i]['totalcurrency'] = da1;
      this.totalSum += da1;
    }

  }

  submit() {
    const formVal = this.angForm.value;
    var object = {
      CASHIER: formVal.cashier_data,
      DENOMINATION_AMT: formVal.DENOMINATION_AMT,
      TRAN_DATE: formVal.TRAN_DATE,
      currency: this.currencyData,
      availableData: this.availableData,
      branch: formVal.Branch
    }



    if (Number(formVal.DENOMINATION_AMT) == this.sum) {
      this._services.initialize(object).subscribe(data => {
        Swal.fire(
          'Good job!',
          'Your Form is Submitted Successfully..!',
          'success'
        );
        this.DenominationChart = false
        this.angForm.reset()
      })
    } else {
      Swal.fire('Warning!', 'Please insert Correct Amount!', 'warning')
    }
  }
  close() {
    this.DenominationChart = false

  }
}
