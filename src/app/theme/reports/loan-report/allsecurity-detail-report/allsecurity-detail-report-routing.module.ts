import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllsecurityDetailReportComponent } from './allsecurity-detail-report.component';

const routes: Routes = [{
  path: '',
  component: AllsecurityDetailReportComponent ,
  data: {
    title: 'LienMark Clear Reports ',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: false
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllsecurityDetailReportRoutingModule { }
