import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisputeDetailComponent } from './dispute-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DisputeDetailComponent,
    data: {
      title: 'DisputeDetail',
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
export class DisputeDetailRoutingModule { }
