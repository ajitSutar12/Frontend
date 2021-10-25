import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CashDenominationComponent} from './cash-denomination.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cash denomination',
       status: false
    },
    children: [
    {
      path: 'acceptD',
      loadChildren: () => import('./accept-d/accept-d.module').then(m => m.AcceptDModule)
    },

    {
      path: 'paymentDenomination',
      loadChildren: () => import('./payment-denomination/payment-denomination.module').then(m => m.PaymentDenominationModule)
    },

    {
      path: 'cashInDenomination',
      loadChildren: () => import('./cash-in-denomination/cash-in-denomination.module').then(m => m.CashInDenominationModule)
    },

    {
      path: 'cashOutDenomination',
      loadChildren: () => import('./cash-out-denomination/cash-out-denomination.module').then(m => m.CashOutDenominationModule)
    },

    {
      path: 'cashInitialisationEntry',
      loadChildren: () => import('./cash-initialisation-entry/cash-initialisation-entry.module').then(m => m.CashInitialisationEntryModule)
    },

    {
      path: 'safeValultToCashier',
      loadChildren: () => import('./safe-vault-to-cashier/safe-vault-to-cashier.module').then(m => m.SafeValultToCashierModule)
    },

    {
      path: 'cashierToSafeVault',
      loadChildren: () => import('./cashier-to-safe-vault/cashier-to-safe-vault.module').then(m => m.CashierToSafeVaultModule)
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashDenominationRoutingModule { }