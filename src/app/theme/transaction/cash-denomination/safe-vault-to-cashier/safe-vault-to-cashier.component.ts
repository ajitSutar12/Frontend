import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import { CashDenominationService } from '../cash-denomination.service';

@Component({
  selector: 'app-safe-vault-to-cashier',
  templateUrl: './safe-vault-to-cashier.component.html',
  styleUrls: ['./safe-vault-to-cashier.component.scss']
})
export class SafeVaultToCashierComponent implements OnInit {

  angForm: FormGroup;

  //ngmodel
  cashier:any;


  total1

  DenominationChart: boolean;
  cashier_list :any;
  SelectedBranch :any;
  branch_list:any;

  values = [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'Supervisor' },
  ];

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
    { currency: 1, qty: 0, total: 0  },
  ]


  dtExportButtonOptions: any = {};
  DENOMINATION_AMT: any;
  constructor(private fb: FormBuilder, private systemParameter: SystemMasterParametersService,private _service: CashDenominationService) { }

  ngOnInit(): void {

    this.angForm = this.fb.group({
      CASHIER: ['', [Validators.required]],
      TRAN_DATE: ['', [Validators.required]],
      DENOMINATION_AMT: ['', [Validators.required]],


    })
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        TRAN_DATE: data.CURRENT_DATE
      })
    })
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
      CASHIER: formVal.CASHIER,

      DENOMINATION_AMT: formVal.DENOMINATION_AMT,
      TRAN_DATE: formVal.TRAN_DATE,

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

 

}
