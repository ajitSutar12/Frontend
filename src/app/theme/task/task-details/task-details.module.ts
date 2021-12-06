import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailsComponent } from './task-details.component';
import {SharedModule} from '../../../shared/shared.module';
import {TaskDetailsRoutingModule} from './task-details-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    TaskDetailsRoutingModule,
    SharedModule
  ],
  declarations: [TaskDetailsComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class TaskDetailsModule { }
