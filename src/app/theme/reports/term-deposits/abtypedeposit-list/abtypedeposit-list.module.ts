import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbtypedepositListRoutingModule } from './abtypedeposit-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { AbtypedepositListComponent } from './abtypedeposit-list.component';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    AbtypedepositListRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    PerfectScrollbarModule,

    TranslateModule.forRoot({
      loader:{
       provide:TranslateLoader,
       useFactory:HttpLoaderFactory,
       deps:[HttpClient]
     }
    }),
    
  
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  declarations: [AbtypedepositListComponent],
  exports:[AbtypedepositListComponent],
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ]
})
export class AbtypedepositListModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

