import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierToSafeVaultComponent } from './cashier-to-safe-vault.component';
import { CashierToSafeVaultRoutingModule } from './cashier-to-safe-vault-routing.module';

import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    CashierToSafeVaultRoutingModule,
    DataTablesModule
  
  ],
  declarations: [CashierToSafeVaultComponent]
})
export class CashierToSafeVaultModule { }