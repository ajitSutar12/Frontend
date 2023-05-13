import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PenalInterestListComponent } from './penal-interest-list.component'

const routes: Routes = [
  {
    path: '',
    component: PenalInterestListComponent ,
    data: {
      title: 'Term Loan/Cash Credit Report ',
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
export class PenalInterestListRoutingModule { }
