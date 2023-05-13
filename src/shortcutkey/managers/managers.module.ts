import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersComponent } from './managers.component';
import { ManagersRoutingModule } from './managers-routing.module'

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../app/user-auth.interceptor';
import { ManagerViewModule } from '../../app/theme/view/manager-view/manager-view.module'
@NgModule({
  imports: [
    CommonModule,
    ManagersRoutingModule,
    ManagerViewModule
  ],
  declarations: [ManagersComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }
  ]
})
export class ManagersModule { }
