import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LedgBwiseDlDetailsComponent} from './ledg-bwise-dl-details.component'

const routes: Routes = [
  {
    path: '',
    component:  LedgBwiseDlDetailsComponent,
    data: {
      title: 'Ledger BalWise Depo/LN Dtls',
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
export class LedgBwiseDlDetailsRoutingModule { }
