import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkDayBookSummaryComponent } from './bnk-day-book-summary.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkDayBookSummaryComponent,
    data: {
      title: 'Day Book Detail/Summary',
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
export class  BnkDayBookSummaryRoutingModule { }