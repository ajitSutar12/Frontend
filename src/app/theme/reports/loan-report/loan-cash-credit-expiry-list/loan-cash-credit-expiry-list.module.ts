import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanCashCreditExpiryListRoutingModule } from './loan-cash-credit-expiry-list-routing.module';
import { LoanCashCreditExpiryListComponent } from './loan-cash-credit-expiry-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { cityMasterService } from 'src/app/shared/dropdownService/city-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeTypeService } from 'src/app/shared/elements/scheme-type.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MultiVoucherService } from 'src/app/theme/transaction/multi-voucher/multi-voucher.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { AccountOpenBetweenDatesRoutingModule } from '../../registers/account-open-between-dates/account-open-between-dates-routing.module';


@NgModule({
  declarations: [LoanCashCreditExpiryListComponent,],

  providers:[SystemMasterParametersService,
    OwnbranchMasterService,
    SchemeCodeDropdownService,
    SchemeAccountNoService,
    SchemeTypeDropdownService,
    cityMasterService,
    SchemeTypeService,
    MultiVoucherService],
  imports: [
    CommonModule,
    LoanCashCreditExpiryListRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    PerfectScrollbarModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ]
})
export class LoanCashCreditExpiryListModule { }
