import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeadStockPurchaseComponent} from './dead-stock-purchase.component';

const routes: Routes = [
  {
    path: '',
    component: DeadStockPurchaseComponent,
    data: {
      title: 'Dead Stock Purchase',
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
export class DeadStockPurchaseRoutingModule { }