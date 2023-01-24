import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { environment } from '../environments/environment'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Welcome || Your Bank Name';
  site = environment.sitename

  siteUrl: string;
  

  //sample comment
  constructor(private router: Router, private _hotkeysService: HotkeysService) { }

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

          this.siteUrl = this.site + '/utility/calculator';
          // this.router.navigate([]).then(result => { window.open(this.site + '/utility/calculator', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+fn+f3' || combo === 'f3') {
          this.router.navigate([]).then(result => { window.open(this.site + '/transaction/voucherEntry', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+fn+f4' || combo === 'f4') {
          this.router.navigate([]).then(result => { window.open(this.site + '/transaction/multiVoucher', '', "width=1200,height=500"); });
        }
        else if (combo === 'shift+fn+f8' || combo === 'f8') {
          this.router.navigate([]).then(result => { window.open(this.site + '/view/accountEnquiry', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+f8' || combo === 'ctrl+fn+f8') {
          this.router.navigate([]).then(result => { window.open(this.site + '/view/customerView', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+fn+f9' || combo === 'f9') {
          this.router.navigate([]).then(result => { window.open(this.site + '/view/ledgerView', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+fn+f11' || combo === 'f11') {
          this.router.navigate([]).then(result => { window.open(this.site + '/view/managerView', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+fn+f12' || combo === 'f12') {
          this.router.navigate([]).then(result => { window.open(this.site + '/passing/centralisedPassing', '', "width=1200,height=500"); });
        }
        else if (combo === 'ctrl+f3' || combo === 'ctrl+f3') {
          this.router.navigate([]).then(result => { window.open(this.site + '/view/voucherView', '', "width=1200,height=500"); });
        }
        else if (combo === 'shift+f5') {
          this.router.navigate([]).then(result => { window.open(this.site + '/transaction/batchVoucher', '', "width=1200,height=500"); });
        }
        return false;
      }, ['INPUT', 'TEXTAREA', 'SELECT']));
  }

  //local environment

  // addHotKeys() {
  //   this._hotkeysService.add(new Hotkey(['f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12',
  //     'ctrl+fn+f2', 'ctrl+fn+f3', 'ctrl+fn+f4', 'ctrl+fn+f5', 'ctrl+fn+f6', 'ctrl+fn+f7', 'shift+fn+f8', 'ctrl+fn+f8', 'ctrl+f3', 'ctrl+fn+f9', 'ctrl+fn+f10', 'ctrl+fn+f11', 'ctrl+fn+f12', 'ctrl+a', 'ctrl+shift+a', 'shift+f5', 'ctrl+fn+f5', 'ctrl+shift+d', 'ctrl+e'],
  //     (event: KeyboardEvent, combo: string): boolean => {
  //       if (combo === 'ctrl+fn+f2' || combo === 'f2') {
  //         this.router.navigate([]).then(result => { window.open('/utility/calculator', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+fn+f3' || combo === 'f3') {
  //         this.router.navigate([]).then(result => { window.open('/transaction/voucherEntry', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+fn+f4' || combo === 'f4') {
  //         this.router.navigate([]).then(result => { window.open('/transaction/multiVoucher', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'shift+fn+f8' || combo === 'f8') {
  //         this.router.navigate([]).then(result => { window.open('/view/accountEnquiry', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+f8' || combo === 'ctrl+fn+f8') {
  //         this.router.navigate([]).then(result => { window.open('/view/customerView', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+fn+f9' || combo === 'f9') {
  //         this.router.navigate([]).then(result => { window.open('/view/ledgerView', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+fn+f11' || combo === 'f11') {
  //         this.router.navigate([]).then(result => { window.open('/view/managerView', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+fn+f12' || combo === 'f12') {
  //         this.router.navigate([]).then(result => { window.open('/passing/centralisedPassing', '', "width=1200,height=500"); });
  //       }
  //       else if (combo === 'ctrl+f3' || combo === 'ctrl+f3') {
  //         this.router.navigate([]).then(result => { window.open('/view/voucherView', '', "width=1200,height=500"); });
  //       }
  // else if(combo === 'shift+f5') {
  //         this.router.navigate([]).then(result => { window.open('/transaction/batchVoucher', '', "width=1200,height=500"); });
  //       }
  //       return false;
  //     }, ['INPUT', 'TEXTAREA', 'SELECT']));
  // }
}
