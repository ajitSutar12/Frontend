import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoldSilverReceiptPrintComponent } from './gold-silver-receipt-print.component';

const routes: Routes = [
  {
    path: '',
    component: GoldSilverReceiptPrintComponent,
    data: {
      title: 'GoldSilverReceiptPrint',
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
export class GoldSilverReceiptPrintRoutingModule { }
