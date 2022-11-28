import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { environment } from 'src/environments/environment';
import { CashDenominationService } from '../cash-denomination.service';

@Component({
  selector: 'app-accept-d',
  templateUrl: './accept-d.component.html',
  styleUrls: ['./accept-d.component.scss']
})
export class AcceptDComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  ngTransactionNo:any
  ngscheme:any
  ngaccount:any

  denomination:any
  voucherData : any;
  token:any;
  Scheme:any;
  accountno:any;
  Particulars:any;
  showCash :boolean = false;
  totalCash :any = 0;
  currencyData =
  [
    { currency: 2000, qty: 0, total: 0 },
    { currency: 1000, qty: 0, total: 0 },
    { currency: 500, qty: 0, total: 0  },
    { currency: 200, qty: 0, total: 0  },
    { currency: 100, qty: 0, total: 0  },
    { currency: 50, qty: 0, total: 0  },
    { currency: 20, qty: 0, total: 0  },
    { currency: 10, qty: 0, total: 0  },
    { currency: 5, qty: 0, total: 0  },
    { currency: 2, qty: 0, total: 0  },
    { currency: 1, qty: 0, total: 0  },
  ]
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private _service: CashDenominationService
  ) { }

  ngOnInit(): void {
    this.createForm()
    this._service.acceptVoucher().subscribe(data=>{
      console.log(data);
      this.voucherData = data;
    },err=>{

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
    debugger
    console.log(ele)
    this.angForm.patchValue({
      TOKEN_NO : ele.TOKEN_NO,
      SCHEME : ele.TRAN_ACNOTYPE,
      ACCOUNT_NO : ele.TRAN_ACNO,
      NARRATION : ele.NARRATION,
      TRANSACTION_AMT : ele.TRAN_AMOUNT,
      TRANSACTION_TYPE : 'Credit Type'
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

  submit(){
    let object = this.angForm.value;
    object['currency'] = this.currencyData;
    console.log(object);
  }
}
