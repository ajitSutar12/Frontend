import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayBeginComponent } from './day-begin.component';
import { DayBeginRoutingModule } from './day-begin-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    DayBeginRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ DayBeginComponent]
})
export class DayBeginModule { }
