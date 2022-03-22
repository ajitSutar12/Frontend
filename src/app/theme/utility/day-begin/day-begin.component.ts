import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';


@Component({
  selector: 'app-day-begin',
  templateUrl: './day-begin.component.html',
  styleUrls: ['./day-begin.component.scss']
})
export class DayBeginComponent implements OnInit {

  
  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  // date variales
  ngdate:any=null
  dtExportButtonOptions : any = {};

  constructor(
    private fb: FormBuilder,
    private router : Router,
    private systemParameter: SystemMasterParametersService,
    
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.getSystemParaDate()
    

    
  }
  createForm() {
    this.angForm = this.fb.group({
      DATE:[''],
    })
    
  }

  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'DATE': data.CURRENT_DATE,
      })
      
    })
  }

}
