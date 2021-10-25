import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeVaultToCashierComponent } from './safe-vault-to-cashier.component';
import { SafeValultToCashierRoutingModule } from './safe-vault-to-cashier-routing.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    SafeValultToCashierRoutingModule,
    DataTablesModule
  
  ],
  declarations: [SafeVaultToCashierComponent]
})
export class SafeValultToCashierModule { }