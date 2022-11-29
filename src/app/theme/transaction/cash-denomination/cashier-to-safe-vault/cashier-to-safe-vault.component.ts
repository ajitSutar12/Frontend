import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import { CashDenominationService } from '../cash-denomination.service';


@Component({
  selector: 'app-cashier-to-safe-vault',
  templateUrl: './cashier-to-safe-vault.component.html',
  styleUrls: ['./cashier-to-safe-vault.component.scss']
})
export class CashierToSafeVaultComponent implements OnInit {

  angForm: FormGroup;

  //ngmodel
  Cashier

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
    { currency: 500,  qty: 0, total: 0  },
    { currency: 200,  qty: 0, total: 0  },
    { currency: 100,  qty: 0, total: 0  },
    { currency: 50,   qty: 0, total: 0  },
    { currency: 20,   qty: 0, total: 0  },
    { currency: 10,   qty: 0, total: 0  },
    { currency: 5,    qty: 0, total: 0  },
    { currency: 2,    qty: 0, total: 0  },
    { currency: 1,    qty: 0, total: 0  },
  ]


  dtExportButtonOptions: any = {};
  constructor(private fb: FormBuilder, private systemParameter: SystemMasterParametersService,private _service: CashDenominationService
    ) { }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      CASHIER :['', [Validators.required]],
      TRAN_DATE:['', [Validators.required]],
      // DENOMINATION_AMT:['', [Validators.required]],
      Branch:['',[Validators.required]]
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
    let object = this.angForm.value;
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be transfer cash to Safe Vault!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, transfer it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.cashiertosafevault(object).subscribe(data=>{
          Swal.fire(
            'Transferd!',
            'Your cash has been transfered.',
            'success'
          )
          this.angForm.reset();
          this.DenominationChart = false;
        },err=>{
          console.log(err);
        })
      }
    })
  }

  changeData(ele){
    this.DenominationChart =true;
    console.log(ele);
    this.currencyData[0].qty = ele.DENO_2000
    this.currencyData[1].qty = ele.DENO_1000
    this.currencyData[2].qty = ele.DENO_500
    this.currencyData[3].qty = ele.DENO_200
    this.currencyData[4].qty = ele.DENO_100
    this.currencyData[5].qty = ele.DENO_50
    this.currencyData[6].qty = ele.DENO_20
    this.currencyData[7].qty = ele.DENO_10
    this.currencyData[8].qty = ele.DENO_5
    this.currencyData[9].qty = ele.DENO_2
    this.currencyData[10].qty = ele.DENO_1
    // this.currencyData[0].qty

    for(let item of this.currencyData){
      item.total = Number(item.currency) * Number(item.qty);
    }
    this.sum = this.currencyData.reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);
  }
  


}
