import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { customerinsuranceService } from './customer-insurance.service'
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomerInsuranceComponent } from './customer-insurance.component';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
// import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { UserAuthInterceptor } from '../../../../../user-auth.interceptor';

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { CustomerInsuranceRoutingModule } from './customer-insurance-routing.module';
import { DataTablesModule } from "angular-datatables";
import { ThemeModule } from 'src/app/theme/theme.module';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [CustomerInsuranceComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    BsDatepickerModule,
    NgSelectModule,
    PerfectScrollbarModule,
    CustomerInsuranceRoutingModule,
    DataTablesModule,
    ThemeModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })

    
  ],
  providers: [customerinsuranceService,SystemMasterParametersService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ],
  exports: [CustomerInsuranceComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CustomerInsuranceModule { }
//Translation
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}