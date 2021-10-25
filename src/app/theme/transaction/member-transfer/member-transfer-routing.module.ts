import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberTransferComponent} from './member-transfer.component';

const routes: Routes = [
  {
    path: '',
    // component: DividendPayComponent,
    data: {
      title: 'Member Transfer',
     
      status: false
    },
    children: [
      {
        path: 'MemberTransferTransaction',
        loadChildren: () => import('./member-transfer-transaction/member-transfer-transaction.module').then(m => m.MemberTransferTransactionModule)
      },
      {
        path: 'BranchAndSalaryDC',
        loadChildren: () => import('./branch-and-salary-dc/branch-and-salary-dc.module').then(m => m.BranchAndSalaryDCModule)
      },

      {
        path: 'TrasferredMemberOB',
        loadChildren: () => import('./trasferred-member-ob/trasferred-member-ob.module').then(m => m.TrasferredMemberOBModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberTransferRoutingModule { }