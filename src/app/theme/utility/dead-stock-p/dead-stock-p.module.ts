import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeadStockPComponent } from './dead-stock-p.component';
import { DeadStockPRoutingModule } from './dead-stock-p-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    DeadStockPRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [DeadStockPComponent]
})
export class DeadStockPModule { }
