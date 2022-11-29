import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CashDenominationService } from '../cash-denomination.service';

@Component({
  selector: 'app-cash-out-denomination',
  templateUrl: './cash-out-denomination.component.html',
  styleUrls: ['./cash-out-denomination.component.scss']
})
export class CashOutDenominationComponent implements OnInit {

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
  cashier:any;
  DenominationChart: boolean;
  cashier_list :any;
  SelectedBranch :any;
  branch_list:any;
  currencyData =[
    { currency: 2000, qty: 0, total: 0, available: 0 },
    { currency: 1000, qty: 0, total: 0, available: 0 },
    { currency: 500,  qty: 0, total: 0, available: 0 },
    { currency: 200,  qty: 0, total: 0, available: 0 },
    { currency: 100,  qty: 0, total: 0, available: 0 },
    { currency: 50,   qty: 0, total: 0, available: 0 },
    { currency: 20,   qty: 0, total: 0, available: 0 },
    { currency: 10,   qty: 0, total: 0, available: 0 },
    { currency: 5,    qty: 0, total: 0, available: 0 },
    { currency: 2,    qty: 0, total: 0, available: 0 },
    { currency: 1,    qty: 0, total: 0, available: 0 },
  ]
  Scheme: unknown;

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
  }

  ngOnInit(): void {
    this.createForm()

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.Scheme = data;
    });
    let user = JSON.parse(localStorage.getItem('user'));

    this._service.getOwnbranchList().subscribe(data=>{
      this.branch_list = data;
      this.SelectedBranch = user.branchId;
       //Get Cashier List
      this._service.getList({branch_id : this.SelectedBranch}).subscribe(data=>{
        this.cashier_list = data;
      })
    })

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
      Branch:['',[Validators.required]]

    })

  }

  sum: number = 0
  calculation(data, index, element) {
    let qty = element.target.value;
    if (Number(qty) > Number(this.currencyData[index].available) )
    {
        Swal.fire('Warning!', 'Please insert Correct Quantity', 'warning')
        element.target.value = 0; 
        let currency = this.currencyData[index].currency;
        let available = element.target.value;
        let total = currency * 0;
        this.currencyData[index].currency = currency;
        this.currencyData[index].qty = 0;
        this.currencyData[index].total = total;
        this.sum = this.currencyData.reduce((accumulator, object) => {
          return accumulator + object.total;
        }, 0);
    }else{
        let currency = this.currencyData[index].currency;
        let available = element.target.value;
        let total = currency * qty;
        this.currencyData[index].currency = currency;
        this.currencyData[index].qty = qty;
        this.currencyData[index].total = total;
        this.sum = this.currencyData.reduce((accumulator, object) => {
          return accumulator + object.total;
      }, 0);
    }
  }

  submit() {
    const formVal = this.angForm.value;
    var object =
    {
        data : this.angForm.value,
        currency : this.currencyData,
        user : JSON.parse(localStorage.getItem('user'))
    }
    if (formVal.DENOMINATION_AMT != this.sum) {
      Swal.fire('Warning!', 'Please insert Correct Amount!', 'warning')
    }else{
      this._service.cashOutDenomination(object).subscribe(data=>{
        Swal.fire(
          'Good job!',
          'Your Form is Submitted Successfully..!',
          'success'
        );
        this.angForm.reset();
        for(let item of this.currencyData){
          item.available = 0;
          item.qty       = 0;
          item.total     = 0;
        }
        this.sum = 0;
      },err=>{
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

  changeData(ele){     
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
}
