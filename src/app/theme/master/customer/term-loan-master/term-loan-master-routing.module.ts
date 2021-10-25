import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TermLoanMasterComponent } from './term-loan-master.component';
const routes: Routes = [
  {
    path: '',
    component: TermLoanMasterComponent,
    data: {
      title: 'Term Loan Master',
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
export class  TermLoanMasterRoutingModule { }