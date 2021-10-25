import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptPrintingDComponent } from './receipt-printing-d.component';

import { ReceiptPrintingDRoutingModule } from './receipt-printing-d-routing.module'
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    ReceiptPrintingDRoutingModule,
    SharedModule
  ],
  declarations: [ReceiptPrintingDComponent]
})
export class ReceiptPrintingDModule { }
