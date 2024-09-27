import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpaclassificationSecuredUnsecurdComponent }from './npaclassification-secured-unsecurd.component';

const routes: Routes = [
  {
    path: '',
    component:  NpaclassificationSecuredUnsecurdComponent,
    data: {
      title: 'NPA Classification Secured or Unsecured',
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
export class NpaclassificationSecuredUnsecurdRoutingModule { }
