import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DDTransactionComponent} from './d-dtransaction.component';

const routes: Routes = [
  {
    path: '',
    component: DDTransactionComponent,
    data: {
      title: 'DDTransaction',
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
export class DDTransactionRoutingModule { }