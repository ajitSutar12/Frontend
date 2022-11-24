import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermDepositReportsComponent } from './term-deposit-reports.component';
import {TermDepositReportsRoutingModule} from './termDepositReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    TermDepositReportsRoutingModule,
    SharedModule

  ],
  declarations: [TermDepositReportsComponent],
 
})
export class TermDepositReportsModule { }
