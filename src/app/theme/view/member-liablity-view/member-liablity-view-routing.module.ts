
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberLiablityViewComponent} from './member-liablity-view.component';

const routes: Routes = [
  {
    path: '',
    component: MemberLiablityViewComponent,
    data: {
      title: 'Member Liablity View',
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
export class MemberLiablityViewRoutingModule { }