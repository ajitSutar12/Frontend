import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReductionStatementForLoanRoutingModule } from './reduction-statement-for-loan-routing.module';
import { ReductionStatementForLoanComponent } from './reduction-statement-for-loan.component';

import {SharedModule} from '../../../../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { Iframe2Module } from '../../statement/iframe2/iframe2.module';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [ReductionStatementForLoanComponent],
  exports: [ReductionStatementForLoanComponent],

  imports: [
    CommonModule,
    ReductionStatementForLoanRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module,
    Iframe2Module
  ],
  providers: [
    SchemeCodeDropdownService, 
    SchemeAccountNoService,
    OwnbranchMasterService,
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
  ]
})
export class ReductionStatementForLoanModule { }
