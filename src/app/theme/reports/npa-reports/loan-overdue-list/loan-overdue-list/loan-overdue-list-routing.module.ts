import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanOverdueListComponent } from './loan-overdue-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoanOverdueListComponent, 
    data: {
      title: 'Loan Overdue List',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit', 
      status: true
    },
   
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanOverdueListRoutingModule { }
