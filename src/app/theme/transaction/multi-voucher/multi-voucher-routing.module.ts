import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiVoucherComponent } from './multi-voucher.component';

const routes: Routes = [
  {
    path: '',
    component: MultiVoucherComponent,
    data: {
      title: 'Multi Voucher',
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
export class MultiVoucherRoutingModule { }