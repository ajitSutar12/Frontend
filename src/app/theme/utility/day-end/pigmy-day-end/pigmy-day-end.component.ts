import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DayEndService } from '../day-end.service';
import { SystemMasterParametersService } from '../../scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pigmy-day-end',
  templateUrl: './pigmy-day-end.component.html',
  styleUrls: ['./pigmy-day-end.component.scss']
})
export class PigmyDayEndComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  // date variales
  ngdate: any = null
  loginDetails: any;
  dtExportButtonOptions: any = {};
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private systemParameter: SystemMasterParametersService,
    private _service: DayEndService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.loginDetails = JSON.parse(localStorage.getItem('user'));
    this.getSystemParaDate()
  }

  createForm() {
    this.angForm = this.fb.group({
      DATE: [''],
    })

  }

  //get sys para current date
  getSystemParaDate() {
<<<<<<< Updated upstream
    let obj = {
      branch: this.loginDetails.branchId
    }
    this.http.post(this.url + '/voucher/EndPigmyDayend/', obj).subscribe(data => {
      this.ngdate = data['PIGMY_CURRENT_DATE'];
=======
    this.systemParameter.getFormData(1).subscribe(data => {
      this.ngdate = data.PIGMY_CURRENT_DATE;
>>>>>>> Stashed changes
    })
  }

  //pigmy Day End
  pigmyDayEnd() {
    // debugger
    let obj = {
      branch_id: this.loginDetails.branchId,
      date: this.ngdate
    }
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to Pigmy Day End",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Revert it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.pigmyDayEnd(obj).subscribe(data => {
          Swal.fire(
            'Pigmy Day End Successfuly!',
            '',
            'success'
          )
          this.ngOnInit()
        }, err => {
          console.log(err);
<<<<<<< Updated upstream
        })

=======
          Swal.fire('Oops..',err.error.message,'warning');
      })
>>>>>>> Stashed changes
      }
    })
  }
}
