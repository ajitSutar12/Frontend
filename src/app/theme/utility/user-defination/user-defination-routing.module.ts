import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserDefinationComponent } from './user-defination.component';

const routes: Routes = [
  {
    path: '',
    component: UserDefinationComponent,
    data: {
      title: 'User Defination',
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
export class UserDefinationRoutingModule { }
