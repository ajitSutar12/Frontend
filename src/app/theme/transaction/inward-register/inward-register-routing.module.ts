import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InwardRegisterComponent} from './inward-register.component'

const routes: Routes = [
  {
    path: '',
    component: InwardRegisterComponent,
    data: {
      title: 'Inward Register',
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
export class InwardRegisterRoutingModule { }
