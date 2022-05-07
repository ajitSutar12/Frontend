import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkRegDeadStockComponent } from './bnk-reg-dead-stock.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkRegDeadStockComponent,
    data: {
      title: 'Deadstock Register',
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
export class  BnkRegDeadStockRoutingModule { }