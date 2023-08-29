import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReconciliationTransactionEntryComponent } from './reconciliation-transaction-entry.component';

const routes: Routes = [
  {
    path: '',
    component: ReconciliationTransactionEntryComponent,
    data: {
      title: 'Recontion Ope Transt Ent',
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
export class ReconciliationTransactionEntryRoutingModule { }
