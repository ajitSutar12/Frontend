import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoanAndCCInterestRateChangesComponent } from './loan-and-ccinterest-rate-changes.component';


const routes: Routes = [
  {
    path: '',
    component: LoanAndCCInterestRateChangesComponent,
    data: {
      title: 'Loan & CC Int Rate Chng',
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
export class LoanAndCCInterestRateChangesRoutingModule { }
