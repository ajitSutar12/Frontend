import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IframeComponent} from './iframe/iframe.component';

const routes: Routes = [
  {
    path: '',
    component:  IframeComponent,
    data: {
      title: 'Account Statement',
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
export class IframeRoutingModule { }
