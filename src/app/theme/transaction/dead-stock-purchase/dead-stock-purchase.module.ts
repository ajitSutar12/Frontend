import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeadStockPurchaseComponent } from './dead-stock-purchase.component';
import { DeadStockPurchaseRoutingModule } from './dead-stock-purchase-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    DeadStockPurchaseRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [DeadStockPurchaseComponent]
})
export class DeadStockPurchaseModule { }