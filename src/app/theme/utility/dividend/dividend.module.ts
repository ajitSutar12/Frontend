import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendComponent } from './dividend.component';
import { DividendRoutingModule } from './dividend-routing.module';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    DividendRoutingModule,
    SharedModule
  ],
  declarations: [DividendComponent]
})
export class DividendModule { }
