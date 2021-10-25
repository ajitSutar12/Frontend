import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorComponent } from './calculator.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    SharedModule
  ],
  declarations: [CalculatorComponent]
})
export class CalculatorModule { }
