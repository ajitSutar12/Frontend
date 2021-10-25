import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayEndComponent } from './day-end.component';
import { DayEndRoutingModule } from './day-end-routing.module'
import {SharedModule} from '../../../shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    DayEndRoutingModule,
    SharedModule
  ],
  declarations: [ DayEndComponent]
})
export class DayEndModule { }
