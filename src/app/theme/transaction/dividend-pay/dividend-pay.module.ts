import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendPayComponent } from './dividend-pay.component';
import { DividendPayRoutingModule } from './dividend-pay-routing.module';
import {SharedModule} from '../../../shared/shared.module';
//import { DividendPaidMarkSDComponent } from './dividend-paid-mark-sd/dividend-paid-mark-sd.component';
//import { DividendPaidSDComponent } from './dividend-paid-sd/dividend-paid-sd.component';



@NgModule({
  imports: [
    CommonModule,
    DividendPayRoutingModule,
    SharedModule
  ],
  declarations: [DividendPayComponent]
})
export class DividendPayModule { }