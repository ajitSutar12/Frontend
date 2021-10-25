import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GlReportMasterComponent} from './gl-report-master.component';

const routes: Routes = [
  {
    path: '',
    component: GlReportMasterComponent,
    data: {
      title: 'GL Report Master',
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
export class GlReportMasterRoutingModule { }
