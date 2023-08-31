import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PigmyagentchangeComponent } from './pigmyagentchange.component';

const routes: Routes = [
  {
    path: '',
    component: PigmyagentchangeComponent,
    data: {
      title: 'Acc Wise Doc Accept',
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
export class PigmyagentchangeRoutingModule { }
