import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateInterestDeletionComponent } from './calculate-interest-deletion.component';
import { CalculateInterestDeletionRoutingModule } from './calculate-interest-deletion-routing.module';
import {SharedModule} from '../../../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    CalculateInterestDeletionRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ CalculateInterestDeletionComponent]
})
export class CalculateInterestDeletionModule { }
