import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CashierUMComponent } from './cashier-um.component';

const routes: Routes = [
  {
    path: '',
    component: CashierUMComponent,
    data: {
      title: 'Cashier User Maintainance',
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
export class CashierUMRoutingModule { }
