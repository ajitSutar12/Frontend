import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntratewiseBalancelistComponent } from './intratewise-balancelist.component';

const routes: Routes = [ {
  path: '',
  component: IntratewiseBalancelistComponent ,
  data: {
    title: 'matured but not closed',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntratewiseBalancelistRoutingModule { }
