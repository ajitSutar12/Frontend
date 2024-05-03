import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YearEndBranchwiseComponent } from './year-end-branchwise.component';

const routes: Routes = [
  {
    path: '',
    component: YearEndBranchwiseComponent,
    data: {
      title: 'Year End Branchwise',
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
export class YearEndBranchwiseRoutingModule { }
