import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RecoveryCwBalanceComponent } from './recovery-cw-balance.component'

const routes: Routes = [
  {
    path: '',
    component: RecoveryCwBalanceComponent ,
    data: {
      title: 'Citywise LN BalReport ',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoveryCwBalanceRoutingModule { }
