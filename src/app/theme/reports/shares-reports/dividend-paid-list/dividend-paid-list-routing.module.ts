import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DividendPaidListComponent } from './dividend-paid-list.component';

const routes: Routes = [
  {
    path: '',
    component:  DividendPaidListComponent,
    data: {
      title: 'Investment Register(Open/Closed)',
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
export class DividendPaidListRoutingModule { }
