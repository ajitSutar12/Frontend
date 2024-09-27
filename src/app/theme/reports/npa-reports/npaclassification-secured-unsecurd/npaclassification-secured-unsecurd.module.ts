import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpaclassificationSecuredUnsecurdRoutingModule } from './npaclassification-secured-unsecurd-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { TermDepositSchemeService } from 'src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service';
import { RepayModeService } from 'src/app/shared/dropdownService/repay-mode.service';
import { InstallmentMethodService } from 'src/app/shared/dropdownService/installment-method.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { NpaclassificationSecuredUnsecurdComponent } from './npaclassification-secured-unsecurd.component';


@NgModule({
  declarations: [NpaclassificationSecuredUnsecurdComponent],
  imports: [
    CommonModule,
    NpaclassificationSecuredUnsecurdRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
   
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
 
    Iframe5Module
  ],
  exports:[],
  providers: [OwnbranchMasterService, 
    SchemeCodeDropdownService, 
    SchemeAccountNoService,TermDepositSchemeService,SystemMasterParametersService, SchemeCodeDropdownService, OwnbranchMasterService,RepayModeService,InstallmentMethodService,
    SystemMasterParametersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class NpaclassificationSecuredUnsecurdModule { }
