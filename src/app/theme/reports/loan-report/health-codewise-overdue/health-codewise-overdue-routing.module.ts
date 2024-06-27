import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthCodewiseOverdueComponent } from './health-codewise-overdue.component';

const routes: Routes = [
  {
    path: '',
    component: HealthCodewiseOverdueComponent ,
    data: {
      title: 'Health Codewise Overdue Component  ',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthCodewiseOverdueRoutingModule { }
