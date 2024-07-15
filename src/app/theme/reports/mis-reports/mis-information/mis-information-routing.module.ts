import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisInformationComponent } from './mis-information.component';

const routes: Routes = [
  {
    path: '',
    component: MisInformationComponent,
    data: {
      title: 'MIS Information',
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
export class MisInformationRoutingModule { }
