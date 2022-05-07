import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkIVOpenAndCloseRegComponent } from './bnk-ivopen-and-close-reg.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkIVOpenAndCloseRegComponent,
    data: {
      title: 'Investment Register(Open/Closed)',
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
export class  BnkIVOpenAndCloseRegRoutingModule { }