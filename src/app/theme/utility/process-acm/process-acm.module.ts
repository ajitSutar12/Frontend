import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessACMComponent } from './process-acm.component';
import { ProcessACMRoutingModule } from './process-acm-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    ProcessACMRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ProcessACMComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class ProcessACMModule { }
