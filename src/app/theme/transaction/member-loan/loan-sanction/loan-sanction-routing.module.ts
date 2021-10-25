import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoanSanctionComponent} from './loan-sanction.component';

const routes: Routes = [
  {
    path: '',
    component: LoanSanctionComponent,
    data: {
      title: 'Loan Sanction',
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
export class LoanSanctionRoutingModule { }