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
  constructor(private router: Router, private http: HttpClient, private _authService: AuthService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');

    this.http.get(this.url + '/system-master-parameters/').subscribe((data: any) => {
      this.bankname = data[0].BANK_NAME
    })
  }
  login() {
    let dataObject = {
      "username": this.mobileno,
      "password": this.password
    }
    this._authService.login(dataObject).subscribe(data => {
      let userid = data.user.id
      console.log(data, 'data of user');
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('system_master', JSON.stringify(data.system_master))
      let passwordExpDate = data.user.EXP_DATE;
      let nowDate = moment().format('YYYY-MM-DD');
      let dateData = moment(passwordExpDate).format('YYYY-MM-DD');
      console.log(dateData);
      console.log(nowDate);
      if (data.user.LOG_STATUS == '1') {
        Swal.fire({
          title: '',
          text: "User is already logged in",
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      }
      else if (moment(dateData).isAfter(nowDate)) {
        // window.open('/CBS/dashboard/default', "_blank", "toolbar=yes,scrollbars=yes,fullscreen=1,resizable=yes,top=00,left=1000,width=5000,height=1000");
        // window.open('/CBS/dashboard/default','','toolbar=0,titlebar=0,fullscreen=1,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=800,height=600,left = 82,top = 54');
        // window.open('/dashboard/default', "_blank", "toolbar=yes,scrollbars=yes,fullscreen=1,resizable=yes,top=00,left=1000,width=5000,height=1000");
        this.router.navigate(['/dashboard/default']);
        this._authService.loginuserupdate(userid).subscribe(data => { })
        let userData: any = localStorage.getItem('user');
        let result = JSON.parse(userData);
        console.log('result', result)
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



      } else {
        this.resetPassword = true;
        this.forgetPassword = false;
        Swal.fire('Oops!', 'Your password is expired please reset your password', 'error');
      }
    }, err => {

      if (err.error.statusCode == 401) {
        Swal.fire({
          title: '',
          text: "Your access denied",
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      } else if (err.error.statusCode == 400) {
        Swal.fire({
          title: '',
          text: err.error.message,
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      } else {
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
}
