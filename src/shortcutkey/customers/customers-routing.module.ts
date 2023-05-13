import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    data: {
      title: 'Customer View',
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
export class CustomersRoutingModule { }