import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeadStockPComponent } from './dead-stock-p.component';
import { DeadStockPRoutingModule } from './dead-stock-p-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    DeadStockPRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [DeadStockPComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DeadStockPModule { }
