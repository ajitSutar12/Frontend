import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierUMComponent } from './cashier-um.component';
import { CashierUMRoutingModule } from './cashier-um-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    CashierUMRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [CashierUMComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CashierUMModule { }
