import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExucuteOnService } from '../../../../shared/dropdownService/exucute-on.service';
import { SpecialRoutingModule } from './special-routing.module'
import { DataTablesModule } from 'angular-datatables';
// import { SelectModule } from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { specialservice } from './special.service'
import { DatePipe } from '@angular/common';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { SpecialComponent } from './special.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { ThemeModule } from 'src/app/theme/theme.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { HttpLoaderFactory } from '../over-draft/over-draft.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    SpecialRoutingModule,
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
  declarations: [SpecialComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, DatePipe,
    specialservice,
    ExucuteOnService,SystemMasterParametersService, SchemeAccountNoService, SchemeCodeDropdownService]
})
export class SpecialModule { }

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
