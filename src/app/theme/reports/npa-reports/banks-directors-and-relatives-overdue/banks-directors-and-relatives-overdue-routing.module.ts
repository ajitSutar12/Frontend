import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanksDirectorsAndRelativesOverdueComponent } from './banks-directors-and-relatives-overdue.component';

const routes: Routes = [

  {
    path: '',
    component:  BanksDirectorsAndRelativesOverdueComponent,
    data: {
      title: 'Banks Directors And Relatives Overdue',
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
export class BanksDirectorsAndRelativesOverdueRoutingModule { }
