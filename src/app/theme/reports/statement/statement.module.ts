import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementComponent } from './statement.component';
import {StatementRoutingModule} from './statement-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    StatementRoutingModule,
    SharedModule

  ],
  declarations: [StatementComponent]
})
export class StatementModule { }
