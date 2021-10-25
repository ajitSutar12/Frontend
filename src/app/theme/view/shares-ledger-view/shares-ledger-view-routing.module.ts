import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharesLedgerViewComponent} from './shares-ledger-view.component';

const routes: Routes = [
  {
    path: '',
    component: SharesLedgerViewComponent,
    data: {
      title: 'Shares Ledger View',
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
export class SharesLedgerViewRoutingModule { }