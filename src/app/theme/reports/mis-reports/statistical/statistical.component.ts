import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.scss']
})
export class StatisticalComponent implements OnInit {

  narationmasterTrue: boolean = true;
  periodwiseTrue:boolean = false;
  periodwiseDetailsTrue:boolean = false;
  MdatewiseTrue:boolean = false;
  schemewisedeposit:boolean = false;
  schemewiseTotCrDetilsAmt:boolean = false;
  OverAmtPeriodLClss:boolean = false;
  schemewiseTotCrLoanAmt:boolean=false;
  schemewiseLoanAcc:boolean=false;
  reconsilation: boolean=false;
  expired:boolean=false;
  constructor() { 
    console.log('hii')
  }

  ngOnInit(): void {
  }
  OpenLink(val) {
    // 
    if (val == 1) {
      this.narationmasterTrue = true;
      this.periodwiseTrue = false;
      this.periodwiseDetailsTrue = false;
      this.MdatewiseTrue = false;
      this.schemewisedeposit = false;
      this.schemewiseTotCrDetilsAmt = false;
      this.OverAmtPeriodLClss = false;
      this.schemewiseTotCrLoanAmt=false;
      this.schemewiseLoanAcc = false;
      this.reconsilation=false;
      this.expired = false;
    }
    else if (val ==2) {
      this.narationmasterTrue = false;
      this.periodwiseTrue = true;
      this.periodwiseDetailsTrue = false;
      this.MdatewiseTrue = false;
      this.schemewisedeposit = false;
      this.schemewiseTotCrDetilsAmt = false;
      this.OverAmtPeriodLClss = false;
      this.schemewiseTotCrLoanAmt=false;
      this.schemewiseLoanAcc = false;
      this.reconsilation=false;
      this.expired = false;
    }
    else if (val ==3) {
      this.narationmasterTrue = false;
      this.periodwiseTrue = false;
      this.periodwiseDetailsTrue = true;
      this.MdatewiseTrue = false;
      this.schemewisedeposit = false;
      this.schemewiseTotCrDetilsAmt = false;
      this.OverAmtPeriodLClss = false;
      this.schemewiseTotCrLoanAmt=false;
      this.schemewiseLoanAcc = false;
      this.reconsilation=false;
      this.expired = false;
    }
    else if (val ==4) {
      this.narationmasterTrue = false;
      this.periodwiseTrue = false;
      this.periodwiseDetailsTrue = false;
      this.MdatewiseTrue = true;
      this.schemewisedeposit = false;
      this.schemewiseTotCrDetilsAmt = false;
      this.OverAmtPeriodLClss = false;
      this.schemewiseTotCrLoanAmt=false;
      this.schemewiseLoanAcc = false;
      this.reconsilation=false;
      this.expired = false;
    }
    else if (val ==5) {
      this.narationmasterTrue = false;
      this.periodwiseTrue = false;
      this.periodwiseDetailsTrue = false;
      this.MdatewiseTrue = false;
      this.schemewisedeposit = true;
      this.schemewiseTotCrDetilsAmt = false;
      this.OverAmtPeriodLClss = false;
      this.schemewiseTotCrLoanAmt=false;
      this.schemewiseLoanAcc = false;
      this.reconsilation=false;
      this.expired = false;
    }
    else if (val ==6) {
      this.narationmasterTrue = false;
      this.periodwiseTrue = false;
      this.periodwiseDetailsTrue = false;
      this.MdatewiseTrue = false;
      this.schemewisedeposit = false;
      this.schemewiseTotCrDetilsAmt = true;
      this.OverAmtPeriodLClss = false;
      this.schemewiseTotCrLoanAmt=false;
      this.schemewiseLoanAcc = false;
      this.reconsilation=false;
      this.expired = false;
    }
    else if (val ==7) {
      this.narationmasterTrue = false;
      this.periodwiseTrue = false;
      this.periodwiseDetailsTrue = false;
      this.MdatewiseTrue = false;
      this.schemewisedeposit = false;
      this.schemewiseTotCrDetilsAmt = false;
      this.expired = true;
      this.schemewiseTotCrLoanAmt=false;
      this.schemewiseLoanAcc = false;
      this.reconsilation=false;
      
    }
    else if (val ==8) {
      this.narationmasterTrue = false;
      this.periodwiseTrue = false;
      this.periodwiseDetailsTrue = false;
      this.MdatewiseTrue = false;
      this.schemewisedeposit = false;
      this.schemewiseTotCrDetilsAmt = false;
      this.OverAmtPeriodLClss = false;
      this.schemewiseTotCrLoanAmt = true;
      this.schemewiseLoanAcc = false;
      this.reconsilation=false;
      this.expired = false;
    }
    else if (val ==9) {
      this.narationmasterTrue = false;
      this.periodwiseTrue = false;
      this.periodwiseDetailsTrue = false;
      this.MdatewiseTrue = false;
      this.schemewisedeposit = false;
      this.schemewiseTotCrDetilsAmt = false;
      this.OverAmtPeriodLClss = false;
      this.schemewiseTotCrLoanAmt = false;
      this.schemewiseLoanAcc = true;
      this.reconsilation=false;
      this.expired = false;

    }
    else if (val ==10) {
      this.narationmasterTrue = false;
      this.periodwiseTrue = false;
      this.periodwiseDetailsTrue = false;
      this.MdatewiseTrue = false;
      this.schemewisedeposit = false;
      this.schemewiseTotCrDetilsAmt = false;
      this.OverAmtPeriodLClss = false;
      this.schemewiseTotCrLoanAmt = false;
      this.schemewiseLoanAcc = false;
      this.reconsilation=true;
      this.expired = false;
    }




}
}



