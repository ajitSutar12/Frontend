import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceEntryComponent } from './balance-entry.component';
import { BalanceEntryRoutingModule } from './balance-entry-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import { LoanInstallmentEditAndCloseDateUpdationComponent } from './loan-installment-edit-and-close-date-updation/loan-installment-edit-and-close-date-updation.component';
// import { ReconciliationTransactionEntryComponent } from './reconciliation-transaction-entry/reconciliation-transaction-entry.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  imports: [
    CommonModule,
    BalanceEntryRoutingModule,
    SharedModule,
    NgSelectModule
  ],
  declarations: [BalanceEntryComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class BalanceEntryModule { }
