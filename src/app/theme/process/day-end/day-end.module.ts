import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayEndComponent } from './day-end.component';
import { DayEndRoutingModule } from './day-end-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DayEndFinalComponent } from './day-end-final/day-end-final.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';



@NgModule({
  imports: [
    CommonModule,
    DayEndRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ],
  declarations: [ DayEndComponent, DayEndFinalComponent],
  providers:[SystemMasterParametersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DayEndModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
