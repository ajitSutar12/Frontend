import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import { DayBeginService } from './day-begin.service';


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
    private _service: DayBeginService
    
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

  //Day Begain Function below
  dayBegin(){
    //get login details
    let user  = localStorage.getItem('user');
    let current_date = this.ngdate;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want Day begain.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Day Begain!'
    }).then((result) => {
      if (result.isConfirmed) {
        let obj = {
          user : user,
          date : current_date
        }
        this._service.postData(obj).subscribe(data=>{
          console.log(data);
        })
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your Action is revert',
          'error'
        )
      }
    })
  }

}
