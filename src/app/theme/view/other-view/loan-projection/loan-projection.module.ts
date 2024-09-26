import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanProjectionRoutingModule } from './loan-projection-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {LoanProjectionComponent} from './loan-projection.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoanProjectionRoutingModule,
    TranslateModule.forRoot({
      loader:{
       provide:TranslateLoader,
       useFactory:HttpLoaderFactory,
       deps:[HttpClient]
     }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    }],
  exports: [LoanProjectionComponent]
})
export class LoanProjectionModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}