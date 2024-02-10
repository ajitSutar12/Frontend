import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,    private systemParameter: SystemMasterParametersService,

  ) 
  {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate._d
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
