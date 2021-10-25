import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditInterestCalculationComponent } from './edit-interest-calculation.component';
import { EditInterestCalculationRoutingModule } from './edit-interest-calculation-routing.module';
import {SharedModule} from '../../../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    EditInterestCalculationRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ EditInterestCalculationComponent]
})
export class EditInterestCalculationModule { }
