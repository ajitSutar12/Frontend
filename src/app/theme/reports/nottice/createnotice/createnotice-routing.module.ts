import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatenoticeComponent } from './createnotice.component';

const routes: Routes = [
  {
    path: '',
    component:  CreatenoticeComponent,
    data: {
      title: 'Notice Create',
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
export class CreatenoticeRoutingModule { }
