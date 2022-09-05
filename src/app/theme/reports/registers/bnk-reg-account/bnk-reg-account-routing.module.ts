import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkRegAccountComponent } from './bnk-reg-account.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkRegAccountComponent,
    data: {
      title: 'Account Opening & Closing Register',
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
export class  BnkRegAccountRoutingModule { }