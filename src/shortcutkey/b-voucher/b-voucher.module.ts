import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BvoucherComponent } from './b-voucher.component';
import { BvoucherRoutingModule } from './b-voucher-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../app/user-auth.interceptor'
import { BatchVoucherModule } from '../../app/theme/transaction/batch-voucher/batch-voucher.module'
@NgModule({
  imports: [
    CommonModule,
    BvoucherRoutingModule,
    BatchVoucherModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },],
  declarations: [BvoucherComponent],
  exports: [BvoucherComponent],

})
export class BvoucherModule { }