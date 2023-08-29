import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoanSizeWiseBalanceComponent } from './loan-size-wise-balance.component';

const routes: Routes = [
  {
    path: 'loanSizeWiseBalanceComponent',
    component: LoanSizeWiseBalanceComponent,
    data: {
      title: 'Loan Size Wise Baln',
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
export class LoanSizeWiseBalanceRoutingModule { }
 