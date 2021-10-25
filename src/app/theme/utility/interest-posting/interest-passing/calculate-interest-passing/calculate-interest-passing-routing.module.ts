import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CalculateInterestPassingComponent } from './calculate-interest-passing.component';


const routes: Routes = [
  {
    path: '',
    component: CalculateInterestPassingComponent,
    data: {
      title: 'Calculate Interest Passing',
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
export class CalculateInterestPassingRoutingModule { }
