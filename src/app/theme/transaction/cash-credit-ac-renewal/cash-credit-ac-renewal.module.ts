import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashCreditAcRenewalComponent } from './cash-credit-ac-renewal.component';
import { CashCreditAcRenewalRoutingModule } from './cash-credit-ac-renewal-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {SelectModule} from 'ng-select';
import {DataTablesModule} from 'angular-datatables';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    CashCreditAcRenewalRoutingModule,
    SharedModule,
    DataTablesModule,
    SelectModule
  ],
  declarations: [CashCreditAcRenewalComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CashCreditAcRenewalModule { }