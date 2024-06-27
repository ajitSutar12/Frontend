import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkReceiveIntListComponent } from './bnk-receive-int-list.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkReceiveIntListComponent,
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
export class  BnkReceiveIntListRoutingModule { }