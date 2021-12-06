import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackDatedDOComponent } from './back-dated-do.component';
import { BackDatedDORoutingModule } from './back-dated-do-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    BackDatedDORoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [BackDatedDOComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class BackDatedDOModule { }
