import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BalanceOLCDComponent } from './balance-olcd.component';

const routes: Routes = [
  {
    path: '',
    component: BalanceOLCDComponent,
    data: {
      title: 'Baln Of Lon, Cash Cr, Dispute Lon',
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
export class BalanceOLCDRoutingModule { }
