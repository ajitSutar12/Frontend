import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GlReportLinkingComponent} from './gl-report-linking.component';

const routes: Routes = [
  {
    path: '',
    component: GlReportLinkingComponent,
    data: {
      title: 'GL Report Linking',
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
export class GlReportLinkingRoutingModule { }
