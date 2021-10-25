import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateInterestPassingComponent } from './calculate-interest-passing.component';
import { CalculateInterestPassingRoutingModule } from './calculate-interest-passing-routing.module';
import {SharedModule} from '../../../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    CalculateInterestPassingRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ CalculateInterestPassingComponent]
})
export class CalculateInterestPassingModule { }
