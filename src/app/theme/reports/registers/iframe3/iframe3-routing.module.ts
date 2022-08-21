import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Iframe3Component } from './iframe3.component';

const routes: Routes = [
  {
    path: '',
    component:Iframe3Component,
    data: {
      title: 'Iframe3',
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
export class Iframe3RoutingModule { }
