import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyReportsComponent } from './daily-reports.component';
import {DailyReportsRoutingModule} from './dailyReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    DailyReportsRoutingModule,
    SharedModule
    // ChartModule
  ],
  declarations: [DailyReportsComponent]
})
export class DailyReportsModule { }
