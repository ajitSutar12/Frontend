import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { userInfo } from 'os';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CashDenominationService } from '../cash-denomination.service';
import * as moment from 'moment';

@Component({
  selector: 'app-accept-d',
  templateUrl: './accept-d.component.html',
  styleUrls: ['./accept-d.component.scss']
})
export class AcceptDComponent implements OnInit {
  // display = 'none';
  // selectedMode: any; // Used to bind the selected mode in ng-select
  // tranModeList: any[] = [];
  showVoucherEntry: boolean = true;
  // isRadioVisible = true;
  formSubmitted = false;
  //api
  url = environment.base_url;
  // Formgroup variable
  angForm: FormGroup;
  ngTransactionNo: any
  ngscheme: any
  ngaccount: any
  denomination: any
  transactionAmt
  voucherData: any;
  token: any;
  Scheme: any;
  accountno: any;
  Particulars: any;
  showCash: boolean = false;
  totalCash: any = 0;
  cashierName: any;


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

  glDetails: any;
  cashier_list: any;
  totalSum: any;
  Math: any;
  name
  new_casher_list: any;
  router: any;
  branchCODE: any;
  submitCustomer: any;
  DayOpBal: number;
  selectedCode: string;
  TranModeTransfer: any;
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private _service: CashDenominationService
  ) {
    let user = JSON.parse(localStorage.getItem('user'))
    this.name = user.F_NAME + '  ' + user.L_NAME
    // this.tranModeList = this.filteredTranModeCash;
  }

  ngOnInit(): void {
    // debugger
    let user = JSON.parse(localStorage.getItem('user'))
    this.createForm()
    this.tranNo()
  }

  tranNo() {
    let user = JSON.parse(localStorage.getItem('user'))
    this._service.acceptVoucher(user).subscribe(data => {
      console.log(data);
      this.voucherData = data;
    }, err => {
      Swal.fire(err.error.error, err.error.message, 'warning');
      this.angForm.reset();
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      TRANSACTION_NO: ['', [Validators.required]],
      TOKEN_NO: ['', [Validators.pattern]],
      SCHEME: ['', [Validators.required]],
      ACCOUNT_NO: ['', [Validators.required]],
      NARRATION: ['',],
      DENOMINATION_AMT: ['',],
      TRANSACTION_AMT: ['', [Validators.required]],
      LEDGER_BAL: ['', [Validators.pattern]],
      TRANSACTION_TYPE: ['', [Validators.pattern]],
    })
  }

  //get voucher data
  getVoucherData(ele) {
    let user = JSON.parse(localStorage.getItem('user'))
    let formVal = this.angForm.value

    let obj1 = {
      ACNO: ele.TRAN_ACNO

    }

    this.http.post(this.url + '/voucher/denogetledgerbalance/', obj1).subscribe((data) => {
      this.glDetails = data
      // console.log(this.glDetails);

      let ledgerBal = Math.abs(this.glDetails);

      // console.log(ledgerBal);



      console.log(ele)
      this.angForm.patchValue({
        TOKEN_NO: ele.TOKEN_NO,
        // SCHEME: ele.TRAN_ACTYPE + ' ' + ele.TRAN_ACNOTYPE,
        SCHEME: ele.TRAN_ACNOTYPE,
        ACCOUNT_NO: ele.TRAN_ACNO,
        NARRATION: ele.NARRATION,
        DENOMINATION_AMT: ele.TRAN_AMOUNT,
        TRANSACTION_TYPE: 'Credit',
        LEDGER_BAL: ledgerBal,
        // DENOMINATION_AMT :ele.DENOMINATION_AMT,

      })
      this.cashierName = user.F_NAME + ' ' + user.L_NAME;


      //  Get Cashier List
      this._service.getList({ branch_id: user.branchId }).subscribe(data => {
        this.cashier_list = data;
        console.log(data);

        // cash in Denomination Table
        const result = this.cashier_list.find((CASHIER_CODE) => CASHIER_CODE.CASHIER_CODE == user.id);
        if (result) {
          console.log('Result:', result);
          this.changeData(result);
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

  showCashModule() {
    this.showCash = true;
  }
  sum: number = 0
  calculation(data, index, element) {

    // console.log(element.target.value); 
    let currency = this.currencyData[index].currency;
    let qty = element.target.value;
    let total = (currency == 'Coin' ? Number(qty) : Number(currency) * Number(qty));
    this.currencyData[index].currency = currency;
    this.currencyData[index].qty = qty;
    this.currencyData[index].total = total;

    this.sum = this.currencyData.reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);

    //for Available Balance
    // if (Number(qty) > Number(this.currencyData[index].available) )
    // {
    //     Swal.fire('Warning!', 'Please insert Correct Quantity', 'warning')
    //     element.target.value = 0; 
    //     let currency = this.currencyData[index].currency;
    //     let available = element.target.value;
    //     let total = currency * 0;
    //     this.currencyData[index].currency = currency;
    //     // this.currencyData[index].qty = 0;
    //     this.currencyData[index].total = total;
    //     this.sum = this.currencyData.reduce((accumulator, object) => {
    //       return accumulator + object.total;
    //     }, 0);
    // }else{
    //     let currency = this.currencyData[index].currency;
    //     let available = element.target.value;
    //     let total = currency * qty;
    //     this.currencyData[index].currency = currency;
    //     this.currencyData[index].qty = qty;
    //     this.currencyData[index].total = total;
    //     this.sum = this.currencyData.reduce((accumulator, object) => {
    //       return accumulator + object.total;
    //   }, 0);
    // }
  }

  //for available count
  // calculation(data, index, element) {
  //     let qty = element.target.value;
  //     if (Number(qty) > Number(this.currencyData[index].available) )
  //     {
  //         Swal.fire('Warning!', 'Please insert Correct Quantity', 'warning')
  //         element.target.value = 0; 
  //         let currency = this.currencyData[index].currency;
  //         let available = element.target.value;
  //         let total = currency * 0;
  //         this.currencyData[index].currency = currency;
  //         this.currencyData[index].qty = 0;
  //         this.currencyData[index].total = total;
  //         this.sum = this.currencyData.reduce((accumulator, object) => {
  //           return accumulator + object.total;
  //         }, 0);
  //     }else{
  //         let currency = this.currencyData[index].currency;
  //         let available = element.target.value;
  //         let total = currency * qty;
  //         this.currencyData[index].currency = currency;
  //         this.currencyData[index].qty = qty;
  //         this.currencyData[index].total = total;
  //         this.sum = this.currencyData.reduce((accumulator, object) => {
  //           return accumulator + object.total;
  //       }, 0);
  //     }
  //   }
  // submit(){

  //   // if(this.angForm.valid){
  //     let object = this.angForm.value;
  //     let user   = JSON.parse(localStorage.getItem('user'));
  //     object['currency'] = this.currencyData;
  //     object['user']     = user;
  //     console.log(object);
  //     if(this.sum != this.denomination ){
  //       Swal.fire('Oops...','Cash Denomination not matched please check once again','warning');

  //     }
  //     else if( this.transactionAmt != this.denomination)
  //     {
  //       Swal.fire('Oops...','Please Check Transaction Amount and Denomination Amount','warning');

  //     }
  //     else{
  //       this._service.acceptDinominationInsert(object).subscribe(data=>{
  //         Swal.fire('Success','Cash Accept Denomincation Successfully Done','success');
  //         this.angForm.reset();
  //         this.showCash = false;
  //         this.angForm.reset();

  //       },err=>{
  //         console.log(err);
  //       })
  //     } 

  //   // }else{
  //   //   Swal.fire('Oops...','Please fill all required field','warning');
  //   // }
  // }

  changeData(user) {
    console.log(user)
    this.currencyData[0].available = user.deno_2000;
    this.currencyData[1].available = user.deno_1000;
    this.currencyData[2].available = user.DENO_500;
    this.currencyData[3].available = user.DENO_200;
    this.currencyData[4].available = user.DENO_100;
    this.currencyData[5].available = user.deno_50;
    this.currencyData[6].available = user.deno_20;
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

    this.totalSum = 0;

    for (let i = 0; i < this.currencyData.length; i++) {
      let totalCal = Math.abs(Number(this.currencyData[i].currency)) || 0;
      let available = Math.abs(Number(this.currencyData[i].available)) || 0;
      let da1 = totalCal * available;
      this.currencyData[i]['totalcurrency'] = da1;
      this.totalSum += da1;
    }
  }

  cashInHand(user) {
    this.showCash = true;

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
  submit() {
    const formVal = this.angForm.value;
    var object =
    {

      TRANSACTION_NO: this.ngTransactionNo,
      currency: this.currencyData,
      user: JSON.parse(localStorage.getItem('user')),
      DENOMINATION_AMT: this.sum
    }
    if (formVal.DENOMINATION_AMT != this.sum) {
      Swal.fire('Warning!', 'Please insert Correct Amount!', 'warning')
    }
    // else if (Number(this.transactionAmt) != Number(this.denomination)) {
    //   Swal.fire('Oops...', 'Please Check Transaction Amount and Denomination Amount', 'warning');

    // }
    else {
      this._service.acceptDinominationInsert(object).subscribe(data => {
        Swal.fire('Success', 'Cash Accept Denomincation Successfully Done', 'success');
        this.angForm.reset();
        this.showCash = false;
        for (let item of this.currencyData) {
          item.available = 0;
          item.qty = "";
          item.total = 0;
        }
        this.sum = 0;
        this.tranNo()
      }, err => {
        console.log(err);
      })

    }
    console.log("Forloop", this.currencyData);
  }

  cancel() {
    this.currencyData.forEach(entry => {
      entry.qty = '';
      entry.total = 0;
      this.sum = 0;
    })
    console.log("foreach", this.currencyData);
  }

  refreshdata() {
    this.angForm.controls['TRANSACTION_NO'].reset()
    this.angForm.controls['TOKEN_NO'].reset()
    this.angForm.controls['SCHEME'].reset()
    this.angForm.controls['ACCOUNT_NO'].reset()
    this.angForm.controls['NARRATION'].reset()
    this.angForm.controls['DENOMINATION_AMT'].reset()
    this.angForm.controls['TRANSACTION_AMT'].reset()
    this.angForm.controls['LEDGER_BAL'].reset()
    this.angForm.controls['TRANSACTION_TYPE'].reset()
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }
  close() {
    this.showCash = false;
  }
  
  istranModeShow = false
  openModal() {
    this.display = "block";
    this.isRadioVisible = false;
    this.istranModeShow = true

    // this.filterTranMode(); 
    this.tranModeList = this.TranModeTransfer.filter(mode => [1, 2].includes(mode.id));
  }
  onCloseHandled() {
    this.display = "none";
    this.isRadioVisible = true;
  }

  display: string = 'none';  
  isRadioVisible: boolean = false;  
  selectedMode: any;
  tranModeList: any[];


   
  }


