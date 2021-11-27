import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleMasterComponent } from './role-master.component';
const routes: Routes = [
  {
    path: '',
      component: RoleMasterComponent,
      data: {
        title: 'Role Master',
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
export class RoleMasterRoutingModule { }
