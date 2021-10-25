import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnapprovalComponent} from './unapproval.component';

const routes: Routes = [
  
    {
      path: '',
    data: {
      title: 'Unapproval',
      status: false
    },
    children: [
      {
        path: 'unapprovalMultivoucher',
        loadChildren: () => import('./unapproval-multivoucher/upproval-multivoucher.module').then(m => m.UnapprovalMultivoucherrModule)
      },
      {
        path: 'unapprovalVoucher',
        loadChildren: () => import('./unapproval-voucher/unapproval-voucher.module').then(m => m.UnapprovalVoucheModule)
      },
      {
        path: 'unapprovalDepositClosing',
        loadChildren: () => import('./unapproval-deposit-closing/unapproval-deposit-closing.module').then(m => m.UnapprovalDepositClosingModule)
      },
      {
        path: 'unapprovalDepositPosting',
        loadChildren: () => import('./unapproval-deposit-posting/unapproval-deposit.module').then(m => m.UnapprovalDepositPostingModule)
      },
    ]
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnapprovalRoutingModule { }
