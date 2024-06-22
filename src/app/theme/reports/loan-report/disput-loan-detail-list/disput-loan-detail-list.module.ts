import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisputLoanDetailListRoutingModule } from './disput-loan-detail-list-routing.module';
import { DisputLoanDetailListComponent } from './disput-loan-detail-list.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';



@NgModule({
  declarations: [DisputLoanDetailListComponent],
  exports:[DisputLoanDetailListComponent],

  imports: [
    CommonModule,
    DisputLoanDetailListRoutingModule,
   SharedModule,
  FormsModule,
  ReactiveFormsModule,
  NgbModule,
  PerfectScrollbarModule,
  NgSelectModule,
  BsDatepickerModule.forRoot(),
  DatepickerModule.forRoot(),
  Iframe5Module,
],
providers: [
  SchemeCodeDropdownService, 
  SchemeAccountNoService,
  OwnbranchMasterService,
  SystemMasterParametersService,SchemeCodeDropdownService
]
})
export class DisputLoanDetailListModule { }
