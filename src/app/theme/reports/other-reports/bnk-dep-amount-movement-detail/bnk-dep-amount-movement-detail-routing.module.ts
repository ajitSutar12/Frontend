import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkDepAmountMovementDetailComponent } from './bnk-dep-amount-movement-detail.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkDepAmountMovementDetailComponent,
    data: {
      title: 'Deposit Amount Movement',
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
export class  BnkDepAmountMovementDetailRoutingModule { }