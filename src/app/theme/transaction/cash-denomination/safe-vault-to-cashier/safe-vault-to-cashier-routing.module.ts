import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SafeVaultToCashierComponent} from './safe-vault-to-cashier.component';

const routes: Routes = [
  {
    path: '',
    component: SafeVaultToCashierComponent,
    data: {
      title: 'Safe Vault-Cashier',
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
export class SafeValultToCashierRoutingModule { }