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
      {
        path: 'monthlyRecoveryPrint',
        loadChildren: () => import('./monthly-recovery-print/monthly-recovery-print.module').then(m => m.MonthlyRecoveryPrintModule)
      },
      {
        path: 'monthlyRecoverySubsidiary',
        loadChildren: () => import('./monthly-recovery-subsidiary/monthly-recovery-subsidiary.module').then(m => m.MonthlyRecoverySubsidiaryModule)
      },
     
      {
        path: 'mrutunjay-register',
        loadChildren: () => import('./mrutunjay-register/mrutunjay-register.module').then(m => m.MrutunjayRegisterModule)
      },
      {
        path: 'shares-nominee-list',
        loadChildren: () => import('./shares-nominee-list/shares-nominee-list.module').then(m => m.SharesNomineeListModule)
      },
      {
        path: 'shares-account-label-print',
        loadChildren: () => import('./shares-account-label-print/shares-account-label-print.module').then(m => m.SharesAccountLabelPrintModule)
      },
     
      {
        path: 'birthday-wish',
        loadChildren: () => import('./birthday-wish/birthday-wish.module').then(m => m.BirthdayWishModule)
      },
      {
        path: 'dividentpaid',
        loadChildren: () => import('./dividentpaid/dividentpaid.module').then(m => m.DividentpaidModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharesReportsRoutingModule { }
