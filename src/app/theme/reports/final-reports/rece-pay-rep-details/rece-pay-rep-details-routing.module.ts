import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecePayRepDetailsComponent} from './rece-pay-rep-details.component';

const routes: Routes = [{
  path: '',
  component:  RecePayRepDetailsComponent,
  data: {
    title: 'Receipt & Payment Details',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecePayRepDetailsRoutingModule { }
