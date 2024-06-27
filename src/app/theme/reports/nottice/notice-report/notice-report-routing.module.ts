import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeReportComponent } from './notice-report.component';

const routes: Routes = [
  {
    path: '',
    component:  NoticeReportComponent,
    data: {
      title: 'Notice Report',
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
export class NoticeReportRoutingModule { }
