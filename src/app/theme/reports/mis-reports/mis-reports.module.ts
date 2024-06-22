import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisReportsRoutingModule } from './mis-reports-routing.module';
import { ExcessCashBalanceComponent } from './excess-cash-balance/excess-cash-balance.component';
import { CrarComponent } from './crar/crar.component';
import { OverdueIncreaseDecreaseComponent } from './overdue-increase-decrease/overdue-increase-decrease.component';
import { MemberIncreaseDecreaseComponent } from './member-increase-decrease/member-increase-decrease.component';
import { DailyVouchesInformationComponent } from './daily-vouches-information/daily-vouches-information.component';
import { SlrComponent } from './slr/slr.component';
import { LoanBalanceBetTwoDatesComponent } from './loan-balance-bet-two-dates/loan-balance-bet-two-dates.component';
import { AverageMonthlyPositionDebitCreditComponent } from './average-monthly-position-debit-credit/average-monthly-position-debit-credit.component';
import { Iframe5Module } from '../pigmy-report/iframe5/iframe5.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MisReportsRoutingModule,
    Iframe5Module
  ],
})
export class MisReportsModule { }
