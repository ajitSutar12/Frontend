import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CashierToSafeVaultComponent} from './cashier-to-safe-vault.component';

const routes: Routes = [
  {
    path: '',
    component: CashierToSafeVaultComponent,
    data: {
      title: 'Cashier-Safe Vault',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierToSafeVaultRoutingModule { }