import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpaAnalysisReportComponent }from './npa-analysis-report.component';

const routes: Routes = [
  {
    path: '',
    component:  NpaAnalysisReportComponent,
    data: {
      title: 'NPA Analysis Report',
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
export class NpaAnalysisReportRoutingModule { }
