import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NProfitLossComponent} from './n-profit-loss/n-profit-loss.component'
const routes: Routes = [{
  path: '',
  component:  NProfitLossComponent,
  data: {
    title: ' N form profit and loss account',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NProfitLossRoutingModule { }
