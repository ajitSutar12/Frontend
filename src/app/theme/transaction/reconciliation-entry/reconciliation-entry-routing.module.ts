import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReconciliationEntryComponent} from './reconciliation-entry.component';

const routes: Routes = [
  {
    path: '',
    component: ReconciliationEntryComponent,
    data: {
      title: 'Reconciliation Entry',
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
export class ReconciliationEntryRoutingModule { }