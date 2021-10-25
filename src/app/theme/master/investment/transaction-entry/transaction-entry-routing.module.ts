import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransactionEntryComponent} from './transaction-entry.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionEntryComponent,
    data: {
      title: 'Transaction Entry',
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
export class TransactionEntryRoutingModule { }
