import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-locker-view',
  templateUrl: './locker-view.component.html',
  styleUrls: ['./locker-view.component.scss']
})
export class LockerViewComponent implements OnInit {
  maxDate: any;
  minDate: any;
  angForm: FormGroup;
  ngLockerSize
  setLang:any;
  constructor(
    private fb: FormBuilder,
     private systemParameter: SystemMasterParametersService,
     private translate:TranslateService,
  ) 
  {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate._d
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
   }

  ngOnInit(): void {
    this.createForm()

  }

  createForm(){
    this.angForm = this.fb.group({
      LOCKER_SIZE: ['', [Validators.required,]],

    })
  }
}
