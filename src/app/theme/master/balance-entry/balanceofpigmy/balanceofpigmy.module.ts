import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';



import { BalanceofpigmyRoutingModule } from './balanceofpigmy-routing.module';
import { BalanceofpigmyComponent } from './balanceofpigmy.component';



@NgModule({
  imports: [
    CommonModule,
    BalanceofpigmyRoutingModule,
    DataTablesModule
    
  ],
  declarations: [BalanceofpigmyComponent,BalanceofpigmyComponent]
})
export class BalanceofpigmyModule { }
