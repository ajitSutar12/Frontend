import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DeadStockMasterComponent } from './dead-stock-master.component';
const routes: Routes = [
  {
    path: '',
    component:  DeadStockMasterComponent,
    data: {
      title: 'Dead Stock Master',
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
export class  DeadStockMasterRoutingModule { }