import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierComponent } from './cashier.component';

import {SharedModule} from '../../../shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../user-auth.interceptor';
import { CashierRoutingModule } from './cashier-routing.module';



@NgModule({
  imports: [
    CommonModule,
    CashierRoutingModule,
    SharedModule
  ],
  declarations: [CashierComponent,],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CashierModule { }