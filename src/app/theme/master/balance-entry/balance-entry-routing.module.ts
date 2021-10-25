import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceEntryComponent } from './balance-entry.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Balance Entry',
      status: false
    },
    children: [
      {
        path: 'balanceUpdation',
        loadChildren: () => import('./balance-updation/balance-updation.module').then(m => m.BalanceUpdationModule)
      },
      {
        path: 'balanceOSCDA',
        loadChildren: () => import('./balance-oscda/balance-oscda.module').then(m => m.BalanceOSCDAModule)
      },
      {
        path: 'balanceofpigmy',
        loadChildren: () => import('./balanceofpigmy/balanceofpigmy.module').then(m => m.BalanceofpigmyModule)
      },
      {
        path: 'balanceOLCD',
        loadChildren: () => import('./balance-olcd/balance-olcd.module').then(m => m.BalanceOLCDModule)
      },

      {
        path: 'memberWBA',
        loadChildren: () => import('./member-wba/member-wba.module').then(m => m.MemberWBAModule)
      },

      {
        path: 'member',
        loadChildren: () => import('./member/member.module').then(m => m.MemberModule)
      },

      {
        path: 'reconciliationOTE',
        loadChildren: () => import('./reconciliation-ote/reconciliation-ote.module').then(m => m.ReconciliationOTEModule)
      },

      {
        path: 'reconciliationTE',
        loadChildren: () => import('./reconciliation-transaction-entry/reconciliation-transaction-entry.module').then(m => m.ReconciliationTransactionEntryModule)
      },

      {
        path: 'loanieacdu',
        loadChildren: () => import('./loan-installment-edit-and-close-date-updation/loan-installment-edit-and-close-date-updation.module').then(m => m.ReconciliationTransactionEntryModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceEntryRoutingModule { }
