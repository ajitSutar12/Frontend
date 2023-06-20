import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectorwiseNpaRegComponent } from './directorwise-npa-reg.component';

const routes: Routes = [
  {
    path: '',
    component:  DirectorwiseNpaRegComponent,
    data: {
      title: 'Transaction Amount Movement',
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
export class DirectorwiseNpaRegRoutingModule { }
