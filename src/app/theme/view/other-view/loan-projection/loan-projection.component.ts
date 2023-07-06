import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs';
import { InstallmentMethodService } from 'src/app/shared/dropdownService/installment-method.service';
import { RepayModeService } from 'src/app/shared/dropdownService/repay-mode.service';

import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { OtherViewService } from '../other-view.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-loan-projection',
  templateUrl: './loan-projection.component.html',
  styleUrls: ['./loan-projection.component.scss']
})
export class LoanProjectionComponent implements OnInit {
  url = environment.base_url;

  angForm: FormGroup;
  repay: string
  resultData : any;

  installmentType: string
  installment: Array<IOption> = this.installmentMethodService.getCharacters();

  repayModeOption1: Array<IOption> = this.repayModeService.getCharacters();
  repayModeOption: Array<IOption> = this.repayModeService.getCharacters();
  maxDate: any;
  minDate: Date;
  resolutionDate: Date;

  Resolution_date
  debitcredit
  posting
  values1 = [
    { id: 1, name: 'Monthly' },
    { id: 2, name: 'Yearly' },
  ];
  values2 = [
    { id: 1, name: 'Monthly' },
    { id: 2, name: 'Yearly' },
  ];
  TDS_RATE: number;
  todate: any;

  constructor(
    private repayModeService: RepayModeService, 
    private installmentMethodService: InstallmentMethodService, 
    private fb: FormBuilder,
    private _services: OtherViewService ,
    private systemParameter: SystemMasterParametersService,
    ) {
       this.resolutionDate =new Date();
     }


  ngOnInit(): void {
    this.createForm()
    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      this.Resolution_date = data.CURRENT_DATE

      
    })
  }
  createForm() {
    this.angForm = this.fb.group({
      LOAN: ['', [Validators.required]],
      PERIOD: ['', [Validators.required]],
      DEBIT_CREDIT: ['', [Validators.required]],
      INSTALLMENTTYPE: ['', [Validators.required]],
      POSTINGMETHOD: ['', [Validators.required]],
      INTERESTR: ['', [Validators.required]],
      RDATE: ['', [Validators.required]],
      INSTALLMENTS: ['', [Validators.required]],
      INSTALLMENT_METHOD: ['', [Validators.required]],
      AC_REPAYMODE: ['', [Validators.required]],
      RESOLUTION_DATE: ['', [Validators.required]],
      TDS_RATE: ["", [Validators.pattern]],
    })
  }

  decimalAllContent($event) {
    var t = $event.target.value;
    $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    this.angForm.patchValue({
      LOAN: $event.target.value
    })
  }

  checkmargin(ele: any) {
    let obj = this.angForm.value;
    obj['user'] = JSON.parse(localStorage.getItem('user'));
    //check  if given value  is below 100
    if (ele <= 50) {
      this._services.getInstallment(obj).subscribe(data=>{
        console.log(data);
        this.angForm.patchValue({
          INSTALLMENTS : data + ".00"
        })
      })
    } else {
      Swal.fire("Invalid Input", "Please insert values below 50", "error");
      this.angForm.patchValue({
        TDS_RATE: 0
      })
    }
  }

  Process(){
    let obj = this.angForm.value;
    obj['user'] = JSON.parse(localStorage.getItem('user'));
    this._services.loanProjection(obj).subscribe(data=>{
      console.log(data);
      this.resultData = data.result;
    })
  }
  close(){
    this.ngOnInit();
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }
  getpercentagePoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value) + "%";
    else
      event.target.value = 0
  }
}

