import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkMinorsListComponent } from './bnk-minors-list.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkMinorsListComponent,
    data: {
      title: 'Minor Report',
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
export class  BnkMinorsListRoutingModule { }