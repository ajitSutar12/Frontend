import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

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
  
  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');

    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    })
  }

  generatedOTP
  resetPassWord() {
    if (this.angForm.valid) {
      let formVal = this.angForm.value;

      let obj = {
        'EMAIL': formVal.email,
        'MOB_NO': formVal.contactNo
      };

      this.http.post(this.url + '/user-defination/checkEmailMo', obj).subscribe((data: any) => {
        if (data.message == '0') {
          Swal.fire({
            title: 'Sorry...',
            text: 'User Not Found!',
            icon: 'warning',
            confirmButtonText: 'OK'
          });
        }
        else {
          this.generatedOTP = data;
          localStorage.setItem('otpData', JSON.stringify(data));
          this.router.navigate(['/auth/otpform']);
        }

      });

      // console.log(obj)
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Please enter email id and contact number',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }


}
