import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnapprovalDepositPostingComponent} from './unapproval-deposit-posting.component';

const routes: Routes = [
  {
    path: '',
    component: UnapprovalDepositPostingComponent,
    data: {
      title: 'Unapproval Deposit Posting',
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
export class UnapprovalDepositPostingRoutingModule { }
