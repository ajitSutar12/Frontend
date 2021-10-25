import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InterestCalculationComponent} from './interest-calculation.component';

const routes: Routes = [
  {
    path: '',
    component: InterestCalculationComponent,
    data: {
      title: 'Interest Calculation',
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
export class InterestCalculationRoutingModule { }
