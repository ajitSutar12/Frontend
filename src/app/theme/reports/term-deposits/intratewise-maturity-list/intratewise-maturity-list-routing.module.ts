import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntratewiseMaturityListComponent } from './intratewise-maturity-list.component';

const routes: Routes = [{
  path: '',
  component: IntratewiseMaturityListComponent ,
  data: {
    title: 'matured not closed',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntratewiseMaturityListRoutingModule { }
