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
      { currency: 2000, qty: 0, total: 0 },
      { currency: 1000, qty: 0, total: 0 },
      { currency: 500, qty: 0, total: 0 },
      { currency: 200, qty: 0, total: 0 },
      { currency: 100, qty: 0, total: 0 },
      { currency: 50, qty: 0, total: 0 },
      { currency: 20, qty: 0, total: 0 },
      { currency: 10, qty: 0, total: 0 },
      { currency: 5, qty: 0, total: 0 },
      { currency: 1, qty: 0, total: 0 },
    ]
  Scheme: unknown;
  DenominationChart: boolean;



  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,


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
  }

  ngOnInit(): void {
    this.createForm()

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.Scheme = data;
    });
  }

  createForm() {
    this.angForm = this.fb.group({

      DENOMINATION_AMT: ['',],
      TRANSACTION_NO: ['', [ Validators.pattern]],
      TRAN_DATE: ['', [Validators.required]],
      CASHIER: ['', [Validators.required]],
    })
 
  }


  sum: number = 0
  calculation(data, index, element) {
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
      BRANCH_CODE: formVal.BRANCH_CODE,

      DENOMINATION_AMT: formVal.DENOMINATION_AMT,
      TRANSACTION_NO: formVal.TRANSACTION_NO,

    }


    console.log(object);

    if (formVal.DENOMINATION_AMT != this.sum) {

      Swal.fire('Warning!', 'Please insert Correct Amount!', 'warning')
    }
    
    else {
      Swal.fire(
        'Good job!',
        'Your Form is Submitted Successfully..!',
        'success'
      );
    }

 
  }

  reset() {
    this.angForm.controls['DENOMINATION_AMT'].reset()
    this.angForm.controls['TRANSACTION_NO'].reset()
    // this.angForm.sum.reset()
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
}

