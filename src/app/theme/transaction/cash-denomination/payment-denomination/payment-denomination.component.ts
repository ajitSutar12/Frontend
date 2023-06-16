import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'; 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { environment } from 'src/environments/environment';
import { userInfo } from 'os';
import Swal from 'sweetalert2';
import { CashDenominationService } from '../cash-denomination.service';
@Component({
  selector: 'app-payment-denomination',
  templateUrl: './payment-denomination.component.html',
  styleUrls: ['./payment-denomination.component.scss']
})
export class PaymentDenominationComponent implements OnInit { 
  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  ngTransactionNo:any
  ngscheme:any
  ngaccount:any
  glDetails: any;

  denomination:any
  voucherData : any;
  token:any;
  Scheme:any;
  accountno:any;
  Particulars:any;
  showCash :boolean = false;
  totalCash :any = 0;
  cashierName : any;
  currencyData =[
    { currency: 2000, qty: "", total: 0, available: 0 },
    { currency: 1000, qty: "", total: 0, available: 0 },
    { currency: 500,  qty: "", total: 0, available: 0 },
    { currency: 200,  qty: "", total: 0, available: 0 },
    { currency: 100,  qty: "", total: 0, available: 0 },
    { currency: 50,   qty: "", total: 0, available: 0 },
    { currency: 20,   qty: "", total: 0, available: 0 },
    { currency: 10,   qty: "", total: 0, available: 0 },
    { currency: 5,    qty: "", total: 0, available: 0 },
    { currency: 2,    qty: "", total: 0, available: 0 },
    { currency: 1,    qty: "", total: 0, available: 0 },
  ]
  transactionAmt: any;
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private _service: CashDenominationService
  ) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'))
    this.createForm()
    this._service.paymentVoucher(user).subscribe(data=>{
      console.log(data);
      this.voucherData = data;
    },err=>{
      Swal.fire(err.error.error,err.error.message,'warning');
      this.angForm.reset();
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      TRANSACTION_NO:['',[Validators.required]],
      TOKEN_NO:['',[Validators.pattern]],
      SCHEME:['',[Validators.required]],
      ACCOUNT_NO:['',[Validators.required]],
      NARRATION:['',],
      DENOMINATION_AMT:['',],
      TRANSACTION_AMT:['',[Validators.required]],
      LEDGER_BAL:['',[Validators.pattern]],
      TRANSACTION_TYPE:['',[Validators.pattern]],
    })
  }

  //get voucher data
  getVoucherData(ele){
    let user = JSON.parse(localStorage.getItem('user'))

    let obj1 = {
      ACNO: ele.TRAN_ACNO

     }

     this.http.post(this.url + '/voucher/denogetledgerbalance/', obj1).subscribe((data) => {
      this.glDetails = data
      // console.log(this.glDetails);

      let ledgerBal = Math.abs( this.glDetails );
      
      // console.log(ledgerBal);



    debugger
    console.log(ele)
    this.angForm.patchValue({
      TOKEN_NO : ele.TOKEN_NO,
      SCHEME : ele.TRAN_ACNOTYPE,
      ACCOUNT_NO : ele.TRAN_ACNO,
      NARRATION : ele.NARRATION,
      TRANSACTION_AMT : ele.TRAN_AMOUNT,
      TRANSACTION_TYPE : 'Credit'
    })
    this.cashierName = user.F_NAME +' '+user.L_NAME;

  })
  }

  showCashModule(){
    this.showCash = true;
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
    const formVal = this.angForm.value;
    var object =
    {
        // data : this.angForm.value,
        TRANSACTION_NO : this.ngTransactionNo,
        currency : this.currencyData,
        user : JSON.parse(localStorage.getItem('user'))
    }
    if (formVal.DENOMINATION_AMT != this.sum) {
      Swal.fire('Warning!', 'Please insert Correct Amount!', 'warning')
    }
    else if( this.transactionAmt != this.denomination)
        {
          Swal.fire('Oops...','Please Check Transaction Amount and Denomination Amount','warning');
  
        }
    else{
      this._service.paymentDinominationInsert(object).subscribe(data=>{
        Swal.fire('Success','Cash Accept Denomincation Successfully Done','success');
          this.angForm.reset();
          this.showCash = false;
        for(let item of this.currencyData){
          item.available = 0;
          item.qty       = ""; 
          item.total     = 0;
        }
        this.sum = 0;
      },err=>{
        console.log(err);
      })
      
    }
  }
  // submit(){
  //   // if(this.angForm.valid){
  //     debugger
  //     let object = this.angForm.value;
  //     let user   = JSON.parse(localStorage.getItem('user'));
  //     object['currency'] = this.currencyData;
  //     object['user']     = user;
  //     console.log(object);
  //     if(this.sum != this.denomination){
  //       Swal.fire('Oops...','Cash Denomination not matched please check once again','warning');
  //     }
  //     else{
  //       this._service.paymentDinominationInsert(object).subscribe(data=>{
  //         Swal.fire('Success','Cash Payment Denomincation Successfully Done','success');
  //         this.angForm.reset();
  //         this.showCash = false;
  //       },err=>{
  //         console.log(err);
  //       })
  //     }
  //   // }else{
  //   //   Swal.fire('Oops...','Please fill all required field','warning');
  //   // }
  // }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  } 
}
