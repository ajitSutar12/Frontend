import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanReportRoutingModule } from './loan-report-routing.module';
import { LoanReportComponent } from './loan-report.component';
import { LoanExpiredListComponent } from './loan-expired-list/loan-expired-list.component';
import { ReductionStatementForLoanComponent } from './reduction-statement-for-loan/reduction-statement-for-loan.component';
import { ReductionStatementForLoanRoutingModule } from './reduction-statement-for-loan/reduction-statement-for-loan-routing.module';
import { LoanInformationDetailsComponent } from './loan-information-details/loan-information-details.component';
import { StagewiseDepositLoanDetailsListComponent } from './stagewise-deposit-loan-details-list/stagewise-deposit-loan-details-list.component';
import { DisputLoanDetailListComponent } from './disput-loan-detail-list/disput-loan-detail-list.component';



@NgModule({
  declarations: [LoanReportComponent,],
  imports: [
    CommonModule,
    LoanReportRoutingModule,
    ReductionStatementForLoanRoutingModule
  ]
})
export class LoanReportModule { }
