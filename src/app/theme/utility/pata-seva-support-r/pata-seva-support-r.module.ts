import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PataSevaSupportRComponent } from './pata-seva-support-r.component';
import { PataSevaSupportRRoutingModule } from './pata-seva-support-r-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';

@NgModule({
  imports: [
    CommonModule,
    PataSevaSupportRRoutingModule,
    SharedModule,
    DataTablesModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  declarations: [PataSevaSupportRComponent],
  providers:[SystemMasterParametersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class PataSevaSupportRModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

