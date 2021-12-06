import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashDenominationComponent } from './cash-denomination.component';
import { CashDenominationRoutingModule } from './cash-denomination-routing.module';
import {SharedModule} from '../../../shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    CashDenominationRoutingModule,
    SharedModule
  ],
  declarations: [CashDenominationComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CashDenominationModule { }