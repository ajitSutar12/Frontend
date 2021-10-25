import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProcessACMComponent } from './process-acm.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessACMComponent,
    data: {
      title: 'Process And Calculation Menu',
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
export class ProcessACMRoutingModule { }
