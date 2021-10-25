import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnapprovalVoucherComponent} from './unapproval-voucher.component';

const routes: Routes = [
  {
    path: '',
    component: UnapprovalVoucherComponent,
    data: {
      title: 'Unapproval Voucher',
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
export class UnapprovalVoucherRoutingModule { }
