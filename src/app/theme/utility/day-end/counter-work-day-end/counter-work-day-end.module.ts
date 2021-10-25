import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterWorkDayEndComponent } from './counter-work-day-end.component';
import { CounterWorkDayEndRoutingModule } from './counter-work-day-end-routing.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    CounterWorkDayEndRoutingModule,
    DataTablesModule
 
  ],
  declarations: [ CounterWorkDayEndComponent]
})
export class CounterWorkDayEndModule { }
