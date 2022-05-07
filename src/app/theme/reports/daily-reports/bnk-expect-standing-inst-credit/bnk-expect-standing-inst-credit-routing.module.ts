import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkExpectStandingInstCreditComponent } from './bnk-expect-standing-inst-credit.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkExpectStandingInstCreditComponent,
    data: {
      title: 'Standing Instructions Execution List (Expected Credit Scheme)',
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
export class  BnkExpectStandingInstCreditRoutingModule { }