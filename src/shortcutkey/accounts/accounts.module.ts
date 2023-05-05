import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../app/user-auth.interceptor'
import { AccountEnquiryModule } from '../../app/theme/view/account-enquiry/account-enquiry.module'
@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule,
    AccountEnquiryModule,
  ],
  declarations: [AccountsComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})

export class AccountsModule { }



