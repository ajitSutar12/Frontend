import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentryComponent } from './v-entry.component';
import { VentryRoutingModule } from './v-entry-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../app/user-auth.interceptor';
import { VoucherEntryModule } from '../../app/theme/transaction/voucher-entry/voucher-entry.module'
@NgModule({
  imports: [
    CommonModule,
    VentryRoutingModule,
    VoucherEntryModule
  ],
  declarations: [VentryComponent],
  exports: [VentryComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class VentryModule { }