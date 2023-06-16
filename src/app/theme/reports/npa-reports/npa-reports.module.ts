import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpaReportsRoutingModule } from './npa-reports-routing.module';
<<<<<<< Updated upstream
import { NpaRegPercentageComponent } from './npa-reg-percentage/npa-reg-percentage.component';
import { NpaRegisterComponent } from './npa-register/npa-register.component';
import { DirectorwiseNpaRegComponent } from './directorwise-npa-reg/directorwise-npa-reg.component';
import { NonNpaRecoveryComponent } from './non-npa-recovery/non-npa-recovery.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NpaReportsRoutingModule
  ]
})
=======
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  NgSelectModule } from '@ng-select/ng-select';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../pigmy-report/iframe5/iframe5.module';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { TermDepositSchemeService } from '../../utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { InstallmentMethodService } from 'src/app/shared/dropdownService/installment-method.service';
import { RepayModeService } from 'src/app/shared/dropdownService/repay-mode.service';
import { CityMasterComponent } from '../../master/policy-settings/information/city-master/city-master.component';


@NgModule({
  declarations:  [],
  imports: [
    CommonModule,
    NpaReportsRoutingModule,
   
  ],
  providers: [
    SchemeAccountNoService,TermDepositSchemeService,SystemMasterParametersService, SchemeCodeDropdownService, OwnbranchMasterService,RepayModeService,InstallmentMethodService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },],
  
    
    //  InterestPaidHistoryComponent,
   
  })
>>>>>>> Stashed changes
export class NpaReportsModule { }
