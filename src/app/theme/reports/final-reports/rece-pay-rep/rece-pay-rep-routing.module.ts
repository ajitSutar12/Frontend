import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecePayRepComponent} from './rece-pay-rep/rece-pay-rep.component';

const routes: Routes = [ {
  path: '',
  component:  RecePayRepComponent,
  data: {
    title: 'Receipt & Payment Report',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecePayRepRoutingModule { }
