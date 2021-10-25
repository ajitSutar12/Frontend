import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountOpenPassingComponent} from './account-open-passing.component';

const routes: Routes = [
  {
    path: '',
    component: AccountOpenPassingComponent,
    data: {
      title: 'Account Open Passing',
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
export class AccountOpenPassingRoutingModule { }
