import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoucherEntryComponent } from './voucher-entry.component';
import { VoucherEntryRoutingModule } from './voucher-entry-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { TransactionCashModeService } from '../../../shared/elements/transaction-cash-mode.service';
import { TransactionTransferModeService } from '../../../shared/elements/transaction-transfer-mode.service';
import { SchemeTypeService } from '../../../shared/elements/scheme-type.service';
import { SelectModule } from 'ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    VoucherEntryRoutingModule,
    SharedModule,
    DataTablesModule,
    SelectModule,
    FormsModule
  ],
  declarations: [VoucherEntryComponent],
  providers:[TransactionCashModeService,TransactionTransferModeService,SchemeTypeService]
})
export class VoucherEntryModule { }