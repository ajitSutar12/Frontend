import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CashOutDenominationComponent } from './cash-out-denomination.component';
import { CashOutDenominationRoutingModule } from './cash-out-denomination-routing.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    CashOutDenominationRoutingModule,
    DataTablesModule
  
  ],
  declarations: [CashOutDenominationComponent]
})
export class CashOutDenominationModule { }