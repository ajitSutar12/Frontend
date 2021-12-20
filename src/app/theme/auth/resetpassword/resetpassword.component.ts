import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  currentPassword : any;
  newPassword : any;
  confirmPassword : any;
  email:any;


  constructor(private _authService : AuthService,private router: Router) { }

  ngOnInit(): void {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }


  //reset password
  resetpassword(){
    if(this.currentPassword == ''){
      Swal.fire('Error!', 'Please insert you current password', 'error');
    }
    else if(this.newPassword != this.confirmPassword){
      Swal.fire('Error!', 'Your password not matched', 'error');
    }else{
      let resetpassword = {
        'currentPassword' : this.currentPassword,
        'newPassword' : this.newPassword,
        'confirmPassword' :  this.confirmPassword,
        'email': this.email
      }

      this._authService.resetPassword(resetpassword).subscribe(data=>{
        Swal.fire('Success!', 'Password Reset Successfully', 'success');
        this.router.navigate(['/auth/login/simple']);

      },error=>{
        Swal.fire('Error!', error.error.message, 'error');

      })
    }
  }
}
