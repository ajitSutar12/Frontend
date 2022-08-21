import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterWorkDayEndComponent } from './counter-work-day-end.component';
import { CounterWorkDayEndRoutingModule } from './counter-work-day-end-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CounterWorkDayEndRoutingModule,
    DataTablesModule,
    FormsModule
 
  ],
  declarations: [ CounterWorkDayEndComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CounterWorkDayEndModule { }
