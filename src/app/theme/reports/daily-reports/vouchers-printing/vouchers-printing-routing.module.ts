import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { VouchersPrintingComponent } from './vouchers-printing.component';

const routes: Routes = [
  {
    path: '',
    component:  VouchersPrintingComponent,
    data: {
      title: 'Voucher Printing',
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
export class VouchersPrintingRoutingModule { }
