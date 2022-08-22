import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Iframe5Component } from './iframe5/iframe5.component';
const routes: Routes = [
  {
    path: '',
    component:Iframe5Component,
    data: {
      title: 'Iframe5',
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
export class Iframe5RoutingModule { }
