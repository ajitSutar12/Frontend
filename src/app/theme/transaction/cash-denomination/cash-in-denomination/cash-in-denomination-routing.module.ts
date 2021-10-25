import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CashInDenominationComponent} from './cash-in-denomination.component';

const routes: Routes = [
  {
    path: '',
    component: CashInDenominationComponent,
    data: {
      title: 'Cash In Denomination',
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
export class CashInDenominationRoutingModule { }