import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransactionPassingComponent} from './transaction-passing.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionPassingComponent,
    data: {
      title: 'Transaction Passing',
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
export class TransactionPassingRoutingModule { }
