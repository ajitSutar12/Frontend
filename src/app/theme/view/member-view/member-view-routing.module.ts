
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberViewComponent} from './member-view.component';

const routes: Routes = [
  {
    path: '',
    component: MemberViewComponent,
    data: {
      title: 'Member View',
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
export class MemberViewRoutingModule { }