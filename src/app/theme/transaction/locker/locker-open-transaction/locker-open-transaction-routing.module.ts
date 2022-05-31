import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LockerOpenTransactionComponent} from './locker-open-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: LockerOpenTransactionComponent,
    data: {
      title: 'Locker Open Transaction',
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
export class LockerOpenTransactionRoutingModule { }