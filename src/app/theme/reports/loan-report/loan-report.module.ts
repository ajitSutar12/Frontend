import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanReportRoutingModule } from './loan-report-routing.module';
import { LoanReportComponent } from './loan-report.component';
import { LoanExpiredListComponent } from './loan-expired-list/loan-expired-list.component';
import { CourtwiseDisputeLoandetailComponent } from './courtwise-dispute-loandetail/courtwise-dispute-loandetail.component';
import { DisputeLoandetailsComponent } from './dispute-loandetails/dispute-loandetails.component';
import { LoanCCACOpenSanctionDatewiseComponent } from './loan-cc-ac-open-sanction-datewise/loan-cc-ac-open-sanction-datewise.component';
import { HealthCodewiseOverdueComponent } from './health-codewise-overdue/health-codewise-overdue.component';


@NgModule({
  declarations: [LoanReportComponent],
  imports: [
    CommonModule,
    LoanReportRoutingModule
  ]
})
export class LoanReportModule { }
