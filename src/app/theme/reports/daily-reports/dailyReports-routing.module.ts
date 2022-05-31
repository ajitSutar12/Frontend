import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DailyReportsComponent} from './daily-reports.component';

const routes: Routes = [
  {
    path: '',
    component: DailyReportsComponent,
    data: {
      title: 'Daily Reports',
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
export class DailyReportsRoutingModule { }
