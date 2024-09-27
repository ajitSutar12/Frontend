import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepositReceiptRegisterRoutingModule } from './deposit-receipt-register-routing.module';
import { DepositReceiptRegisterComponent } from './deposit-receipt-register.component';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { Iframe5Module } from 'src/app/theme/reports/pigmy-report/iframe5/iframe5.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [DepositReceiptRegisterComponent],
  imports: [
    CommonModule,
    DepositReceiptRegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
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
  exports:[DepositReceiptRegisterComponent],

  providers:[OwnbranchMasterService,
    SchemeCodeDropdownService,
    SchemeAccountNoService,
    SchemeTypeDropdownService,
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: PERFECT_SCROLLBAR_CONFIG,

    },
    SystemMasterParametersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    }]
})
export class DepositReceiptRegisterModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}