import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RevokeInterestInstructionComponent } from './revoke-interest-instruction.component';


const routes: Routes = [
  {
    path: '',
    component: RevokeInterestInstructionComponent,
    data: {
      title: 'Revoke Interest Instruction',
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
export class RevokeInterestInstructionRoutingModule { }
