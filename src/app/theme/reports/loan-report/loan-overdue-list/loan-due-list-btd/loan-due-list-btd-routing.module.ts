import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoanDueListBtdComponent} from './loan-due-list-btd.component'

const routes: Routes = [
  {
    path: '',
    component: LoanDueListBtdComponent,
    data: {
      title: 'Loan Due List Between Two Dates',
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
export class LoanDueListBtdRoutingModule { }
