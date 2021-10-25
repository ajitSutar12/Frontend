import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InterestPassingComponent} from './interest-passing.component';

const routes: Routes = [
  {
    path: '',
    component: InterestPassingComponent,
    data: {
      title: 'Interest Passing',
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
export class InterestPassingRoutingModule { }
