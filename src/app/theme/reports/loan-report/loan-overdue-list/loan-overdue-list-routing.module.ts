import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanOverdueListComponent} from './loan-overdue-list.component'
const routes: Routes = [
  {
    path: '',
    component:LoanOverdueListComponent  , 
    data: {
      title: 'Loan Overdue List',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit', 
      status: true
    },
    children:[
      {
          path: 'DDRelative-Report',
          loadChildren: () => import('./ddrelative-report/ddrelative-report.module').then(m => m.DDRelativeReportModule)
        },
        {
          path: 'DDRelative-Report-performa1',
          loadChildren: () => import('./dd-relative-proform/dd-relative-proform.module').then(m => m.DdRelativeProformModule)
        },
        {
          path: 'loanoverduereport',
          loadChildren: () => import('./loan-overdue-report/loan-overdue-report.module').then(m => m.LoanOverdueReportModule)
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanOverdueListRoutingModule { }
