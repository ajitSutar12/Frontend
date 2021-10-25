import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PaymentDenominationComponent} from './payment-denomination.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentDenominationComponent,
    data: {
      title: 'Payment Denomination',
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
export class PaymentDenominationRoutingModule { }