import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TermDepositReceiptPrintingComponent} from './term-deposit-receipt-printing.component';

const routes: Routes = [
  {
  
    path: '',
    component: TermDepositReceiptPrintingComponent,
    data: {
      title: 'T-Depo Recp Print',
      status: false
    },
    // children: [
    //   {
    //     path: 'depositReceiptPrint',
    //     loadChildren: () => import('./deposit-receipt-print/deposit-receipt-print.module').then(m => m.DepositReceiptPrintModule)
    //   },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermDepositReceiptPrintingRoutingModule { }