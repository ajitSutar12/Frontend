import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AverageMonthlyPositionDebitCreditComponent } from './average-monthly-position-debit-credit.component';

const routes: Routes = [
  {
    path: '',
    component: AverageMonthlyPositionDebitCreditComponent ,
    data: {
      title: 'Average Monthly Position Debit Credit Report ',
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
export class AverageMonthlyPositionDebitCreditRoutingModule { }
