import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockerCloseTransactionComponent } from './locker-close-transaction.component';

const routes: Routes = [{
  path: '',
  component: LockerCloseTransactionComponent,
  data: {
    title: 'Locker Close Transaction',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockerCloseTransactionRoutingModule { }
