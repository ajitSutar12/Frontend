import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterestRatewiseClassificationOfLoanComponent } from './interest-ratewise-classification-of-loan.component';

const routes: Routes = [
  {
    path: '',
    component: InterestRatewiseClassificationOfLoanComponent ,
    data: {
      title: ' Interest Ratewise Classification of Loan ',
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
export class InterestRatewiseClassificationOfLoanRoutingModule { }
