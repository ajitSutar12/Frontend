
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';


import { LoanApplicationComponent } from './loan-application.component';
import{ LoanApplicationRoutingModule} from './loan-application-routing.module'
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { IntrestCategoryMasterDropdownService } from 'src/app/shared/dropdownService/interest-category-master-dropdown.service';
import { CustomerIdService } from 'src/app/theme/master/customer/customer-id/customer-id.service';
import { ThemeModule } from 'src/app/theme/theme.module';
import { InterestRateForLoanandCCService } from 'src/app/theme/master/policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service';
import { PurposeMasterDropdownService } from 'src/app/shared/dropdownService/purpose-master-dropdown.service';


@NgModule({
  imports: [
    CommonModule,
    LoanApplicationRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ThemeModule
  ],
  declarations: [ LoanApplicationComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  OwnbranchMasterService,
  SchemeCodeDropdownService,
  SchemeAccountNoService,
  CustomerIDMasterDropdownService,
  IntrestCategoryMasterDropdownService,
  CustomerIdService,
  InterestRateForLoanandCCService,
  PurposeMasterDropdownService
]
})
export class LoanApplicationModule { }