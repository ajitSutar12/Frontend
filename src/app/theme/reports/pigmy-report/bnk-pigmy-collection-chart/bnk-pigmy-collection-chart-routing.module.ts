import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkPigmyCollectionChartComponent } from './bnk-pigmy-collection-chart.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkPigmyCollectionChartComponent,
    data: {
      title: 'Pigmy Collection Chart ',
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
export class  BnkPigmyCollectionChartRoutingModule { }