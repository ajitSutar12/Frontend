import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth.service';
import * as moment from 'moment';

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
  resetPassword : boolean = false;
  forgetPassword: boolean = true;
  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }
  login() {
    let dataObject = {
      "username": this.mobileno,
      "password": this.password
    }
    this._authService.login(dataObject).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('system_master',JSON.stringify(data.system_master))
      let passwordExpDate = data.user.EXP_DATE;
      let nowDate = moment().format('YYYY-MM-DD');
      let dateData = moment(passwordExpDate).format('YYYY-MM-DD');
      console.log(dateData);
      console.log(nowDate);
      if (moment(dateData).isAfter(nowDate)) {
        window.open("/CBS/dashboard/default", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=00,left=500,width=1000,height=800");
        // this.router.navigate(['/dashboard/default']);

      } else {
        this.resetPassword = true;
        this.forgetPassword = false;
        Swal.fire('Error!', 'Your password is expired please reset your password', 'error');
      }
    }, err => {
      debugger
      if(err.error.statusCode == 401)
      {
        Swal.fire({
          title: '',
          text: "Your access denied",
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      }else{
        Swal.fire({
          title: '',
          text: "Please Check Your Mobile Number And Password",
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
