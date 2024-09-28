import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlrComponent } from './slr.component';

const routes: Routes = [
  {
    path: '',
    component: SlrComponent ,
    data: {
      title: 'SLR Report ',
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
export class SlrRoutingModule { }
