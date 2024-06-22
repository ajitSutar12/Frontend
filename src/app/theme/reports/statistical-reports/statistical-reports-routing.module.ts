import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { data } from 'jquery';

const routes: Routes = [{
  path: '',
  data: {
  title: 'Statistical Returns ',
  icon: 'icon-home',
  caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
  status: true
},
children:[
{
    path: 'memberTypewiseDepositClassification',
    loadChildren: () => import('./member-typewise-deposit-classification/member-typewise-deposit-classification.module').then(m => m.MemberTypewiseDepositClassificationModule)
  },
  {
    path: 'schemewiseCreditLoanAmtBet2dates',
    loadChildren: () => import('./scheme-wise-credit-loan-amt-bet-twodates/scheme-wise-credit-loan-amt-bet-twodates.module').then(m => m.SchemeWiseCreditLoanAmtBetTwodatesModule)
  },

]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticalReportsRoutingModule { }
