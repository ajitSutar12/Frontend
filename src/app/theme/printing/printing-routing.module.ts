import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Printing',
      status: false
    },
    children: [
      {
        path: 'passbookPrinting',
        loadChildren: () => import('./passbook-printing/passbook-printing.module').then(m => m.PassbookPrintingModule)
      },
      {
        path: 'termDepositReceiptPrinting',
        loadChildren: () => import('./term-deposit-receipt-printing/term-deposit-receipt-printing.module').then(m => m.TermDepositReceiptPrintingModule)
      },
      {
        path: 'voucherPrint',
        loadChildren: () => import('./voucher-printing/voucher-printing.module').then(m =>m.VoucherPrintingModule)
      },
      {
        path: 'goldSilverReceipt',
        loadChildren: () => import('./gold-silver-receipt-print/gold-silver-receipt-print.module').then(m => m.GoldSilverReceiptPrintModule)
      },
      {
        path: 'tDReceiptPrinting',
        loadChildren: () => import('./td-recipt-printing/td-recipt-printing.module').then(m => m.TdReciptPrintingModule)
      },
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintingRoutingModule { }
