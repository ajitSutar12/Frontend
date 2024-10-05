import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpaclassificationStandardNonstandardComponent }from './npaclassification-standard-nonstandard.component';

const routes: Routes = [
  {
    path: '',
    component:  NpaclassificationStandardNonstandardComponent,
    data: {
      title: 'NPA Std. or Non-Std',
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
export class NpaclassificationStandardNonstandardRoutingModule { }
