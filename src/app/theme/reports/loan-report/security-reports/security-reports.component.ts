import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-reports',
  templateUrl: './security-reports.component.html',
  styleUrls: ['./security-reports.component.scss']
})
export class SecurityReportsComponent implements OnInit {
  narationmasterTrue: boolean = true;
  goldSilverStock:boolean = false;
  constructor() { 
    console.log('hii')
  }

  ngOnInit(): void {
  }
  OpenLink(val) {
    // 
    if (val == 1) {
      this.narationmasterTrue = true;
      this.goldSilverStock = false;
    }
    else if (val == 2) {
      this.goldSilverStock = true;
      this.narationmasterTrue = false;
    }



}

}
