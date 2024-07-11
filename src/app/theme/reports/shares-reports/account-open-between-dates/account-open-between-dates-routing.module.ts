import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountOpenBetweenDatesComponent } from './account-open-between-dates.component';

const routes: Routes = [
  {
    path: '',
    component:  AccountOpenBetweenDatesComponent,
    data: {
      title: 'Account Open Between Dates',
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
export class AccountOpenBetweenDatesRoutingModule { }
