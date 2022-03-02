import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MultiVoucherComponent } from './multi-voucher.component';
import { MultiVoucherRoutingModule } from './multi-voucher-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service'
import { MultiVoucherService } from './multi-voucher.service'
import { SchemeAccountNoService } from '../../../shared/dropdownService/schemeAccountNo.service'
import { TransactionCashModeService } from 'src/app/shared/elements/transaction-cash-mode.service';
import { TransactionTransferModeService } from 'src/app/shared/elements/transaction-transfer-mode.service';
import { SchemeTypeService } from 'src/app/shared/elements/scheme-type.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
@NgModule({
  imports: [
    CommonModule,
    MultiVoucherRoutingModule,
    SharedModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [MultiVoucherComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, SystemMasterParametersService, OwnbranchMasterService, MultiVoucherService, SchemeAccountNoService,TransactionCashModeService,TransactionTransferModeService,SchemeTypeService,SchemeCodeDropdownService,SavingMasterService,]
})
export class MultiVoucherModule { }
