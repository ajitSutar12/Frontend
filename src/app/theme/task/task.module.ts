import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskRoutingModule} from './task-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ],
  declarations: [],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class TaskModule { }
