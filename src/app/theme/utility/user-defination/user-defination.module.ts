import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDefinationComponent } from './user-defination.component';
import { UserDefinationRoutingModule } from './user-defination-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { UserdefinationServiceD } from '../../../shared/dropdownService/user-defination-dropdown.service';
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service';
import { UserDefinationService } from './user-defination.service'
import { DataTablesModule } from 'angular-datatables';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import {SelectModule} from 'ng-select';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    UserDefinationRoutingModule,
    SharedModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    DataTablesModule,
    // SelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
})


  ],
  declarations: [UserDefinationComponent],
  providers: [UserdefinationServiceD, UserDefinationService, OwnbranchMasterService, SystemMasterParametersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class UserDefinationModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
