import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkInstructionsStandingDebitComponent } from './bnk-instructions-standing-debit.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkInstructionsStandingDebitComponent,
    data: {
      title: 'Standing Instructions Execution List (Expected Debit Scheme )',
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
export class  BnkInstructionsStandingDebitRoutingModule { }