import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Recovery Reports',
  icon: 'icon-home',
  caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
  status: true
},
children:[
  {
    path: 'memberAckReport',
    loadChildren: () => import('./member-ack-report/member-ack-report.module').then(m => m.MemberAckReportModule)
  },

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoveryReportsRoutingModule { }
