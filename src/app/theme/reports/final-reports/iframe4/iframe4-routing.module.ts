import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Iframe4Component} from './iframe4.component';

const routes: Routes = [
  {
    path: '',
    component:  Iframe4Component,
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
export class Iframe4RoutingModule { }
