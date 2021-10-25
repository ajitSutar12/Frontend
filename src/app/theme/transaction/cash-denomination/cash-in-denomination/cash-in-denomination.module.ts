import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CashInDenominationComponent } from './cash-in-denomination.component';
import { CashInDenominationRoutingModule } from './cash-in-denomination-routing.module';

import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    CashInDenominationRoutingModule,
    DataTablesModule
  
  ],
  declarations: [CashInDenominationComponent]
})
export class CashInDenominationModule { }