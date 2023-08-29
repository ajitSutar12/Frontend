import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TermDepositAccountClosingComponent} from './term-deposit-account-closing.component';

const routes: Routes = [
  {
    path: '',
    component: TermDepositAccountClosingComponent,
    data: {
      title: 'Term Depo Ac Closing',
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
export class TermDepositAccountClosingRoutingModule { }