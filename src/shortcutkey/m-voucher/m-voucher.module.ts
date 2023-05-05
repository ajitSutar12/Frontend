import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvoucherComponent } from './m-voucher.component';
import { MvoucherRoutingModule } from './m-voucher-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../app/user-auth.interceptor';
import { MultiVoucherModule } from '../../app/theme/transaction/multi-voucher/multi-voucher.module'

@NgModule({
  imports: [
    CommonModule,
    MvoucherRoutingModule,
    MultiVoucherModule
  ],
  declarations: [MvoucherComponent],
  exports: [MvoucherComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class MvoucherModule { }
