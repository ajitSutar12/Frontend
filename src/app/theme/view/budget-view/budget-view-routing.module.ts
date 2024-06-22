import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetViewComponent } from './budget-view.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetViewComponent,
    data: {
      title: 'Budget View',
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
export class BudgetViewRoutingModule { }
