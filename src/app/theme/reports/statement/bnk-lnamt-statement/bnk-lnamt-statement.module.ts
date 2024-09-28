import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { BnkLNamtStatementComponent } from './bnk-lnamt-statement.component';
import {BnkLNamtStatementRoutingModule} from './bnk-lnamt-statement-routing.module'
import { Iframe2Module } from '../iframe2/iframe2.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  
    
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    BnkLNamtStatementRoutingModule,
    Iframe2Module
  ],

  declarations: [BnkLNamtStatementComponent],
  exports:[BnkLNamtStatementComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class BnkLNamtStatementModule { }