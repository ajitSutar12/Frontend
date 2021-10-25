import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RoleDefinationComponent } from './role-defination.component';

const routes: Routes = [
  {
    path: '',
    component: RoleDefinationComponent,
    data: {
      title: 'Role Defination',
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
export class RoleDefinatioRoutingModule { }
