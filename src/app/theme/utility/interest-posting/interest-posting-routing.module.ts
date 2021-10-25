import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { InterestPostingComponent } from './interest-posting.component';

const routes: Routes = [
  {
  
    path: '',
    data: {
      title: 'Interest Posting',
      status: false
    },
    children: [
      {
        path: 'interestCalculation',
        loadChildren: () => import('./interest-calculation/interest-calculation.module').then(m => m.InterestCalculationModule)
      },
      {
        path: 'interestList',
        loadChildren: () => import('./interest-list/interest-list.module').then(m => m.InterestListModule)
      },
      {
        path: 'interestPassing',
        loadChildren: () => import('./interest-passing/interest-passing.module').then(m => m.InterestPassingModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestPostingRoutingModule { }
