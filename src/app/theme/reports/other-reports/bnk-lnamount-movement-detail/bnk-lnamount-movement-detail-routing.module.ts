import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkLNAmountMovementDetailComponent } from './bnk-lnamount-movement-detail.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkLNAmountMovementDetailComponent,
    data: {
      title: 'Loan Amount Movement',
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
export class  BnkLNAmountMovementDetailRoutingModule { }