import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestCalculationComponent } from './interest-calculation.component';
import { InterestCalculationRoutingModule } from './interest-calculation-routing.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    InterestCalculationRoutingModule,
    DataTablesModule
  ],
  declarations: [InterestCalculationComponent]
})
export class InterestCalculationModule { }
