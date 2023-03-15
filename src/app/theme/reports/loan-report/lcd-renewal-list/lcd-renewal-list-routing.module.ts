import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LcdRenewalListComponent } from './lcd-renewal-list.component'

const routes: Routes = [
  {
    path: '',
    component: LcdRenewalListComponent ,
    data: {
      title: 'Loan Cash Credit Renewal List Report ',
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
export class LcdRenewalListRoutingModule { }
