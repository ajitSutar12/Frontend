import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoanApplicationComponent} from './loan-application.component';

const routes: Routes = [
  {
    path: '',
    component: LoanApplicationComponent,
    data: {
      title: 'Loan Application',
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
export class LoanApplicationRoutingModule { }