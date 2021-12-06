import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierToSafeVaultComponent } from './cashier-to-safe-vault.component';
import { CashierToSafeVaultRoutingModule } from './cashier-to-safe-vault-routing.module';

import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    CashierToSafeVaultRoutingModule,
    DataTablesModule
  
  ],
  declarations: [CashierToSafeVaultComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CashierToSafeVaultModule { }