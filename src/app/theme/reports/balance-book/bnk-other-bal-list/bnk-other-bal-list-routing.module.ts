import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkOtherBalListComponent } from './bnk-other-bal-list.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkOtherBalListComponent,
    data: {
      title: 'Account Statement',
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
export class  BnkOtherBalListRoutingModule { }