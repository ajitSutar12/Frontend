import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrrComponent } from './crr.component';

const routes: Routes = [
  {
    path: '',
    component: CrrComponent ,
    data: {
      title: 'CRR Report ',
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
export class CrrRoutingModule { }
