import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkRegInsurenceComponent } from './bnk-reg-insurence.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkRegInsurenceComponent,
    data: {
      title: 'Insurance Register',
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
export class  BnkRegInsurenceRoutingModule { }