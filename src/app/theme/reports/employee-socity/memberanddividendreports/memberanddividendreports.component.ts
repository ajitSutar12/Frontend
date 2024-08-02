import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memberanddividendreports',
  templateUrl: './memberanddividendreports.component.html',
  styleUrls: ['./memberanddividendreports.component.scss']
})
export class MemberanddividendreportsComponent implements OnInit {

  narationmasterTrue: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }
  OpenLink(val) {
    // 
    if (val == 1) {
      this.narationmasterTrue = true;
    }
  }
}
