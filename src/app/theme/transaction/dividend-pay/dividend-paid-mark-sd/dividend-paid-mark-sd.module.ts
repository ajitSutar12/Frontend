import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DividendPaidMarkSDRoutingModule } from './dividend-paid-mark-sd-routing.module';


import { DividendPaidMarkSDComponent } from './dividend-paid-mark-sd.component';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    DividendPaidMarkSDRoutingModule,
    DataTablesModule
  ],
  declarations: [DividendPaidMarkSDComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class  DividendPaidMarkSDModule { }