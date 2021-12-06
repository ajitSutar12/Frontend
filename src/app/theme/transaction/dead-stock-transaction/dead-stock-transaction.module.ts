import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeadStockTransactionComponent } from './dead-stock-transaction.component';
import { DeadStockTransactionRoutingModule } from './dead-stock-transaction-routing.module';
import {SharedModule} from '../../../shared/shared.module';

import {DataTablesModule} from 'angular-datatables';
import {SelectOptionService} from '../../../shared/elements/select-option.service'
import {SelectModule} from 'ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    DeadStockTransactionRoutingModule,
    SharedModule,
    DataTablesModule,
    SelectModule
  ],
  providers: [SelectOptionService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
  declarations: [DeadStockTransactionComponent],
})
export class DeadStockTransactionModule { }