import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CashInDenominationComponent } from './cash-in-denomination.component';
import { CashInDenominationRoutingModule } from './cash-in-denomination-routing.module';

import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    CashInDenominationRoutingModule,
    DataTablesModule
  
  ],
  declarations: [CashInDenominationComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CashInDenominationModule { }