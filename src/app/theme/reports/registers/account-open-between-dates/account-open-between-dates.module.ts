import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountOpenBetweenDatesRoutingModule } from './account-open-between-dates-routing.module';
import { AccountOpenBetweenDatesComponent } from './account-open-between-dates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { cityMasterService } from 'src/app/shared/dropdownService/city-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeTypeService } from 'src/app/shared/elements/scheme-type.service';
import { MultiVoucherService } from 'src/app/theme/transaction/multi-voucher/multi-voucher.service';


@NgModule({
  declarations: [AccountOpenBetweenDatesComponent],
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
    AccountOpenBetweenDatesRoutingModule,
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
export class AccountOpenBetweenDatesModule { }
