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
  children: [
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

    {
      path: 'excessCashBalance',
      loadChildren: () => import('./excess-cash-balance/excess-cash-balance.module').then(m => m.ExcessCashBalanceModule)
    },
    {
      path: 'loanBalanceBetTwoDates',
      loadChildren: () => import('./loan-balance-bet-two-dates/loan-balance-bet-two-dates.module').then(m => m.LoanBalanceBetTwoDatesModule)
    },
    {
      path: 'statistical',
      loadChildren: () => import('./statistical/statistical.module').then(m => m.StatisticalModule)
    },
    {
      path: 'expensiveList',
      loadChildren: () => import('./expensive-list/expensive-list.module').then(m => m.ExpensiveListModule)
    },
    {
      path: 'WeeklyLedgerBalance',
      loadChildren: () => import('./weekly-ledger-balance/weekly-ledger-balance.module').then(m => m.WeeklyLedgerBalanceModule)
    },
    {
      path: 'crar',
      loadChildren: () => import('./crar/crar.module').then(m => m.CrarModule)
    },

    {
      path: 'memberIncreaseDecrease',
      loadChildren: () => import('./member-increase-decrease/member-increase-decrease.module').then(m => m.MemberIncreaseDecreaseModule)
    },
    {
      path: 'abrAlr',
      loadChildren: () => import('./abr-alr/abr-alr.module').then(m => m.AbrAlrModule)
    },
  
    {
      path: 'slr',
      loadChildren: () => import('./slr/slr.module').then(m => m.SlrModule)
    },
    {
      path: 'crr',
      loadChildren: () => import('./crr/crr.module').then(m => m.CrrModule)
    },
  ]

}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisReportsRoutingModule { }
