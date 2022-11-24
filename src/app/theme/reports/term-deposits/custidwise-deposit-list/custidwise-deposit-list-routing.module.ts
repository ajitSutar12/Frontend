import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustidwiseDepositListComponent } from './custidwise-deposit-list.component';

const routes: Routes = [{
  path: '',
  component:CustidwiseDepositListComponent  ,
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
export class CustidwiseDepositListRoutingModule { }
