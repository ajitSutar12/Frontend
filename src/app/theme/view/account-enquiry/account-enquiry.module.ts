import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountEnquiryComponent } from './account-enquiry.component';
import { AccountEnquiryRoutingModule } from './account-enquiry-routing.module';
import {DataTablesModule} from 'angular-datatables';




@NgModule({
  imports: [
    CommonModule,
    AccountEnquiryRoutingModule,
    DataTablesModule
  ],
  declarations: [AccountEnquiryComponent]
})
export class AccountEnquiryModule { }
