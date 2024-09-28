import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { BnkTDStatementComponent } from './bnk-tdstatement.component';
import {BnkTDStatementRoutingModule} from './bnk-tdstatement-routing.module'
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Iframe5Module } from 'src/app/theme/reports/pigmy-report/iframe5/iframe5.module';

@NgModule({
  imports: [
    CommonModule,
    BnkTDStatementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module

  ],

  declarations: [BnkTDStatementComponent],
  exports:[BnkTDStatementComponent],
  providers:[
    
    {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
  schemas:[NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class BnkTDStatementModule { }