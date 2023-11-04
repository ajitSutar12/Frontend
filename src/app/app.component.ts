import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { environment } from '../environments/environment'
import { AuthService } from './theme/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Welcome || Your Bank Name';
  site = environment.sitename

  siteUrl: string;

  constructor(private router: Router, private _hotkeysService: HotkeysService, private _authService: AuthService,) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.addHotKeys();
  }
  // site environment

  addHotKeys() {
    this._hotkeysService.add(new Hotkey(['f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12',
      'ctrl+fn+f2', 'ctrl+fn+f3', 'ctrl+fn+f4', 'ctrl+fn+f5', 'ctrl+fn+f6', 'ctrl+fn+f7', 'shift+fn+f8', 'ctrl+fn+f8', 'ctrl+f3', 'ctrl+fn+f9', 'ctrl+fn+f10', 'ctrl+fn+f11', 'ctrl+fn+f12', 'ctrl+a', 'ctrl+shift+a', 'shift+f5', 'ctrl+fn+f5', 'ctrl+shift+d', 'ctrl+e'],
      (event: KeyboardEvent, combo: string): boolean => {
        if (combo === 'ctrl+fn+f2' || combo === 'f2') {
          this.router.navigate([]).then(result => { window.open(this.site + '/utility/calculator', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+fn+f3' || combo === 'f3') {
          this.router.navigate([]).then(result => { window.open(this.site + '/Vouchers', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+fn+f4' || combo === 'f4') {
          this.router.navigate([]).then(result => { window.open(this.site + '/multivouchers', '', "width=1200,height=500"); });
        }
        else if (combo === 'shift+fn+f8' || combo === 'f8') {
          this.router.navigate([]).then(result => { window.open(this.site + '/accountenq', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+f8' || combo === 'ctrl+fn+f8') {
          this.router.navigate([]).then(result => { window.open(this.site + '/custview', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+fn+f9' || combo === 'f9') {
          this.router.navigate([]).then(result => { window.open(this.site + '/ledgers', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+fn+f11' || combo === 'f11') {
          this.router.navigate([]).then(result => { window.open(this.site + '/managerview', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+fn+f12' || combo === 'f12') {
          this.router.navigate([]).then(result => { window.open(this.site + '/centralpassing', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+f3' || combo === 'ctrl+f3') {
          this.router.navigate([]).then(result => { window.open(this.site + '/voucherview', '', "width=1200,height=500"); });
        }
        else if (combo === 'shift+f5') {
          this.router.navigate([]).then(result => { window.open(this.site + '/batchVouchers', '', "width=1200,height=500"); });
        }
        return false;
      }, ['INPUT', 'TEXTAREA', 'SELECT']));
  }

  // local environment

  // addHotKeys() {
  //   this._hotkeysService.add(new Hotkey(['f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12',
  //     'ctrl+fn+f2', 'ctrl+fn+f3', 'ctrl+fn+f4', 'ctrl+fn+f5', 'ctrl+fn+f6', 'ctrl+fn+f7', 'shift+fn+f8', 'ctrl+fn+f8', 'ctrl+f3', 'ctrl+fn+f9', 'ctrl+fn+f10', 'ctrl+fn+f11', 'ctrl+fn+f12', 'ctrl+a', 'ctrl+shift+a', 'shift+f5', 'ctrl+fn+f5', 'ctrl+shift+d', 'ctrl+e'],
  //     (event: KeyboardEvent, combo: string): boolean => {
  //       if (combo === 'ctrl+fn+f2' || combo === 'f2') {
  //         this.router.navigate([]).then(result => { window.open(this.site + '/utility/calculator', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+fn+f3' || combo === 'f3') {
  //         this.router.navigate([]).then(result => { window.open('/Vouchers', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+fn+f4' || combo === 'f4') {
  //         this.router.navigate([]).then(result => { window.open('/multivouchers', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'shift+fn+f8' || combo === 'f8') {
  //         this.router.navigate([]).then(result => { window.open('/accountenq', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+f8' || combo === 'ctrl+fn+f8') {
  //         this.router.navigate([]).then(result => { window.open('/custview', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+fn+f9' || combo === 'f9') {
  //         this.router.navigate([]).then(result => { window.open('/ledgers', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+fn+f11' || combo === 'f11') {
  //         this.router.navigate([]).then(result => { window.open('/managerview', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+fn+f12' || combo === 'f12') {
  //         this.router.navigate([]).then(result => { window.open('/centralpassing', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+f3' || combo === 'ctrl+f3') {
  //         this.router.navigate([]).then(result => { window.open('/voucherview', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'shift+f5') {
  //         this.router.navigate([]).then(result => { window.open('/batchVouchers', '', "width=1200,height=500"); });
  //       }
  //       return false;
  //     }, ['INPUT', 'TEXTAREA', 'SELECT']));
  // }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    let val = localStorage.getItem('countoftabs');
    let value = Number(val) - 1
    localStorage.setItem('countoftabs', value.toString());
    if (value == 0)
      this.logout()
  }

  @HostListener('window:load', ['$event'])
  loadHandler(event) {
    let val = localStorage.getItem('countoftabs');
    let value = Number(val) + 1
    localStorage.setItem('countoftabs', value.toString());
  }

  logout() {
    window.close();
    let user = JSON.parse(localStorage.getItem('user'));
    this._authService.logout(user.id).subscribe(data => { })
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
