import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TotalchallandetailsComponent } from './totalchallandetails.component';

const routes: Routes = [
  {
    path: '',
    component: TotalchallandetailsComponent,
    data: {
      title: 'total challan',
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
export class TotalchallandetailsRoutingModule { }
