import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisputLoanDetailListComponent } from './disput-loan-detail-list.component';

const routes: Routes = [
  {
    path: '',
    component:  DisputLoanDetailListComponent,
    data: {
      title: 'Dispute loan details list ',
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
export class DisputLoanDetailListRoutingModule { }
