import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemainderComponent } from './remainder.component';

const routes: Routes = [
  {
    path: '',
    component: RemainderComponent,
    data: {
      title: 'Remainder Input',
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
export class RemainderRoutingModule { }
