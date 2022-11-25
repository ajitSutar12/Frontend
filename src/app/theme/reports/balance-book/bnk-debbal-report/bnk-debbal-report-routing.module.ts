import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BnkDebbalReportComponent } from './bnk-debbal-report.component';

const routes: Routes = [
  {
    path: '',
    component:  BnkDebbalReportComponent ,
    data: {
      title: 'Debit Balance Report',
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
export class BnkDebbalReportRoutingModule { }
