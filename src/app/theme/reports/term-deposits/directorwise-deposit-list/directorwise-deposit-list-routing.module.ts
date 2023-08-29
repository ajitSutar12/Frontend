import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectorwiseDepositListComponent } from './directorwise-deposit-list.component'

const routes: Routes = [
  {
    path: '',
    component:DirectorwiseDepositListComponent  , 
    data: {
      title: 'Directorwise DepoList',
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
export class DirectorwiseDepositListRoutingModule { }
