import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  data: {
    title: 'MIS Reports ',
  icon: 'icon-home',
  caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
  status: true
},
children:[
{
    path: 'excessCashBalance',
    loadChildren: () => import('./excess-cash-balance/excess-cash-balance.module').then(m => m.ExcessCashBalanceModule)
  },
  {
    path: 'loanBalanceBetTwoDates',
    loadChildren: () => import('./loan-balance-bet-two-dates/loan-balance-bet-two-dates.module').then(m => m.LoanBalanceBetTwoDatesModule)
  },
  {
    path: 'swnidhi',
    loadChildren: () => import('./svnidhi/svnidhi.module').then(m => m.SvnidhiModule)
  },
  {
    path: 'MISInfo',
    loadChildren: () => import('./mis-information/mis-information.module').then(m => m.MisInformationModule)
  },
]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisReportsRoutingModule { }
