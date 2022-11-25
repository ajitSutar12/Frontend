import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Loan Report ',
  icon: 'icon-home',
  caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
  status: true
},
children:[
  {
    path: 'loancashcreditac',
    loadChildren: () => import('./loancashcreditac-opensanctiondatewise/loancashcreditac-opensanctiondatewise.module').then(m => m.LoancashcreditacOpensanctiondatewiseModule)
  },
  {
    path: 'acwiseloanoverduelist',
    loadChildren: () => import('./acwise-loanoverdue-list/acwise-loanoverdue-list.module').then(m => m.AcwiseLoanoverdueListModule)
  },
  {
    path: 'duebalsummary',
    loadChildren: () => import('./duebal-summary/duebal-summary.module').then(m => m.DuebalSummaryModule)
  },
  {
    path: 'allsecuritydetailreport',
    loadChildren: () => import('./allsecurity-detail-report/allsecurity-detail-report.module').then(m => m.AllsecurityDetailReportModule)
  },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanReportRoutingModule { }
