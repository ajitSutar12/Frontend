import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PigmyAgentMasterComponent } from './pigmy-agent-master.component';
const routes: Routes = [
  {
    path: '',
    component:  PigmyAgentMasterComponent,
    data: {
      title: 'Pigmy Agent Master',
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
export class  PigmyAgentMasterRoutingModule { }