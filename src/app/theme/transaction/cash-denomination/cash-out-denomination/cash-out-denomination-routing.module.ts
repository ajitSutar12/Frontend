import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CashOutDenominationComponent} from './cash-out-denomination.component';

const routes: Routes = [
  {
    path: '',
    component: CashOutDenominationComponent,
    data: {
      title: 'Cash Out Denomination',
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
export class CashOutDenominationRoutingModule { }