import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DepositSizeWiseBalanceComponent } from './deposit-size-wise-balance.component';

const routes: Routes = [
  {
    path: 'depositSizeWiseBalanceComponent',
    component: DepositSizeWiseBalanceComponent,
    data: {
      title: 'Dt Size Wise Baln',
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
export class DepositSizeWiseBalanceRoutingModule { }
