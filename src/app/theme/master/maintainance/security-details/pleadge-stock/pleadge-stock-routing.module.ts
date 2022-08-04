import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PleadgeStockComponent } from './pleadge-stock.component';

const routes: Routes = [
  {
    path: '',
    component: PleadgeStockComponent,
    data: {
      title: 'Pleadge Stock',
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
export class PleadgeStockRoutingModule { }
