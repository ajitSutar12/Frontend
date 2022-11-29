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
  Cashier:any
  DenominationChart: boolean;
  SelectedBranch:any

  // Formgroup variable
  angForm: FormGroup;
  ngTransactionNo: any = null

  // date variables
  branch_list:any;
  cashier_list:any;

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


  no1: any = 0;
  nonotes: any = 0;
  total1: any = 0;
  ans: string;

  
  constructor(private fb: FormBuilder, 
    private http: HttpClient,
    private config: NgSelectConfig,    
    private systemParameter: SystemMasterParametersService,
    private _services: CashDenominationService) {
  
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    this.angForm = this.fb.group({
        DENOMINATION_AMT: ['',[Validators.required,Validators.pattern]],
        TRANSACTION_NO: ['', [Validators.required, Validators.pattern]],
        TRAN_DATE: ['', [Validators.required]],
        cashier_data: ['', [Validators.required]],
        no1: ['', [Validators.required]],
        NONOTES: ['', [Validators.required]],
        TOTAL1: ['', [Validators.required]],
        Branch:['',[Validators.required]]
    })

    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        TRAN_DATE: data.CURRENT_DATE
      })
    })

    //Get Brach Details 
    this._services.getOwnbranchList().subscribe(data=>{
      this.branch_list = data;
      this.SelectedBranch = user.branchId;
       //Get Cashier List
      this._services.getList({branch_id : this.SelectedBranch}).subscribe(data=>{
        this.cashier_list = data;
      })
    })
  }


  getNotes(name, value, id) {
    let ans=Number(name)* Number(value)
    document.getElementById("anstwoThou").innerHTML=this.ans;
    console.log(ans)

  }

  decimalAllContent($event) {
      var t = $event.target.value;
      $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
      this.angForm.patchValue({
        DENOMINATION_AMT:$event.target.value
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
    var object ={
      CASHIER: formVal.cashier_data,
      DENOMINATION_AMT: formVal.DENOMINATION_AMT,
      TRAN_DATE: formVal.TRAN_DATE,
      currency :this.currencyData,
      branch : formVal.Branch
    }


    if (Number(formVal.DENOMINATION_AMT) == this.sum) {
      this._services.initialize(object).subscribe(data=>{
        Swal.fire(
          'Good job!',
          'Your Form is Submitted Successfully..!',
          'success'
        );
        this.DenominationChart = false
        this.angForm.reset()
      })
    }else {
      Swal.fire('Warning!', 'Please insert Correct Amount!', 'warning')
    }
  }
}
