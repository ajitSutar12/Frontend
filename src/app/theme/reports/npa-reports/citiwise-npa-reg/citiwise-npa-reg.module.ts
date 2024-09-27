import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';

import { CitiwiseNpaRegRoutingModule } from './citiwise-npa-reg-routing.module';
import { CitiwiseNpaRegComponent } from './citiwise-npa-reg.component';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { TermDepositSchemeService } from 'src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service';
import { RepayModeService } from 'src/app/shared/dropdownService/repay-mode.service';
import { InstallmentMethodService } from 'src/app/shared/dropdownService/installment-method.service';
import { cityMasterService } from 'src/app/shared/dropdownService/city-master-dropdown.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CitiwiseNpaRegComponent],
  imports: [
    CommonModule,
    CitiwiseNpaRegRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
   
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module,
    TranslateModule.forRoot({
      loader:{
       provide:TranslateLoader,
       useFactory:HttpLoaderFactory,
       deps:[HttpClient]
     }
    })
  ],
  
  exports:[],
  providers: [OwnbranchMasterService, 
    SchemeCodeDropdownService, 
    SchemeAccountNoService,TermDepositSchemeService,SystemMasterParametersService, SchemeCodeDropdownService, OwnbranchMasterService,RepayModeService,InstallmentMethodService,
    SystemMasterParametersService,cityMasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class CitiwiseNpaRegModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

