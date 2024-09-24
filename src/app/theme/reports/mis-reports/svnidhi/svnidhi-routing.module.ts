import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SvnidhiComponent } from './svnidhi.component';

const routes: Routes = [
  {
    path: '',
    component: SvnidhiComponent,
    data: {
      title: 'Swanidhi',
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
export class SvnidhiRoutingModule { }
