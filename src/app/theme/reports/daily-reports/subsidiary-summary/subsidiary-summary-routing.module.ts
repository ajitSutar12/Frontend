import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubsidiarySummaryComponent } from './subsidiary-summary.component';

const routes: Routes = [
  {
    path: '',
    component:  SubsidiarySummaryComponent,
    data: {
      title: 'Subsidiary Summary',
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
export class SubsidiarySummaryRoutingModule { }
