import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonMemberListComponent } from './non-member-list.component';

const routes: Routes = [
  {
    path: '',
    component:  NonMemberListComponent,
    data: {
      title: 'Minor-Major List',
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
export class NonMemberListRoutingModule { }
