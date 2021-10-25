import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TermDepositsMasterComponent } from './term-deposits-master.component';
const routes: Routes = [
  {
    path: '',
    component:  TermDepositsMasterComponent,
    data: {
      title: 'Term Deposits Master',
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
export class  TermDepositsMasterRoutingModule { }