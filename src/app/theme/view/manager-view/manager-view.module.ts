import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ManagerViewComponent} from './manager-view.component';
import { ManagerViewRoutingModule } from './manager-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    ManagerViewRoutingModule,
    SharedModule
  ],
  declarations: [ManagerViewComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class ManagerViewModule { }
