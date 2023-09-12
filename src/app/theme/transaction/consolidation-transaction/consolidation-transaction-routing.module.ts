import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsolidationTransactionComponent} from './consolidation-transaction.component'

const routes: Routes = [
  {
    path: '',
    component: ConsolidationTransactionComponent,
    data: {
      title: 'Consolidation Transaction',
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
export class ConsolidationTransactionRoutingModule { }
