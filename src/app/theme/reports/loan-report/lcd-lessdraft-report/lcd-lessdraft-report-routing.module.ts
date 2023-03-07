import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LcdLessdraftReportComponent } from './lcd-lessdraft-report.component'

const routes: Routes = [
  {
    path: '',
    component: LcdLessdraftReportComponent ,
    data: {
      title: 'Citywise Loan Balance Report ',
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
export class LcdLessdraftReportRoutingModule { }
