import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotComponent } from '../forgot/forgot.component';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpform',
  templateUrl: './otpform.component.html',
  styleUrls: ['./otpform.component.scss']
})
export class OtpformComponent implements OnInit {



  ngOnInit() {

  }
  angForm: FormGroup;
  otp: string = '';
  showOtpComponent: boolean = true;
  // @Input() email: string;
  // @Input() contact: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.angForm = this.fb.group({
      otp1: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp2: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp3: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp4: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp5: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp6: ['', [Validators.required, Validators.pattern(/^\d$/)]]
    });
  }


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
    let userOTP = JSON.parse(localStorage.getItem('otpData'));
    console.log(userOTP)

    let formValue = this.angForm.value

    this.enteredOTP = formValue.otp1 + formValue.otp2 + formValue.otp3 + formValue.otp4 + formValue.otp5 + formValue.otp6


    if (userOTP.otp === this.enteredOTP) {
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
    this.router.navigate(['/auth/forgot']);

  }

}
