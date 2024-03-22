import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeftRtgsRoutingModule } from './neft-rtgs-routing.module';
import { NeftTransactionComponent } from './neft-transaction/neft-transaction.component';
import { RtgsTransactionComponent } from './rtgs-transaction/rtgs-transaction.component';
import { BillPaymentComponent } from './bill-payment/bill-payment.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NeftRtgsRoutingModule
  ]
})
export class NeftRtgsModule { }
