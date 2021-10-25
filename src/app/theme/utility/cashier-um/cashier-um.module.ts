import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierUMComponent } from './cashier-um.component';
import { CashierUMRoutingModule } from './cashier-um-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    CashierUMRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [CashierUMComponent]
})
export class CashierUMModule { }
