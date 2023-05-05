import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { BvoucherComponent } from './b-voucher.component';
const routes: Routes = [
  {
    path: '',
    component: BvoucherComponent,
    data: {
      title: 'BatchVoucher',
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
export class  BvoucherRoutingModule { }