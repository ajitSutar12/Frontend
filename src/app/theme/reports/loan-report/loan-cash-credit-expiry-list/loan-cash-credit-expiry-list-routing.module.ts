import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanCashCreditExpiryListComponent } from './loan-cash-credit-expiry-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoanCashCreditExpiryListComponent,
    data: {
      title: 'Deposits Amount Classfication',
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
export class LoanCashCreditExpiryListRoutingModule { }
