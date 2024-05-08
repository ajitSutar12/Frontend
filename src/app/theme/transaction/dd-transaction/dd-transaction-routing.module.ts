import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DdTransactionComponent } from './dd-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: DdTransactionComponent,
    data: {
      title: 'ddtransaction',
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
export class DdTransactionRoutingModule { }
