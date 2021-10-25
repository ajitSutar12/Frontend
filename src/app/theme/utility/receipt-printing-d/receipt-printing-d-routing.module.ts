import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReceiptPrintingDComponent } from './receipt-printing-d.component';

const routes: Routes = [
  {
    path: '',
    component: ReceiptPrintingDComponent,
    data: {
      title: 'Receipt Printing Designing',
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
export class ReceiptPrintingDRoutingModule { }
