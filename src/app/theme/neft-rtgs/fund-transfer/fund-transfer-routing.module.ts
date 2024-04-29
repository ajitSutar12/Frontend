import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundTransferComponent } from './fund-transfer.component';

const routes: Routes = [
  {
    path: '',
    component: FundTransferComponent, 
    data: {
      title: 'Bill Payments',
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
export class FundTransferRoutingModule { }
