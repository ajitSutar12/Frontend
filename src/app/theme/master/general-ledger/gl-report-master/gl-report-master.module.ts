import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlReportMasterComponent } from './gl-report-master.component';
import { GlReportMasterRoutingModule } from './gl-report-master-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { glTypeService } from '../../../../shared/elements/gl-type.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { ReportTMasterDropdownService } from 'src/app/shared/dropdownService/report-type-master-dropdown.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { GlAccountsMasterService } from '../gl-accounts-master/gl-accounts-master.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@NgModule({
  imports: [
    CommonModule,
    GlReportMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ],
  declarations: [GlReportMasterComponent],
  
  providers:[glTypeService,ReportTMasterDropdownService,GlAccountsMasterService,SystemMasterParametersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class GlReportMasterModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
