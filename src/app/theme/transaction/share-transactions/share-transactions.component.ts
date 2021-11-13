import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-transactions',
  templateUrl: './share-transactions.component.html',
  styleUrls: ['./share-transactions.component.scss']
})
export class ShareTransactionsComponent implements OnInit {


  issuenewsharesTrue = true;
  sharestransferTrue = false;
  membershipcancellationTrue = false;
  foundpaymenttransactionTrue = false;
  openingsharesteTrue = false;
  rebitintresttransactionTrue = false;
  constructor(private_router: Router) {
  }
  ngOnInit(): void {
  }

  OpenLink(val) {
    // 
    if (val == 1) {
      this.issuenewsharesTrue = true;
      this.sharestransferTrue = false;
      this.membershipcancellationTrue = false;
      this.foundpaymenttransactionTrue = false;
      this.openingsharesteTrue = false;
      this.rebitintresttransactionTrue = false;

    }
    if (val == 2) {
      this.issuenewsharesTrue = false;
      this.sharestransferTrue = true;
      this.membershipcancellationTrue = false;
      this.foundpaymenttransactionTrue = false;
      this.openingsharesteTrue = false;
      this.rebitintresttransactionTrue = false;

    }
    if (val == 3) {
      this.issuenewsharesTrue = false;
      this.sharestransferTrue = false;
      this.membershipcancellationTrue = true;
      this.foundpaymenttransactionTrue = false;
      this.openingsharesteTrue = false;
      this.rebitintresttransactionTrue = false;


    }
    if (val == 4) {
      this.issuenewsharesTrue = false;
      this.sharestransferTrue = false;
      this.membershipcancellationTrue = false;
      this.foundpaymenttransactionTrue = true;
      this.openingsharesteTrue = false;
      this.rebitintresttransactionTrue = false;

    }
    if (val == 5) {
      this.issuenewsharesTrue = false;
      this.sharestransferTrue = false;
      this.membershipcancellationTrue = false;
      this.foundpaymenttransactionTrue = false;
      this.openingsharesteTrue = true;
      this.rebitintresttransactionTrue = false;


    }
    if (val == 6) {
      this.issuenewsharesTrue = false;
      this.sharestransferTrue = false;
      this.membershipcancellationTrue = false;
      this.foundpaymenttransactionTrue = false;
      this.openingsharesteTrue = false;
      this.rebitintresttransactionTrue = true;

    }
  }

}
