import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {YearEndComponent} from './year-end.component'
const routes: Routes = [
  {
    path: '',
    component: YearEndComponent,
    data: {
      title: 'Year End',
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
export class YearEndRoutingModule { }
