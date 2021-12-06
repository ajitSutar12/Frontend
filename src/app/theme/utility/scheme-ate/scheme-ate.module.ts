import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemeATEComponent } from './scheme-ate.component';
import { SchemeATERoutingModule } from './scheme-ate-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    SchemeATERoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [SchemeATEComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class SchemeATEModule { }
