import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayComponent } from './holiday.component';
import { HolidayRoutingModule } from './holiday-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    HolidayRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [HolidayComponent]
})
export class HolidayModule { }
