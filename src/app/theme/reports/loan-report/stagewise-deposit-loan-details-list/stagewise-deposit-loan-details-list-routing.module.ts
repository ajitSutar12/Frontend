import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StagewiseDepositLoanDetailsListComponent } from './stagewise-deposit-loan-details-list.component';

const routes: Routes = [
  {
    path: '',
    component: StagewiseDepositLoanDetailsListComponent ,
    data: {
      title: 'Stagewise Dispute Loan Details List',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagewiseDepositLoanDetailsListRoutingModule { }
