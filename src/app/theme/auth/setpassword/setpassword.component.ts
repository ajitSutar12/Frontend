import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.scss']
})
export class SetpasswordComponent implements OnInit {
  inputValue: string;

  currentPassword: any;
  newPassword: any;
  confirmPassword: any;
  username: any;
  toastr: any;
  url = environment.base_url


  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  isValid(event: boolean): void {
    if (this.inputValue && this.inputValue.length) {
      if (event) {
        this.toastr.success("Password is Valid.", "Successful!");
      } else {
        this.toastr.error("Password is invalid.", "Error!");
      }
    }

  }

  onInput(event: any): void {
    this.inputValue = event.target.value;
  }

  //function to confirm password
  checkPassword() {
    let password1 = ((document.getElementById("Create_Password") as HTMLInputElement).value);
    let password2 = ((document.getElementById("Confirm_Password") as HTMLInputElement).value);

    if (password1 == '') {
      Swal.fire("Warning!", "Please enter Password !", "warning");
    }
    else if (password2 == '') {
      Swal.fire("Warning!", "Please enter confirm password!", "warning");
    }
    else if (password1 != password2) {
      Swal.fire("Warning!", "Password did not match: Please try again...!", "warning");
    }
  }

  //reset password
  resetpassword() {
  
    if (this.currentPassword == '') {
      Swal.fire('Oops!', 'Please insert you current password', 'error');
    }
    else if (this.newPassword != this.confirmPassword) {
      Swal.fire('Oops!', 'Your password not matched', 'error');
    } else {

      let setpassword = {
        // 'currentPassword': this.currentPassword,
        'newPassword': this.newPassword,
        'confirmPassword': this.confirmPassword,
        'username': this.username
      }

      this.http.post(this.url + '/user-defination/confirmpasswordreset', setpassword).subscribe(data => {
      
        Swal.fire('Success!', 'Password Reset Successfully', 'success');
        this.router.navigate(['/auth/login/simple']);

      }, error => {
        Swal.fire('Oops!', error.error.message, 'error');

      })
    }
  }


 
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;


  togglePasswordVisibility(field: string) {
    if (field === 'new') {
      this.showNewPassword = !this.showNewPassword;
    } else if (field === 'confirm') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }
}

