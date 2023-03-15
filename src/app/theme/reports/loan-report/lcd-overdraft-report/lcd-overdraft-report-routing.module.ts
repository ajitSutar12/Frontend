import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LcdOverdraftReportComponent } from './lcd-overdraft-report.component'

const routes: Routes = [
  {
    path: '',
    component: LcdOverdraftReportComponent ,
    data: {
      title: 'Cash Credit Over Draft Report ',
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
export class LcdOverdraftReportRoutingModule { }
