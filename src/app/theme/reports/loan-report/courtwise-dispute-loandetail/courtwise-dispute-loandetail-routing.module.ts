import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourtwiseDisputeLoandetailComponent } from './courtwise-dispute-loandetail.component';

const routes: Routes = [
  {
    path: '',
    component: CourtwiseDisputeLoandetailComponent ,
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
export class CourtwiseDisputeLoandetailRoutingModule { }
