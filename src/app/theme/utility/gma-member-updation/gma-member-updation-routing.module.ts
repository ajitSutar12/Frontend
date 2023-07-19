import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GmaMemberUpdationComponent} from './gma-member-updation.component';

const routes: Routes = [
  {
    path: '',
    component: GmaMemberUpdationComponent,
    data: {
      title: 'General Meeting Appear Member Updation',
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
export class GmaMemberUpdationRoutingModule { }
