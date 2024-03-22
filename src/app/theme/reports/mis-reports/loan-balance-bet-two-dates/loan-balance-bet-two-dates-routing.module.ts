import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanBalanceBetTwoDatesComponent } from './loan-balance-bet-two-dates.component';

const routes: Routes = [ 
  {
  path: '',
  component: LoanBalanceBetTwoDatesComponent ,
  data: {
    title: 'Loan Balance Bet Two Dates Report ',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: false
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanBalanceBetTwoDatesRoutingModule { }
