import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkACBalBookComponent } from './bnk-acbal-book.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkACBalBookComponent,
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
export class  BnkACBalBookRoutingModule { }