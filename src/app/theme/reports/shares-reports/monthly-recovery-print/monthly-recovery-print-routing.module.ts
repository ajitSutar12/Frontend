import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonthlyRecoveryPrintComponent} from './monthly-recovery-print.component'

const routes: Routes = [
  {
    path: '',
    component: MonthlyRecoveryPrintComponent,
    data: {
      title: 'Monthly Recovery Print',
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
export class MonthlyRecoveryPrintRoutingModule { }
