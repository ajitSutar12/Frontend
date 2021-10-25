import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import {GeneralLedgerComponent} from './general-ledger.component';
import { MasterCardComponent } from './master-card.component';

const routes: Routes = [
  {
    path: '',
    component: MasterCardComponent,
    data: {
      title: 'Master Card',
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
export class MasterCardRoutingModule { }