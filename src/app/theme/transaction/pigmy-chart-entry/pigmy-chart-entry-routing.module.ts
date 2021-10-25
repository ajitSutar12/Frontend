import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PigmyChartEntryComponent} from './pigmy-chart-entry.component';

const routes: Routes = [
  {
    path: '',
    component: PigmyChartEntryComponent,
    data: {
      title: 'Pigmy Chart Entry',
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
export class PigmyChartEntryRoutingModule { }