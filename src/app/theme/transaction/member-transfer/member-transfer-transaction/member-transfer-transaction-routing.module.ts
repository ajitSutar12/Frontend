import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MemberTransferTransactionComponent} from './member-transfer-transaction.component';

const routes: Routes = [
  {
    path: '',
    component:  MemberTransferTransactionComponent,
    data: {
      title: 'Member Transfer Transaction',
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
export class  MemberTransferTransactiontRoutingModule { }