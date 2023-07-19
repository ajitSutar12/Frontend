import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MemberAckReportComponent} from './member-ack-report.component'

const routes: Routes = [
  {
    path: '',
    component: MemberAckReportComponent,
    data: {
      title: 'Member Acknowledgement Report',
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
export class MemberAckReportRoutingModule { }
