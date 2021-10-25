import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CustomerIdComponent } from './customer-id.component';
const routes: Routes = [
  {
    path: '',
    component:  CustomerIdComponent,
    data: {
      title: 'Customer Id',
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
export class  CustomerIdRoutingModule { }