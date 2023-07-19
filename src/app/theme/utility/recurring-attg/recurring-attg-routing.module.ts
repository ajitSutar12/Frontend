import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecurringAttgComponent} from './recurring-attg.component'

const routes: Routes = [
  {
    path: '',
    component: RecurringAttgComponent,
    data: {
      title: 'Recurring Amount Transfer To GL',
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
export class RecurringAttgRoutingModule { }
