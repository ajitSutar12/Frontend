import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VoucherEntryComponent} from './voucher-entry.component';

const routes: Routes = [
  {
    path: '',
    component: VoucherEntryComponent,
    data: {
      title: 'voucher-entry',
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
export class VoucherEntryRoutingModule { }