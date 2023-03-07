import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustidwiseIntroducerListComponent } from "./custidwise-introducer-list.component";
const routes: Routes = [
  {
    path: '',
    component:  CustidwiseIntroducerListComponent,
    data: {
      title: 'CustIdwise Introducer List',
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
export class CustidwiseIntroducerListRoutingModule { } 
