import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisReportsComponent } from './mis-reports.component';
import {MisReportsRoutingModule} from './misReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    MisReportsRoutingModule,
    SharedModule

  ],
  declarations: [MisReportsComponent]
})
export class MisReportsModule { }
