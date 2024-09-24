import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalConCertificateRoutingModule } from './bal-con-certificate-routing.module';
import { BalConCertificateComponent } from './bal-con-certificate.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import{IframeModule} from '../iframe/iframe.module'
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [BalConCertificateComponent],
  imports: [
    CommonModule,
    BalConCertificateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule, 
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    IframeModule,
    //Translation
 TranslateModule.forRoot({
  loader:{
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ],
  exports:[BalConCertificateComponent],
  providers:[OwnbranchMasterService,
    SchemeCodeDropdownService,
    SystemMasterParametersService,
    SchemeTypeDropdownService,
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: PERFECT_SCROLLBAR_CONFIG,

    },
   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    }
  ]
  
})
export class BalConCertificateModule { }
//Translation
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}