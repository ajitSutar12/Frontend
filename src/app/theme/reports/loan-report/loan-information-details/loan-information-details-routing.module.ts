import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanInformationDetailsComponent } from './loan-information-details.component';

const routes: Routes = [

  {
    path: '',
    component: LoanInformationDetailsComponent,
    data: {
      title: 'Loan Information Details ',
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
export class LoanInformationDetailsRoutingModule { }
