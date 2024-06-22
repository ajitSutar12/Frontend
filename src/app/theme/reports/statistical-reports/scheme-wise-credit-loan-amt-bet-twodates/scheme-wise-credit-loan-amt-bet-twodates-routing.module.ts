import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchemeWiseCreditLoanAmtBetTwodatesComponent } from './scheme-wise-credit-loan-amt-bet-twodates.component';

const routes: Routes = [
  {
    path: '',
    component: SchemeWiseCreditLoanAmtBetTwodatesComponent ,
    data: {
      title: 'Scheme Wise Credit Loan Bet Two Dates Report ',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemeWiseCreditLoanAmtBetTwodatesRoutingModule { }
