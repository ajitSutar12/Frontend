import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UnapprovalDepositPostingComponent } from './unapproval-deposit-posting.component';
import { UnapprovalDepositPostingRoutingModule} from './unapproval-deposit-posting-routing.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    UnapprovalDepositPostingRoutingModule,
    DataTablesModule
  ],
  declarations: [UnapprovalDepositPostingComponent]
})
export class UnapprovalDepositPostingModule { }
