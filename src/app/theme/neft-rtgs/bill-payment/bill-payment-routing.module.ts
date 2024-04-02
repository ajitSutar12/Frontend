import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillPaymentComponent } from './bill-payment.component';

const routes: Routes = [
  {
    path: '',
    component: BillPaymentComponent, 
    data: {
      title: 'Bill Payments',
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
export class BillPaymentRoutingModule { }
