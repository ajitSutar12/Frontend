import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashDenominationComponent } from './cash-denomination.component';
import { CashDenominationRoutingModule } from './cash-denomination-routing.module';
import {SharedModule} from '../../../shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    CashDenominationRoutingModule,
    SharedModule
  ],
  declarations: [CashDenominationComponent]
})
export class CashDenominationModule { }