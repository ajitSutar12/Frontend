import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkPigmyBlankChartComponent } from './bnk-pigmy-blank-chart.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkPigmyBlankChartComponent,
    data: {
      title: 'Pigmy Blank Chart',
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
export class  BnkPigmyBlankChartRoutingModule { }