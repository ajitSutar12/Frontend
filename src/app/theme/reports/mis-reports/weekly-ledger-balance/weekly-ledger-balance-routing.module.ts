import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeeklyLedgerBalanceComponent } from './weekly-ledger-balance.component';

const routes: Routes = [
  {
    path: '',
    component: WeeklyLedgerBalanceComponent ,
    data: {
      title: 'Weekly Ledger Balance Report ',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    },
   
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeeklyLedgerBalanceRoutingModule { }
