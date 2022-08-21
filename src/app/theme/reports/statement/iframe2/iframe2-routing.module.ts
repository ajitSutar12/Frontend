import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Iframe2Component} from './iframe2.component';

const routes: Routes = [{
  
    path: '',
    component:  Iframe2Component,
    data: {
      title: 'Iframe2',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Iframe2RoutingModule { }
