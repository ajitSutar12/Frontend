import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetForm: FormGroup;
  url = environment.base_url;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,
  ) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      CUST_ID: ['', Validators.required]
    });
  }

  onSubmit() {

    if (this.resetForm.valid) {
      if (this.resetForm.value.newPassword !== this.resetForm.value.confirmPassword) {
        Swal.fire({
          title: '',
          text: "Please Check Your Confirm Password!",
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      }

      // Proceed with form submission
      let formVal = this.resetForm.value;
      let obj = {
        'username': formVal.CUST_ID,
        'currentPassword': formVal.oldPassword,
        'confirmPassword': formVal.newPassword
      };

      this.http.post(this.url + '/customer-app/resetPassword', obj).subscribe(response => {
        if (response == 1) {
          Swal.fire({
            title: '',
            text: "Please Check Your Old Password!",
            icon: 'error',
            confirmButtonColor: '#229954',
            confirmButtonText: 'OK'
          })

        } else {
          console.log('Form submitted successfully');
          this.router.navigate(['/dashboard/default']);
        }

      });
    }
  }

  cancel() {
    this.router.navigate(['/dashboard/default']);
  }


}
