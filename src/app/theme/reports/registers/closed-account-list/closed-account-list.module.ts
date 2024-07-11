import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosedAccountListRoutingModule } from './closed-account-list-routing.module';
import { ClosedAccountListComponent } from './closed-account-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { cityMasterService } from 'src/app/shared/dropdownService/city-master-dropdown.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { SchemeTypeService } from 'src/app/shared/elements/scheme-type.service';
import { MultiVoucherService } from 'src/app/theme/transaction/multi-voucher/multi-voucher.service';


@NgModule({
  declarations: [ClosedAccountListComponent],
  providers:[ SystemMasterParametersService,
    OwnbranchMasterService,
    SchemeCodeDropdownService,
    SchemeAccountNoService,
    SchemeTypeDropdownService,
    SchemeTypeService,
    MultiVoucherService,
    cityMasterService],
  imports: [
    CommonModule,
    ClosedAccountListRoutingModule,
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
export class ClosedAccountListModule { }
