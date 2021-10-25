import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';



import { BalanceOSCDARoutingModule } from './balance-oscda-routing.module';
import { BalanceOSCDAComponent } from './balance-oscda.component';



@NgModule({
  imports: [
    CommonModule,
    BalanceOSCDARoutingModule,
    DataTablesModule
    
  ],
  declarations: [BalanceOSCDAComponent, BalanceOSCDAComponent]
})
export class BalanceOSCDAModule { }
