import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanInformationDetailsRoutingModule } from './loan-information-details-routing.module';
import { LoanInformationDetailsComponent } from './loan-information-details.component';


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
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerIdService } from 'src/app/theme/master/customer/customer-id/customer-id.service';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [LoanInformationDetailsComponent],
  exports:[LoanInformationDetailsComponent],

  imports: [
    CommonModule,
    LoanInformationDetailsRoutingModule,
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
    CustomerIdService,
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
export class LoanInformationDetailsModule { }
