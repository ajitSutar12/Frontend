
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoanApplicationComponent } from './loan-application.component';
import{ LoanApplicationRoutingModule} from './loan-application-routing.module'
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    LoanApplicationRoutingModule,
    DataTablesModule
  ],
  declarations: [ LoanApplicationComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class LoanApplicationModule { }