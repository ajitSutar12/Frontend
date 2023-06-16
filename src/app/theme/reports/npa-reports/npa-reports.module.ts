import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpaReportsRoutingModule } from './npa-reports-routing.module';
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
export class NpaReportsModule { }
