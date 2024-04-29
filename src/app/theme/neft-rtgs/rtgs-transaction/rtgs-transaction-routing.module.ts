import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RtgsTransactionComponent } from './rtgs-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: RtgsTransactionComponent, 
    data: {
      title: 'RTGS Transaction',
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
export class RtgsTransactionRoutingModule { }
