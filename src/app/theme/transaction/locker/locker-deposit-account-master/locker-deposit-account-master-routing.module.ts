import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LockerDepositAccountMasterComponent} from './locker-deposit-account-master.component'

const routes: Routes = [
  {
    path: '',
    component: LockerDepositAccountMasterComponent,
    data: {
      title: 'Locker Deposit Account Master',
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
export class LockerDepositAccountMasterRoutingModule { }