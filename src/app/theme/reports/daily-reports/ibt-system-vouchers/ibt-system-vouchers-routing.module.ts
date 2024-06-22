import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IbtSystemVouchersComponent } from './ibt-system-vouchers.component';

const routes: Routes = [
  {
    path: '',
    component: IbtSystemVouchersComponent ,
    data: {
      title: 'IBT System Voucher',
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
export class IbtSystemVouchersRoutingModule { }
