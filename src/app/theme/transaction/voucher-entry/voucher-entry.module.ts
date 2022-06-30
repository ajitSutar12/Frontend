import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoucherEntryComponent } from './voucher-entry.component';
import { VoucherEntryRoutingModule } from './voucher-entry-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { TransactionCashModeService } from '../../../shared/elements/transaction-cash-mode.service';
import { TransactionTransferModeService } from '../../../shared/elements/transaction-transfer-mode.service';
import { SchemeTypeService } from '../../../shared/elements/scheme-type.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { OwnBranchMasterComponent } from '../../master/policy-settings/information/own-branch-master/own-branch-master.component';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    VoucherEntryRoutingModule,
    SharedModule,
    DataTablesModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    PerfectScrollbarModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [VoucherEntryComponent],
  exports: [VoucherEntryComponent],
  providers: [TransactionCashModeService, ACMasterDropdownService, TransactionTransferModeService, SchemeTypeService, OwnbranchMasterService, SchemeCodeDropdownService, SavingMasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class VoucherEntryModule { }