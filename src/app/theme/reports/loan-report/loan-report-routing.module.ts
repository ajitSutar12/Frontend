import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanOverdueListModule } from '../npa-reports/loan-overdue-list/loan-overdue-list.module';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Loan Report',
  icon: 'icon-home',
  caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
  status: true
},
children:[

// {
//   path:'loanoverduelist',
//   loadChildren: () => import('../npa-reports/loan-overdue-list/loan-overdue-list.module').then(m =>m.LoanOverdueListModule)
// },
  {
    path: 'loansecurityreport',
    loadChildren: () => import('./loan-security-report/loan-security-report.module').then(m => m.LoanSecurityReportModule)
  },

  {
    path: 'citiwiseLoanBalancereport',
    loadChildren: () => import('./citiwise-loan-balance/citiwise-loan-balance.module').then(m => m.CitiwiseLoanBalanceModule)
  },
  {
    path: 'lcdLessdraftReport',
    loadChildren: () => import('./lcd-lessdraft-report/lcd-lessdraft-report.module').then(m => m.LcdLessdraftReportModule)
  },
  {
    path: 'lcdOverdraftReport',
    loadChildren: () => import('./lcd-overdraft-report/lcd-overdraft-report.module').then(m => m.LcdOverdraftReportModule)
  },
  {
    path: 'lcd-renewal-list',
    loadChildren: () => import('./lcd-renewal-list/lcd-renewal-list.module').then(m => m.LcdRenewalListModule)
  },
  {
    path: 'lcd-turnover-list',
    loadChildren: () => import('./lcd-turnover-list/lcd-turnover-list.module').then(m => m.LcdTurnoverListModule)
  },
  {
    path: 'penalinterestlist',
    loadChildren: () => import('./penal-interest-list/penal-interest-list.module').then(m => m.PenalInterestListModule)
  },
  {
    path: 'pendingStockStatementlist',
    loadChildren: () => import('./pending-stock-statement-list/pending-stock-statement-list.module').then(m => m.PendingStockStatementListModule)
  },
  {
    path: 'receivedStockstatementList',
    loadChildren: () => import('./received-stock-statement/received-stock-statement.module').then(m => m.ReceivedStockStatementModule)
  },
  {
    path: 'recoverycwBalanceList',
    loadChildren: () => import('./recovery-cw-balance/recovery-cw-balance.module').then(m => m.RecoveryCwBalanceModule)
  },
  {
    path: 'receivableInstallInterest',
    loadChildren: () => import('./loan-receivableinst-intrest/loan-receivableinst-intrest.module').then(m => m.LoanReceivableinstIntrestModule)
  },
  {
    path: 'loanExpiredList',
    loadChildren: () => import('./loan-expired-list/loan-expired-list.module').then(m => m.LoanExpiredListModule)
  },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanReportRoutingModule { }
