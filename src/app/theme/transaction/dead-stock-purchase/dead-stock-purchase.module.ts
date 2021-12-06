import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeadStockPurchaseComponent } from './dead-stock-purchase.component';
import { DeadStockPurchaseRoutingModule } from './dead-stock-purchase-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    DeadStockPurchaseRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [DeadStockPurchaseComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DeadStockPurchaseModule { }