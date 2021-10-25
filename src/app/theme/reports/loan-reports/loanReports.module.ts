import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanReportsComponent } from './loan-reports.component';
import {LoanReportsRoutingModule} from './loanReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    LoanReportsRoutingModule,
    SharedModule

  ],
  declarations: [LoanReportsComponent]
})
export class LoanReportsModule { }
