import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountEnquiryComponent } from './account-enquiry.component';
import { AccountEnquiryRoutingModule } from './account-enquiry-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';



@NgModule({
  imports: [
    CommonModule,
    AccountEnquiryRoutingModule,
    DataTablesModule
  ],
  declarations: [AccountEnquiryComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class AccountEnquiryModule { }
