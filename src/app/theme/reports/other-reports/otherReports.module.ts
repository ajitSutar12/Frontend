import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherReportsComponent } from './other-reports.component';
import {OtherReportsRoutingModule} from './otherReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    OtherReportsRoutingModule,
    SharedModule

  ],
  declarations: [OtherReportsComponent]
})
export class OtherReportsModule { }
