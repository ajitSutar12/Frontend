import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IframecomponentComponent } from './iframecomponent/iframecomponent.component'
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
        path: 'Termdeposit',
        loadChildren: () => import('./term-deposits/term-deposits.module').then(m => m.TermDepositsModule)
      },
      //
     
      //
      {
        path: 'npaReports',
        loadChildren: () => import('./npa-reports/npa-reports.module').then(m => m.NpaReportsModule)
      },
      //
      
      {
        path: 'SharesReports',
        loadChildren: () => import('./shares-reports/shares-reports.module').then(m => m.SharesReportsModule)
      },
      //
      // {
      //   path: 'nottice',
      //   loadChildren: () => import('./nottice/nottice.module').then(m => m.NotticeModule)
      // },
      //
      {
        path: 'otherReports',
        loadChildren: () => import('./other-reports/otherReports.module').then(m => m.OtherReportsModule)
      },
      //
      {
        path: 'misReports',
        loadChildren: () => import('./mis-reports/mis-reports.module').then(m => m.MisReportsModule)
      },
      
      {
        path: 'finalReports',
        loadChildren: () => import('./final-reports/finalReports.module').then(m => m.FinalReportsModule)
      },
      //
      // {
      //   path: 'Report_Frame',
      //   loadChildren: () => import('./report-frame/report-frame.Module').then(m => m.ReportFrameModule)
      // },
      //
      {
        path: 'PigmyReport',
        loadChildren: () => import('./pigmy-report/pigmy-report.module').then(m => m.PigmyReportModule)
      },
      {
        path: 'LoanReport',
        loadChildren: () => import('./loan-report/loan-report.module').then(m => m.LoanReportModule)
      },
      {
        path: 'RecoveryReport',
        loadChildren: () => import('./recovery-reports/recovery-reports.module').then(m => m.RecoveryReportsModule)
      },
      //
      {
        path: 'iframecomponent',
        component:IframecomponentComponent
      },
      {
        path: 'EmployeeSocity',
        loadChildren: () => import('./employee-socity/employee-socity.module').then(m => m.EmployeeSocityModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
