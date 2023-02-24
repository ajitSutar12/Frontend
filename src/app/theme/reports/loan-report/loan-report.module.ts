import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanReportRoutingModule } from './loan-report-routing.module';
import { LoanReportComponent } from './loan-report.component';
import { LoanOverdueReportComponent } from './loan-overdue-list/loan-overdue-report/loan-overdue-report.component';
import { LoanSecurityReportComponent } from './loan-security-report/loan-security-report.component';
import { LcdTurnoverListComponent } from './lcd-turnover-list/lcd-turnover-list.component';
import { LcdRenewalListComponent } from './lcd-renewal-list/lcd-renewal-list.component';
import { LcdOverdraftReportComponent } from './lcd-overdraft-report/lcd-overdraft-report.component';
import { LcdLessdraftReportComponent } from './lcd-lessdraft-report/lcd-lessdraft-report.component';
import { PendingStockStatementListComponent } from './pending-stock-statement-list/pending-stock-statement-list.component';
import { CitiwiseLoanBalanceComponent } from './citiwise-loan-balance/citiwise-loan-balance.component';
import { RecoveryCwBalanceComponent } from './recovery-cw-balance/recovery-cw-balance.component';
import { PenalInterestListComponent } from './penal-interest-list/penal-interest-list.component';
import { ReceivedStockStatementComponent } from './received-stock-statement/received-stock-statement.component';
import { LoanOverdueListComponent } from './loan-overdue-list/loan-overdue-list.component';


@NgModule({
  declarations: [LoanReportComponent, LoanOverdueReportComponent, LoanSecurityReportComponent, LcdTurnoverListComponent, LcdRenewalListComponent, LcdOverdraftReportComponent, LcdLessdraftReportComponent, PendingStockStatementListComponent, CitiwiseLoanBalanceComponent, RecoveryCwBalanceComponent, PenalInterestListComponent, ReceivedStockStatementComponent, LoanOverdueListComponent],
  imports: [
    CommonModule,
    LoanReportRoutingModule
  ]
})
export class LoanReportModule { }
