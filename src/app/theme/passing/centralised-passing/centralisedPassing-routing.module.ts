import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CentralisedPassingComponent} from './centralised-passing.component';

const routes: Routes = [
  {
    path: '',
    component: CentralisedPassingComponent,
    data: {
      title: 'Centralised Passing',
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
export class CentralisedPassingRoutingModule { }
