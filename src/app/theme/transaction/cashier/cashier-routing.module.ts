import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CashierComponent } from './cashier.component';
const routes: Routes = [
  {
    path: '',
    component: CashierComponent,
    data: {
      title: 'Cashier',
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
export class  CashierRoutingModule { }