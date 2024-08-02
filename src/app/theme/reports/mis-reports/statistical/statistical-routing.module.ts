import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticalComponent } from './statistical.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticalComponent ,
    data: {
      title: 'Excess Cash Report ',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    },
   
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticalRoutingModule { }
