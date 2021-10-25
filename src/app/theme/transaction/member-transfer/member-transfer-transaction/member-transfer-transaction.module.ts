import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MemberTransferTransactiontRoutingModule } from './member-transfer-transaction-routing.module';


import { MemberTransferTransactionComponent } from './member-transfer-transaction.component';
import {DataTablesModule} from 'angular-datatables';




@NgModule({
  imports: [
    CommonModule,
    MemberTransferTransactiontRoutingModule,
    DataTablesModule
  ],
  declarations: [MemberTransferTransactionComponent]
})
export class  MemberTransferTransactionModule { }