import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import Swal from 'sweetalert2';

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
  constructor(private router: Router) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }
  login(){
    if(this.mobileno === "9090909090" && this.password === "Admin@21"){
      console.log("ok");
      this.router.navigate(['/dashboard/default']);
    }
    else{
      console.log("not ok");
      Swal.fire({
        title: '',
        text: "Please Check Your Mobile Number And Password",
        icon: 'error',
        confirmButtonColor: '#229954',
        confirmButtonText: 'OK'
      })
    }
  }
  showHidePassword(){
    if(this.passType == 'password'){
      this.passType = 'text';
    }
    else{
      this.passType = 'password';
    }
  }
}
