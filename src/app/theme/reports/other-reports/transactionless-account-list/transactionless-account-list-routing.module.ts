import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionlessAccountListComponent } from "./transactionless-account-list.component";

const routes: Routes = [
  {
    path: '',
    component:  TransactionlessAccountListComponent,
    data: {
      title: 'Transactionless Account List',
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
export class TransactionlessAccountListRoutingModule { }
