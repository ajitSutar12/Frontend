import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PigmyDayEndComponent } from './pigmy-day-end.component';
import { PigmyDayEndRoutingModule } from './pigmy-day-end-routing.module';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    PigmyDayEndRoutingModule,
    DataTablesModule
 
  ],
  declarations: [ PigmyDayEndComponent]
})
export class PigmyDayEndModule { }
