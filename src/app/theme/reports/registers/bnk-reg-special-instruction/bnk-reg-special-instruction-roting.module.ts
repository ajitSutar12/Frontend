import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkRegSpecialInstructionComponent } from './bnk-reg-special-instruction.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkRegSpecialInstructionComponent,
    data: {
      title: 'Special Instruction Register(Active/Revoke)',
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
export class  BnkRegSpecialInstructionRoutingModule { }