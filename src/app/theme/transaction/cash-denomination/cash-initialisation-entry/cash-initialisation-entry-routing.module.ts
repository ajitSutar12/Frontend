import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CashInitialisationEntryComponent} from './cash-initialisation-entry.component';

const routes: Routes = [
  {
    path: '',
    component: CashInitialisationEntryComponent,
    data: {
      title: 'Cash Initi Entry',
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
export class CashInitialisationEntryRoutingModule { }