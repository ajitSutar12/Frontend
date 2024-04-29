import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonthlyRecProcComponent} from './monthly-rec-proc.component'
const routes: Routes = [

  {
    path: '',
    component: MonthlyRecProcComponent,
    data: {
      title: 'Monthly Recovery Process',
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
export class MonthlyRecProcRoutingModule { } 
