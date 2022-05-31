import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reports',
      status: false
    },
    children: [
      {
        path: 'allReportsWithSearching',
        loadChildren: () => import('./all-reports-with-searching/allReportsWithSearching.module').then(m => m.AllReportsWithSearchingModule)
      },
      ///
      {
        path: 'dailyReports',
        loadChildren: () => import('./daily-reports/dailyReports.module').then(m => m.DailyReportsModule)
      },
      //
      {
        path: 'statement',
        loadChildren: () => import('./statement/statement.module').then(m => m.StatementModule)
      },
      //
      {
        path: 'balanceBook',
        loadChildren: () => import('./balance-book/balanceBook.module').then(m => m.BalanceBookModule)
      },
      //
      {
        path: 'registers',
        loadChildren: () => import('./registers/registers.module').then(m => m.RegistersModule)
      },
      //
      {
        path: 'denominationReports',
        loadChildren: () => import('./denomination-reports/denominationReports.module').then(m => m.DenominationReportsModule)
      },
      //
      {
        path: 'termDepositReports',
        loadChildren: () => import('./term-deposit-reports/termDepositReports.module').then(m => m.TermDepositReportsModule)
      },
      //
      {
        path: 'loanReports',
        loadChildren: () => import('./loan-reports/loanReports.module').then(m => m.LoanReportsModule)
      },
      //
      {
        path: 'npaReports',
        loadChildren: () => import('./npa-reports/npaReports.module').then(m => m.NpaReportsModule)
      },
      //
      {
        path: 'sharesARR',
        loadChildren: () => import('./shares-arr/sharesARR.module').then(m => m.SharesARRModule)
      },
      //
      {
        path: 'sharesADR',
        loadChildren: () => import('./shares-adr/sharesADR.module').then(m => m.SharesADRModule)
      },
      //
      {
        path: 'nottice',
        loadChildren: () => import('./nottice/nottice.module').then(m => m.NotticeModule)
      },
      //
      {
        path: 'otherReports',
        loadChildren: () => import('./other-reports/otherReports.module').then(m => m.OtherReportsModule)
      },
      //
      {
        path: 'misReports',
        loadChildren: () => import('./mis-reports/misReports.module').then(m => m.MisReportsModule)
      },
      //
      {
        path: 'finalReports',
        loadChildren: () => import('./final-reports/finalReports.module').then(m => m.FinalReportsModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
