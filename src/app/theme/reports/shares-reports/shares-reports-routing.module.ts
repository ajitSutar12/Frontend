import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {SharesReportsComponent} from './shares-reports.component'
const routes: Routes = [
  {
    path: '',
    // component:  SharesReportsComponent,
    data: {
      title: 'Shares Report',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    },
    children:[
      {
        path: 'cityMemberList',
        loadChildren: () => import('./citywise-member-list/citywise-member-list.module').then(m => m.CitywiseMemberListModule)
      },
      {
        path: 'dividendPaidList',
        loadChildren: () => import('./dividend-paid-list/dividend-paid-list.module').then(m => m.DividendPaidListModule)
      },
      {
        path: 'sharesIssueRegister',
        loadChildren: () => import('./shares-issue-register/shares-issue-register.module').then(m => m.SharesIssueRegisterModule)
      },
      {
        path: 'sharesReturnRegister',
        loadChildren: () => import('./shares-return-register/shares-return-register.module').then(m => m.SharesReturnRegisterModule)
      },
      {
        path: 'sharesTransferRegister',
        loadChildren: () => import('./shares-transfer-register/shares-transfer-register.module').then(m => m.SharesTransferRegisterModule)
      },
      {
        path: 'unpaidDividendList',
        loadChildren: () => import('./unpaid-dividend-list/unpaid-dividend-list.module').then(m => m.UnpaidDividendListModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharesReportsRoutingModule { }
