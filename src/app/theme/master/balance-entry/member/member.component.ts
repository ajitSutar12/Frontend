import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  memberbalanceadditionTrue = true;
  recoveryinstallmentTrue = false;
  sharesbalanceadditionTrue = false;
  balanceadditionsharesaccountwiseTrue = false;
  loaninstallmenteditTrue = false;
  sharescancellationTrue = false;

  constructor(private_router: Router) { }

  ngOnInit(): void 
  {
  }
  OpenLink(val) {
    // 
    if (val == 1) {
      this.memberbalanceadditionTrue = true;
      this.recoveryinstallmentTrue = false;
      this.sharesbalanceadditionTrue = false;
      this.balanceadditionsharesaccountwiseTrue = false;
      this.loaninstallmenteditTrue = false;
      this.sharescancellationTrue = false;

    }
    if (val == 2) {
      this.memberbalanceadditionTrue = false;
      this.recoveryinstallmentTrue = true;
      this.sharesbalanceadditionTrue = false;
      this.balanceadditionsharesaccountwiseTrue = false;
      this.loaninstallmenteditTrue = false;
      this.sharescancellationTrue = false;

    }
    if (val == 3) {
      this.memberbalanceadditionTrue = false;
      this.recoveryinstallmentTrue = false;
      this.sharesbalanceadditionTrue = true;
      this.balanceadditionsharesaccountwiseTrue = false;
      this.loaninstallmenteditTrue = false;
      this.sharescancellationTrue = false;

    }
    if (val == 4) {
      this.memberbalanceadditionTrue = false;
      this.recoveryinstallmentTrue = false;
      this.sharesbalanceadditionTrue = false;
      this.balanceadditionsharesaccountwiseTrue = true;
      this.loaninstallmenteditTrue = false;
      this.sharescancellationTrue = false;
      

    }
    if (val == 5) {
      this.memberbalanceadditionTrue = false;
      this.recoveryinstallmentTrue = false;
      this.sharesbalanceadditionTrue = false;
      this.balanceadditionsharesaccountwiseTrue = false;
      this.loaninstallmenteditTrue = true;
      this.sharescancellationTrue = false;

    }
    if (val == 6) {
      this.memberbalanceadditionTrue = false;
      this.recoveryinstallmentTrue = false;
      this.sharesbalanceadditionTrue = false;
      this.balanceadditionsharesaccountwiseTrue = false;
      this.loaninstallmenteditTrue = false;
      this.sharescancellationTrue = true;


    }
    
  }
}

