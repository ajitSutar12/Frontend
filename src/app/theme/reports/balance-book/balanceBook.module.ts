import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceBookComponent } from './balance-book.component';
import {BalanceBookRoutingModule} from './balanceBook-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    BalanceBookRoutingModule,
    SharedModule
  ],
  declarations: [BalanceBookComponent]
})
export class BalanceBookModule { }
