import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth.service';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment'


@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {

  isInvalidNumber: boolean = false;
  isInvalidPassword: boolean = false;
  mobileno: string;
  password: string;
  passType: string = 'password';
  resetPassword: boolean = false;
  forgetPassword: boolean = true;
  url = environment.base_url
  bankname = null
  currentDate
  maxAttempts = 3
  isUserBlocked: boolean = false;
  constructor(private router: Router, private http: HttpClient, private _authService: AuthService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');

    this.http.get(this.url + '/system-master-parameters/').subscribe((data: any) => {
      this.bankname = data[0].BANK_NAME
      this.currentDate = data[0].CURRENT_DATE
    })
  }
  login() {
    let dataObject = {
      "username": this.mobileno,
      "password": this.password
    }
    this._authService.login(dataObject).subscribe(data => {
      let userid = data.user.id
      if (data.user.LOG_STATUS == '1') {
        Swal.fire({
          title: '',
          text: "User is already logged in",
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      }
      else if (moment(data.user.EXP_DATE, 'DD/MM/YYYY') >= moment(this.currentDate, 'DD/MM/YYYY')) {
        localStorage.setItem('countoftabs', '1');
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('system_master', JSON.stringify(data.system_master))
        // window.open('/CBS/dashboard/default', "_blank", "toolbar=yes,scrollbars=yes,fullscreen=1,resizable=yes,top=00,left=1000,width=5000,height=1000");
        // window.open('/CBS/dashboard/default','','toolbar=0,titlebar=0,fullscreen=1,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=800,height=600,left = 82,top = 54');
        // window.open('/dashboard/default', "_blank", "toolbar=yes,scrollbars=yes,fullscreen=1,resizable=yes,top=00,left=1000,width=5000,height=1000");
        let userData: any = localStorage.getItem('user');
        let result = JSON.parse(userData);
        let object = {
          USERID: userid,
          BRANCH_CODE: result.branchId
        }
        this._authService.findOutLogin(object).subscribe(login => {
          if (login) {
            this.router.navigate(['/dashboard/default']);
          }
          else {
            this.router.navigate(['/user/profile']);
          }
          let expfromdate = moment(data.user.EXP_DATE, 'DD/MM/YYYY').subtract(10, 'days').format('DD/MM/YYYY')
          let exptodate = moment(data.user.EXP_DATE, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY')
          if (moment(expfromdate, 'DD/MM/YYYY') <= moment(this.currentDate, 'DD/MM/YYYY') && moment(this.currentDate, 'DD/MM/YYYY') <= moment(exptodate, 'DD/MM/YYYY')) {
            Swal.fire('Warning', `Your password will expire on ${data.user.EXP_DATE}. Please update your password before expire.`, 'warning')
          }
        })
        this._authService.loginuserupdate(userid).subscribe(data => { })
        this.http.get<any>('https://ipapi.co/json/').subscribe(
          (response) => {
            let obj = {
              USERID: userid,
              IPADDRESS: response.ip,
              BRANCH_CODE: result.branchId
            }
            this._authService.LOGINHISTORY(obj).subscribe(data => { })
          },
          (error) => {
            console.error(error);
          }
        );
      } else if (moment(data.user.EXP_DATE, 'DD/MM/YYYY') < moment(this.currentDate, 'DD/MM/YYYY')) {
        this.resetPassword = true;
        this.forgetPassword = false;
        Swal.fire('Oops!', 'Your password is expired please reset your password', 'error');
      }
      this.failedLoginAttempts[this.mobileno] = 0;
    }, err => {

      // if (err.error.statusCode == 401) {
      //   this.incrementFailedLoginAttempts(this.mobileno);
      //   let loginAttempts = this.getFailedLoginAttempts(this.mobileno);
      //   if (loginAttempts >= this.maxAttempts) {
      //     this._authService.updateinactiveUser(dataObject).subscribe(data => { })
      //     Swal.fire('OOPs', 'User blocked...Please contact to Admin', 'error')
      //     this.failedLoginAttempts[this.mobileno] = 0;
      //   }
      //   else
      //     Swal.fire({
      //       title: '',
      //       text: "Your access denied",
      //       icon: 'error',
      //       confirmButtonColor: '#229954',
      //       confirmButtonText: 'OK'
      //     })
      // } else if (err.error.statusCode == 400) {
      //   Swal.fire({
      //     title: '',
      //     text: err.error.message,
      //     icon: 'error',
      //     confirmButtonColor: '#229954',
      //     confirmButtonText: 'OK'
      //   })
      // } else {
      //   Swal.fire({
      //     title: '',
      //     text: "Please Check Your Username And Password",
      //     icon: 'error',
      //     confirmButtonColor: '#229954',
      //     confirmButtonText: 'OK'
      //   })
      // }

      if (err.error.statusCode == 401) {
        this.incrementFailedLoginAttempts(this.mobileno);
        let loginAttempts = this.getFailedLoginAttempts(this.mobileno);
        if(loginAttempts >3) {
            this._authService.updateinactiveUser(dataObject).subscribe(data => { })
            Swal.fire('OOPs', 'User blocked...Please contact to Admin', 'error')
            this.failedLoginAttempts[this.mobileno] = 0;
            this.isUserBlocked = true;
        }
        else{
          Swal.fire({
            title: '',
            text: "Password is incorrect",
            icon: 'error',
            confirmButtonColor: '#229954',
            confirmButtonText: 'OK'
          })
        }
      } 
       else if (err.error.statusCode == 400) {
        Swal.fire({
          title: '',
          text: err.error.message,
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      } 
      else if(err.error.statusCode == 500){
        Swal.fire({
          title: '',
          text: "Please check your username",
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      }
      else {
        Swal.fire({
          title: '',
          text: "Please Check Your Username And Password",
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      }

    })
  }
  showHidePassword() {
    if (this.passType == 'password') {
      this.passType = 'text';
    }
    else {
      this.passType = 'password';
    }
  }
  private failedLoginAttempts: { [username: string]: number } = {};

  incrementFailedLoginAttempts(username: string): void {
    if (!this.failedLoginAttempts[username]) {
      this.failedLoginAttempts[username] = 1;
    } else {
      this.failedLoginAttempts[username]++;
    }
  }

  getFailedLoginAttempts(username: string): number {
    return this.failedLoginAttempts[username] || 0;
  }
}
