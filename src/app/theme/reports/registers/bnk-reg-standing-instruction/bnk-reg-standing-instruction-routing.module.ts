import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkRegStandingInstructionComponent } from './bnk-reg-standing-instruction.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkRegStandingInstructionComponent,
    data: {
      title: 'Standing Instructions Execution List (Expected Debit Scheme)',
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
export class  BnkRegStandingInstructionRoutingModule { }