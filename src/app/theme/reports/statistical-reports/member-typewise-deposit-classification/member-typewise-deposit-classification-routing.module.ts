import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberTypewiseDepositClassificationComponent } from './member-typewise-deposit-classification.component';

const routes: Routes = [
  {
    path: '',
    component: MemberTypewiseDepositClassificationComponent,
    data: {
      title: 'Member Typewise Deposit Classification Report ',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    }
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberTypewiseDepositClassificationRoutingModule { }
