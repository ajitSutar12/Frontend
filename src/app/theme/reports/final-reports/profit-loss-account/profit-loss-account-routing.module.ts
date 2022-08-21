import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfitLossAccountComponent} from './profit-loss-account/profit-loss-account.component';

const routes: Routes = [{
  path: '',
  component:  ProfitLossAccountComponent,
  data: {
    title: 'Profit and loss account ',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfitLossAccountRoutingModule { }
