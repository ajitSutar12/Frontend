import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PaymentDenominationComponent } from './payment-denomination.component';
import { PaymentDenominationRoutingModule } from './payment-denomination-routing.module';

import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    PaymentDenominationRoutingModule,
    DataTablesModule
  
  ],
  declarations: [PaymentDenominationComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class PaymentDenominationModule { }