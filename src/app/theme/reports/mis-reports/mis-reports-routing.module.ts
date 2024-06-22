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
    path: 'crar',
    loadChildren: () => import('./crar/crar.module').then(m => m.CrarModule)
  },

  {
    path: 'overdueIncreaseDecrease',
    loadChildren: () => import('./overdue-increase-decrease/overdue-increase-decrease.module').then(m => m.OverdueIncreaseDecreaseModule)
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
    path: 'dailyVouchersInformation',
    loadChildren: () => import('./daily-vouches-information/daily-vouches-information.module').then(m => m.DailyVouchesInformationModule)
  },
  {
    path: 'slr',
    loadChildren: () => import('./slr/slr.module').then(m => m.SlrModule)
  },
  {
    path: 'crr',
    loadChildren: () => import('./crr/crr.module').then(m => m.CrrModule)
  },
  {
    path: 'loanBalanceBetTwoDates',
    loadChildren: () => import('./loan-balance-bet-two-dates/loan-balance-bet-two-dates.module').then(m => m.LoanBalanceBetTwoDatesModule)
  },
  {
    path: 'depositBalanceInTowDates',
    loadChildren: () => import('./deposite-balance-bet-two-days/deposite-balance-bet-two-days.module').then(m => m.DepositeBalanceBetTwoDaysModule)
  },
  {
    path: 'averageMonthlyPositionDrCr',
    loadChildren: () => import('./average-monthly-position-debit-credit/average-monthly-position-debit-credit.module').then(m => m.AverageMonthlyPositionDebitCreditModule)
  },
 
 
 
 
]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisReportsRoutingModule { }
