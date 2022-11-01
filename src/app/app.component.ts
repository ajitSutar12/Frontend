import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Welcome || Your Bank Name';
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
  addHotKeys() {
    this._hotkeysService.add(new Hotkey(['f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12',
      'ctrl+fn+f2', 'ctrl+fn+f3', 'ctrl+fn+f4', 'ctrl+fn+f5', 'ctrl+fn+f6', 'ctrl+fn+f7', 'shift+fn+f8', 'ctrl+fn+f8', 'ctrl+f3', 'ctrl+fn+f9', 'ctrl+fn+f10', 'ctrl+fn+f11', 'ctrl+fn+f12', 'ctrl+a', 'ctrl+shift+a', 'ctrl+shift+b', 'ctrl+shift+d', 'ctrl+e'],
      (event: KeyboardEvent, combo: string): boolean => {
        if (combo === 'ctrl+fn+f2' || combo === 'f2') {
          // this.router.navigate(['/utility/calculator']);
          this.router.navigate([]).then(result => { window.open('/utility/calculator', '_blank'); });
        }
        else if (combo === 'ctrl+fn+f3' || combo === 'f3') {
          // this.router.navigate(['/transaction/voucherEntry']);
          this.router.navigate([]).then(result => { window.open('/transaction/voucherEntry', '_blank'); });
        }
        else if (combo === 'ctrl+fn+f4' || combo === 'f4') {
          // this.router.navigate(['/transaction/multiVoucher']);
          this.router.navigate([]).then(result => { window.open('/transaction/multiVoucher', '_blank'); });
        }
        else if (combo === 'shift+fn+f8' || combo === 'f8') {
          // this.router.navigate(['/view/accountEnquiry']);
          this.router.navigate([]).then(result => { window.open('/view/accountEnquiry', '_blank'); });
        }
        else if (combo === 'ctrl+f8' || combo === 'ctrl+fn+f8') {
          // this.router.navigate(['/view/customerView']);
          this.router.navigate([]).then(result => { window.open('/view/customerView', '_blank'); });
        }
        else if (combo === 'ctrl+fn+f9' || combo === 'f9') {
          // this.router.navigate(['/view/ledgerView']);
          this.router.navigate([]).then(result => { window.open('/view/ledgerView', '_blank'); });
        }
        else if (combo === 'ctrl+fn+f11' || combo === 'f11') {
          // this.router.navigate(['/view/managerView']);
          this.router.navigate([]).then(result => { window.open('/view/managerView', '_blank'); });
        }
        else if (combo === 'ctrl+fn+f12' || combo === 'f12') {
          // this.router.navigate(['/passing/centralisedPassing']);
          this.router.navigate([]).then(result => { window.open('/passing/centralisedPassing', '_blank'); });
        }
        else if (combo === 'ctrl+f3' || combo === 'ctrl+f3') {
          // this.router.navigate(['/view/voucherView']);
          this.router.navigate([]).then(result => { window.open('/view/voucherView', '_blank'); });
        }
        else if (combo === 'ctrl+shift+b' || combo === 'ctrl+shift+b') {
          // this.router.navigate(['/transaction/batchVoucher']);
          this.router.navigate([]).then(result => { window.open('/transaction/batchVoucher', '_blank'); });
        }
        return false;
      }, ['INPUT', 'TEXTAREA', 'SELECT']));
  }
}
