import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shares-transaction-passing',
  templateUrl: './shares-transaction-passing.component.html',
  styleUrls: ['./shares-transaction-passing.component.scss']
})
export class SharesTransactionPassingComponent implements OnInit {

  issuenewsharesTrue = true;
  sharestransferTrue = false;
  membershipcancellationTrue = false;
  foundpaymenttransactionTrue = false;
  rebitintresttransactionTrue = false;
  constructor(private_router: Router) {
  }
  ngOnInit(): void {
  }

  OpenLink(val) {
    // debugger
    if (val == 1) {
      this.issuenewsharesTrue = true;
      this.sharestransferTrue = false;
      this.membershipcancellationTrue = false;
      this.foundpaymenttransactionTrue = false;
      this.rebitintresttransactionTrue = false;

    }
    if (val == 2) {
      this.issuenewsharesTrue = false;
      this.sharestransferTrue = true;
      this.membershipcancellationTrue = false;
      this.foundpaymenttransactionTrue = false;
      this.rebitintresttransactionTrue = false;

    }
    if (val == 3) {
      this.issuenewsharesTrue = false;
      this.sharestransferTrue = false;
      this.membershipcancellationTrue = true;
      this.foundpaymenttransactionTrue = false;
      this.rebitintresttransactionTrue = false;


    }
    if (val == 4) {
      this.issuenewsharesTrue = false;
      this.sharestransferTrue = false;
      this.membershipcancellationTrue = false;
      this.foundpaymenttransactionTrue = true;
      this.rebitintresttransactionTrue = false;

    }

    if (val == 5) {
      this.issuenewsharesTrue = false;
      this.sharestransferTrue = false;
      this.membershipcancellationTrue = false;
      this.foundpaymenttransactionTrue = false;
      this.rebitintresttransactionTrue = true;

    }
  }


}
