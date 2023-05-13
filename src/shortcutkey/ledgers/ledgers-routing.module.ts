import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import {GeneralLedgerComponent} from './general-ledger.component';
import { LedgersComponent } from './ledgers.component';
const routes: Routes = [
  {
    path: '',
    component: LedgersComponent,
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
export class LedgersRoutingModule { }