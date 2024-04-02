import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayEndComponent } from './day-end.component';
import { DayEndRoutingModule } from './day-end-routing.module'
import { SharedModule } from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DayEndFinalComponent } from './day-end-final/day-end-final.component';



@NgModule({
  imports: [
    CommonModule,
    DayEndRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DayEndComponent, DayEndFinalComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DayEndModule { }
