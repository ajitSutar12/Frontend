import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment'
import { AuthService } from '../../theme/auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-exit',
  template: ''
  // templateUrl: './exit.component.html',
  // styleUrls: ['./exit.component.scss']
})
export class ExitComponent implements OnInit {
  url = environment.base_url

  constructor(private _authService: AuthService, private router: Router) {
    console.log('test')
  }

  ngOnInit(): void {
    this.router.navigate(['/auth/login/simple']);
    let user = JSON.parse(localStorage.getItem('user'));
    this._authService.logout(user.id).subscribe(data => {
    })
    let userData: any = localStorage.getItem('user');
    let result = JSON.parse(userData);
    let obj = {
      USERID: result.id,
      BRANCH_CODE: result.branchId,
      REMARK: null
    }
    this._authService.LOGOFFHISTORY(obj).subscribe(data => { })
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}
