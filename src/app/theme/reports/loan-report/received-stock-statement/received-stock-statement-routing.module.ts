import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReceivedStockStatementComponent } from './received-stock-statement.component'

const routes: Routes = [
  {
    path: '',
    component: ReceivedStockStatementComponent ,
    data: {
      title: 'Citywise LN BalReport ',
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
export class ReceivedStockStatementRoutingModule { }
