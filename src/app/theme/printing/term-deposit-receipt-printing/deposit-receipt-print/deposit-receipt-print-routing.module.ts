import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepositReceiptPrintComponent} from './deposit-receipt-print.component';

const routes: Routes = [
  {
    path: '',
    component: DepositReceiptPrintComponent,
    data: {
      title: 'DepositReceiptPrint',
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
export class DepositReceiptPrintRoutingModule { }
