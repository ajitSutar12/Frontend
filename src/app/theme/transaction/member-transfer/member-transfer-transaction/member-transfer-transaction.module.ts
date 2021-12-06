import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MemberTransferTransactiontRoutingModule } from './member-transfer-transaction-routing.module';


import { MemberTransferTransactionComponent } from './member-transfer-transaction.component';
import {DataTablesModule} from 'angular-datatables';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    MemberTransferTransactiontRoutingModule,
    DataTablesModule
  ],
  declarations: [MemberTransferTransactionComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class  MemberTransferTransactionModule { }