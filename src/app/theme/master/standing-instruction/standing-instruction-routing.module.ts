import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { StandingInstructionComponent } from './standing-instruction.component';


const routes: Routes = [
  {
    path: '',
    component: StandingInstructionComponent,
    data: {
      title: 'Standing Instruction',
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
export class StandingInstructionRoutingModule { }
