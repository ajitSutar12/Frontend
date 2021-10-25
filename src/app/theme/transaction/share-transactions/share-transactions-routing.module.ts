import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShareTransactionsComponent} from './share-transactions.component';

const routes: Routes = [
  {
    path: '',
    component: ShareTransactionsComponent,
    data: {
      title: 'Share Transactions',
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
export class ShareTransactionsRoutingModule { }