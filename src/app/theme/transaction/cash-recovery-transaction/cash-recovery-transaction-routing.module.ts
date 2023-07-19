import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CashRecoveryTransactionComponent} from './cash-recovery-transaction.component'

const routes: Routes = [
  {
    path: '',
    component:  CashRecoveryTransactionComponent,
    data: {
      title: 'Cash Recovery Transaction',
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
export class CashRecoveryTransactionRoutingModule { }
