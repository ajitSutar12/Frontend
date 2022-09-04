import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoanReportsComponent} from './loan-reports.component';

const routes: Routes = [
  {
    path: '',
    component: LoanReportsComponent,
    data: {
      title: 'Loan Reports',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanReportsRoutingModule { }
