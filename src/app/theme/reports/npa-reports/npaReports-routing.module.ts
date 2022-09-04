import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NpaReportsComponent} from './npa-reports.component';

const routes: Routes = [
  {
    path: '',
    component: NpaReportsComponent,
    data: {
      title: 'NPA Reports',
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
export class NpaReportsRoutingModule { }
