import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VouchersComponent } from './vouchers.component';
import { VouchersRoutingModule } from './vouchers-routing.module'
import { VoucherViewModule } from '../../app/theme/view/voucher-view/voucher-view.module'


@NgModule({
  imports: [
    CommonModule,
    VouchersRoutingModule,
    VoucherViewModule
  ],
  exports: [VouchersComponent],
  declarations: [VouchersComponent],
  providers: []
})
export class VouchersModule { }