import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnapprovalMultivoucherComponent} from './unapproval-multivoucher.component';

const routes: Routes = [
  {
    path: '',
    component: UnapprovalMultivoucherComponent,
    data: {
      title: 'Unapproval Multi Voucher',
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
export class UnapprovalMultivoucherrRoutingModule { }
