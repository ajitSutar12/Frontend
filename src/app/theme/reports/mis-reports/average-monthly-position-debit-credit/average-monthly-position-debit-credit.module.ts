import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AverageMonthlyPositionDebitCreditRoutingModule } from './average-monthly-position-debit-credit-routing.module';
import { AverageMonthlyPositionDebitCreditComponent } from './average-monthly-position-debit-credit.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {SharedModule} from '../../../../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { Iframe1Module } from '../../daily-reports/iframe1/iframe1.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [AverageMonthlyPositionDebitCreditComponent],
  exports: [AverageMonthlyPositionDebitCreditComponent],
  imports: [
    CommonModule,
    AverageMonthlyPositionDebitCreditRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe1Module

  ],
  providers: [
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    SystemMasterParametersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
    OwnbranchMasterService,
    SchemeCodeDropdownService,
    SchemeAccountNoService,
    SchemeTypeDropdownService
  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class AverageMonthlyPositionDebitCreditModule { }
