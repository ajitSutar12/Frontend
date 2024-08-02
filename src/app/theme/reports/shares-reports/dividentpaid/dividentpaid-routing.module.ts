import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DividentpaidComponent } from './dividentpaid.component';

const routes: Routes = [
  {
    path: '',
    component: DividentpaidComponent ,
    data: {
      title: 'Divident Paid List',
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
export class DividentpaidRoutingModule { }
