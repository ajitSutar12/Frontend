import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvestmentComponent} from './investment.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Investment',
      status: false
    },
    children: [
    
      {
        path: 'transactionEntry',
        loadChildren: () => import('./transaction-entry/transaction-entry.module').then(m => m.TransactionEntryModule)
      },
      {
        path: 'accountClosing',
        loadChildren: () => import('./account-closing/account-closing.module').then(m => m.AccountClosingModule)
      },
      {
        path: 'accountOpenPassing',
        loadChildren: () => import('./account-open-passing/account-open-passing.module').then(m => m.AccountOpenPassingModule)
      },
      {
        path: 'transactionPassing',
        loadChildren: () => import('./transaction-passing/transaction-passing.module').then(m => m.TransactionPassingModule)
      },
      {
        path: 'accountClosePassing',
        loadChildren: () => import('./account-close-passing/account-close-passing.module').then(m => m.AccountClosePassingModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentRoutingModule { }
