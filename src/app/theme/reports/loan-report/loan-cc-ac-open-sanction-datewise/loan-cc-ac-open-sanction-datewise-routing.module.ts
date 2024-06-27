import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanCCACOpenSanctionDatewiseComponent } from './loan-cc-ac-open-sanction-datewise.component';

const routes: Routes = [
  {
    path: '',
    component: LoanCCACOpenSanctionDatewiseComponent ,
    data: {
      title: 'Courtwise Dispute Loan detail  ',
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
export class LoanCCACOpenSanctionDatewiseRoutingModule { }
