import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-overdue-report',
  templateUrl: './loan-overdue-report.component.html',
  styleUrls: ['./loan-overdue-report.component.scss']
})
export class LoanOverdueReportComponent implements OnInit {

  narationmasterTrue: boolean = true;
  bankTrue: boolean = false;
  clearingTrue: boolean = false;
  ownbranchTrue: boolean = false;
  categoryTrue: boolean = false;
  cityTrue: boolean = false;
  castTrue: boolean = false;
  occupationTrue: boolean = false;
  diectorTrue: boolean = false;
  authorityTrue: boolean = false;
  recoveryTrue: boolean = false;
  insuranceTrue: boolean = false;
  operationTrue: boolean = false;
  purposeTrue: boolean = false;
  priorityTrue: boolean = false;
  courtTrue: boolean = false;

  constructor(private_router: Router) { }

  ngOnInit(): void {
  }
 
  OpenLink(val) {
    // 
    if (val == 1) {
      this.narationmasterTrue = true;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
  
      
    }
    else if (val == 2) {
      this.narationmasterTrue = false;
      this.bankTrue = true;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
      
    }
    else if(val == 3) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = true;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
  
    }
    else if (val == 4) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = true;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
     
    }
    else if (val == 5) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = true;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
     
    }
    else if (val == 6) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = true;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
  
    }
    else if (val == 7) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = true;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
  
    }
    else if(val == 8) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = true;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
  
    }
    else if (val == 9) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = true;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
      
    }
    else if (val == 10) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = true;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
  
    }
    else if (val == 11) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = true;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
  
    }
    else if (val == 12) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = true;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
  
    }
    else if (val == 13) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = true;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = false;
  
    }
    else if (val == 14) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = true;
      this.priorityTrue = false;
      this.courtTrue = false;
  
    }
    else if (val == 15) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = true;
      this.courtTrue = false;
  
    }
    else if (val == 16) {
      this.narationmasterTrue = false;
      this.bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue = false;
      this.categoryTrue = false;
      this.cityTrue = false;
      this.castTrue = false;
      this.occupationTrue = false;
      this.diectorTrue = false;
      this.authorityTrue = false;
      this.recoveryTrue = false;
      this.insuranceTrue = false;
      this.operationTrue = false;
      this.purposeTrue = false;
      this.priorityTrue = false;
      this.courtTrue = true;
  
    }

  }

}
