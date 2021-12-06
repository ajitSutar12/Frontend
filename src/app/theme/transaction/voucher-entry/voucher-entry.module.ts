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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
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
  providers:[TransactionCashModeService,TransactionTransferModeService,SchemeTypeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class VoucherEntryModule { }