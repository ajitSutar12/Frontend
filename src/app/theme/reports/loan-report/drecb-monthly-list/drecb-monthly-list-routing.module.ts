import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRecbMonthlyListComponent } from './drecb-monthly-list.component';

const routes: Routes = [
  {
    path: '',
    component: DRecbMonthlyListComponent ,
    data: {
      title: 'Ditr RecWise month LN-Li ',
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
export class DRecbMonthlyListRoutingModule { }
