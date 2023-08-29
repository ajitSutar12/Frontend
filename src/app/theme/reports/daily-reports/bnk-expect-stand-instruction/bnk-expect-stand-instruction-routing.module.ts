import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkExpectStandInstructionComponent } from './bnk-expect-stand-instruction.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkExpectStandInstructionComponent,
    data: {
      title: 'Std Instru(Expe CR)',
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
export class  BnkExpectStandInstructionRoutingModule { }