import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BalanceOSCDAComponent } from './balance-oscda.component';

const routes: Routes = [
  {
    path: '',
    component: BalanceOSCDAComponent,
    data: {
      title: 'Saving,Current,Debit ',
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
export class BalanceOSCDARoutingModule { }
