import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AnamatGSMComponent } from './anamat-gsm.component';
const routes: Routes = [
  {
    path: '',
    component:  AnamatGSMComponent,
    data: {
      title: 'Anamat / General Sub Master',
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
export class  AnamatGSMRoutingModule { }