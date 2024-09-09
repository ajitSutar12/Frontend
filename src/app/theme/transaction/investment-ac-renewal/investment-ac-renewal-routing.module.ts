import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestmentAcRenewalComponent } from './investment-ac-renewal.component';

const routes: Routes = [
  {
    path: '',
    component: InvestmentAcRenewalComponent,
    data: {
      title: 'Investment Account Renewal',
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
export class InvestmentAcRenewalRoutingModule { }
