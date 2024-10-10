import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterWorkDayEndComponent } from './counter-work-day-end.component';
import { CounterWorkDayEndRoutingModule } from './counter-work-day-end-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
@NgModule({
  imports: [
    CommonModule,
    CounterWorkDayEndRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
})
 
  ],
  declarations: [ CounterWorkDayEndComponent],
  providers:[SystemMasterParametersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  HotkeysService]
})
export class CounterWorkDayEndModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
