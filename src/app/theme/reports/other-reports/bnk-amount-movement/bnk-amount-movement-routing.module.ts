import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkAmountMovementComponent } from './bnk-amount-movement.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkAmountMovementComponent,
    data: {
      title: 'Transaction Amount Movement',
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
export class  BnkAmountMovementRoutingModule { }