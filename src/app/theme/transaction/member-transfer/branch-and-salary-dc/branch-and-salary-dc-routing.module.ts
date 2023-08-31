import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BranchAndSalaryDCComponent} from './branch-and-salary-dc.component';

const routes: Routes = [
  {
    path: '',
    component:  BranchAndSalaryDCComponent,
    data: {
      title: 'Branch & Salary DC',
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
export class  BranchAndSalaryDCRoutingModule { }