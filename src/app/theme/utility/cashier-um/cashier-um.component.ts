import { Component, OnInit } from '@angular/core';
import { CashierUmService } from './cashier-um.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-cashier-um',
  templateUrl: './cashier-um.component.html',
  styleUrls: ['./cashier-um.component.scss']
})
export class CashierUMComponent implements OnInit {
  dtExportButtonOptions: any = {};
  userid: any;
  userData: any;
  angForm: FormGroup;
  checkFlag: boolean = true;
  setLang: string;

  constructor(private _service: CashierUmService, private fb: FormBuilder, private systemParameter: SystemMasterParametersService,
    private translate: TranslateService) {
      this.systemParameter.getFormData(1).subscribe(data => {

        this.setLang = data.SET_LANGUAGE
        this.translate.setDefaultLang(this.setLang);
      })
  }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      flag: [1, [Validators.required]],
      safevault: ["", [Validators.required]],
      user: ["", [Validators.required]],
      teller: ["", [Validators.required]],
    })

    this.angForm.controls.flag.setValue('1');

    this._service.getUserDetails().subscribe(data => {
      this.userData = data;
      console.log(this.userData);
    }, err => {
      console.log(err);
    })

    //check safe vault data exist or not
    this._service.getCashierData().subscribe(data => {
      console.log('list', data);
      for (let item of data) {
        if (item.CASHIER_CODE == "SAFE VALUT") {
          this.checkFlag = true;
        }
      }
    }, err => {
      console.log(err);
    })
  }


  submit() {
    console.log(this.angForm.value, this.angForm.value);
    if (this.checkFlag) {
      this.angForm.patchValue({
        safevault: false
      })
    }
    if (this.angForm.valid) {
      let obj = this.angForm.value;
      this._service.createCashier(obj).subscribe(data => {
        console.log(data);
        Swal.fire('Success', 'Cashier created successfully', 'success');
        this.angForm.reset();
        this.angForm.controls.flag.setValue('1');
      }, err => {
        console.log(err);
      })
    } else {
      Swal.fire('Oops...', 'Please insert required data field and processed', 'warning')
    }
  }

}
