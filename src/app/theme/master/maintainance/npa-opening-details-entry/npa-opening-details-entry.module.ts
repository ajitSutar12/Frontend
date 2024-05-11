import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpaOpeningDetailsEntryComponent } from './npa-opening-details-entry.component';
import { NpaOpeningDetailsEntryRoutingModule } from './npa-opening-details-entry-routing.module'
// import { SelectModule } from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NpaOpeningDetailsEntryService } from './npa-opening-details-entry.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { ThemeModule } from 'src/app/theme/theme.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NpaOpeningDetailsEntryRoutingModule,
    DataTablesModule,
    // SelectModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ThemeModule,
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ],
  providers: [SchemeCodeDropdownService, SchemeAccountNoService, NpaOpeningDetailsEntryService,OwnbranchMasterService,SystemMasterParametersService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
  declarations: [NpaOpeningDetailsEntryComponent],
  bootstrap: [NpaOpeningDetailsEntryComponent]
})
export class NpaOpeningDetailsEntryModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

