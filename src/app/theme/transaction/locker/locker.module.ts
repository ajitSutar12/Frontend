import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerComponent } from './locker.component';

import {SharedModule} from '../../../shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../user-auth.interceptor';
import { LockerRoutingModule } from './locker-routing.module';



@NgModule({
  imports: [
    CommonModule,
    LockerRoutingModule,
    SharedModule
  ],
  declarations: [LockerComponent,],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class LockerModule { }