import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisReportsRoutingModule } from './mis-reports-routing.module';
import { ExcessCashBalanceComponent } from './excess-cash-balance/excess-cash-balance.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MisReportsRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
       provide:TranslateLoader,
       useFactory:HttpLoaderFactory,
       deps:[HttpClient]
     }
    })
  ]
})
export class MisReportsModule { }

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
