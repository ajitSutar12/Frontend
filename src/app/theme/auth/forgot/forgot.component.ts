import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  email: any
  contactNo: any
  angForm: FormGroup;
  url = environment.base_url
  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }


  ngOnInit() {
    // document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');

    this.angForm = this.fb.group({
      // email: ['', [Validators.required, Validators.email]],
      userId: ['', [Validators.required]]
    })
  }


  generatedOTP
  resetPassWord() {
    debugger
    if (this.angForm.valid) {
      let formVal = this.angForm.value;

      let obj = {
        'username': formVal.userId,
        // 'MOB_NO': formVal.contactNo
      };

      localStorage.setItem('otpData', JSON.stringify(obj));
      this.router.navigate(['/auth/otpform']);

    } else {
      Swal.fire({
        title: 'Error',
        text: 'Please enter email id and contact number',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  goBack() {
    this.router.navigate(['/auth/login/simple']);
  }
}
