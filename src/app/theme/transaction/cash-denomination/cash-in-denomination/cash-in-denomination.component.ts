import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { first } from 'rxjs/operators';

import { CashierUmService } from 'src/app/theme/utility/cashier-um/cashier-um.service';
import { CashDenominationService } from '../cash-denomination.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cash-in-denomination',
  templateUrl: './cash-in-denomination.component.html',
  styleUrls: ['./cash-in-denomination.component.scss']
})
export class CashInDenominationComponent implements OnInit {
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
  Scheme: unknown;
  DenominationChart: boolean;
  cashier_list: any;
  SelectedBranch: any;
  branch_list: any;


  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private _services: CashDenominationService,

    private _service: CashierUmService,private translate:TranslateService

  ) { this.translate.setDefaultLang(environment.setLang);
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())

    this.systemParameter.getFormData(1).subscribe(data => {
      this.trandate = data.CURRENT_DATE;
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
  }

  ngOnInit(): void {
    this.createForm()
    let user = JSON.parse(localStorage.getItem('user'));
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.Scheme = data;
    });
    //   this._service.getUserDetails().subscribe(data=>{

    //     this.cashier_list = data;

    //     console.log(this.cashier_list);
    // },err=>{
    //   console.log(err);  
    // })

    this._services.getOwnbranchList().subscribe(data => {
      this.branch_list = data;
      this.SelectedBranch = user.branchId;
      //  Get Cashier List
      this._services.getList({ branch_id: this.SelectedBranch }).subscribe(data => {
        this.cashier_list = data;
        console.log(data);

      })
    })
  }
  changes(event: any) {
    this.SelectedBranch = event.value;
    this.cashier = null

  }
  changeData(ele) {
    console.log(ele)
    this.currencyData[0].available = ele.DENO_2000;
    this.currencyData[1].available = ele.DENO_1000;
    this.currencyData[2].available = ele.DENO_500;
    this.currencyData[3].available = ele.DENO_200;
    this.currencyData[4].available = ele.DENO_100;
    this.currencyData[5].available = ele.DENO_50;
    this.currencyData[6].available = ele.DENO_20;
    this.currencyData[7].available = ele.DENO_10;
    this.currencyData[8].available = ele.DENO_5;
    this.currencyData[9].available = ele.DENO_2;
    this.currencyData[10].available = ele.DENO_1;
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
      user: JSON.parse(localStorage.getItem('user'))
    }
    if (formVal.DENOMINATION_AMT != this.sum) {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.insert_Correct_Amount')}`, 'warning')
    }
    else {
      this._services.cashInDenomination(object).subscribe(data => {
        Swal.fire(
          `${this.translate.instant('Swal_Msg.Great')}`,
          `${this.translate.instant('Swal_Msg.Submitted_Successfully')}`,
          'success'
        );
        this.angForm.reset();
        this.DenominationChart = false;
        this.ngOnInit()
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
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }
}

