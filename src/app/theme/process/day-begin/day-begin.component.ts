import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import { DayBeginService } from './day-begin.service';
import { AuthService } from '../../../theme/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

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
  ngdate: any = null
  dtExportButtonOptions: any = {};
  daybeginProcess: boolean = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private systemParameter: SystemMasterParametersService,
    private _service: DayBeginService,
    private _authService: AuthService,private translate:TranslateService

  ) { this.translate.setDefaultLang(environment.setLang);}

  ngOnInit(): void {
    this.createForm()
    this.getSystemParaDate()



  }
  createForm() {
    this.angForm = this.fb.group({
      DATE: [''],
    })

  }

  //get sys para current date
  getSystemParaDate() {
    this._service.getDayBeginDate().subscribe(data => {
      this.ngdate = data.date;
    })
  }

  //Day Begain Function below
  dayBegin() {
    //get login details
    let user = localStorage.getItem('user');
    let current_date = this.ngdate;

    Swal.fire({
      title: `${this.translate.instant('Swal_Msg.Are_you_sure')}`,
      text: "Do you want Day begain.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Day Begain!'
    }).then((result) => {
      if (result.isConfirmed) {
        let obj = {
          user: JSON.parse(user),
          date: current_date
        }
        this.daybeginProcess = true;
        this._service.postData(obj).subscribe(data => {
          Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, current_date + `${this.translate.instant('Swal_Msg.Begin_Successfully')}`, "success");
          this.daybeginProcess = false;
          Swal.fire({
            title: `${this.translate.instant('Swal_Msg.Need_To')}`,
            text: `${this.translate.instant('Swal_Msg.Please_relogin')}`,
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Re-Login!'
          }).then((result) => {
            if (result.isConfirmed) {
              // let user = JSON.parse(localStorage.getItem('user'));
              // localStorage.removeItem('token');
              // localStorage.removeItem('user');
              // this.router.navigate(['/auth/login/simple/'])
              this.logout()

            } else {
              // let user = JSON.parse(localStorage.getItem('user'));
              // localStorage.removeItem('token');
              // localStorage.removeItem('user');
              // this.router.navigate(['/auth/login/simple/'])
              this.logout()
            }
          })
        }, err => {
          Swal.fire(
            `${this.translate.instant('Swal_Msg.Error')}`,
            err.error.message,
            "error"
          )
          this.daybeginProcess = false
        })
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          `${this.translate.instant('Swal_Msg.Cancel')}`, `${this.translate.instant('Swal_Msg.C_Msg')}`,
          'error'
        )
        this.daybeginProcess = false

      }
    })
  }

  logout() {
    let user = JSON.parse(localStorage.getItem('user'));
    this._authService.logout(user.id).subscribe(data => { })
    let userData: any = localStorage.getItem('user');
    let result = JSON.parse(userData);
    let obj = {
      USERID: result.id,
      BRANCH_CODE: result.branchId,
      REMARK: null
    }
    this._authService.LOGOFFHISTORY(obj).subscribe(data => { })
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login/simple/'])
  }
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }

}
