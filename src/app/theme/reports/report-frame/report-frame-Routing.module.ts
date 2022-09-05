import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReportFrameComponent } from './report-frame.component';
const routes: Routes = [
  {
    path: '',
    component:  ReportFrameComponent,
    data: {
      title: 'Report',
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
export class  ReportFrameRoutingModule { }