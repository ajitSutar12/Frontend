import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FinalReportsComponent} from './final-reports.component';

const routes: Routes = [
  {
    path: '',
    // component: FinalReportsComponent,
    data: {
      title: 'Final Reports',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    },
    children:[
      {
        path: 'BnkTrialBal',
        loadChildren: () => import('./bnk-trial-bal/bnk-trial-bal.module').then(m => m.BnkTrialBalModule)
      },
      {
        path: 'BnkTrialBaldetail',
        loadChildren: () => import('./bnk-trial-baldetail/bnk-trial-baldetail.module').then(m => m.BnkTrialBaldetailModule)
      },
      {
        path: 'RecePayRep',
        loadChildren: () => import('./rece-pay-rep/rece-pay-rep.module').then(m => m.RecePayRepModule)
      },
      {
        path: 'BalanceSheet',
        loadChildren: () => import('./balance-sheet/balance-sheet.module').then(m => m.BalanceSheetModule)
      },
      {
        path: 'ProfitLossAccount',
        loadChildren: () => import('./profit-loss-account/profit-loss-account.module').then(m => m.ProfitLossAccountModule)
      },
      {
        path: 'NProfitLoss',
        loadChildren: () => import('./n-profit-loss/n-profit-loss.module').then(m => m.NProfitLossModule)
      },
      {
        path: 'NBalanceSheet',
        loadChildren: () => import('./n-balance-sheet/n-balance-sheet.module').then(m => m.NBalanceSheetModule)
      },
      {
        path: 'RecePayRepDetails',
        loadChildren: () => import('./rece-pay-rep-details/rece-pay-rep-details.module').then(m => m.RecePayRepDetailsModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalReportsRoutingModule { }
