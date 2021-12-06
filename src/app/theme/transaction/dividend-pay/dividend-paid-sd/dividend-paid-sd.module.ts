import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DividendPaidSDRoutingModule } from './dividend-paid-sd-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

import { DividendPaidSDComponent } from './dividend-paid-sd.component';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    DividendPaidSDRoutingModule,
    DataTablesModule
  ],
  declarations: [DividendPaidSDComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DividendPaidSDModule { }