import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PendingStockStatementListComponent } from './pending-stock-statement-list.component'

const routes: Routes = [
  {
    path: '',
    component: PendingStockStatementListComponent ,
    data: {
      title: 'Citywise Loan Balance Report ',
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
export class PendingStockStatementListRoutingModule { }
