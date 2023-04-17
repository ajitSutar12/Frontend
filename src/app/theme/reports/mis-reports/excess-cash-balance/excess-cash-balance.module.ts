import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcessCashBalanceRoutingModule } from './excess-cash-balance-routing.module';
import { ExcessCashBalanceComponent } from './excess-cash-balance.component';


@NgModule({
  declarations: [ExcessCashBalanceComponent],
  imports: [
    CommonModule,
    ExcessCashBalanceRoutingModule
  ]
})
export class ExcessCashBalanceModule { }
