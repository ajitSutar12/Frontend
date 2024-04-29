import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RtgsNeftPassingComponent} from './rtgs-neft-passing.component'
const routes: Routes = [
  {
    path: '',
    component: RtgsNeftPassingComponent,
    data: {
      title: 'neftPassing',
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
export class RtgsNeftPassingRoutingModule { }
