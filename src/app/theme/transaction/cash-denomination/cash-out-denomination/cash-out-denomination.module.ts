import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CashOutDenominationComponent } from './cash-out-denomination.component';
import { CashOutDenominationRoutingModule } from './cash-out-denomination-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    CashOutDenominationRoutingModule,
    DataTablesModule
  
  ],
  declarations: [CashOutDenominationComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CashOutDenominationModule { }