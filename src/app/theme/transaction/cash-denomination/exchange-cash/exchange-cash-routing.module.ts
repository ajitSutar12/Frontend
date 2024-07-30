import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeCashComponent } from './exchange-cash.component';

const routes: Routes = [
  {
  path: '',
  component: ExchangeCashComponent,
  data: {
    title: 'Exchange Cash',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  },
  // children:[
  //   {
  //     path: 'cashInDenomination',
  //     loadChildren: () => import('./cash-in-denomination/cash-in-denomination.module').then(m => m.CashInDenominationModule)
  //   },

  //   {
  //     path: 'cashOutDenomination',
  //     loadChildren: () => import('./cash-out-denomination/cash-out-denomination.module').then(m => m.CashOutDenominationModule)
  //   },
  //   ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeCashRoutingModule { }
