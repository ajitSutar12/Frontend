import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AmtsizeWiseBalListComponent} from './amtsize-wise-bal-list.component'

const routes: Routes = [
  {
    path: '',
    component:  AmtsizeWiseBalListComponent,
    data: {
      title: 'Amount Balance List',
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
export class AmtsizeWiseBalListRoutingModule { }
