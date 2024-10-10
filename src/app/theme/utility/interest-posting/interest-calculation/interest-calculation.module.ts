import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterestCalculationComponent } from './interest-calculation.component';
import { InterestCalculationRoutingModule } from './interest-calculation-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SystemMasterParametersService } from '../../scheme-parameters/system-master-parameters/system-master-parameters.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { InterestPostingFlagUpdationService } from 'src/app/theme/master/maintainance/interest-posting-flag-updation/interest-posting-flag-updation.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { CurrentSchemeService } from './interest-calculation.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    InterestCalculationRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),

    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  declarations: [InterestCalculationComponent],
  providers:[SystemMasterParametersService,OwnbranchMasterService,SchemeCodeDropdownService,CurrentSchemeService,InterestPostingFlagUpdationService,SchemeAccountNoService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class InterestCalculationModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
