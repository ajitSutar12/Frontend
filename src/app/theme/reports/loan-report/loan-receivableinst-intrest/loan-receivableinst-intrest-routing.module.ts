import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoanReceivableinstIntrestComponent } from './loan-receivableinst-intrest.component'

const routes: Routes = [
  {
    path: '',
    component: LoanReceivableinstIntrestComponent ,
    data: {
      title: 'Loan Receivable Installment and Interest Report ',
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
export class LoanReceivableinstIntrestRoutingModule { }
 