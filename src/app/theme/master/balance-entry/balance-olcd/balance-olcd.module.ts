import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';


import { BalanceOLCDRoutingModule } from './balance-olcd-routing.module';
import { BalanceOLCDComponent } from './balance-olcd.component';



@NgModule({
  imports: [
    CommonModule,
    BalanceOLCDRoutingModule,
    DataTablesModule
    
  ],
  declarations: [BalanceOLCDComponent,BalanceOLCDComponent]
})
export class BalanceOLCDModule { }
