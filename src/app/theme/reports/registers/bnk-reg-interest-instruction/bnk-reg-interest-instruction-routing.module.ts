import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkRegInterestInstructionComponent } from './bnk-reg-interest-instruction.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkRegInterestInstructionComponent,
    data: {
      title: 'Intst Instruct Reg (Act/Rev)',
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
export class  BnkRegInterestInstructionRoutingModule { }