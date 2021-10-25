import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MisReportsComponent} from './mis-reports.component';

const routes: Routes = [
  {
    path: '',
    component: MisReportsComponent,
    data: {
      title: 'MIS Reports',
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
export class MisReportsRoutingModule { }
