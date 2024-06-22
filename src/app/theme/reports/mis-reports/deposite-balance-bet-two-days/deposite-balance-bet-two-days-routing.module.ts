import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositeBalanceBetTwoDaysComponent } from './deposite-balance-bet-two-days.component';

const routes: Routes = [
  {
    path: '',
    component: DepositeBalanceBetTwoDaysComponent,
    data: {
      title: ' Deposite Balance Bet Two Days Report ',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositeBalanceBetTwoDaysRoutingModule { }
