import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LockerRentTransactionsComponent} from './locker-rent-transactions.component';

const routes: Routes = [
  {
    path: '',
    component: LockerRentTransactionsComponent,
    data: {
      title: 'Locker Rent Transactions',
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
export class LockerRentTransactionRoutingModule { }