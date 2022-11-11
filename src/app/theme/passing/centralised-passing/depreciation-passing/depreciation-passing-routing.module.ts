import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  DepreciationPassingComponent } from './depreciation-passing.component';

const routes: Routes = [
  {
    path: '',
    component: DepreciationPassingComponent,
    data: {
      title: 'Depreciation',
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
export class DepreciationPassingRoutingModule { }
