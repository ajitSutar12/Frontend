import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotComponent } from '../forgot/forgot.component';
// import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-otpform',
  templateUrl: './otpform.component.html',
  styleUrls: ['./otpform.component.scss']
})
export class OtpformComponent implements OnInit {


  generatedOTP
  url = environment.base_url

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.angForm = this.fb.group({
      otp1: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp2: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp3: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp4: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp5: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp6: ['', [Validators.required, Validators.pattern(/^\d$/)]]
    });
  }

  ngOnInit() {

    this.otpgenerate()

  }

  otpgenerate() {
    let userOTP = JSON.parse(localStorage.getItem('otpData'));
    // console.log(userOTP)

    let obj = {
      'username': userOTP.username,
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
      }

    });

  }




  angForm: FormGroup;
  otp: string = '';
  showOtpComponent: boolean = true;

  onOtpChange(event: Event, index: number) {
    let input = event.target as HTMLInputElement;
    let value = input.value;
    if (value && /^\d$/.test(value)) {
      if (index < 6) {
        let nextInput = document.getElementById(`otp${index + 1}`) as HTMLInputElement;
        if (nextInput) nextInput.focus();
      }
    }
    this.otp = Object.values(this.angForm.value).join('');
  }

  enteredOTP: string = ''
  verifyOtp() {
    
    let formValue = this.angForm.value

    this.enteredOTP = formValue.otp1 + formValue.otp2 + formValue.otp3 + formValue.otp4 + formValue.otp5 + formValue.otp6


    if (this.generatedOTP.otp === this.enteredOTP) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'OTP Verified Successfully!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/auth/setpassword']);
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid OTP. Please try again.',
      });
    }
  }

  resendOtp() {
    this.otpgenerate()
    Swal.fire({
      title: 'Success!',
      text: 'OTP resent successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });

  }

  cancel() {
    this.router.navigate(['/auth/forgot']);
  }
  onKeyDown(event: any, index: number): void {
    if (event.key === 'Backspace' && index > 1) {
      const input = this.angForm.get(`otp${index}`)?.value;
      if (!input) {
        // Move to the previous input if current is empty
        document.getElementById(`otp${index - 1}`)?.focus();
      }
    }
  }
}
