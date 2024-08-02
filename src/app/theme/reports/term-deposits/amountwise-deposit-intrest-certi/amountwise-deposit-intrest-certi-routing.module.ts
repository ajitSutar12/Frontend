import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmountwiseDepositIntrestCertiComponent } from './amountwise-deposit-intrest-certi.component';

const routes: Routes = [
  {
    path: '',
    component: AmountwiseDepositIntrestCertiComponent,
    data: {
      title: 'Deposits Amount Classfication',
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
export class AmountwiseDepositIntrestCertiRoutingModule { }
