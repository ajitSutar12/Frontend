import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeftTransactionComponent } from './neft-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: NeftTransactionComponent, 
    data: {
      title: 'NEFT Transaction',
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
export class NeftTransactionRoutingModule { }
