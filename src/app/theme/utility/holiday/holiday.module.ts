import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayComponent } from './holiday.component';
import { HolidayRoutingModule } from './holiday-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    HolidayRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [HolidayComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class HolidayModule { }
