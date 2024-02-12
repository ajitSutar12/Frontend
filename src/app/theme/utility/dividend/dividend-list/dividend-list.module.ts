import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendListComponent } from './dividend-list.component';
import { DividendListRoutingModule } from './dividend-list-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    DividendListRoutingModule,
    DataTablesModule,
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ],
  declarations: [DividendListComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DividendListModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
