import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateInterestUnpassingComponent } from './calculate-interest-unpassing.component';
import { CalculateInterestUnpassingRoutingModule } from './calculate-interest-Unpassing-routing.module';
import {SharedModule} from '../../../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    CalculateInterestUnpassingRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ CalculateInterestUnpassingComponent]
})
export class CalculateInterestUnpassingModule { }
