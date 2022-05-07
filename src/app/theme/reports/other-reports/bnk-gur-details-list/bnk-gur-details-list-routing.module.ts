import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkGurDetailsListComponent } from './bnk-gur-details-list.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkGurDetailsListComponent,
    data: {
      title: 'Guaranter Details',
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
export class  BnkGurDetailsListRoutingModule { }