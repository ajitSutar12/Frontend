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
  daybeginProcess:boolean = false;
  

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
    this._service.getDayBeginDate().subscribe(data => {
      this.ngdate = data.date;
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
          user : JSON.parse(user),
          date : current_date
        }
        this.daybeginProcess = true;
        this._service.postData(obj).subscribe(data=>{
          Swal.fire("Success!",current_date+" Day Begin Successfully","success");
          this.daybeginProcess = false;
          Swal.fire({
            title: 'Need To Re-Login',
            text: "Please re-login in Application",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Re-Login!'
          }).then((result)=>{
            if(result.isConfirmed){
              let user = JSON.parse(localStorage.getItem('user'));
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              this.router.navigate(['/auth/login/simple/'])
            }else{
              let user = JSON.parse(localStorage.getItem('user'));
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              this.router.navigate(['/auth/login/simple/'])
            } 
          })
        },err=>{
            Swal.fire(
              "Error",
              err.error.message,
              "error"
            )
            this.daybeginProcess = false
        })
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your Action is revert',
          'error'
        )
        this.daybeginProcess = false

      }
    })
  }

}
