import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfitLossAccountRoutingModule } from './profit-loss-account-routing.module';
import { ProfitLossAccountComponent } from './profit-loss-account/profit-loss-account.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import {Iframe4Module} from '../iframe4/iframe4.module';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [ProfitLossAccountComponent],
  imports: [
    CommonModule,
    ProfitLossAccountRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    Iframe4Module,
    //Translation
 TranslateModule.forRoot({
  loader:{
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]

})
export class ProfitLossAccountModule { }
//Translation
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}