import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkTrialBalComponent } from './bnk-trial-bal.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkTrialBalComponent,
    data: {
      title: 'Trial Balance ',
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
export class  BnkTrialBalRoutingModule { }