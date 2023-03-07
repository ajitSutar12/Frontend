import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitywiseMemberListComponent } from './citywise-member-list.component';

const routes: Routes = [
  {
    path: '',
    component:  CitywiseMemberListComponent,
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
export class CitywiseMemberListRoutingModule { }
