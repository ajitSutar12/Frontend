import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkExpectIntInstructComponent } from './bnk-expect-int-instruct.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkExpectIntInstructComponent,
    data: {
      title: 'Interest Instructions Execution List (Expected Debit Scheme)',
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
export class  BnkExpectIntInstructRoutingModule { }