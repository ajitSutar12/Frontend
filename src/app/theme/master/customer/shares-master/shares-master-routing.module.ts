import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SharesMasterComponent } from './shares-master.component';
const routes: Routes = [
  {
    path: '',
    component:  SharesMasterComponent,
    data: {
      title: 'Shares Master',
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
export class SharesMasterRoutingModule { }