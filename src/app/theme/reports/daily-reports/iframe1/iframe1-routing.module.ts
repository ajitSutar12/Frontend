import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Iframe1Component} from './iframe1/iframe1.component'

const routes: Routes = [
  {
    path: '',
    component: Iframe1Component,
    data: {
      title: 'Iframe4',
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
export class Iframe1RoutingModule { }
