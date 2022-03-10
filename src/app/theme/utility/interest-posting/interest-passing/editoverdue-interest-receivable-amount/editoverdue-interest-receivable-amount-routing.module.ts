import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditoverdueInterestReceivableAmountComponent} from './editoverdue-interest-receivable-amount.component'


const routes: Routes = [
  {
    path: '',
    component: EditoverdueInterestReceivableAmountComponent,
    data: {
      title: 'Edit Interest Calculation',
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
export class EditOverDueInterestReceivableAmountRoutingModule { }