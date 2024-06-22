import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NBalanceSheetRoutingModule } from './n-balance-sheet-routing.module';
import { NBalanceSheetComponent } from './n-balance-sheet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import {Iframe4Module} from '../iframe4/iframe4.module';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [NBalanceSheetComponent],
  imports: [
    CommonModule,
    NBalanceSheetRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    Iframe4Module,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
       provide:TranslateLoader,
       useFactory:HttpLoaderFactory,
       deps:[HttpClient]
     }
    })

  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class NBalanceSheetModule { }


export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

