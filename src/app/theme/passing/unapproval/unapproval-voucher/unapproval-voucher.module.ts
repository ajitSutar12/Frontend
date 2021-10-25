import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UnapprovalVoucherComponent } from './unapproval-voucher.component';
import { UnapprovalVoucherRoutingModule} from './unapproval-voucher-routing.module'
import {SelectOptionService} from '../../../../shared/elements/select-option.service'
import {SelectModule} from 'ng-select';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    UnapprovalVoucherRoutingModule,
    SelectModule,
    DataTablesModule
  ],
  declarations: [UnapprovalVoucherComponent],
  providers: [SelectOptionService]
})
export class UnapprovalVoucheModule { }
