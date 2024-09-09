import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'neftRtgs',
      status: false
    },
    children: [
      {
        path: 'neftTransfer',
        loadChildren: () => import('./neft-transaction/neft-transaction.module').then(m => m.NeftTransactionModule)
      },
      {
        path: 'rtgsTransfer',
        loadChildren: () => import('./rtgs-transaction/rtgs-transaction.module').then(m => m.RtgsTransactionModule)
      },
      {
        path: 'billPayment',
        loadChildren: () => import('./bill-payment/bill-payment.module').then(m =>m.BillPaymentModule)
      },
      {
        path: 'fundTransfer',
        loadChildren: () => import('./fund-transfer/fund-transfer.module').then(m => m.FundTransferModule)
      },
      {
        path: 'cibilScore',
        loadChildren: () => import('./cibil-score/cibil-score.module').then(m => m.CibilScoreModule)
      },
    ]
  }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeftRtgsRoutingModule { }
