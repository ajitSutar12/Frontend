import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReductionStatementForLoanComponent } from './reduction-statement-for-loan.component';

const routes: Routes = [
  {
    path: '',
    component: ReductionStatementForLoanComponent ,
    data: {
      title: 'Reduction Statement For Loan Report ',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReductionStatementForLoanRoutingModule { }
