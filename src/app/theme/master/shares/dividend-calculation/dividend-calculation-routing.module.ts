import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DividendCalculationComponent } from './dividend-calculation.component';


const routes: Routes = [
  {
    path: '',
    component: DividendCalculationComponent,
    data: {
      title: 'Dividend Calculation',
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
export class DividendCalculationRoutingModule { }
