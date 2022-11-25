import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustidwiseIntpaidlistComponent } from './custidwise-intpaidlist.component';

const routes: Routes = [{
  path: '',
  component:CustidwiseIntpaidlistComponent  ,
  data: {
    title: 'matured but not closed',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustidwiseIntpaidlistRoutingModule { }
