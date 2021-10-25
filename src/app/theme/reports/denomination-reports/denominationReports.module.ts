import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DenominationReportsComponent } from './denomination-reports.component';
import {DenominationReportsRoutingModule} from './denominationReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    DenominationReportsRoutingModule,
    SharedModule

  ],
  declarations: [DenominationReportsComponent]
})
export class DenominationReportsModule { }
