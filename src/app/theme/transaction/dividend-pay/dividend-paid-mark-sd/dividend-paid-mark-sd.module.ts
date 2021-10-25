import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DividendPaidMarkSDRoutingModule } from './dividend-paid-mark-sd-routing.module';


import { DividendPaidMarkSDComponent } from './dividend-paid-mark-sd.component';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    DividendPaidMarkSDRoutingModule,
    DataTablesModule
  ],
  declarations: [DividendPaidMarkSDComponent]
})
export class  DividendPaidMarkSDModule { }