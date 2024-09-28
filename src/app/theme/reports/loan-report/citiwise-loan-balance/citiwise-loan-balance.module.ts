import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiwiseLoanBalanceRoutingModule } from './citiwise-loan-balance-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { cityMasterService } from 'src/app/shared/dropdownService/city-master-dropdown.service';
import { CitiwiseLoanBalanceComponent } from './citiwise-loan-balance.component';
import { DirectorMasterDropdownService } from 'src/app/shared/dropdownService/director-master-dropdown.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    CitiwiseLoanBalanceRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    PerfectScrollbarModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  declarations: [CitiwiseLoanBalanceComponent],
  exports:[CitiwiseLoanBalanceComponent],
  providers: [
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG, 

    },
    SystemMasterParametersService,
    OwnbranchMasterService,
    SchemeCodeDropdownService,
    SchemeAccountNoService,
    SchemeTypeDropdownService,
    cityMasterService,
    DirectorMasterDropdownService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ]
})
export class CitiwiseLoanBalanceModule { } 
