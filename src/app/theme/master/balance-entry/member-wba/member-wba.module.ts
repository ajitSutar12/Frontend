import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { MemberWBARoutingModule } from './member-wba-routing.module';
import { MemberWBAComponent } from './member-wba.component';

import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    MemberWBARoutingModule,
    DataTablesModule
  ],
  declarations: [MemberWBAComponent,MemberWBAComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class MemberWBAModule { }
