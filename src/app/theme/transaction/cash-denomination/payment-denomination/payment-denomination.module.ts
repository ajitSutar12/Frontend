import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PaymentDenominationComponent } from './payment-denomination.component';
import { PaymentDenominationRoutingModule } from './payment-denomination-routing.module';

import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    PaymentDenominationRoutingModule,
    DataTablesModule
  
  ],
  declarations: [PaymentDenominationComponent]
})
export class PaymentDenominationModule { }