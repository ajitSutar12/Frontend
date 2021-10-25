import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MemberComponent } from './member.component';

const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
    data: {
      title: 'Member',
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
export class MemberRoutingModule { }
