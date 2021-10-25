import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import {GeneralLedgerComponent} from './general-ledger.component';
import { LedgerViewComponent } from './ledger-view.component';
const routes: Routes = [
  {
    path: '',
    component: LedgerViewComponent,
    data: {
      title: 'Ledger View',
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
export class LedgerViewRoutingModule { }