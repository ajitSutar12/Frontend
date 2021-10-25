import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountClosingComponent} from './account-closing.component';

const routes: Routes = [
  {
    path: '',
    component: AccountClosingComponent,
    data: {
      title: 'Account Closing',
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
export class AccountClosingRoutingModule { }
