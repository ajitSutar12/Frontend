import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DeadStockPComponent } from './dead-stock-p.component';

const routes: Routes = [
  {
    path: '',
    component: DeadStockPComponent,
    data: {
      title: 'Dead Stock Process',
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
export class DeadStockPRoutingModule { }
