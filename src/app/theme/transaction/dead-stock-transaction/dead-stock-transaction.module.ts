import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeadStockTransactionComponent } from './dead-stock-transaction.component';
import { DeadStockTransactionRoutingModule } from './dead-stock-transaction-routing.module';
import {SharedModule} from '../../../shared/shared.module';

import {DataTablesModule} from 'angular-datatables';
import {SelectOptionService} from '../../../shared/elements/select-option.service'
import {SelectModule} from 'ng-select';

@NgModule({
  imports: [
    CommonModule,
    DeadStockTransactionRoutingModule,
    SharedModule,
    DataTablesModule,
    SelectModule
  ],
  providers: [SelectOptionService],
  declarations: [DeadStockTransactionComponent]
})
export class DeadStockTransactionModule { }