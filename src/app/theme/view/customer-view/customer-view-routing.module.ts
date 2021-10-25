import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerViewComponent} from './customer-view.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerViewComponent,
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
export class CustomerViewRoutingModule { }