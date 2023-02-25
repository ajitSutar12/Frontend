import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanOverdueReportComponent} from './loan-overdue-report.component'
const routes: Routes = [
  {
    path: '',
    component:LoanOverdueReportComponent  , 
    data: {
      title: 'Loan Overdue Report',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit', 
      status: true
    },
    // children:[
    //   {
    //       path: 'DDRelative-Report',
    //       loadChildren: () => import('./ddrelative-report/ddrelative-report.module').then(m => m.DDRelativeReportModule)
    //     },
    //     {
    //       path: 'DDRelative-Report-performa1',
    //       loadChildren: () => import('./dd-relative-proform/dd-relative-proform.module').then(m => m.DdRelativeProformModule)
    //     },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanOverdueReportRoutingModule { } 
