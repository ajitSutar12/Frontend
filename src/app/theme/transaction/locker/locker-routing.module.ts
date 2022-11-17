import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LockerComponent } from './locker.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Locker',
       status: false
    },
    children: [
    {
      path: 'lockerOpenTransaction',
      loadChildren: () => import('./locker-open-transaction/locker-open-transaction.module').then(m => m.LockerOpenTransactionModule)
    },

    {
      path: 'lockerCloseTransaction',
      loadChildren: () => import('./locker-close-transaction/locker-close-transaction.module').then(m => m.LockerCloseTransactionModule)
    },

    {
      path: 'lockerRentTransaction',
      loadChildren: () => import('./locker-rent-transactions/locker-rent-transactions.module').then(m => m.LockerRentTransactionModule)
    },

    // {
    //   path: 'cashOutDenomination',
    //   loadChildren: () => import('./cash-out-denomination/cash-out-denomination.module').then(m => m.CashOutDenominationModule)
    // },

    // {
    //   path: 'cashInitialisationEntry',
    //   loadChildren: () => import('./cash-initialisation-entry/cash-initialisation-entry.module').then(m => m.CashInitialisationEntryModule)
    // },

    // {
    //   path: 'safeValultToCashier',
    //   loadChildren: () => import('./safe-vault-to-cashier/safe-vault-to-cashier.module').then(m => m.SafeValultToCashierModule)
    // },

    // {
    //   path: 'cashierToSafeVault',
    //   loadChildren: () => import('./cashier-to-safe-vault/cashier-to-safe-vault.module').then(m => m.CashierToSafeVaultModule)
    // },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockerRoutingModule { }