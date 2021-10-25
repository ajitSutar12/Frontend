import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceEntryComponent } from './balance-entry.component';
import { BalanceEntryRoutingModule } from './balance-entry-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import { LoanInstallmentEditAndCloseDateUpdationComponent } from './loan-installment-edit-and-close-date-updation/loan-installment-edit-and-close-date-updation.component';
// import { ReconciliationTransactionEntryComponent } from './reconciliation-transaction-entry/reconciliation-transaction-entry.component';



@NgModule({
  imports: [
    CommonModule,
    BalanceEntryRoutingModule,
    SharedModule
  ],
  declarations: [BalanceEntryComponent]
})
export class BalanceEntryModule { }
