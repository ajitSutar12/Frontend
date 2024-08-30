import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CibilScoreComponent } from './cibil-score.component';

const routes: Routes = [
  {
    path: '',
    component: CibilScoreComponent,
    data: {
      title: 'CibilScoreComponent',
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
export class CibilScoreRoutingModule { }
