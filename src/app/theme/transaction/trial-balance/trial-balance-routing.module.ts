import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrialBalanceComponent } from './trial-balance.component';

const routes: Routes = [
  {
    path: '',
    component: TrialBalanceComponent,
    data: {
      title: 'Trial Balance',
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
export class TrialBalanceRoutingModule { }
