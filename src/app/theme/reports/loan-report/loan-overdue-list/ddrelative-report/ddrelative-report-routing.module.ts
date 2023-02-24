import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DDRelativeReportComponent } from './ddrelative-report.component';

const routes: Routes = [
{
  path: '',
    component: DDRelativeReportComponent,
    data: {
      title: 'Director & Director relative Loan Report ',
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
export class DDRelativeReportRoutingModule { }
