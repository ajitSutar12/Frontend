import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcessCashBalanceComponent } from './excess-cash-balance.component';

const routes: Routes = [
  {
    path: '',
    component: ExcessCashBalanceComponent,
    data: {
      title: 'Excess Cash Balance ',
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
export class ExcessCashBalanceRoutingModule { }
