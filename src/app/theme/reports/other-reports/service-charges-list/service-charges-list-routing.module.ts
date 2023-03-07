import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceChargesListComponent } from "./service-charges-list.component";

const routes: Routes = [
  {
    path: '',
    component:  ServiceChargesListComponent,
    data: {
      title: 'Service Charges List',
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
export class ServiceChargesListRoutingModule { }
