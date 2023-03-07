import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
// import { FinalReportsComponent } from './final-reports/final-reports.component';
// import { MisReportsComponent } from './mis-reports/mis-reports.component';
// import { OtherReportsComponent } from './other-reports/other-reports.component';
// import { NotticeComponent } from './nottice/nottice.component';
// import { LatterComponent } from './nottice/latter/latter.component';
// import { SharesADRComponent } from './shares-adr/shares-adr.component';
// import { SharesARRComponent } from './shares-arr/shares-arr.component';
// import { NpaReportsComponent } from './npa-reports/npa-reports.component';
// import { LoanReportsComponent } from './loan-reports/loan-reports.component';
// import { TermDepositReportsComponent } from './term-deposit-reports/term-deposit-reports.component';
// import { DenominationReportsComponent } from './denomination-reports/denomination-reports.component';
// import { RegistersComponent } from './registers/registers.component';
// import { BalanceBookComponent } from './balance-book/balance-book.component';
// import { StatementComponent } from './statement/statement.component';
// import { DailyReportsComponent } from './daily-reports/daily-reports.component';
// import { AllReportsWithSearchingComponent } from './all-reports-with-searching/all-reports-with-searching.component';
// import { ReportFrameComponent } from './report-frame/report-frame.component';
// import { PigmyReportComponent } from './pigmy-report/pigmy-report.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { IframecomponentModule } from './iframecomponent/iframecomponent.module';
import { SharesReportsComponent } from './shares-reports/shares-reports.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    IframecomponentModule
  ],providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class ReportsModule { }
