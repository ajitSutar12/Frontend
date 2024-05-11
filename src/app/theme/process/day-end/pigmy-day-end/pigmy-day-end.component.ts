import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DayEndService } from '../day-end.service';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
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
  setLang:any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private systemParameter: SystemMasterParametersService,
    private _service: DayEndService,
    private http: HttpClient,private translate:TranslateService

  ) { this.systemParameter.getFormData(1).subscribe(data => {
    
    this.setLang = data.SET_LANGUAGE
    this.translate.setDefaultLang(this.setLang);
  })}


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
    let obj = {
      branch: this.loginDetails.branchId
    }
    this.http.post(this.url + '/voucher/EndPigmyDayend/', obj).subscribe(data => {
      this.ngdate = data['PIGMY_CURRENT_DATE'];
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
            `${this.translate.instant('Swal_Msg.Pigmy_Day_End_Successfuly')}`,
            '',
            'success'
          )
          this.ngOnInit()
        }, err => {
          console.log(err);
          Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`,err.error.message,'warning');
      })
      }
    })
  }
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }
}
