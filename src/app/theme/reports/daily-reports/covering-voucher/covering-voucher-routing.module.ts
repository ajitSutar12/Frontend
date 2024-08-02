import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoveringVoucherComponent } from './covering-voucher.component';

const routes: Routes = [
  {
    path: '',
    component: CoveringVoucherComponent,
    data: {
      title: 'Interest (Expeted Debit)',
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
export class CoveringVoucherRoutingModule { }
