import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpaReportsComponent } from './npa-reports.component';
import {NpaReportsRoutingModule} from './npaReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    NpaReportsRoutingModule,
    SharedModule

  ],
  declarations: [NpaReportsComponent]
})
export class NpaReportsModule { }
