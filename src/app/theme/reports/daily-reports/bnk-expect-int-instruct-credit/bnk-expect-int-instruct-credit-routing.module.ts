import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkExpectIntInstructCreditComponent } from './bnk-expect-int-instruct-credit.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkExpectIntInstructCreditComponent,
    data: {
      title: 'Interest (Expeted Credit)',
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
export class  BnkExpectIntInstructCreditRoutingModule { }