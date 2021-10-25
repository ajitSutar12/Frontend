import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalReportsComponent } from './final-reports.component';
import {FinalReportsRoutingModule} from './finalReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    FinalReportsRoutingModule,
    SharedModule

  ],
  declarations: [FinalReportsComponent]
})
export class FinalReportsModule { }
