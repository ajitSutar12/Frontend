import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BnkDptambalListComponent } from './bnk-dptambal-list.component';

const routes: Routes = [
  {
    path: '',
    component:  BnkDptambalListComponent,
    data: {
      title: 'Deposite Amountwise List',
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
export class BnkDptambalListRoutingModule { }
