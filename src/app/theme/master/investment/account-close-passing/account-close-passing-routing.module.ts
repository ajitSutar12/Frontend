import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountClosePassingComponent} from './account-close-passing.component';

const routes: Routes = [
  {
    path: '',
    component: AccountClosePassingComponent,
    data: {
      title: 'Account Close Passing',
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
export class AccountClosePassingRoutingModule { }
