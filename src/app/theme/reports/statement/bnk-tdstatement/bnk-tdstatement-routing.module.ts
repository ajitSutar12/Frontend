import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkTDStatementComponent } from './bnk-tdstatement.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkTDStatementComponent,
    data: {
      title: 'Term Deposit Statement ',
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
export class  BnkTDStatementRoutingModule { }