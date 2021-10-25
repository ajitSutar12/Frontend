import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { BatchVoucherComponent } from './batch-voucher.component';
const routes: Routes = [
  {
    path: '',
    component: BatchVoucherComponent,
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
export class  BatchVoucherRoutingModule { }