import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchange-cash',
  templateUrl: './exchange-cash.component.html',
  styleUrls: ['./exchange-cash.component.scss']
})
export class ExchangeCashComponent implements OnInit {
  
  cashInDenomination: boolean =false;
  cashOutDenomination: boolean= false;
  exchangecash: boolean= true;


  constructor(private_router: Router) { }

  ngOnInit(): void {
  }

  isShow: boolean = true
  isHide: boolean = true

  hideShow() {
    this.isShow = false
    this.isHide = true
  }
  hideShow1() {
    this.isShow = true
    this.isHide = false
  }

  OpenLink(val) {

    if (val == 1) {
      this.exchangecash = true;
      this.cashOutDenomination = false;

    }
    else if (val == 2) {
      this.cashInDenomination = true;
      this.cashOutDenomination = false;
    }
    else if (val == 3) {
      this.cashInDenomination = false;
      this.cashOutDenomination = true;
    }

  }


}
