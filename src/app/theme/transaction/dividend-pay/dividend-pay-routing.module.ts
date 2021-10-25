import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DividendPayComponent} from './dividend-pay.component';

const routes: Routes = [
  {
    path: '',
    // component: DividendPayComponent,
    data: {
      title: 'Dividend Pay',
     
      status: false
    },
    children: [
      {
        path: 'dividendPaidMarkSD',
        loadChildren: () => import('./dividend-paid-mark-sd/dividend-paid-mark-sd.module').then(m => m.DividendPaidMarkSDModule)
      },
      {
        path: 'dividendPaidSD',
        loadChildren: () => import('./dividend-paid-sd/dividend-paid-sd.module').then(m => m.DividendPaidSDModule)
      },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DividendPayRoutingModule { }