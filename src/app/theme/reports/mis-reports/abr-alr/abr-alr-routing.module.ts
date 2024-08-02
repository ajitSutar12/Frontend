import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbrAlrComponent } from './abr-alr.component';

const routes: Routes = [
  {
    path: '',
    component: AbrAlrComponent ,
    data: {
      title: 'Abr-Alr Report ',
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
export class AbrAlrRoutingModule { }
