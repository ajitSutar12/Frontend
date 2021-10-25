import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentComponent } from './investment.component';
import { InvestmentRoutingModule } from './investment-routing.module'
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    InvestmentRoutingModule,
    SharedModule
  ],
  declarations: [InvestmentComponent]
})
export class InvestmentModule { }
