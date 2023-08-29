import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustidwiseInterestListComponent } from './custidwise-interest-list.component';

const routes: Routes = [
  {
    path: '',
    component:CustidwiseInterestListComponent  , 
    data: {
      title: 'CustIdwise Int List',
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
export class CustidwiseInterestListRoutingModule { }
