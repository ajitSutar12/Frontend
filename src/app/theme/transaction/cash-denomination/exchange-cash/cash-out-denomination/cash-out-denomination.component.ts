import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CashDenominationService } from '../../cash-denomination.service';
// import { CashDenominationService } from '../cash-denomination.service';

@Component({
  selector: 'app-cash-out-denomination',
  templateUrl: './cash-out-denomination.component.html',
  styleUrls: ['./cash-out-denomination.component.scss']
})
export class CashOutDenominationComponent implements OnInit {
  @Input() voucherNoEmitter: any;
  @Output() voucherNoChanged = new EventEmitter<string>();

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  ngcashier: any = null

  // date variables
  maxDate: any;
  minDate: Date;
  ngtrandate: any = null
  trandate
  denoamt
  cashier: any;
  DenominationChart: boolean;
  cashier_list: any;
  SelectedBranch: any;
  branch_list: any;
  currencyData = [
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
  name: string;
  totalSum: number;
  new_casher_list: any;

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig, private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private _service: CashDenominationService
  ) {

    this.maxDate = new Date();
    this.minDate = new Date();

    this.systemParameter.getFormData(1).subscribe(data => {
      this.trandate = data.CURRENT_DATE;
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
    let user = JSON.parse(localStorage.getItem('user'))
    this.name = user.F_NAME + '   ' + user.L_NAME
  }

  ngOnInit(): void {
    this.createForm()
    const storedVoucherNo = localStorage.getItem('voucherNo');
    if (storedVoucherNo) {
      this.angForm.patchValue({
          TRANSACTION_NO: storedVoucherNo // Patch the value to the form control
      });
  }
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.Scheme = data;
    });
    let user = JSON.parse(localStorage.getItem('user'));

    this._service.getOwnbranchList().subscribe(data => {
      this.branch_list = data;
      this.SelectedBranch = user.branchId;
      //Get Cashier List
      this._service.getList({ branch_id: this.SelectedBranch }).subscribe(data => {
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
      })
    })

  }

  BRANCH_CODE
  CASHIER_CODE

  handleTransactionNumber(voucherNo: string) {
    console.log('Received Transaction Number:', voucherNo);
    // You can now pass this number to another component or service as needed
  }
  
  createForm() {
    this.angForm = this.fb.group({


      TRAN_DATE: ['', [Validators.required]],
      CASHIER: ['', [Validators.required]],
      DENOMINATION_AMT: ['', [Validators.pattern]],
      TRANSACTION_NO: ['', [Validators.pattern]],
      OPEN_CASH: ['', [Validators.pattern]],
      TOTAL_AMT: ['', [Validators.pattern]],
      TOTAL_WITHDRAWAL: ['', [Validators.pattern]],
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


  // calculation(data, index, element) {
  //   let qty = element.target.value;
  //   if (Number(qty) > Number(this.currencyData[index].available)) {
  //     Swal.fire('Warning!', 'Please insert Correct Quantity', 'warning')
  //     element.target.value = 0;
  //     let currency = this.currencyData[index].currency;
  //     let available = element.target.value;
  //     let total = Number(currency) * 0;
  //     this.currencyData[index].currency = currency;
  //     this.currencyData[index].qty = "";
  //     this.currencyData[index].total = total;
  //     this.sum = this.currencyData.reduce((accumulator, object) => {
  //       return accumulator + object.total;
  //     }, 0);
  //   } else {
  //     let currency = this.currencyData[index].currency;
  //     let available = element.target.value;
  //     let total = (currency == 'Coin' ? Number(qty) : Number(currency) * Number(qty));
  //     this.currencyData[index].currency = currency;
  //     this.currencyData[index].qty = qty;
  //     this.currencyData[index].total = total;
  //     this.sum = this.currencyData.reduce((accumulator, object) => {
  //       return accumulator + object.total;
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
    } else {
      this._service.cashOutDenomination(object).subscribe(data => {
        Swal.fire(
          'Good job!',
          'Your Form is Submitted Successfully..!',
          'success'
        );
        this.angForm.reset();
        for (let item of this.currencyData) {
          item.available = 0;
          item.qty = "";
          item.total = 0;
        }
        this.sum = 0;
        this.ngOnInit()
      }, err => {
        console.log(err);
      })

    }
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

  changeData(ele) {
    console.log(ele)
    this.currencyData[0].available = ele.deno_2000;
    this.currencyData[1].available = ele.deno_1000;
    this.currencyData[2].available = ele.DENO_500;
    this.currencyData[3].available = ele.DENO_200;
    this.currencyData[4].available = ele.DENO_100;
    this.currencyData[5].available = ele.deno_50;
    this.currencyData[6].available = ele.deno_20;
    this.currencyData[7].available = ele.DENO_10;
    this.currencyData[8].available = ele.DENO_5;
    this.currencyData[9].available = ele.DENO_2;
    this.currencyData[10].available = ele.DENO_1;
    this.currencyData[11].available = ele.DENO_COINS_AMT;

    console.log("Changedata Out Denomination", this.currencyData);

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
  reset() {
    // this.angForm.controls['DENOMINATION_AMT'].reset()
    // this.angForm.controls['TRANSACTION_NO'].reset()
    this.currencyData.forEach(entry => {
      entry.qty = '';
      entry.total = 0;
      this.sum = 0;
    })
  }
  close() {
    this.DenominationChart = false

  }
}
