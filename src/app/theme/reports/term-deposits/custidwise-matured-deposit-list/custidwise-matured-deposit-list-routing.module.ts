import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustidwiseMaturedDepositListComponent } from './custidwise-matured-deposit-list.component'

const routes: Routes = [
  {
    path: '',
    component:CustidwiseMaturedDepositListComponent  , 
    data: {
      title: 'CustomerIdwise Matured Deposit List',
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
export class CustidwiseMaturedDepositListRoutingModule { } 
