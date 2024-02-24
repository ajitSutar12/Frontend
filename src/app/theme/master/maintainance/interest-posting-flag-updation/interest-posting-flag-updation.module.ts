import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { InterestPostingFlagUpdationComponent } from './interest-posting-flag-updation.component';
import { InterestPostingFlagUpdationRoutingModule } from './interest-posting-flag-updation-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { InterestPostingFlagUpdationService } from './interest-posting-flag-updation.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { ThemeModule } from 'src/app/theme/theme.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    InterestPostingFlagUpdationRoutingModule,
    DataTablesModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
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
  declarations: [InterestPostingFlagUpdationComponent],
  providers: [InterestPostingFlagUpdationService, SchemeAccountNoService,OwnbranchMasterService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
})
export class InterestPostingFlagUpdationModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
