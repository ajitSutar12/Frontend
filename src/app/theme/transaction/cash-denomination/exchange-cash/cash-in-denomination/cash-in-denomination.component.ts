
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { first } from 'rxjs/operators';

import { CashierUmService } from 'src/app/theme/utility/cashier-um/cashier-um.service';
import { CashDenominationService } from '../../cash-denomination.service';
// import { CashDenominationService } from '../cash-denomination.service';

@Component({
  selector: 'app-cash-in-denomination',
  templateUrl: './cash-in-denomination.component.html',
  styleUrls: ['./cash-in-denomination.component.scss']
})
export class CashInDenominationComponent implements OnInit {
  @Output() voucherNoEmitter = new EventEmitter<string>();
  @Output() voucherNoChanged = new EventEmitter<string>();
  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  ngTransactionNo: any = null

  // date variables 
  maxDate: any;
  minDate: Date;
  ngtrandate: any = null

  //ngmodel
  number: any;
  nonotes: any;
  trandate
  denoamt
  cashier
  // sum : any= 0;


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

  Scheme: unknown;
  DenominationChart: boolean;
  cashier_list: any;
  SelectedBranch: any;
  branch_list: any;
  totalSum: any;
  name;
  new_casher_list: any;


  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private _services: CashDenominationService,

    private _service: CashierUmService,

  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())

    this.systemParameter.getFormData(1).subscribe(data => {
      this.trandate = data.CURRENT_DATE;
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })

    let user = JSON.parse(localStorage.getItem('user'))
    this.name = user.F_NAME + '   ' + user.L_NAME
  }

  ngOnInit(): void {
    this.createForm();
    let user = JSON.parse(localStorage.getItem('user'));
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.Scheme = data;
      this.cashInHand(user);

    });
    //   this._service.getUserDetails().subscribe(data=>{

    //     this.cashier_list = data;

    //     console.log(this.cashier_list);
    // },err=>{
    //   console.log(err);  
    // })

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

  changes(event: any) {
    this.SelectedBranch = event.value;
    this.cashier = null

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

  createForm() {
    this.angForm = this.fb.group({
      DENOMINATION_AMT: ['',],
      TRANSACTION_NO: ['', [Validators.pattern]],
      TRAN_DATE: ['', [Validators.required]],
      CASHIER: ['', [Validators.required]],
      Branch: ['', [Validators.required]]
    })

  }


  sum: number = 0
  calculation(data, index, element) {
    let currency = this.currencyData[index].currency;
    let qty = element.target.value;
    let qnty = element.target.value;

    let total = (currency == 'Coin' ? Number(qty) : Number(currency) * Number(qty));
    this.currencyData[index].currency = currency;
    this.currencyData[index].qty = qty;
    this.currencyData[index].total = total;


    this.sum = this.currencyData.reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);

  }

  // sum: number = 0
  // calculation(data, index, element) {
  //   let qty = element.target.value;
  //   if (Number(qty) > Number(this.currencyData[index].available) )
  //   {
  //       Swal.fire('Warning!', 'Please insert Correct Quantity', 'warning')
  //       element.target.value = 0; 
  //       let currency = this.currencyData[index].currency;
  //       let available = element.target.value;
  //       let total = Number(currency) * 0;
  //       this.currencyData[index].currency = currency;
  //       this.currencyData[index].qty = "";
  //       this.currencyData[index].total = total;
  //       this.sum = this.currencyData.reduce((accumulator, object) => {
  //         return accumulator + object.total;
  //       }, 0);
  //   }else{
  //       let currency = this.currencyData[index].currency;
  //       let available = element.target.value;
  //       let total = (currency == 'Coin' ? Number(qty) : Number(currency) * Number(qty) ) ;
  //       this.currencyData[index].currency = currency;
  //       this.currencyData[index].qty = qty;
  //       this.currencyData[index].total = total;
  //       this.sum = this.currencyData.reduce((accumulator, object) => { 
  //         return accumulator + object.total;
  //     }, 0);
  //   }
  // }


  submit() {
    const formVal = this.angForm.value;
    var object =
    {
      data: this.angForm.value,
      currency: this.currencyData,
      user: JSON.parse(localStorage.getItem('user')),
      BRANCH_CODE: this.BRANCH_CODE,
      CASHIER_CODE: this.CASHIER_CODE,
    }
    if (formVal.DENOMINATION_AMT != this.sum) {
      Swal.fire('Warning!', 'Please insert Correct Amount!', 'warning')
    }
    else {
      this._services.cashInDenomination(object).subscribe(data => {
        let voucherNo = data.tranno;
        localStorage.setItem('voucherNo', voucherNo);
        this.voucherNoEmitter.emit(voucherNo);
        this.voucherNoChanged.emit(voucherNo);
        console.log("TranNo",voucherNo);        
        // Swal.fire(
        //   'Great!',
        //   'Your Form is Submitted Successfully..! Transaction Number : ${voucherMessage}',
        //   'success',

        // )
        Swal.fire({
          title: 'Great!',
          html: 'Your Form is Submitted Successfully..!' + '<br>' + "Transaction Number : " + data.tranno,
        })
          ;
        this.angForm.reset();
        this.DenominationChart = false;
        this.ngOnInit()
        for (let item of this.currencyData) {
          item.available = 0;
          item.qty = "";
          item.total = 0;
        }
      }, err => {
        console.log(err);
      })
    }
  }

  reset() {
    // this.angForm.controls['DENOMINATION_AMT'].reset()
    // this.angForm.controls['TRANSACTION_NO'].reset()
    // this.angForm.sum.reset()
    this.currencyData.forEach(entry => {
      entry.qty = '';
      entry.total = 0;
      this.sum = 0;
    })
  }
  isFormA(value) {
    if (Number(this.angForm.controls['DENOMINATION_AMT'].value) == 0) {
      this.DenominationChart = false
    }
    // if (value == 2)
    else {
      this.DenominationChart = true
    }
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }

  close() {
    this.DenominationChart = false

  }
}

