import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermDepositAccountClosingComponent } from './term-deposit-account-closing.component';
import { TermDepositAccountClosingRoutingModule } from './term-deposit-account-closing-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeService } from '../../../shared/elements/scheme-code.service';
import { AcountnoService } from '../../../shared/elements/acountno.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { TransactionCashModeService } from 'src/app/shared/elements/transaction-cash-mode.service';
import { TransactionTransferModeService } from 'src/app/shared/elements/transaction-transfer-mode.service';
import { SchemeTypeService } from 'src/app/shared/elements/scheme-type.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import {TermDepositAccountClosingService} from './term-deposit-account-closing.service'
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    TermDepositAccountClosingRoutingModule,
    SharedModule,
    DataTablesModule,
    FormsModule,ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [TermDepositAccountClosingComponent],
  providers: [SchemeCodeService, AcountnoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },TermDepositAccountClosingService,SystemMasterParametersService, OwnbranchMasterService, MultiVoucherService, SchemeAccountNoService,TransactionCashModeService,TransactionTransferModeService,SchemeTypeService,SchemeCodeDropdownService,SavingMasterService,]
})
export class TermDepositAccountClosingModule { }