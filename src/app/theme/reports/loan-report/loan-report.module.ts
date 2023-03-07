import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanReportRoutingModule } from './loan-report-routing.module';
import { LoanReportComponent } from './loan-report.component';



@NgModule({
  declarations: [LoanReportComponent],
  imports: [
    CommonModule,
    LoanReportRoutingModule
  ]
})
export class LoanReportModule { }
