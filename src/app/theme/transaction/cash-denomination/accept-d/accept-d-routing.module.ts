import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AcceptDComponent} from './accept-d.component';

const routes: Routes = [
  {
    path: '',
    component: AcceptDComponent,
    data: {
      title: 'Accept Denomination',
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
export class AcceptDRoutingModule { }