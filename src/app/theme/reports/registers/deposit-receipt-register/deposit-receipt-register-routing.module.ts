import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositReceiptRegisterComponent } from './deposit-receipt-register.component';

const routes: Routes = [  {
  path: '',
  component:  DepositReceiptRegisterComponent,
  data: {
    title: 'T deposit Receipt',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositReceiptRegisterRoutingModule { }
