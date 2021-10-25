import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DividendPaidSDRoutingModule } from './dividend-paid-sd-routing.module';


import { DividendPaidSDComponent } from './dividend-paid-sd.component';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    DividendPaidSDRoutingModule,
    DataTablesModule
  ],
  declarations: [DividendPaidSDComponent]
})
export class DividendPaidSDModule { }