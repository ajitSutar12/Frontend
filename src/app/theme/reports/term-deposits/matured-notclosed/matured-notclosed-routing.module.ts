import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaturedNotclosedComponent } from './matured-notclosed.component';

const routes: Routes = [
  {
  path: '',
  component: MaturedNotclosedComponent ,
  data: {
    title: 'matured not closed',
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
export class MaturedNotclosedRoutingModule { }
