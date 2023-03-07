import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoanSecurityReportComponent} from './loan-security-report.component'
const routes: Routes = [
  {
    path: '',
    component:LoanSecurityReportComponent  , 
    data: {
      title: 'Loan Security Reports',
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
export class LoanSecurityReportRoutingModule { } 
