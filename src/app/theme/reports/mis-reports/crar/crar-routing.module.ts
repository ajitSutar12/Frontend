import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrarComponent } from './crar.component';
import { data } from 'jquery';

const routes: Routes = [
  {
  path: '',
  component:  CrarComponent,
  data: {
    title: 'CRAR Report ',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: false
  }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrarRoutingModule { }
