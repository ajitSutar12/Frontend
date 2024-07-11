import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoparativeDetailSummaryComponent } from './coparative-detail-summary.component';

const routes: Routes = [
  {
    path: '',
    component:  CoparativeDetailSummaryComponent,
    data: {
      title: 'Coparative Detail Summary',
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
export class CoparativeDetailSummaryRoutingModule { }
