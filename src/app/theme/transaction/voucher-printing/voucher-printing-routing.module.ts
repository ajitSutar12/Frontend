import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VoucherPrintingComponent} from './voucher-printing.component';

const routes: Routes = [
  {
    path: '',
    component: VoucherPrintingComponent,
    data: {
      title: 'voucher-printing',
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
export class VoucherPrintingRoutingModule { }
