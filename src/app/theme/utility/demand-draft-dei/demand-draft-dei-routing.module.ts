import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DemandDraftDEIComponent } from './demand-draft-dei.component';

const routes: Routes = [
  {
    path: '',
    component: DemandDraftDEIComponent,
    data: {
      title: 'Demand Draft Data Ex/Im',
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
export class DemandDraftDEIRoutingModule { }
