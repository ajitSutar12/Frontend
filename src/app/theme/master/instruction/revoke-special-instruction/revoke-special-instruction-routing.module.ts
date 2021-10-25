import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RevokeSpecialInstructionComponent } from './revoke-special-instruction.component';


const routes: Routes = [
  {
    path: '',
    component: RevokeSpecialInstructionComponent,
    data: {
      title: 'Revoke Special Instruction',
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
export class RevokeSpecialInstructionRoutingModule { }
