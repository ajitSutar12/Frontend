import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDocComponent } from './customer-doc.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerDocComponent,
    data: {
      title: 'Customer Document',
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
export class CustomerDocRoutingModule { }
