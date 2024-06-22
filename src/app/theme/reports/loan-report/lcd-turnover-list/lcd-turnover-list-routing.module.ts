import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LcdTurnoverListComponent } from './lcd-turnover-list.component'

const routes: Routes = [
  {
    path: '',
    component: LcdTurnoverListComponent ,
    data: {
      title: 'Loan Cash Cr Turnover List',
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
export class LcdTurnoverListRoutingModule { }
