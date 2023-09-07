import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DepositLoanInterestRateEditChangeComponent } from './deposit-loan-interest-rate-edit-change.component';


const routes: Routes = [
  {
    path: '',
    component: DepositLoanInterestRateEditChangeComponent,
    data: {
      title: 'Deposite Loan Interest ',
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
export class DepositLoanInterestRateEditChangeRoutingModule { }
