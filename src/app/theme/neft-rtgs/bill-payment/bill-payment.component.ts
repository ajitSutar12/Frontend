import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.scss']
})
export class BillPaymentComponent implements OnInit {

  billPay: boolean = true;
  waterbill: boolean = false;
  electricbill: boolean = false;
  

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
      this.billPay = true;
      this.waterbill = false;
      this.electricbill = false;
     
    }
    else if (val == 2) {
      this.billPay = false;
      this.waterbill = true;
      this.electricbill = false;
      
    }
    else if (val == 3) {
      this.billPay = false;
      this.waterbill = false;
      this.electricbill = true;
      
    }
    

  }


}
