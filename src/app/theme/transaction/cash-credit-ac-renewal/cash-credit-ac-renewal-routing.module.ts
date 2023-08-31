import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CashCreditAcRenewalComponent} from './cash-credit-ac-renewal.component';

const routes: Routes = [
  {
    path: '',
    component: CashCreditAcRenewalComponent,
    data: {
      title: 'Cash CR AC Renewal',
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
export class CashCreditAcRenewalRoutingModule { }