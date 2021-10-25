import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberLoanComponent} from './member-loan.component';

const routes: Routes = [
  {
    
    path: '',
    data: {
      title: 'Memeber Loan',
      status: false
    },
    children: [
    {
      path: 'loanApplication',
      loadChildren: () => import('./loan-application/loan-application.module').then(m => m.LoanApplicationModule)
    },
    {
      path: 'loanSanction',
      loadChildren: () => import('./loan-sanction/loan-sanction.module').then(m => m.LoanSanctionnModule)
    },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberLoanRoutingModule { }