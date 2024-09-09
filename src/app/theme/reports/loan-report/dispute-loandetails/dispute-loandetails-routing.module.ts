import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisputeLoandetailsComponent } from './dispute-loandetails.component';

const routes: Routes = [
  {
    path: '',
    component: DisputeLoandetailsComponent ,
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
export class DisputeLoandetailsRoutingModule { }
