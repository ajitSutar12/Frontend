import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UnapprovalDepositClosingComponent } from './unapproval-deposit-closing.component';
import { UnapprovalDepositClosingRoutingModule} from './unapproval-deposit-closing-routing.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    UnapprovalDepositClosingRoutingModule,
    DataTablesModule

  ],
  declarations: [UnapprovalDepositClosingComponent]
})
export class UnapprovalDepositClosingModule { }
