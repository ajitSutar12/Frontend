import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkTrialBaldetailComponent } from './bnk-trial-baldetail.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkTrialBaldetailComponent,
    data: {
      title: 'Trial Balance Details ',
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
export class  BnkTrialBaldetailRoutingModule { }